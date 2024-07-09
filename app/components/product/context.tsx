"use client";

import { createContext, useCallback, useContext, useEffect } from "react";
import { ResultOf } from "gql.tada";
import {
    CreateProductMutation,
    DeleteProductMutation,
    GetProductsQuery,
    ProductSubscription,
    UpdateProductMutation,
    useCrudMutation,
} from "@/api/crud";
import { Product } from "@/components/product/columns";
import { useToast } from "@/components/ui/use-toast";
import { useQuery, useSubscription } from "@urql/next";

interface ProductContext {
    createProduct: (name: string, price: number, onSuccess?: () => void) => void;
    updateProduct: (id: string, name: string, price: number, onSuccess?: () => void) => void;
    deleteProduct: (id: string, onSuccess?: () => void) => void;
    products: ResultOf<typeof GetProductsQuery>["getProductList"]["data"];
}

const ProductContext = createContext<ProductContext>({} as ProductContext);

export const ProductProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [response, reload] = useQuery({ query: GetProductsQuery, variables: { input: {} } });
    const [subscription, startSubscription] = useSubscription<
        ResultOf<typeof ProductSubscription>,
        Product[]
    >(
        {
            pause: response.fetching,
            query: ProductSubscription,
            variables: { input: {} },
        },
        (prev, data) => {
            if (!prev) {
                prev = response.data?.getProductList.data ?? [];
            }

            if (data.subscribeToProductList?.__typename === "removeData") {
                return prev.filter(product => product.id !== data.subscribeToProductList!.id);
            }

            if (data.subscribeToProductList?.__typename === "Product") {
                const updatedItem = prev.find(
                    product => product.id === data.subscribeToProductList!.id
                );

                if (!updatedItem) {
                    return [...prev, data.subscribeToProductList!];
                }

                return prev.map(product => {
                    if (product.id === data.subscribeToProductList!.id) {
                        return data.subscribeToProductList as Product;
                    }

                    return product;
                });
            }

            return prev ?? [];
        }
    );
    const [createState, createProductMutation] = useCrudMutation(CreateProductMutation);
    const [updateState, updateProductMutation] = useCrudMutation(UpdateProductMutation);
    const [deleteState, deleteProductMutation] = useCrudMutation(DeleteProductMutation);
    const { toast } = useToast();

    useEffect(() => {
        startSubscription();
    }, [startSubscription]);

    const createProduct = useCallback(
        async (name: string, price: number, onSuccess?: () => void) => {
            const { error } = await createProductMutation({ name, price });

            if (error) {
                toast({
                    title: "Uh oh! Something went wrong.",
                    description: error.message,
                });
                return;
            }

            onSuccess && onSuccess();
        },
        [reload, toast, createProductMutation]
    );

    const updateProduct = useCallback(
        async (id: string, name: string, price: number, onSuccess?: () => void) => {
            const { error } = await updateProductMutation({ id, name, price });

            if (error) {
                toast({
                    title: "Uh oh! Something went wrong.",
                    description: error.message,
                });
                return;
            }

            onSuccess && onSuccess();
        },
        []
    );

    const deleteProduct = useCallback(
        async (id: string, onSuccess?: () => void) => {
            const { error } = await deleteProductMutation({ id });

            if (error) {
                toast({
                    title: "Uh oh! Something went wrong.",
                    description: error.message,
                });
                return;
            }

            onSuccess && onSuccess();
            reload({ requestPolicy: "network-only" });
        },
        [reload, toast, deleteProductMutation]
    );

    return (
        <ProductContext.Provider
            value={{
                createProduct,
                updateProduct,
                deleteProduct,
                products: subscription.data ?? response.data?.getProductList.data ?? [],
            }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => useContext(ProductContext);

"use client";

import { FC, PropsWithChildren, createContext, useCallback, useContext, useEffect } from "react";
import { ResultOf } from "gql.tada";
import { Product } from "@/components/product/columns";
import {
    CreateProductMutation,
    DeleteProductMutation,
    GetProductsQuery,
    ProductSubscription,
    UpdateProductMutation,
    useCrudMutation,
    useCrudSubscription,
} from "@/graphql/crud";
import { useCrudQuery } from "@/graphql/crud";
import { useToast } from "@/hooks/use-toast";

interface ProductContext {
    createProduct: (name: string, price: number, onSuccess?: () => void) => void;
    updateProduct: (id: string, name: string, price: number, onSuccess?: () => void) => void;
    deleteProduct: (id: string, onSuccess?: () => void) => void;
    products: ResultOf<typeof GetProductsQuery>["getProductList"]["data"];
}

const ProductContext = createContext<ProductContext>({} as ProductContext);

export const ProductProvider: FC<PropsWithChildren> = ({ children }) => {
    const [response] = useCrudQuery({
        query: GetProductsQuery,
        variables: { input: {} },
    });
    const [subscription, startSubscription] = useCrudSubscription<
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
    const createProductMutation = useCrudMutation(CreateProductMutation)[1];
    const updateProductMutation = useCrudMutation(UpdateProductMutation)[1];
    const deleteProductMutation = useCrudMutation(DeleteProductMutation)[1];
    const { toast } = useToast();

    useEffect(() => {
        startSubscription();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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

            if (onSuccess) {
                onSuccess();
            }
        },
        [toast, createProductMutation]
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

            if (onSuccess) {
                onSuccess();
            }
        },
        [toast, updateProductMutation]
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

            if (onSuccess) {
                onSuccess();
            }
        },
        [toast, deleteProductMutation]
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

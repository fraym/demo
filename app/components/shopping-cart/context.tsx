"use client";

import { createContext, useContext } from "react";
import { ResultOf } from "gql.tada";
import { GetCartsQuery } from "@/api/projections";
import { useToast } from "@/components/ui/use-toast";
import { useQuery } from "@urql/next";

interface ShoppingCartContext {
    // createProduct: (name: string, price: number, onSuccess?: () => void) => void;
    // updateProduct: (id: string, name: string, price: number, onSuccess?: () => void) => void;
    // deleteProduct: (id: string, onSuccess?: () => void) => void;
    carts: ResultOf<typeof GetCartsQuery>["getShoppingCartList"]["data"];
}

const ShoppingCartContext = createContext<ShoppingCartContext>({} as ShoppingCartContext);

export const ShoppingCartProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [response, reload] = useQuery({
        query: GetCartsQuery,
        variables: { input: {} },
    });
    // const [createState, createProductMutation] = useCrudMutation(CreateProductMutation);
    // const [updateState, updateProductMutation] = useCrudMutation(UpdateProductMutation);
    // const [deleteState, deleteProductMutation] = useCrudMutation(DeleteProductMutation);
    const { toast } = useToast();

    // const createProduct = useCallback(
    //     async (name: string, price: number, onSuccess?: () => void) => {
    //         const { error } = await createProductMutation({ name, price });

    //         if (error) {
    //             toast({
    //                 title: "Uh oh! Something went wrong.",
    //                 description: error.message,
    //             });
    //             return;
    //         }

    //         reload();
    //         onSuccess && onSuccess();
    //     },
    //     [reload, toast, createProductMutation]
    // );

    // const updateProduct = useCallback(
    //     async (id: string, name: string, price: number, onSuccess?: () => void) => {
    //         const { error } = await updateProductMutation({ id, name, price });

    //         if (error) {
    //             toast({
    //                 title: "Uh oh! Something went wrong.",
    //                 description: error.message,
    //             });
    //             return;
    //         }

    //         reload();
    //         onSuccess && onSuccess();
    //     },
    //     []
    // );

    // const deleteProduct = useCallback(
    //     async (id: string, onSuccess?: () => void) => {
    //         console.log("deleteProduct", id);

    //         const { error } = await deleteProductMutation({ id });

    //         if (error) {
    //             toast({
    //                 title: "Uh oh! Something went wrong.",
    //                 description: error.message,
    //             });
    //             return;
    //         }

    //         reload({ requestPolicy: "network-only" });
    //         onSuccess && onSuccess();
    //     },
    //     [reload, toast, deleteProductMutation]
    // );

    return (
        <ShoppingCartContext.Provider
            value={{
                // createProduct,
                // updateProduct,
                // deleteProduct,
                carts: response.data?.getShoppingCartList.data || [],
            }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};

export const useShoppingCarts = () => useContext(ShoppingCartContext);

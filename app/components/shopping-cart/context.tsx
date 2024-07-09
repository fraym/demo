"use client";

import { createContext, useContext, useEffect } from "react";
import { ResultOf } from "gql.tada";
import { CartSubscription, GetCartsQuery } from "@/api/projections";
import { ShoppingCart } from "@/components/shopping-cart/columns";
import { UseQueryExecute, useQuery, useSubscription } from "@urql/next";

interface ShoppingCartContext {
    carts: ResultOf<typeof GetCartsQuery>["getShoppingCartList"]["data"];
    reload: UseQueryExecute;
}

const ShoppingCartContext = createContext<ShoppingCartContext>({} as ShoppingCartContext);

export const ShoppingCartProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [response, reload] = useQuery({
        query: GetCartsQuery,
        variables: { input: { useStrongConsistency: true } },
    });
    const [subscription, startSubscription] = useSubscription<
        ResultOf<typeof CartSubscription>,
        ShoppingCart[]
    >(
        {
            pause: response.fetching,
            query: CartSubscription,
            variables: { input: {} },
        },
        (prev, data) => {
            if (!prev) {
                prev = response.data?.getShoppingCartList.data ?? [];
            }

            if (data.subscribeToShoppingCartList?.__typename === "removeData") {
                return prev.filter(product => product.id !== data.subscribeToShoppingCartList!.id);
            }

            if (data.subscribeToShoppingCartList?.__typename === "ShoppingCart") {
                const updatedItem = prev.find(
                    product => product.id === data.subscribeToShoppingCartList!.id
                );

                if (!updatedItem) {
                    return [...prev, data.subscribeToShoppingCartList!];
                }

                return prev.map(product => {
                    if (
                        product.id === data.subscribeToShoppingCartList!.id &&
                        data.subscribeToShoppingCartList?.__typename === "ShoppingCart"
                    ) {
                        return data.subscribeToShoppingCartList! as ShoppingCart;
                    }

                    return product;
                });
            }

            return prev ?? [];
        }
    );

    useEffect(() => {
        startSubscription();
    }, [startSubscription]);

    return (
        <ShoppingCartContext.Provider
            value={{
                carts: subscription.data ?? response.data?.getShoppingCartList.data ?? [],
                reload,
            }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};

export const useShoppingCarts = () => useContext(ShoppingCartContext);

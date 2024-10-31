"use client";

import { createContext, useContext, useEffect } from "react";
import { ResultOf } from "gql.tada";
import { ShoppingCart } from "@/components/shopping-cart/columns";
import { CartSubscription, GetCartsQuery, useProjectionsQuery } from "@/graphql/projections";
import { useProjectionsSubscription } from "@/graphql/projections";

interface ShoppingCartContext {
    carts: ResultOf<typeof GetCartsQuery>["getShoppingCartList"]["data"];
}

const ShoppingCartContext = createContext<ShoppingCartContext>({} as ShoppingCartContext);

export const ShoppingCartProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [response] = useProjectionsQuery({
        query: GetCartsQuery,
        variables: { input: { useStrongConsistency: true } },
    });
    const [subscription, startSubscription] = useProjectionsSubscription<
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
    }, []);

    return (
        <ShoppingCartContext.Provider
            value={{
                carts: subscription.data ?? response.data?.getShoppingCartList.data ?? [],
            }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};

export const useShoppingCarts = () => useContext(ShoppingCartContext);

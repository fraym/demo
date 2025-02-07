"use server";

import { v4 as uuid } from "uuid";
import { graphql } from "@/lib/api/streams";
import { newStreamsClient } from "@/lib/client/streams";

const PublishMutation = graphql(`
    mutation Publish($input: PublishInput!) {
        publish(input: $input)
    }
`);

export const triggerCreateShoppingCartEvent = async (name: string) => {
    const client = await newStreamsClient();

    const shoppingCartId = uuid();

    await client
        .mutation(PublishMutation, {
            input: {
                topic: "demo_app",
                events: [
                    {
                        id: shoppingCartId,
                        type: "CreateShoppingCart",
                        stream: `ShoppingCart-${shoppingCartId}`,
                        tenantId: "",
                        payload: [
                            {
                                key: "shoppingCartId",
                                value: JSON.stringify(shoppingCartId),
                            },
                            {
                                key: "name",
                                value: JSON.stringify(name),
                            },
                        ],
                    },
                ],
            },
        })
        .toPromise();
};

export const triggerCreateShoppingCartItemEvent = async (
    shoppingCartId: string,
    productId: string
) => {
    const client = await newStreamsClient();

    await client
        .mutation(PublishMutation, {
            input: {
                topic: "demo_app",
                events: [
                    {
                        id: uuid(),
                        type: "CreateShoppingCartItem",
                        stream: `ShoppingCart-${shoppingCartId}`,
                        tenantId: "",
                        payload: [
                            {
                                key: "shoppingCartId",
                                value: JSON.stringify(shoppingCartId),
                            },
                            {
                                key: "itemId",
                                value: JSON.stringify(uuid()),
                            },
                            {
                                key: "product",
                                value: JSON.stringify(productId),
                            },
                        ],
                    },
                ],
            },
        })
        .toPromise();
};

export const triggerRemoveItemFromCartEvent = async (shoppingCartId: string, itemId: string) => {
    const client = await newStreamsClient();

    await client
        .mutation(PublishMutation, {
            input: {
                topic: "demo_app",
                events: [
                    {
                        id: uuid(),
                        type: "RemoveItemFromCart",
                        stream: `ShoppingCart-${shoppingCartId}`,
                        tenantId: "",
                        payload: [
                            {
                                key: "shoppingCartId",
                                value: JSON.stringify(shoppingCartId),
                            },
                            {
                                key: "itemId",
                                value: JSON.stringify(itemId),
                            },
                        ],
                    },
                ],
            },
        })
        .toPromise();
};

export const triggerDeleteShoppingCart = async (shoppingCartId: string) => {
    const client = await newStreamsClient();

    await client
        .mutation(PublishMutation, {
            input: {
                topic: "demo_app",
                events: [
                    {
                        id: uuid(),
                        type: "DeleteShoppingCart",
                        stream: `ShoppingCart-${shoppingCartId}`,
                        tenantId: "",
                        payload: [
                            {
                                key: "shoppingCartId",
                                value: JSON.stringify(shoppingCartId),
                            },
                        ],
                    },
                ],
            },
        })
        .toPromise();
};

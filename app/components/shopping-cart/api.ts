"use server";

import { newClient } from "@fraym/streams";
import { v4 as uuid } from "uuid";

export const triggerCreateShoppingCartEvent = async (name: string) => {
    const client = await newClient({
        groupId: "demo-app",
        serverAddress: "localhost:9020",
    });

    const shoppingCartId = uuid();

    await client.publish("demoApp", [
        {
            type: "CreateShoppingCart",
            tenantId: "",
            payload: {
                shoppingCartId,
                name,
            },
            id: uuid(),
            stream: `ShoppingCart-${shoppingCartId}`,
        },
    ]);
};

export const triggerCreateShoppingCartItemEvent = async (
    shoppingCartId: string,
    productId: string
) => {
    const client = await newClient({
        groupId: "demo-app",
        serverAddress: "localhost:9020",
    });

    await client.publish("demoApp", [
        {
            type: "CreateShoppingCartItem",
            tenantId: "",
            payload: {
                shoppingCartId,
                itemId: uuid(),
                product: productId,
            },
            id: uuid(),
            stream: `ShoppingCart-${shoppingCartId}`,
        },
    ]);
};

export const triggerRemoveItemFromCartEvent = async (shoppingCartId: string, itemId: string) => {
    const client = await newClient({
        groupId: "demo-app",
        serverAddress: "localhost:9020",
    });

    await client.publish("demoApp", [
        {
            type: "RemoveItemFromCart",
            tenantId: "",
            payload: {
                shoppingCartId,
                itemId,
            },
            id: uuid(),
            stream: `ShoppingCart-${shoppingCartId}`,
        },
    ]);
};

export const triggerDeleteShoppingCart = async (shoppingCartId: string) => {
    const client = await newClient({
        groupId: "demo-app",
        serverAddress: "localhost:9020",
    });

    await client.publish("demoApp", [
        {
            type: "DeleteShoppingCart",
            tenantId: "",
            payload: {
                shoppingCartId,
            },
            id: uuid(),
            stream: `ShoppingCart-${shoppingCartId}`,
        },
    ]);
};

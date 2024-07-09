"use client";

import { useCallback, useState } from "react";
import { useProducts } from "@/components/product/context";
import {
    triggerCreateShoppingCartEvent,
    triggerCreateShoppingCartItemEvent,
    triggerRemoveItemFromCartEvent,
} from "@/components/shopping-cart/api";
import { useShoppingCarts } from "@/components/shopping-cart/context";
import { ItemSelector } from "@/components/shopping-cart/item-selector";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const CreateShoppingCartCard = () => {
    const [name, setName] = useState<string | null>("");

    const triggerCreateShoppingCartEventWithIds = triggerCreateShoppingCartEvent.bind(
        null,
        name ?? ""
    );

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Event: CreateShoppingCart</CardTitle>
                <CardDescription>Create a new (empty) shopping cart</CardDescription>
            </CardHeader>
            <CardContent>
                <Input
                    type="text"
                    placeholder="Name"
                    value={name ?? ""}
                    onChange={e => setName(e.currentTarget.value)}
                    className="mb-6"
                />

                <form action={triggerCreateShoppingCartEventWithIds}>
                    <Button type="submit">Trigger the event</Button>
                </form>
            </CardContent>
        </Card>
    );
};

export const CreateShoppingCartItemCard = () => {
    const { carts } = useShoppingCarts();
    const { products } = useProducts();
    const [shoppingCartId, setShoppingCartId] = useState<string | null>("");
    const [productId, setProductId] = useState<string | null>("");

    const triggerCreateShoppingCartItemEventWithIds = triggerCreateShoppingCartItemEvent.bind(
        null,
        shoppingCartId ?? "",
        productId ?? ""
    );

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Event: CreateShoppingCartItem</CardTitle>
                <CardDescription>Add a product to a shopping cart</CardDescription>
            </CardHeader>
            <CardContent>
                <ItemSelector
                    label="Select a shopping cart"
                    items={carts.map(cart => ({ value: cart.id, label: cart.name }))}
                    value={shoppingCartId}
                    onSelect={setShoppingCartId}
                />
                <ItemSelector
                    label="Select a product"
                    items={products.map(product => ({ value: product.id, label: product.name }))}
                    value={null}
                    onSelect={setProductId}
                />

                <form action={triggerCreateShoppingCartItemEventWithIds}>
                    <Button type="submit">Trigger the event</Button>
                </form>
            </CardContent>
        </Card>
    );
};

export const RemoveItemFromCartCard = () => {
    const { carts } = useShoppingCarts();
    const [shoppingCartId, setShoppingCartId] = useState<string | null>("");
    const [itemId, setItemId] = useState<string | null>("");

    const trigger = useCallback(() => {
        triggerRemoveItemFromCartEvent(shoppingCartId ?? "", itemId ?? "");
        setItemId(null);
    }, [shoppingCartId, itemId]);

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Event: RemoveProductFromCart</CardTitle>
                <CardDescription>Remove a product from a shopping cart</CardDescription>
            </CardHeader>
            <CardContent>
                <ItemSelector
                    label="Select a shopping cart"
                    items={carts.map(cart => ({ value: cart.id, label: cart.name }))}
                    value={shoppingCartId}
                    onSelect={setShoppingCartId}
                />
                {shoppingCartId && (
                    <ItemSelector
                        label="Select an item"
                        items={carts
                            .find(cart => cart.id === shoppingCartId)!
                            .items.map(item => ({ value: item.id, label: item.product.name }))}
                        value={itemId}
                        onSelect={setItemId}
                    />
                )}

                <form action={trigger}>
                    <Button type="submit">Trigger the event</Button>
                </form>
            </CardContent>
        </Card>
    );
};

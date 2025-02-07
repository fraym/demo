"use client";

import { useCallback, useMemo, useState } from "react";
import { useProducts } from "@/components/context/ProductProvider";
import { useShoppingCarts } from "@/components/context/ShoppingCartProvider";
import {
    triggerCreateShoppingCartEvent,
    triggerCreateShoppingCartItemEvent,
    triggerRemoveItemFromCartEvent,
} from "@/components/shopping-cart/api";
import { ItemSelector } from "@/components/shopping-cart/item-selector";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const CreateShoppingCartCard = () => {
    const [name, setName] = useState<string | null>(null);

    const trigger = useCallback(() => {
        if (!name) {
            return;
        }

        triggerCreateShoppingCartEvent(name);
        setName(null);
    }, [name]);

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

                <form action={trigger}>
                    <Button type="submit" disabled={!name}>
                        Trigger the event
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

export const CreateShoppingCartItemCard = () => {
    const { carts } = useShoppingCarts();
    const { products } = useProducts();
    const [shoppingCartId, setShoppingCartId] = useState<string | null>(null);
    const [productId, setProductId] = useState<string | null>(null);

    const trigger = useCallback(() => {
        if (!shoppingCartId || !productId) {
            return;
        }

        triggerCreateShoppingCartItemEvent(shoppingCartId, productId);
        setProductId("");
    }, [shoppingCartId, productId]);

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
                    value={productId}
                    onSelect={setProductId}
                />

                <form action={trigger}>
                    <Button type="submit" disabled={!shoppingCartId || !productId}>
                        Trigger the event
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

export const RemoveItemFromCartCard = () => {
    const { carts } = useShoppingCarts();
    const [shoppingCartId, setShoppingCartId] = useState<string | null>(null);
    const [itemId, setItemId] = useState<string | null>(null);

    const trigger = useCallback(() => {
        if (!shoppingCartId || !itemId) {
            return;
        }

        triggerRemoveItemFromCartEvent(shoppingCartId, itemId);
        setItemId(null);
    }, [shoppingCartId, itemId]);

    const cartSelectorItems = useMemo(() => {
        return carts.map(cart => ({ value: cart.id, label: cart.name }));
    }, [carts]);

    const cartItemSelectorItems = useMemo(() => {
        if (!shoppingCartId || !carts) {
            return [];
        }

        return (
            carts
                .find(cart => cart.id === shoppingCartId)
                ?.items.map(item => ({ value: item.id, label: item.product.name })) ?? []
        );
    }, [carts, shoppingCartId]);

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Event: RemoveProductFromCart</CardTitle>
                <CardDescription>Remove a product from a shopping cart</CardDescription>
            </CardHeader>
            <CardContent>
                <ItemSelector
                    label="Select a shopping cart"
                    items={cartSelectorItems}
                    value={shoppingCartId}
                    onSelect={setShoppingCartId}
                />
                {shoppingCartId && cartItemSelectorItems.length > 0 && (
                    <ItemSelector
                        label="Select an item"
                        items={cartItemSelectorItems}
                        value={itemId}
                        onSelect={setItemId}
                    />
                )}

                <form action={trigger}>
                    <Button type="submit" disabled={!shoppingCartId || !itemId}>
                        Trigger the event
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

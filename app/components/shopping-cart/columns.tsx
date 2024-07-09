"use client";

import { useCallback } from "react";
import { Trash } from "lucide-react";
import { triggerDeleteShoppingCart } from "@/components/shopping-cart/api";
import { useShoppingCarts } from "@/components/shopping-cart/context";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";

export interface ShoppingCart {
    id: string;
    name: string;
    items: ShoppingCartItem[];
}

export interface ShoppingCartItem {
    id: string;
    product: {
        id: string;
        name: string;
        price: number;
    };
}

export const shoppingCartColumns: ColumnDef<ShoppingCart>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "items",
        header: "Items",
        cell: ({ row }) => {
            const data = row.original.items.reduce(
                (data, item) => {
                    const productId = item.product.id;

                    data[productId] = data[productId] || {
                        name: item.product.name,
                        count: 0,
                    };

                    data[productId].count++;

                    return data;
                },
                {} as Record<string, { name: string; count: number }>
            );

            return (
                <ul>
                    {Object.keys(data).map(productId => (
                        <li key={productId}>
                            {data[productId].name} x{data[productId].count}
                        </li>
                    ))}
                </ul>
            );
        },
    },
    {
        accessorKey: "price",
        header: "Price",
        cell: ({ row }) => {
            return (
                <div>{row.original.items.reduce((prev, item) => prev + item.product.price, 0)}</div>
            );
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const { reload } = useShoppingCarts();

            const action = useCallback(() => {
                reload({ requestPolicy: "network-only" });
                triggerDeleteShoppingCart(row.original.id);
            }, [row.original.id]);

            return (
                <form className="flex justify-end space-x-2" action={action}>
                    <Button variant="outline" type="submit">
                        <Trash className="h-4 w-4" />
                    </Button>
                </form>
            );
        },
    },
];

"use client";

import { Pencil, Trash } from "lucide-react";
import { Product } from "@/components/product/columns";
import { useProducts } from "@/components/product/context";
import { ProductDrawer } from "@/components/product/drawer";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";

export type ShoppingCart = {
    id: string;
    products: Product[];
};

export const productColumns: ColumnDef<ShoppingCart>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "items",
        header: "Items",
    },
    {
        accessorKey: "price",
        header: "Price",
        cell: ({ row }) => {
            return <h1>sad</h1>;
        },
    },
];

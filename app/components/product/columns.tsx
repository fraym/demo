"use client";

import { Pencil, Trash } from "lucide-react";
import { DeleteProductMutation, useCrudMutation } from "@/api/crud";
import { useProducts } from "@/components/product/context";
import { ProductDrawer } from "@/components/product/drawer";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";

export type Product = {
    id: string;
    name: string;
    price: number;
};

export const productColumns: ColumnDef<Product>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "price",
        header: "Price",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const { deleteProduct } = useProducts();

            return (
                <div className="flex justify-end space-x-2">
                    <ProductDrawer
                        trigger={
                            <Button variant="outline" type="button">
                                <Pencil className="h-4 w-4" />
                            </Button>
                        }
                        product={row.original}
                    />
                    <Button
                        variant="outline"
                        type="button"
                        onClick={() => deleteProduct(row.original.id)}>
                        <Trash className="h-4 w-4" />
                    </Button>
                </div>
            );
        },
    },
];

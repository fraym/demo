"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useProducts } from "@/components/context/ProductProvider";
import { Product } from "@/components/product/columns";
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ProductDrawerProps {
    trigger?: React.ReactNode;
    product?: Product;
}

export const ProductDrawer: React.FC<ProductDrawerProps> = ({ trigger, product }) => {
    const [name, setName] = useState(product?.name ?? "");
    const [price, setPrice] = useState(product?.price.toString() ?? "");
    const { createProduct, updateProduct } = useProducts();

    const save = useCallback(async () => {
        if (product) {
            updateProduct(product.id, name, parseFloat(price), () => {
                setName(product ? name : "");
                setPrice(product ? price : "");
            });
            return;
        }

        createProduct(name, parseFloat(price), () => {
            setName("");
            setPrice("");
        });
    }, [product, name, price, createProduct, updateProduct]);

    useEffect(() => {
        if (!product) {
            return;
        }

        setName(product.name);
        setPrice(product.price.toString());
    }, [product]);

    return (
        <Drawer>
            <DrawerTrigger asChild>
                {trigger ? (
                    trigger
                ) : (
                    <Button variant="outline" type="button">
                        Create new product
                    </Button>
                )}
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle>
                            {product ? "Edit a product" : "Create a new product"}
                        </DrawerTitle>
                    </DrawerHeader>
                    <div className="p-4 pb-0">
                        <div className="flex items-center justify-center space-x-2">
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    type="text"
                                    id="name"
                                    placeholder="Name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="price">Price</Label>
                                <Input
                                    type="number"
                                    id="price"
                                    placeholder="Price"
                                    value={price}
                                    onChange={e => setPrice(e.currentTarget.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button onClick={save}>{product ? "Save" : "Create"}</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
};

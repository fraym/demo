"use client";

import { DataTable } from "@/components/data-table";
import {
    CreateShoppingCartCard,
    CreateShoppingCartItemCard,
    RemoveItemFromCartCard,
} from "@/components/shopping-cart/cards";
import { shoppingCartColumns } from "@/components/shopping-cart/columns";
import { useShoppingCarts } from "@/components/shopping-cart/context";

export default function Page() {
    const { carts } = useShoppingCarts();

    return (
        <>
            <DataTable columns={shoppingCartColumns} data={carts} />
            <CreateShoppingCartCard />
            <CreateShoppingCartItemCard />
            <RemoveItemFromCartCard />
        </>
    );
}

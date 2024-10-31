"use client";

import { useShoppingCarts } from "@/components/context/ShoppingCartProvider";
import { DataTable } from "@/components/data-table";
import {
    CreateShoppingCartCard,
    CreateShoppingCartItemCard,
    RemoveItemFromCartCard,
} from "@/components/shopping-cart/cards";
import { shoppingCartColumns } from "@/components/shopping-cart/columns";

export default function Page() {
    const { carts } = useShoppingCarts();

    return (
        <>
            <DataTable columns={shoppingCartColumns} data={carts} />
            <div className="flex gap-10 flex-wrap">
                <CreateShoppingCartCard />
                <CreateShoppingCartItemCard />
                <RemoveItemFromCartCard />
            </div>
        </>
    );
}

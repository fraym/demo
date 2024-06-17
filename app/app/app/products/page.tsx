"use client";

import { GetProductsQuery } from "@/api/crud";
import { DataTable } from "@/components/data-table";
import { productColumns } from "@/components/product/columns";
import { useProducts } from "@/components/product/context";
import { ProductDrawer } from "@/components/product/drawer";
import { useQuery } from "@urql/next";

export default function Page() {
    const { products } = useProducts();

    return (
        <>
            <DataTable columns={productColumns} data={products} />
            <ProductDrawer />
        </>
    );
}

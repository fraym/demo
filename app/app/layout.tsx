"use client";

import { Suspense } from "react";
import { GraphqlProvider } from "@/components/context/GraphqlProvider";
import { ProductProvider } from "@/components/context/ProductProvider";
import { ShoppingCartProvider } from "@/components/context/ShoppingCartProvider";
import { Navigation, NavigationItem } from "@/components/navigation/navigation";

const navigationItems: NavigationItem[] = [
    {
        title: "App",
        entries: [
            {
                title: "Products",
                href: "/app/products",
                description: "Manage products in the system.",
            },
            {
                title: "Shopping Carts",
                href: "/app/shopping-carts",
                description: "Manage shopping carts in the system.",
            },
        ],
    },
    {
        title: "Sandboxes",
        entries: [
            {
                title: "Streams",
                href: `https://${process.env.NEXT_PUBLIC_CLIENT_NAME}.demo.freym.io/streams/management/graphql/sandbox`,
                description: "Try out the streams graphql api in a sandbox environment.",
            },
            {
                title: "Projections",
                href: `https://${process.env.NEXT_PUBLIC_CLIENT_NAME}.demo.freym.io/projections/delivery/graphql/sandbox`,
                description:
                    "Try out the dynamic projections graphql api in a sandbox environment.",
            },
            {
                title: "CRUD",
                href: `https://${process.env.NEXT_PUBLIC_CLIENT_NAME}.demo.freym.io/crud/delivery/graphql/sandbox`,
                description: "Try out the dynamic crud graphql api in a sandbox environment.",
            },
            {
                title: "Auth",
                href: `https://${process.env.NEXT_PUBLIC_CLIENT_NAME}.demo.freym.io/auth/management/graphql/sandbox`,
                description: "Try out the auth graphql api in a sandbox environment.",
            },
        ],
    },
];

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navigation items={navigationItems} />
            <GraphqlProvider>
                <Suspense>
                    <ProductProvider>
                        <ShoppingCartProvider>
                            <div className="content">{children}</div>
                        </ShoppingCartProvider>
                    </ProductProvider>
                </Suspense>
            </GraphqlProvider>
        </>
    );
}

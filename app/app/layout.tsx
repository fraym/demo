import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GraphqlProvider } from "@/components/graphql-provider";
import { Navigation, NavigationItem } from "@/components/navigation/navigation";
import { ProductProvider } from "@/components/product/context";
import { ShoppingCartProvider } from "@/components/shopping-cart/context";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

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
        title: "Demo",
        entries: [
            {
                title: "Streams",
                href: "/demo/streams",
                description: "Manage products in the system.",
            },
        ],
    },
];

export const metadata: Metadata = {
    title: "Freym demo app",
    description: "event-sourcing made easy",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body className={cn("min-h-screen font-sans antialiased dark", inter.variable)}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange>
                    <GraphqlProvider>
                        <Navigation items={navigationItems} />
                        <ProductProvider>
                            <ShoppingCartProvider>
                                <div className="content">{children}</div>
                            </ShoppingCartProvider>
                        </ProductProvider>
                    </GraphqlProvider>
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}

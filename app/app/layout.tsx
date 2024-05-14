import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GraphqlProvider } from "@/components/graphql-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

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
                    <GraphqlProvider>{children}</GraphqlProvider>
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}

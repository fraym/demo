"use client";

import { ComponentPropsWithoutRef, ElementRef, FC, forwardRef } from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface NavigationEntry {
    title: string;
    href: string;
    description: string;
}

export interface NavigationItem {
    title: string;
    entries: NavigationEntry[];
}

interface NavigationProps {
    items: NavigationItem[];
}

export const Navigation: FC<NavigationProps> = ({ items }) => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {items.map(item => (
                    <NavigationMenuItem key={item.title}>
                        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {item.entries.map(entry => (
                                    <ListItem
                                        key={entry.title}
                                        title={entry.title}
                                        href={entry.href}>
                                        {entry.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
};

const ListItem = forwardRef<ElementRef<"a">, ComponentPropsWithoutRef<"a">>(
    ({ className, title, children, href, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            className
                        )}
                        href={href}
                        target={href?.startsWith("https://") ? "_blank" : undefined}
                        rel={href?.startsWith("https://") ? "noopener noreferrer" : undefined}
                        {...props}>
                        <div className="text-sm font-medium leading-none">{title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {children}
                        </p>
                    </a>
                </NavigationMenuLink>
            </li>
        );
    }
);
ListItem.displayName = "ListItem";

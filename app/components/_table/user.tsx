"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { List, Trash } from "lucide-react";
import { deleteUser, getUserList } from "@/api/user";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import { User } from "@/lib/types";

export const UserTable = () => {
    const { toast } = useToast();
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        (async () => {
            setUsers(await getUserList());
        })();
    }, []);

    async function deleteUserById(id: string) {
        const { success, error } = await deleteUser(id);

        if (success) {
            window.location.reload();
        } else {
            toast({
                title: "Uh oh! Something went wrong.",
                description: error,
            });
        }
    }

    return (
        <Table>
            <TableCaption>A list of all users.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Email</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {users.map(user => (
                    <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.email}</TableCell>
                        <TableCell className="text-right">
                            <Button
                                variant="outline"
                                size="icon"
                                type="button"
                                onClick={() => deleteUserById(user.id)}>
                                <Trash className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                type="button"
                                asChild
                                className="ml-2">
                                <Link href={`/${user.id}`}>
                                    <List className="h-4 w-4" />
                                </Link>
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

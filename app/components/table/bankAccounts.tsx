"use client";

import { useEffect, useMemo, useState } from "react";
import { on } from "events";
import { Trash } from "lucide-react";
import { DeleteBankAccountMutation } from "@/components/table/bankAccountsCrud";
import { BankAccountsQuery } from "@/components/table/bankAccountsProjections";
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
import { cn } from "@/lib/utils";
import { useMutation, useQuery } from "@urql/next";

interface BankAccountsProps {
    userId: string;
    onSelect: (bankAccountId: string | null) => void;
}

export const BankAccounts = ({ userId, onSelect }: BankAccountsProps) => {
    const { toast } = useToast();
    const [selectedBankAccountId, setSelectedBankAccountId] = useState<string | null>(null);
    const [response, reload] = useQuery({ query: BankAccountsQuery, variables: { userId } });
    const [deleteBankAccountResult, deleteBankAccount] = useMutation(DeleteBankAccountMutation);

    const accounts = useMemo(() => {
        return (
            response.data?.getBankAccountList.data.map(account => ({
                ...account,
                value:
                    response.data?.getBankAccountValueList.data.find(
                        value => value.bankAccount.id === account.id
                    )?.value ?? 0,
            })) ?? []
        );
    }, [response]);

    useEffect(() => {
        if (deleteBankAccountResult.error) {
            toast({
                title: "Uh oh! Something went wrong.",
                description: deleteBankAccountResult.error.message,
            });
        } else {
            reload({ requestPolicy: "network-only" });
        }
    }, [deleteBankAccountResult]);

    const selectBankAccount = (id: string) => {
        if (id === selectedBankAccountId) {
            setSelectedBankAccountId(null);
            onSelect(null);
            return;
        }

        setSelectedBankAccountId(id);
        onSelect(id);
    };

    return (
        <Table>
            <TableCaption>A list of bank accounts.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[200px]">Account</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {accounts.map(account => (
                    <TableRow
                        key={account.id}
                        onClick={() => selectBankAccount(account.id)}
                        className={cn({
                            "cursor-pointer": true,
                            "bg-secondary": account.id === selectedBankAccountId,
                            "hover:bg-secondary-light": account.id === selectedBankAccountId,
                        })}>
                        <TableCell className="font-medium">{account.iban}</TableCell>
                        <TableCell className="text-right">{account.value}</TableCell>
                        <TableCell className="text-right">
                            <Button
                                variant="outline"
                                size="icon"
                                type="button"
                                onClick={() =>
                                    deleteBankAccount({ id: account.id }, { clientName: "crud" })
                                }>
                                <Trash className="h-4 w-4" />
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

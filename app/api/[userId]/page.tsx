"use client";

import { useState } from "react";
import { BankAccountForm } from "@/components/form/bankAccount";
import { TransactionForm } from "@/components/form/transaction";
import { BankAccounts } from "@/components/table/bankAccounts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import styles from "../page.module.scss";

interface UserProps {
    params: {
        userId: string;
    };
}

export default function User({ params }: UserProps) {
    const [bankAccountId, setBankAccountId] = useState<string | null>(null);

    return (
        <div className={styles.content}>
            <Card>
                <CardHeader>
                    <CardTitle>Create Bank Account</CardTitle>
                </CardHeader>
                <CardContent>
                    <BankAccountForm userId={params.userId} />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>List Bank Accounts</CardTitle>
                </CardHeader>
                <CardContent>
                    <BankAccounts userId={params.userId} onSelect={setBankAccountId} />
                </CardContent>
            </Card>

            {bankAccountId && (
                <Card>
                    <CardHeader>
                        <CardTitle>Add Transaction</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <TransactionForm userId={params.userId} bankAccountId={bankAccountId} />
                    </CardContent>
                </Card>
            )}
        </div>
    );
}

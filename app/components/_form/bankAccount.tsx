"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { graphql } from "@/lib/api/crud";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@urql/next";

const formSchema = z.object({
    iban: z.string().min(2).max(50),
});

const CreateBankAccountMutation = graphql(`
    mutation CreateBankAccount($iban: String!, $userId: ID!) {
        createBankAccount(input: { data: { iban: $iban, userId: $userId } }) {
            id
        }
    }
`);

interface BankAccountFormProps {
    userId: string;
}

export const BankAccountForm = ({ userId }: BankAccountFormProps) => {
    const { toast } = useToast();
    const [_, createBankAccount] = useMutation(CreateBankAccountMutation);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            iban: "DE00 0000",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const result = await createBankAccount(
            {
                iban: values.iban,
                userId,
            },
            { clientName: "crud" }
        );

        if (result.error) {
            toast({
                title: "Uh oh! Something went wrong.",
                description: result.error.message,
            });
        } else {
            window.location.reload();
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 min-w-[300px]">
                <FormField
                    control={form.control}
                    name="iban"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>IBAN</FormLabel>
                            <FormControl>
                                <Input placeholder="IBAN" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
};

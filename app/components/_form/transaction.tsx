"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { executeTransaction } from "@/api/transaction";
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
    value: z.coerce.number().min(1),
    type: z.enum(["PAY", "RECEIVE"]),
});

interface TransactionFormProps {
    bankAccountId: string;
    userId: string;
}

export const TransactionForm = ({ bankAccountId, userId }: TransactionFormProps) => {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            value: 0,
            type: "PAY",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const result = await executeTransaction(values.type, bankAccountId, userId, values.value);

        if (result.error) {
            toast({
                title: "Uh oh! Something went wrong.",
                description: result.error,
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
                    name="type"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a transaction type" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="PAY">Pay money</SelectItem>
                                    <SelectItem value="RECEIVE">Receive money</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="value"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Value</FormLabel>
                            <FormControl>
                                <Input placeholder="Value" type="number" {...field} />
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

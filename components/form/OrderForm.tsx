"use client";

import { FC, useActionState } from "react";
import { Loading } from "@/components/Loading";
import { CheckboxInput } from "@/components/fields/CheckboxInput";
import { TextInput } from "@/components/fields/TextInput";
import { useIngredientList } from "@/hook/useIngredientList";
import { placeOrder } from "@/server/placeOrder";

interface OrderFormProps {
    jwt: string;
}

export const OrderForm: FC<OrderFormProps> = ({ jwt }) => {
    const [state, formAction, pending] = useActionState<
        {
            error: string | null;
            message: string | null;
        },
        FormData
    >(placeOrder, { error: null, message: null });

    return (
        <div>
            <h2>Place Your Order</h2>
            <form action={formAction}>
                <TextInput name="name" label="Name" />

                <IngredientCheckboxes jwt={jwt} />

                {state.error && <div className="error">{state.error}</div>}
                {state.message && <div className="success">{state.message}</div>}

                <button type="submit" disabled={pending}>
                    Place your order
                </button>
            </form>
        </div>
    );
};

const IngredientCheckboxes: FC<OrderFormProps> = ({ jwt }) => {
    const { data: ingredients, loading } = useIngredientList(jwt);
    return (
        <>
            {loading && <Loading />}

            {ingredients
                ?.filter(ingredient => ingredient.amount !== 0)
                .map(ingredient => (
                    <CheckboxInput
                        key={ingredient.id}
                        name={ingredient.id}
                        label={`${ingredient.name} (${ingredient.amount})`}
                    />
                ))}
        </>
    );
};

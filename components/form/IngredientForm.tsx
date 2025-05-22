"use client";

import { FC, useActionState } from "react";
import { NumberInput } from "@/components/fields/NumberInput";
import { TextInput } from "@/components/fields/TextInput";
import { addIngredient } from "@/server/addIngredient";

export const IngredientForm: FC = () => {
    const [state, formAction, pending] = useActionState(addIngredient, { error: null });

    return (
        <div>
            <h2>Add Ingredient</h2>
            <form action={formAction}>
                <TextInput name="name" label="Name" />
                <NumberInput name="amount" label="Amount" />

                {state.error && <div className="error">{state.error}</div>}

                <button type="submit" disabled={pending}>
                    Submit
                </button>
            </form>
        </div>
    );
};

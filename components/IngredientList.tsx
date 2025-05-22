"use client";

import { FC } from "react";
import { useIngredientList } from "@/hook/useIngredientList";
import { Loading } from "./Loading";

interface IngredientListProps {
    jwt: string;
}

export const IngredientList: FC<IngredientListProps> = ({ jwt }) => {
    const { data, loading } = useIngredientList(jwt);

    return (
        <div>
            <h1>Ingredients</h1>
            {loading && <Loading />}
            <ul>
                {data?.map(item => (
                    <li key={item.id}>
                        {item.name} ({item.amount})
                    </li>
                ))}
            </ul>
        </div>
    );
};

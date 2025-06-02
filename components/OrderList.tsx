"use client";

import { FC } from "react";
import { usePlacedOrderList } from "@/hook/usePlacedOrderList";
import { Loading } from "./Loading";

interface OrderListProps {
    jwt: string;
}

export const OrderList: FC<OrderListProps> = ({ jwt }) => {
    const { data, loading } = usePlacedOrderList(jwt);

    return (
        <div>
            <h1>Orders</h1>
            {loading && <Loading />}

            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Date</td>
                        <td>Ingredients</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {data?.map(item => {
                        const date = new Date(item.date);
                        return (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>
                                    {date.toLocaleDateString()} {date.toLocaleTimeString()}
                                </td>
                                <td>{item.ingredients.join(", ")}</td>
                                <td>{item.price}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

"use server";

import { Client, newClient } from "@fraym/streams";

let globalClient: Client;

const getClient = async (): Promise<Client> => {
    if (!globalClient) {
        globalClient = await newClient({
            groupId: "demo",
            serverAddress: "localhost:9020",
        });
    }

    return globalClient;
};

export const executeTransaction = async (
    type: "PAY" | "RECEIVE",
    bankAccountId: string,
    userId: string,
    value: number
) => {
    try {
        const client = await getClient();
        await client.publish("bankingApp", [
            {
                id: "",
                type: type === "PAY" ? "MoneyPaid" : "MoneyReceived",
                tenantId: "",
                payload: {
                    userId,
                    bankAccountId,
                    value,
                },
            },
        ]);

        return {
            success: true,
            error: null,
        };
    } catch (e) {
        console.error(e);

        return {
            success: false,
            error: e,
        };
    }
};

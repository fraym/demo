"use server";

import { generateJwt } from "@fraym/auth/dist/util/token";
import { getClient } from "@fraym/react/client/client";
import { v4 as uuid } from "uuid";
import { graphql } from "@/lib/api/streams";
import { getClientUrl } from "./clientUrl";

const PublishMutation = graphql(`
    mutation Publish($input: PublishInput!) {
        publish(input: $input)
    }
`);

export const addIngredient = async (_: unknown, formData: FormData) => {
    const name = formData.get("name");
    const amount = parseInt((formData.get("amount") as string) ?? "");

    if (!name) {
        return { error: "Name is required" };
    }

    if (isNaN(amount)) {
        return { error: "Amount is required" };
    }

    const jwt = await generateJwt(process.env.JWT_SECRET ?? "", "", ["FRAYM_AUTH_OWNER"]);
    const client = getClient(getClientUrl("streams"), jwt);

    const result = await client.mutation(PublishMutation, {
        input: {
            topic: "demo",
            events: [
                {
                    type: "CreateIngredient",
                    tenantId: "",
                    payload: [
                        {
                            key: "id",
                            value: JSON.stringify(uuid()),
                        },
                        {
                            key: "name",
                            value: JSON.stringify(name),
                        },
                        {
                            key: "amount",
                            value: JSON.stringify(amount),
                        },
                    ],
                },
            ],
        },
    });

    if (result.error) {
        return { error: result.error.message };
    }

    return { error: null };
};

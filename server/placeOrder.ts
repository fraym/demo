"use server";

import { getClient } from "@fraym/react/client/client";
import { v4 as uuid } from "uuid";
import { graphql as crudGraphql } from "@/lib/api/crud";
import { graphql } from "@/lib/api/projections";
import { graphql as streamsGraphql } from "@/lib/api/streams";
import { newJwt } from "@/lib/newJwt";
import { getClientUrl } from "./clientUrl";

export const placeOrder = async (_: unknown, formData: FormData) => {
    try {
        const { name, ingredientIds } = getDataFromFormData(formData);

        if (ingredientIds.length === 0) {
            throw new Error("Please select at least one ingredient");
        }

        await checkIngredientAvailability(ingredientIds);

        const customerId = await getOrCreateCustomerId(name);

        await createOrder(customerId, ingredientIds);

        return {
            error: null,
            message: "Your order has been placed. Thank you!",
        };
    } catch (error: unknown) {
        return { error: (error as Error).message, message: null };
    }
};

const getDataFromFormData = (formData: FormData) => {
    const name = formData.get("name");

    if (!name || typeof name !== "string") {
        throw new Error("Name is required");
    }

    const ingredientIds: string[] = [];

    formData.forEach((value, key) => {
        if (key === "name" || key.startsWith("$")) {
            return;
        }

        if (value === "on") {
            ingredientIds.push(key);
        }
    });

    return {
        name,
        ingredientIds,
    };
};

const IngredientQuery = graphql(`
    query IngredientQuery($input: GetIngredientInput!) {
        getIngredient(input: $input) {
            name
            amount
        }
    }
`);

const checkIngredientAvailability = async (ingredientIds: string[]) => {
    const jwt = await newJwt(["FRAYM_AUTH_OWNER"]);
    const client = getClient(getClientUrl("projections"), jwt);

    for (const ingredientId of ingredientIds) {
        const result = await client.query(IngredientQuery, {
            input: {
                id: ingredientId,
            },
        });

        const ingredient = result.data?.getIngredient;

        if (!ingredient) {
            throw new Error("Ingredient not found");
        }

        if (ingredient.amount === 0) {
            throw new Error(
                `Ingredient ${ingredient.name} is no longer available. Please check your order and try again.`
            );
        }
    }
};

const CustomerQuery = graphql(`
    query CustomerQuery($input: GetCustomerInput!) {
        getCustomer(input: $input) {
            id
        }
    }
`);

const CreateCustomer = crudGraphql(/* GraphQL */ `
    mutation CreateCustomer($input: CreateCustomerInput!) {
        createCustomer(input: $input) {
            id
        }
    }
`);

const getOrCreateCustomerId = async (name: string) => {
    const jwt = await newJwt(["FRAYM_AUTH_OWNER"]);
    const client = getClient(getClientUrl("crud"), jwt);

    const result = await client.query(CustomerQuery, {
        input: {
            filter: {
                name: { equalsCaseInsensitive: name },
            },
        },
    });

    const customer = result.data?.getCustomer;

    if (customer) {
        return customer.id;
    }

    const createResult = await client.mutation(CreateCustomer, {
        input: {
            data: {
                name,
            },
        },
    });

    const customerId = createResult.data?.createCustomer.id;

    if (!customerId) {
        throw new Error("Failed to create customer");
    }

    return customerId;
};

const PublishMutation = streamsGraphql(/* GraphQL */ `
    mutation Publish($input: PublishInput!) {
        publish(input: $input)
    }
`);

const createOrder = async (customerId: string, ingredientIds: string[]) => {
    const jwt = await newJwt(["FRAYM_AUTH_OWNER"]);
    const client = getClient(getClientUrl("streams"), jwt);

    const result = await client.mutation(PublishMutation, {
        input: {
            topic: "demo",
            events: [
                {
                    type: "PlaceOrder",
                    tenantId: "",
                    payload: [
                        {
                            key: "id",
                            value: JSON.stringify(uuid()),
                        },
                        {
                            key: "customer",
                            value: JSON.stringify(customerId),
                        },
                        {
                            key: "ingredients",
                            value: JSON.stringify(ingredientIds),
                        },
                    ],
                },
            ],
        },
    });

    if (result.error) {
        throw new Error(result.error.message);
    }
};

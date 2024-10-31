import { graphql } from "@/lib/api/crud";
import {
    AnyVariables,
    DocumentInput,
    SubscriptionHandler,
    UseMutationResponse,
    UseQueryArgs,
    UseSubscriptionArgs,
} from "@urql/next";
import { useCustomMutation, useCustomQuery, useCustomSubscription } from "./base";

export const GetProductsQuery = graphql(`
    query GetProducts($input: GetProductListInput!) {
        getProductList(input: $input) {
            data {
                id
                name
                price
            }
        }
    }
`);

export const ProductSubscription = graphql(`
    subscription ProductSubscription($input: SubscribeProductListInput!) {
        subscribeToProductList(input: $input) {
            __typename
            ... on Product {
                id
                name
                price
            }
            ... on removeData {
                id
            }
        }
    }
`);

export const CreateProductMutation = graphql(`
    mutation CreateProduct($name: String!, $price: Float!) {
        createProduct(input: { data: { name: $name, price: $price } }) {
            id
        }
    }
`);

export const UpdateProductMutation = graphql(`
    mutation UpdateProduct($id: ID!, $name: String!, $price: Float!) {
        updateProduct(input: { id: $id, data: { name: $name, price: $price } }) {
            id
            name
            price
        }
    }
`);

export const DeleteProductMutation = graphql(`
    mutation DeleteProduct($id: ID!) {
        deleteProduct(input: { id: $id }) {
            numberOfDeletedEntries
        }
    }
`);

export const useCrudQuery = <Data = any, Variables extends AnyVariables = AnyVariables>(
    args: UseQueryArgs<Variables, Data>
) => {
    return useCustomQuery(args, "crud");
};

export const useCrudMutation = <Data = any, Variables extends AnyVariables = AnyVariables>(
    query: DocumentInput<Data, Variables>
): UseMutationResponse<Data, Variables> => {
    return useCustomMutation(query, "crud");
};

export const useCrudSubscription = <
    Data = any,
    Result = Data,
    Variables extends AnyVariables = AnyVariables,
>(
    args: UseSubscriptionArgs<Variables, Data>,
    handler?: SubscriptionHandler<Data, Result>
) => {
    return useCustomSubscription(args, "crud", handler);
};

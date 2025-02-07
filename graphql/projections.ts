import { graphql } from "@/lib/api/projections";
import {
    AnyVariables,
    DocumentInput,
    SubscriptionHandler,
    UseMutationResponse,
    UseQueryArgs,
    UseSubscriptionArgs,
} from "@urql/next";
import { useCustomMutation, useCustomQuery, useCustomSubscription } from "./base";

export const GetCartsQuery = graphql(`
    query GetCarts($input: GetShoppingCartListInput!) {
        getShoppingCartList(input: $input) {
            data {
                id
                name
                items {
                    id
                    product {
                        id
                        name
                        price
                    }
                }
            }
        }
    }
`);

export const CartSubscription = graphql(`
    subscription ProductSubscription($input: SubscribeShoppingCartListInput!) {
        subscribeToShoppingCartList(input: $input) {
            __typename
            ... on ShoppingCart {
                id
                name
                items {
                    id
                    product {
                        id
                        name
                        price
                    }
                }
            }
            ... on removeData {
                id
            }
        }
    }
`);

export const useProjectionsQuery = <Data = any, Variables extends AnyVariables = AnyVariables>(
    args: UseQueryArgs<Variables, Data>
) => {
    return useCustomQuery(args, "projections");
};

export const useProjectionsMutation = <Data = any, Variables extends AnyVariables = AnyVariables>(
    query: DocumentInput<Data, Variables>
): UseMutationResponse<Data, Variables> => {
    return useCustomMutation(query, "projections");
};

export const useProjectionsSubscription = <
    Data = any,
    Result = Data,
    Variables extends AnyVariables = AnyVariables,
>(
    args: UseSubscriptionArgs<Variables, Data>,
    handler?: SubscriptionHandler<Data, Result>
) => {
    return useCustomSubscription(args, "projections", handler);
};

import { useCallback, useMemo } from "react";
import { graphql } from "@/lib/api/crud";
import {
    AnyVariables,
    DocumentInput,
    OperationContext,
    OperationResult,
    SubscriptionHandler,
    UseMutationResponse,
    UseQueryArgs,
    UseSubscriptionArgs,
    UseSubscriptionResponse,
    useMutation,
    useQuery,
    useSubscription,
} from "@urql/next";

export const GetProductsQuery = graphql(`
    query GetProducts($input: GetProductListInput!) {
        getProductList(input: $input) {
            data {
                id
                name
                price
                amount
            }
        }
    }
`);

export const ProductSubscription = graphql(`
    subscription ProductSubscription($input: SubscribeProductListInput!) {
        subscribeToProductList(input: $input) {
            ... on Product {
                id
                name
                price
                amount
            }
            ... on removeData {
                id
            }
        }
    }
`);

export const CreateProductMutation = graphql(`
    mutation CreateProduct($name: String!, $price: Float!, $amount: Int!) {
        createProduct(input: { data: { name: $name, price: $price, amount: $amount } }) {
            id
        }
    }
`);

export const UpdateProductMutation = graphql(`
    mutation UpdateProduct($id: ID!, $name: String!, $price: Float!, $amount: Int!) {
        updateProduct(
            input: { id: $id, data: { name: { value: $name }, price: { value: $price }, amount: { amount: $amount } } }
        ) {
            id
            name
            price
            amount
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

export const useCrudMutation = <Data = any, Variables extends AnyVariables = AnyVariables>(
    query: DocumentInput<Data, Variables>
): UseMutationResponse<Data, Variables> => {
    const [state, execute] = useMutation(query);

    const executeWithClient = useCallback(
        (
            variables: Variables,
            context?: Partial<OperationContext>
        ): Promise<OperationResult<Data, Variables>> => {
            return execute(variables, { ...context, clientName: "crud" });
        },
        [execute]
    );

    return [state, executeWithClient];
};

export const useCrudSubscription = <
    Data = any,
    Result = Data,
    Variables extends AnyVariables = AnyVariables,
>(
    args: UseSubscriptionArgs<Variables, Data>,
    handler?: SubscriptionHandler<Data, Result>
) => {
    return useSubscription<Data, Result, Variables>(
        { ...args, context: useMemo(() => ({ clientName: "crud" }), []) },
        handler
    );
};

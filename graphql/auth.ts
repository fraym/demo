import {
    AnyVariables,
    DocumentInput,
    SubscriptionHandler,
    UseMutationResponse,
    UseQueryArgs,
    UseSubscriptionArgs,
} from "@urql/next";
import { useCustomMutation, useCustomQuery, useCustomSubscription } from "./base";

export const useAuthQuery = <Data = any, Variables extends AnyVariables = AnyVariables>(
    args: UseQueryArgs<Variables, Data>
) => {
    return useCustomQuery(args, "auth");
};

export const useAuthMutation = <Data = any, Variables extends AnyVariables = AnyVariables>(
    query: DocumentInput<Data, Variables>
): UseMutationResponse<Data, Variables> => {
    return useCustomMutation(query, "auth");
};

export const useAuthSubscription = <
    Data = any,
    Result = Data,
    Variables extends AnyVariables = AnyVariables,
>(
    args: UseSubscriptionArgs<Variables, Data>,
    handler?: SubscriptionHandler<Data, Result>
) => {
    return useCustomSubscription(args, "auth", handler);
};

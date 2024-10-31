import {
    AnyVariables,
    DocumentInput,
    SubscriptionHandler,
    UseMutationResponse,
    UseQueryArgs,
    UseSubscriptionArgs,
} from "@urql/next";
import { useCustomMutation, useCustomQuery, useCustomSubscription } from "./base";

export const useStreamsQuery = <Data = any, Variables extends AnyVariables = AnyVariables>(
    args: UseQueryArgs<Variables, Data>
) => {
    return useCustomQuery(args, "streams");
};

export const useStreamsMutation = <Data = any, Variables extends AnyVariables = AnyVariables>(
    query: DocumentInput<Data, Variables>
): UseMutationResponse<Data, Variables> => {
    return useCustomMutation(query, "streams");
};

export const useStreamsSubscription = <
    Data = any,
    Result = Data,
    Variables extends AnyVariables = AnyVariables,
>(
    args: UseSubscriptionArgs<Variables, Data>,
    handler?: SubscriptionHandler<Data, Result>
) => {
    return useCustomSubscription(args, "streams", handler);
};

import { useCallback, useMemo } from "react";
import {
    AnyVariables,
    DocumentInput,
    OperationContext,
    OperationResult,
    SubscriptionHandler,
    UseMutationResponse,
    UseQueryArgs,
    UseQueryResponse,
    UseSubscriptionArgs,
    useMutation,
    useQuery,
    useSubscription,
} from "@urql/next";

type ClientName = "streams" | "projections" | "crud" | "auth";

export const useCustomQuery = <Data = any, Variables extends AnyVariables = AnyVariables>(
    args: UseQueryArgs<Variables, Data>,
    clientName: ClientName
): UseQueryResponse<Data, Variables | undefined> => {
    const [result, reexecuteQuery] = useQuery({
        ...args,
        context: useMemo(() => ({ clientName }), []),
    });

    return [result, reexecuteQuery];
};

export const useCustomMutation = <Data = any, Variables extends AnyVariables = AnyVariables>(
    mutation: DocumentInput<Data, Variables>,
    clientName: ClientName
): UseMutationResponse<Data, Variables> => {
    const [state, execute] = useMutation(mutation);

    const executeWithClient = useCallback(
        (
            variables: Variables,
            context?: Partial<OperationContext>
        ): Promise<OperationResult<Data, Variables>> => {
            return execute(variables, { ...context, clientName });
        },
        [execute]
    );

    return [state, executeWithClient];
};

export const useCustomSubscription = <
    Data = any,
    Result = Data,
    Variables extends AnyVariables = AnyVariables,
>(
    args: UseSubscriptionArgs<Variables, Data>,
    clientName: ClientName,
    handler?: SubscriptionHandler<Data, Result>
) => {
    return useSubscription<Data, Result, Variables>(
        { ...args, context: useMemo(() => ({ clientName }), []) },
        handler
    );
};

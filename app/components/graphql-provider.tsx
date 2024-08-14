"use client";

import { useMemo } from "react";
import { generateJwt } from "@fraym/auth/dist/util/token";
import { createClient as createWSClient } from "graphql-ws";
import { authExchange } from "@urql/exchange-auth";
import {
    Exchange,
    UrqlProvider,
    cacheExchange,
    createClient,
    fetchExchange,
    ssrExchange,
    subscriptionExchange,
} from "@urql/next";

export const GraphqlProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [client, ssr] = useMemo(() => {
        const ssr = ssrExchange({
            isClient: typeof window !== "undefined",
        });

        let exchanges: Exchange[] | undefined = [
            cacheExchange,
            ssr,
            authExchange(async utils => {
                let token = await generateJwt("change-me", "", ["FRAYM_AUTH_OWNER"]); // @todo: .env

                return {
                    addAuthToOperation: operation => {
                        const clientName = operation.context.clientName ?? "projections";

                        operation.context.url =
                            clientName === "projections"
                                ? "http://localhost:3030/delivery/graphql" // @todo: .env
                                : "http://localhost:3050/delivery/graphql"; // @todo: .env

                        return utils.appendHeaders(operation, {
                            Authorization: `Bearer ${token}`,
                        });
                    },
                    didAuthError(error) {
                        return error.graphQLErrors.some(e => e.extensions?.code === "FORBIDDEN");
                    },
                    refreshAuth: async () => {
                        token = await generateJwt("change-me", "", ["FRAYM_AUTH_OWNER"]); // @todo: .env
                    },
                };
            }),
            fetchExchange,
        ];

        if (typeof window !== "undefined") {
            const wsClient = createWSClient({
                url: "ws://localhost:3030/delivery/graphql", // @todo: .env
                retryAttempts: Infinity,
                shouldRetry: () => true,
                connectionParams: async () => {
                    const token = await generateJwt("change-me", "", ["FRAYM_AUTH_OWNER"]); // @todo: .env

                    return {
                        Authorization: `Bearer ${token}`,
                    };
                },
            });

            const subExchange = subscriptionExchange({
                forwardSubscription(request) {
                    const input = { ...request, query: request.query || "" };
                    return {
                        subscribe(sink) {
                            const unsubscribe = wsClient.subscribe(input, {
                                next: value => {
                                    sink.next({ data: value });
                                },
                                error: console.error,
                                complete: console.log,
                            });
                            return {
                                unsubscribe,
                            };
                        },
                    };
                },
            });

            exchanges.push(subExchange);
        }

        const client = createClient({
            url: "http://localhost:3040/delivery/graphql", // @todo: .env
            fetchOptions: {
                headers: {
                    "Content-Type": "application/json",
                },
            },
            suspense: true,
            exchanges,
        });

        return [client, ssr];
    }, []);

    return (
        <UrqlProvider client={client} ssr={ssr}>
            {children}
        </UrqlProvider>
    );
};

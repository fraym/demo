"use client";

import { FC, PropsWithChildren, useMemo } from "react";
import { redirect } from "next/navigation";
import { createClient as createWSClient } from "graphql-ws";
import { authExchange } from "@urql/exchange-auth";
import {
    Exchange,
    UrqlProvider,
    createClient,
    fetchExchange,
    ssrExchange,
    subscriptionExchange,
} from "@urql/next";

export const GraphqlProvider: FC<PropsWithChildren> = ({ children }) => {
    const [client, ssr] = useMemo(() => {
        const jwt = typeof window !== "undefined" ? (localStorage.getItem("jwt") ?? "") : "";
        const ssr = ssrExchange({
            isClient: typeof window !== "undefined",
        });

        if (typeof window !== "undefined" && !jwt) {
            redirect("/login");
        }

        const customAuthExchange = authExchange(async utils => {
            return {
                addAuthToOperation: operation => {
                    const clientName = operation.context.clientName ?? "projections";

                    switch (clientName) {
                        case "streams":
                            operation.context.url = `https://${process.env.NEXT_PUBLIC_CLIENT_NAME}.demo.freym.io/streams/management/graphql`;
                            break;
                        case "projections":
                            operation.context.url = `https://${process.env.NEXT_PUBLIC_CLIENT_NAME}.demo.freym.io/projections/delivery/graphql`;
                            break;
                        case "crud":
                            operation.context.url = `https://${process.env.NEXT_PUBLIC_CLIENT_NAME}.demo.freym.io/crud/delivery/graphql`;
                            break;
                        case "auth":
                            operation.context.url = `https://${process.env.NEXT_PUBLIC_CLIENT_NAME}.demo.freym.io/auth/management/graphql`;
                            break;
                    }

                    return utils.appendHeaders(operation, {
                        Authorization: `Bearer ${jwt}`,
                    });
                },
                didAuthError(error) {
                    return error.graphQLErrors.some(e => e.extensions?.code === "FORBIDDEN");
                },
                refreshAuth: async () => {
                    redirect("/login");
                },
            };
        });

        const exchanges: Exchange[] = [];

        if (typeof window !== "undefined") {
            const wsStreamsClient = createWSClient({
                url: `wss://${process.env.NEXT_PUBLIC_CLIENT_NAME}.demo.freym.io/streams/management/graphql`,
                retryAttempts: Infinity,
                shouldRetry: () => true,
                connectionParams: async () => {
                    return {
                        Authorization: `Bearer ${jwt}`,
                    };
                },
            });

            const wsProjectionsClient = createWSClient({
                url: `wss://${process.env.NEXT_PUBLIC_CLIENT_NAME}.demo.freym.io/projections/delivery/graphql`,
                retryAttempts: Infinity,
                shouldRetry: () => true,
                connectionParams: async () => {
                    return {
                        Authorization: `Bearer ${jwt}`,
                    };
                },
            });

            const wsCrudClient = createWSClient({
                url: `wss://${process.env.NEXT_PUBLIC_CLIENT_NAME}.demo.freym.io/crud/delivery/graphql`,
                retryAttempts: Infinity,
                shouldRetry: () => true,
                connectionParams: async () => {
                    return {
                        Authorization: `Bearer ${jwt}`,
                    };
                },
            });

            const wsAuthClient = createWSClient({
                url: `wss://${process.env.NEXT_PUBLIC_CLIENT_NAME}.demo.freym.io/auth/management/graphql`,
                retryAttempts: Infinity,
                shouldRetry: () => true,
                connectionParams: async () => {
                    return {
                        Authorization: `Bearer ${jwt}`,
                    };
                },
            });

            const subExchange = subscriptionExchange({
                forwardSubscription(request, operation) {
                    let wsClient = wsProjectionsClient;

                    switch (operation.context.clientName) {
                        case "streams":
                            wsClient = wsStreamsClient;
                            break;
                        case "projections":
                            wsClient = wsProjectionsClient;
                            break;
                        case "crud":
                            wsClient = wsCrudClient;
                            break;
                        case "auth":
                            wsClient = wsAuthClient;
                            break;
                    }

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
            url: `https://${process.env.NEXT_PUBLIC_CLIENT_NAME}.demo.freym.io/projections/delivery/graphql`,
            fetchOptions: {
                headers: {
                    "Content-Type": "application/json",
                },
            },
            suspense: true,
            exchanges: [...exchanges, customAuthExchange, fetchExchange],
        });

        return [client, ssr];
    }, []);

    return (
        <UrqlProvider client={client} ssr={ssr}>
            {children}
        </UrqlProvider>
    );
};

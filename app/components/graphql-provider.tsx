"use client";

import { useMemo } from "react";
import { generateJwt } from "@fraym/auth/dist/util/token";
import { authExchange } from "@urql/exchange-auth";
import { UrqlProvider, cacheExchange, createClient, fetchExchange, ssrExchange } from "@urql/next";

export const GraphqlProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [client, ssr] = useMemo(() => {
        const ssr = ssrExchange({
            isClient: typeof window !== "undefined",
        });

        const client = createClient({
            url: "http://localhost:3040/delivery/graphql",
            fetchOptions: {
                headers: {
                    "Content-Type": "application/json",
                },
            },
            suspense: true,
            exchanges: [
                cacheExchange,
                ssr,
                authExchange(async utils => {
                    let token = await generateJwt("change-me", "", ["FRAYM_AUTH_OWNER"]);

                    return {
                        addAuthToOperation: operation => {
                            const clientName = operation.context.clientName ?? "projections";

                            operation.context.url =
                                clientName === "projections"
                                    ? "http://localhost:3030/delivery/graphql"
                                    : "http://localhost:3040/delivery/graphql";

                            return utils.appendHeaders(operation, {
                                Authorization: `Bearer ${token}`,
                            });
                        },
                        didAuthError(error) {
                            return error.graphQLErrors.some(
                                e => e.extensions?.code === "FORBIDDEN"
                            );
                        },
                        refreshAuth: async () => {
                            token = await generateJwt("change-me", "", ["FRAYM_AUTH_OWNER"]);
                        },
                    };
                }),
                fetchExchange,
            ],
        });

        return [client, ssr];
    }, []);

    return (
        <UrqlProvider client={client} ssr={ssr}>
            {children}
        </UrqlProvider>
    );
};

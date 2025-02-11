"use server";

import { generateJwt } from "@fraym/auth/dist/util/token";
import { cacheExchange, createClient, fetchExchange } from "@urql/next";

export const newStreamsClient = async (tenantId: string = "") => {
    if (!process.env.JWT_SECRET) {
        throw new Error("missing JWT_SECRET");
    }

    const token = await generateJwt(process.env.JWT_SECRET, tenantId, ["FRAYM_AUTH_OWNER"]);

    return createClient({
        url: `https://${process.env.NEXT_PUBLIC_CLIENT_NAME}.demo.freym.io/streams/management/graphql`,
        fetchOptions: {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        },
        suspense: true,
        exchanges: [cacheExchange, fetchExchange],
    });
};

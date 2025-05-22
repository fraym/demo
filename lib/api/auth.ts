import { initGraphQLTada } from "gql.tada";
import { introspection } from "@/lib/api/auth-env";

export const graphql = initGraphQLTada<{
    introspection: introspection;
    scalars: {
        DateTime: number;
    };
}>();

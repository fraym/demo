import { initGraphQLTada } from "gql.tada";
import { introspection } from "@/lib/api/crud-env";

export const graphql = initGraphQLTada<{
    introspection: introspection;
    scalars: {
        DateTime: number;
    };
}>();

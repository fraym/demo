import { initGraphQLTada } from "gql.tada";
import { introspection } from "@/lib/api/projections-graphql-env";

export const graphql = initGraphQLTada<{
    introspection: introspection;
}>();

import { initGraphQLTada } from "gql.tada";
import { introspection } from "@/lib/api/projections-env";

export const graphql = initGraphQLTada<{
    introspection: introspection;
}>();

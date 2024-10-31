import { initGraphQLTada } from "gql.tada";
import { introspection } from "@/lib/api/streams-env";

export const graphql = initGraphQLTada<{
    introspection: introspection;
}>();

import { generateJwt } from "@fraym/auth/dist/util/token";
import { initGraphQLTada } from "gql.tada";
import { introspection } from "@/lib/api/crud-graphql-env";

export const graphql = initGraphQLTada<{
    introspection: introspection;
}>();

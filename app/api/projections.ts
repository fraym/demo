import { graphql } from "@/lib/api/projections";

export const GetCartsQuery = graphql(`
    query GetCarts($input: GetShoppingCartListInput!) {
        getShoppingCartList(input: $input) {
            data {
                id
                products {
                    id
                    name
                    price
                }
            }
        }
    }
`);

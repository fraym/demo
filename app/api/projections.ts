import { graphql } from "@/lib/api/projections";

export const GetCartsQuery = graphql(`
    query GetCarts($input: GetShoppingCartListInput!) {
        getShoppingCartList(input: $input) {
            data {
                id
                name
                items {
                    id
                    product {
                        id
                        name
                        price
                    }
                }
            }
        }
    }
`);

export const CartSubscription = graphql(`
    subscription ProductSubscription($input: SubscribeShoppingCartListInput!) {
        subscribeToShoppingCartList(input: $input) {
            ... on ShoppingCart {
                id
                name
                items {
                    id
                    product {
                        id
                        name
                        price
                    }
                }
            }
            ... on removeData {
                id
            }
        }
    }
`);

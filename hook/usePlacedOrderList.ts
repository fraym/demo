import { useListSubscription } from "@fraym/react/hooks/useListSubscription";
import { ResultOf, VariablesOf } from "gql.tada";
import { graphql } from "@/lib/api/projections";
import { getClientUrl } from "@/server/clientUrl";

const PlacedOrderListQuery = graphql(`
    query PlacedOrderListQuery($input: GetPlacedOrderListInput!) {
        getPlacedOrderList(input: $input) {
            data {
                id
                name
                date
                ingredients
                price
            }
        }
    }
`);

const PlacedOrderListSubscription = graphql(`
    subscription PlacedOrderListSubscription($input: SubscribePlacedOrderListInput!) {
        subscribeToPlacedOrderList(input: $input) {
            __typename
            ... on PlacedOrder {
                id
                name
                date
                ingredients
                price
            }
        }
    }
`);

const input: VariablesOf<typeof PlacedOrderListQuery> = {
    input: {
        order: {
            date: {
                direction: "DESC",
            },
        },
    },
};

type PlacedOrderListQueryData = ResultOf<typeof PlacedOrderListQuery>["getPlacedOrderList"]["data"];

export const usePlacedOrderList = (jwt: string) => {
    return useListSubscription(
        PlacedOrderListQuery,
        PlacedOrderListSubscription,
        input,
        input,
        data => data.getPlacedOrderList.data,
        data =>
            data.subscribeToPlacedOrderList &&
            data.subscribeToPlacedOrderList.__typename === "PlacedOrder"
                ? {
                      id: data.subscribeToPlacedOrderList.id,
                      data: data.subscribeToPlacedOrderList,
                  }
                : null,
        {
            jwt,
            url: getClientUrl("projections"),
            onSubscriptionUpdate: (newData: PlacedOrderListQueryData) =>
                newData.sort((a, b) => b.date - a.date),
        }
    );
};

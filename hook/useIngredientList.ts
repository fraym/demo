import { useListSubscription } from "@fraym/react/hooks/useListSubscription";
import { ResultOf, VariablesOf } from "gql.tada";
import { graphql } from "@/lib/api/projections";
import { getClientUrl } from "@/server/clientUrl";

const IngredientListQuery = graphql(`
    query IngredientListQuery($input: GetIngredientListInput!) {
        getIngredientList(input: $input) {
            data {
                id
                name
                amount
            }
        }
    }
`);

const IngredientListSubscription = graphql(`
    subscription IngredientListSubscription($input: SubscribeIngredientListInput!) {
        subscribeToIngredientList(input: $input) {
            __typename
            ... on Ingredient {
                id
                name
                amount
            }
        }
    }
`);

const queryInput: VariablesOf<typeof IngredientListQuery> = {
    input: {
        filter: {
            amount: {
                greaterThan: 0,
            },
        },
        order: {
            name: {
                direction: "ASC",
            },
        },
    },
};

const subscriptionInput: VariablesOf<typeof IngredientListSubscription> = {
    input: {
        filter: {},
    },
};

type IngredientListQueryData = ResultOf<typeof IngredientListQuery>["getIngredientList"]["data"];

export const useIngredientList = (jwt: string) => {
    return useListSubscription(
        IngredientListQuery,
        IngredientListSubscription,
        queryInput,
        subscriptionInput,
        data => data.getIngredientList.data,
        data =>
            data.subscribeToIngredientList &&
            data.subscribeToIngredientList.__typename === "Ingredient"
                ? {
                      id: data.subscribeToIngredientList.id,
                      data: data.subscribeToIngredientList,
                  }
                : null,
        {
            jwt,
            url: getClientUrl("projections"),
            onSubscriptionUpdate: (newData: IngredientListQueryData) =>
                newData
                    .filter(el => el.amount > 0)
                    .sort((a, b) => (b.name.toLowerCase() > a.name.toLowerCase() ? -1 : 1)),
        }
    );
};

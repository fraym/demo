import { graphql } from "@/lib/api/projections";

export const BankAccountsQuery = graphql(`
    query BankAccountList($userId: ID!) {
        getBankAccountList(input: { filter: { userId: { equals: $userId } } }) {
            data {
                id
                iban
            }
        }
        getBankAccountValueList(input: { filter: { user: { equals: $userId } } }) {
            data {
                bankAccount {
                    id
                }
                value
            }
        }
    }
`);

export const SubscribeBankAccountValueList = graphql(`
    subscription BankAccountValueList {
        subscribeToBankAccountValueList(input: {}) {
            ... on BankAccountValue {
                id
                value
            }
        }
    }
`);

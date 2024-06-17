import { graphql } from "@/lib/api/crud";

export const DeleteBankAccountMutation = graphql(`
    mutation DeleteBankAccount($id: ID!) {
        deleteBankAccount(input: { id: $id }) {
            numberOfDeletedEntries
        }
    }
`);

export const SubscribeBankAccountList = graphql(`
    subscription BankAccountList {
        subscribeToBankAccountList(input: {}) {
            ... on BankAccount {
                id
                iban
            }
            ... on removeData {
                id
            }
        }
    }
`);

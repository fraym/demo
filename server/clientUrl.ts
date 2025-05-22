type FreymService = "streams" | "projections" | "crud" | "auth";

export const getClientUrl = (service: FreymService): string => {
    switch (service) {
        case "streams":
            return `https://${process.env.NEXT_PUBLIC_CLIENT_NAME}.demo.freym.io/streams/management/graphql`;
        case "projections":
            return `https://${process.env.NEXT_PUBLIC_CLIENT_NAME}.demo.freym.io/projections/delivery/graphql/blue`;
        case "crud":
            return `https://${process.env.NEXT_PUBLIC_CLIENT_NAME}.demo.freym.io/crud/delivery/graphql/blue`;
        case "auth":
            return `https://${process.env.NEXT_PUBLIC_CLIENT_NAME}.demo.freym.io/auth/management/graphql`;
    }
};

# Freym demo app

This demo app is intended to be a starting point to try out Freym. Please have a look at the [Freym documentation](https://docs.freym.becklyn.app/docs), too.

## Get in touch

The Freym demo is a closed demo. To get a running demo instance of Freym please [get in touch with us](https://becklyn.com/en/contact)

## Local setup

- Get in touch with us and request a demo instance. We will provide all needed configuration values:
    - `customerId`: An id that identifies your demo instance
    - `jwtSecret`: The secret used to sign jwts that work with your instance
    - `deploymentsAddress`: The address of the deployments api
    - `deploymentsApiToken`: A token used to authenticate against the deployments api
- Clone this repo
- Replace all occurances of `https://demo` in `tsconfig.json` with `https://{{customerId}}` where `{{customerId}}` is the `customerId` that you received from us
- Copy the `.env.template` and name the new file `.env.local`
- Use the `customerId` as the value for `NEXT_PUBLIC_CLIENT_NAME`
- Use the `jwtSecret` as the value for `JWT_SECRET`
- Copy the `./schema/.env.template` and name the new file `./schema/.env`
- Use the `deploymentsAddress` as the value for `DEPLOYMENTS_SERVER_ADDRESS`
- Use the `deploymentsApiToken` as the value for `DEPLOYMENTS_API_TOKEN`
- Run `make deploy` to apply the schema within `./schema` to Freym
- Don't forget to install the dependencies: `npm install`

## Start the demo app

Run `npm run dev` to start the frontend app locally.
Open `localhost:3000` in your browser.

## Sandboxes + JWT

In order to use the graphql sandboxes you need to provide a jwt.
You can retrieve the jwt from the local-storage value named `jwt`, which is saved when you log in.

Add the `jwt` as a bearer token to the `Authorization` header when configuring the sandbox.

| Freym Service | Sandbox URL                                                               |
| ------------- | ------------------------------------------------------------------------- |
| Streams       | https://{{customerId}}.demo.freym.io/streams/management/graphql/sandbox   |
| Projections   | https://{{customerId}}.demo.freym.io/projections/delivery/graphql/sandbox |
| Crud          | https://{{customerId}}.demo.freym.io/crud/delivery/graphql/sandbox        |
| Auth          | https://{{customerId}}.demo.freym.io/auth/management/graphql/sandbox      |

Please replace `{{customerId}}` with the customer id you received from us.

## Execute Freym migrations

Run `make deploy` to apply the the schema within `./schema` to Freym. To learn more about Freym schema and deployments please have a look at our docs:

- [Projection schema definition](https://docs.freym.becklyn.app/docs/services/projections/schema)
- [Crud schema definition](https://docs.freym.becklyn.app/docs/services/crud/schema)
- [Auth schema definition](https://docs.freym.becklyn.app/docs/services/auth/schema)
- [Deployments](https://docs.freym.becklyn.app/docs/deployments/introduction)

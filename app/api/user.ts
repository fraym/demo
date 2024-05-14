"use server";

import { ManagementClient, newManagementClient } from "@fraym/auth";
import { User } from "@/lib/types";

let globalClient: ManagementClient;

const getClient = async (): Promise<ManagementClient> => {
    if (!globalClient) {
        globalClient = await newManagementClient({
            serverAddress: "localhost:9060",
        });
    }

    return globalClient;
};

export const createUser = async (login: string, password: string) => {
    try {
        createDemoRole();

        await (
            await getClient()
        ).createUser("", login, [ROLE_DEMO], undefined, undefined, password);

        return {
            success: true,
            error: null,
        };
    } catch (e) {
        console.error(e);

        return {
            success: false,
            error: e,
        };
    }
};

const ROLE_DEMO = "DEMO";

const createDemoRole = async () => {
    const client = await getClient();
    const roles = await client.getRoles("");
    const roleIds = roles.map(role => role.id);

    if (roleIds.includes(ROLE_DEMO)) {
        return;
    }

    await client.upsertRole("", [{ scopeName: "USERS_READ" }], ROLE_DEMO);
};

export const getUserList = async (): Promise<User[]> => {
    const users = await (await getClient()).getUsers("");

    return users.map(user => ({
        id: user.id,
        email: user.email,
    }));
};

export const deleteUser = async (userId: string) => {
    try {
        await (await getClient()).deleteUser("", userId);

        return {
            success: true,
            error: null,
        };
    } catch (e) {
        console.error(e);

        return {
            success: false,
            error: e,
        };
    }
};

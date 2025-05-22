import { generateJwt } from "@fraym/auth/dist/util/token";

export const newJwt = async (scopes: string[]) => {
    return await generateJwt(process.env.JWT_SECRET ?? "", "", scopes, undefined, "1h");
};

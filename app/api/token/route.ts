import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export const COOKIE_STATE_NAME = "demo.auth.state";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const error = searchParams.get("error");
    const code = searchParams.get("code");
    const state = searchParams.get("state");

    if (error) {
        redirect(`/login?error=${error}`);
    }

    if (!code || !state) {
        redirect(`/login?error=Server error. Please Try again.`);
    }

    const response = await fetch(
        `https://${process.env.NEXT_PUBLIC_CLIENT_NAME}.demo.freym.io/auth/token`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                tenant_id: "",
                grant_type: "authorization_code",
                client_secret: process.env.JWT_SECRET,
                code,
            }),
        }
    );

    if (!response.ok) {
        redirect(`/login?error=Server error. Please Try again.`);
    }

    const { access_token: accessToken } = await response.json();

    redirect(`/token?token=${accessToken}`);
}

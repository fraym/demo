import { redirect } from "next/navigation";
import { NextRequest } from "next/server";


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

    if(!process.env.JWT_SECRET) {
        redirect(`/login?error=missing JWT_SECRET`);
    }

    const uRLSearchParams: Record<string, string> = {
        tenant_id: "",
        grant_type: "authorization_code",
        client_secret: process.env.JWT_SECRET,
        code,
    }

    const response = await fetch(
        `https://${process.env.NEXT_PUBLIC_CLIENT_NAME}.demo.freym.io/auth/token`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams(uRLSearchParams),
        }
    );

    if (!response.ok) {
        redirect(`/login?error=Server error. Please Try again.`);
    }

    const { access_token: accessToken } = await response.json();

    redirect(`/token?token=${accessToken}`);
}

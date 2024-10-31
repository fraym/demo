import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { randomBytes } from "crypto";

export const COOKIE_STATE_NAME = "demo.auth.state";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const error = searchParams.get("error");

    if (error) {
        redirect(`/login?error=Invalid credentials. Please try again.`);
    }

    const cookieStore = await cookies();
    const state = randomBytes(10).toString("hex");
    cookieStore.set(COOKIE_STATE_NAME, state);

    redirect(
        `https://${process.env.NEXT_PUBLIC_CLIENT_NAME}.demo.freym.io/auth/authorize?` +
            new URLSearchParams({
                tenant_id: "",
                response_type: "code",
                state: state,
                redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/api/token`,
            })
    );
}

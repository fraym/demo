"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LoginForm />
        </Suspense>
    );
}

function LoginForm() {
    const [login, setLogin] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);
    const searchParams = useSearchParams();
    const error = searchParams.get("error");

    return (
        <div className="content">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Sign In</CardTitle>
                    <CardDescription>
                        Please enter the credentials provided by Becklyn
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form
                        action={`https://${process.env.NEXT_PUBLIC_CLIENT_NAME}.demo.freym.io/auth/login`}
                        method="post">
                        <input type="hidden" name="tenant_id" value="" />
                        <input
                            type="hidden"
                            name="redirect_uri"
                            value={`${process.env.NEXT_PUBLIC_APP_URL}/api/login`}
                        />
                        <Input
                            type="text"
                            placeholder="Login"
                            name="identifier"
                            value={login ?? ""}
                            onChange={e => setLogin(e.currentTarget.value)}
                            className="mb-6"
                        />
                        <Input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password ?? ""}
                            onChange={e => setPassword(e.currentTarget.value)}
                            className="mb-6"
                        />
                        {error && (
                            <Alert variant="destructive" className="mb-6">
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>Error</AlertTitle>
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}
                        <Button type="submit" disabled={!login || !password}>
                            Sign In
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

"use client";

import { Suspense, useEffect } from "react";
import { redirect, useSearchParams } from "next/navigation";

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <TokenHandler />
        </Suspense>
    );
}

function TokenHandler() {
    const searchParams = useSearchParams();

    useEffect(() => {
        const token = searchParams.get("token");

        if (token) {
            localStorage.setItem("jwt", token);
            redirect("/app");
        }
    }, [searchParams]);

    return null;
}

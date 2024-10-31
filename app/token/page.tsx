"use client";

import { useEffect } from "react";
import { redirect, useSearchParams } from "next/navigation";

export default function Page() {
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

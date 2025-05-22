import Link from "next/link";
import { OrderForm } from "@/components/form/OrderForm";
import { newJwt } from "@/lib/newJwt";

export const revalidate = 1800;

export default async function Page() {
    const jwt = await newJwt(["FRAYM_AUTH_OWNER"]);

    return (
        <div>
            <Link href="/" className="overview-link">
                Back
            </Link>
            <OrderForm jwt={jwt} />
        </div>
    );
}

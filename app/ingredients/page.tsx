import Link from "next/link";
import { IngredientList } from "@/components/IngredientList";
import { IngredientForm } from "@/components/form/IngredientForm";
import { newJwt } from "@/lib/newJwt";

export const revalidate = 1800;

export default async function Page() {
    const jwt = await newJwt(["FRAYM_AUTH_OWNER"]);

    return (
        <div>
            <Link href="/" className="overview-link">
                Back
            </Link>
            <IngredientList jwt={jwt} />
            <IngredientForm />
        </div>
    );
}

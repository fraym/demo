import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h1>Overview</h1>
            <div className="overview">
                <Link href="/order" className="overview-link">
                    Place Your Order
                </Link>
                <Link href="/orders" className="overview-link">
                    Order Overview
                </Link>
                <Link href="/ingredients" className="overview-link">
                    Ingredients
                </Link>
            </div>
        </div>
    );
}

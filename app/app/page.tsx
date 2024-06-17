import Link from "next/link";
import { z } from "zod";
import { UserForm } from "@/components/form/user";
import { Navigation, NavigationItem } from "@/components/navigation/navigation";
import { UserTable } from "@/components/table/user";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import styles from "./page.module.scss";

// @todo use shadcn

// @todo: demo
// - manage products
// - manage shopping carts
// - playground
//   - streams
//   - projections
//   - crud

export default function Home() {
    return <div className={styles.content}>asd</div>;
}

// interface SandboxLinkProps {
//     href: string;
// }

// const SandboxLink: React.FC<React.PropsWithChildren<SandboxLinkProps>> = ({ href, children }) => {
//     return (
//         <Button asChild variant="secondary">
//             <Link href={href} target="_blank">
//                 {children}
//             </Link>
//         </Button>
//     );
// };

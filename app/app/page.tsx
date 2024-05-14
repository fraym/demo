import Link from "next/link";
import { z } from "zod";
import { UserForm } from "@/components/form/user";
import { UserTable } from "@/components/table/user";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import styles from "./page.module.scss";

// @todo use shadcn

export default function Home() {
    return (
        <div className={styles.content}>
            <h1 className="text-4xl font-extrabold">Freym Demo</h1>

            <Card>
                <CardHeader>
                    <CardTitle>Graphql Sandbox</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-row gap-5">
                    <SandboxLink href="http://localhost:3020/management/graphql/sandbox">
                        streams
                    </SandboxLink>
                    <SandboxLink href="http://localhost:3020/delivery/graphql/sandbox">
                        projections
                    </SandboxLink>
                    <SandboxLink href="http://localhost:3020/delivery/graphql/sandbox">
                        crud
                    </SandboxLink>
                    <SandboxLink href="http://localhost:3060/management/graphql/sandbox">
                        auth
                    </SandboxLink>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Create User</CardTitle>
                </CardHeader>
                <CardContent>
                    <UserForm />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>User List</CardTitle>
                </CardHeader>
                <CardContent>
                    <UserTable />
                </CardContent>
            </Card>

            {/* @todo: user table (name, show bank account, create token) */}
        </div>
    );
}

interface SandboxLinkProps {
    href: string;
}

const SandboxLink: React.FC<React.PropsWithChildren<SandboxLinkProps>> = ({ href, children }) => {
    return (
        <Button asChild variant="secondary">
            <Link href={href} target="_blank">
                {children}
            </Link>
        </Button>
    );
};

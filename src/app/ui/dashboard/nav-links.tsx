import Link from "next/link";

export default function NavLinks() {
    return (
        <>
            <NavLink href="/dashboard" label="Dashboard" />
            <NavLink href="/dashboard/meditations" label="Meditations" />
            <NavLink href="/dashboard/settings" label="Settings" />
        </>
    );
}

interface NavLinkProps {
    href: string;
    label: string;
}

function NavLink({ href, label }: NavLinkProps) {
    return (
        <Link href={href}>
            <p>{label}</p>
        </Link>
    );
}
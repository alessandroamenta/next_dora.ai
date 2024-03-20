import { auth, signOut } from "@/auth"
import Image from "next/image"
import Link from "next/link"


function SignOut() {
    return (
        <form action={async () => {
            'use server'
            await signOut()
        }}>
            <button>Sign Out</button>
        </form>
    )
}

export default async function Header() {
    const session = await auth();
    return (
        <header className="bg-blue-500">
            <nav>
                <div className="flex items-center justify-center">
                    <h1 className="text-white text-2xl">Dora.Ai</h1>
                </div>
                {session?.user ? (
                    <div><Image src={session.user.image ?? ''} alt={session.user.name ?? ''} width={32} height={32} className="rounded-full"/> <SignOut /></div>

                ) : (
                    <Link href="/api/auth/signin">
                        <div className="flex items-center justify-center">
                            <button className="bg-white text-blue-500 px-4 py-2 rounded">Sign In</button>
                        </div>
                    </Link>
                )}
            </nav>
        </header>
    );
}
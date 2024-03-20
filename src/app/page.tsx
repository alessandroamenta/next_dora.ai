import { auth } from "@/auth"
import DoraLogo from '@/app/ui/dora-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default async function Index() {
  const session = await auth()

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-orange-600 p-4 md:h-52">
        <DoraLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
            <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Dora.AI</strong> This is the best app on{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              the market to chill and relax
            </a>
            , brought to you by Alessandro.
          </p>
          <Link
            href="/api/auth/signin"
            className="flex items-center gap-5 self-start rounded-lg bg-yellow-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-yellow-400 md:text-base"
          >
            <span>Sign in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <div className="w-[1000px] h-756px] rounded-lg overflow-hidden hidden md:block"> {/* Adjust the size as needed */}
            <Image
              src="/dalle.webp"
              alt="screenshots of dashboard projects"
              width={1200}
              height={912}
              layout="responsive" // This makes the image scale based on the size of its container
            />
          </div>
        </div>
        <div className="flex flex-col rounded-md bg-neutral-100">
        <div className="p-4 font-bold rounded-t-md bg-neutral-200">
          Current Session
        </div>
        <pre className="py-6 px-4 whitespace-pre-wrap break-all">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
      </div>
    </main>
  );
}

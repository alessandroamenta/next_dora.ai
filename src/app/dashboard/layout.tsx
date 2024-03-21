import SideNav from '@/app/ui/dashboard/sidenav';
import { SessionProvider } from 'next-auth/react';
import Header from '@/app/ui/dashboard/header';
import '@/app/ui/global.css';

 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SessionProvider>
        <SideNav />
        </SessionProvider>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}



import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { isAuthenticated, signOut } from "@/lib/actions/auth.action";

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout">
      <nav className="flex justify-between items-center px-4 py-3 bg-slate-900">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
          <h2 className="text-primary-100">PrepWise</h2>
        </Link>

        {/* Sign Out Button */}
        <form action={signOut}>
          <button
  type="submit"
  className="bg-slate-700 text-white px-4 py-2 rounded-full font-semibold hover:bg-slate-800 transition-colors whitespace-nowrap"
>
  Sign Out
</button>
        </form>
      </nav>

      {children}
    </div>
  );
};

export default Layout;

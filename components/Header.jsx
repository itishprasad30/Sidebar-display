import Head from "next/head";
import { useRouter } from "next/router";
import NextLink from "next/link";
import cn from "classnames";

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? "font-bold bg-green-200 text-base text-gray-800 "
            : "font-normal text-gray-600 ",
          "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 transition-all"
        )}
      >
        <span className="font-normal">{text}</span>
      </a>
    </NextLink>
  );
}

export default function Container({ children }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 ml-9 lg:ml-auto ">
      <div className="flex  flex-col justify-center px-8">
        <nav className="flex items-center justify-between w-full relative max-w-2xl border-green-300 mx-auto pt-8 pb-8 sm:pb-16  text-gray-900 bg-gray-50   bg-opacity-60 ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/Itish_prasad"
            className="skip-nav font-bold text-2xl"
          >
            Welcome here
          </a>
          <div className="ml-[-0.60rem]">
            <NavItem href="/" text="Home" />
            <NavItem href="/about" text="About" />
            <NavItem href="/dashboard" text="Dashboard" />
            <NavItem href="/moredetails" text="More Details" />
          </div>
        </nav>
      </div>
      <main className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900">
        {children}
      </main>
    </div>
  );
}

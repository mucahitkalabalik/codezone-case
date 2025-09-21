"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav className="text-sm breadcrumbs text-[10px] md:text-[16px]">
      <ol className="flex items-center space-x-2">
        <li className="uppercase">
          <Link href="/">Home</Link>
        </li>

        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/");

          return (
            <li key={index} className="flex items-center space-x-2">
              <span>{">"}</span>
              <Link href={href} className="uppercase">
                {decodeURIComponent(segment)}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

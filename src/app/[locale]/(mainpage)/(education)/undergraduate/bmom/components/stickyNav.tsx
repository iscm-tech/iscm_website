"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StickyNav() {
  const locale = useLocale();
  const url = usePathname();

  return (
    <ul
      className="md:flex justify-evenly hidden bg-white z-[999] -mr-4"
      style={{ position: "sticky", top: "89px" }}
    >
      <li className="text-center font-semibold text-[18px] text-[#6A6868] hover:underline p-3 cursor-pointer">
        <Link
          href="/undergraduate/baud"
          style={{ color: !url.includes("dual-degree") ? "#cd2027" : "black" }}
        >
          {locale === "vi" ? "Chương trình cử nhân" : "Bachelor Program"}
        </Link>
      </li>
      <li className="text-center font-semibold text-[18px] text-[#6A6868] hover:underline p-3 cursor-pointer">
        <Link
          href="/undergraduate/dual-degree"
          style={{ color: url.includes("dual-degree") ? "#cd2027" : "black" }}
        >
          {locale === "vi" ? "Chương trình song bằng" : "Dual Degree Program"}
        </Link>
      </li>
    </ul>
  );
}

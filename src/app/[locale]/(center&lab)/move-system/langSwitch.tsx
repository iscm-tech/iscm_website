"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";

export default function LangSwitch() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleRedirectLocale = (locale: string) => {
    //  checked = En
    //  unchecked = Vi
    //  Add locale to current url
    const qs = searchParams.toString();
    const url = `${pathname}${qs ? `?${qs}` : ""}`;

    router.replace(url, { locale: locale });
    window.location.reload();
  };

  return (
    <div className="nav-right">
      <div
        className="lang-toggle"
        onClick={() => handleRedirectLocale(locale === "en" ? "vi" : "en")}
      >
        <button data-lang="en" className={`${locale === "en" ? "active" : ""}`}>
          EN
        </button>
        <button data-lang="vi" className={`${locale === "vi" ? "active" : ""}`}>
          VI
        </button>
      </div>
      <button className="burger" id="burger" aria-label="menu">
        ☰
      </button>
    </div>
  );
}

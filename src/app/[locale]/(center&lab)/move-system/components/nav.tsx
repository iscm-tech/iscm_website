"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Nav() {
  const i18n = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [burgerClicked, setBurgerClicked] = useState(false);

  const handleRedirectLocale = (locale: string) => {
    //  checked = En
    //  unchecked = Vi
    //  Add locale to current url
    const qs = searchParams.toString();
    const url = `${pathname}${qs ? `?${qs}` : ""}`;

    router.replace(url, { locale: locale });
  };

  return (
    <nav className="nav">
      <Link className="nav-brand" href="/move-system">
        <span className="logo-box">ISCM</span>
        <span>
          <div
            style={{
              fontWeight: 700,
              fontSize: ".86rem",
              color: "var(--burgundy)",
            }}
          >
            MOVE System
          </div>
          <div className="logo-caption">
            INSTITUTE OF SMART CITY &amp; MANAGEMENT
          </div>
        </span>
      </Link>
      <div className={`nav-links ${burgerClicked ? "open" : ""}`} id="navLinks">
        <Link href="/move-system#about" data-i18n="nav.about">
          {i18n("move-system.nav.about")}
        </Link>
        <Link href="/move-system#structure" data-i18n="nav.structure">
          {i18n("move-system.nav.structure")}
        </Link>
        <Link href="/move-system#people" data-i18n="nav.people">
          {i18n("move-system.nav.people")}
        </Link>
        <Link href="/move-system#funding" data-i18n="nav.funding">
          {i18n("move-system.nav.funding")}
        </Link>
        <Link href="/move-system#tech" data-i18n="nav.tech">
          {i18n("move-system.nav.tech")}
        </Link>
      </div>
      <div className="nav-right">
        <div
          className="lang-toggle"
          onClick={() => handleRedirectLocale(locale === "en" ? "vi" : "en")}
        >
          <button
            data-lang="en"
            className={`${locale === "en" ? "active" : ""}`}
          >
            EN
          </button>
          <button
            data-lang="vi"
            className={`${locale === "vi" ? "active" : ""}`}
          >
            VI
          </button>
        </div>
        <button
          className="burger"
          id="burger"
          aria-label="menu"
          onClick={() => setBurgerClicked((prev) => !prev)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}

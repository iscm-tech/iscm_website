import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import LangSwitch from "./langSwitch";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MOVE System — ISCM · UEH",
};

export default async function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const i18n = await getTranslations();

  return (
    <div id="move-system__container">
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
        <div className="nav-links" id="navLinks">
          <Link href="#about" data-i18n="nav.about">
            {i18n("move-system.nav.about")}
          </Link>
          <Link href="#structure" data-i18n="nav.structure">
            {i18n("move-system.nav.structure")}
          </Link>
          <Link href="#people" data-i18n="nav.people">
            {i18n("move-system.nav.people")}
          </Link>
          <Link href="#funding" data-i18n="nav.funding">
            {i18n("move-system.nav.funding")}
          </Link>
          <Link href="#tech" data-i18n="nav.tech">
            {i18n("move-system.nav.tech")}
          </Link>
        </div>
        <LangSwitch />
      </nav>

      {children}

      {/* <!-- ========================= Footer ========================= --> */}
      <footer className="footer">
        <div className="container grid-2">
          <div>
            <div
              className="eyebrow"
              style={{
                marginBottom: ".5rem",
              }}
            >
              ISCM · UEH
            </div>
            <div data-i18n="contact.address">
              {i18n("move-system.contact.address")}
            </div>
            <div
              style={{
                marginTop: ".4rem",
              }}
            >
              <span data-i18n="contact.phone">(+84) 283 930 9589</span> ·
              <Link href="mailto:iscm@ueh.edu.vn" data-i18n="contact.email">
                {i18n("move-system.contact.email")}
              </Link>
            </div>
            <div className="tiny">
              <Link
                href="https://iscm.ueh.edu.vn"
                target="_blank"
                data-i18n="contact.visit"
              >
                {i18n("move-system.contact.visit")}
              </Link>
            </div>
          </div>
          <div
            style={{
              textAlign: "right",
            }}
          >
            <div
              className="eyebrow"
              style={{
                marginBottom: ".5rem",
              }}
            >
              MOVE SYSTEM
            </div>
            <div>
              Mobility-oriented, Operations,
              <br />
              Visualization &amp; Environment System
            </div>
            <div className="tiny mono">
              ISCM · University of Economics Ho Chi Minh City · 2026
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

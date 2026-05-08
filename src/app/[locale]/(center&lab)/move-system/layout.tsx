import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import Nav from "./components/nav";

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
      <Nav />

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

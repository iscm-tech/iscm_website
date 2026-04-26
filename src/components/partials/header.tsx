"use client";

import Image from "next/image";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";

import { iscmerMenuEn, mainMenuEn } from "../../constants/en/index";
import { iscmerMenuVi, mainMenuVi } from "@/constants/vi";
import { Fragment } from "react";
import { Switch } from "antd";
import styled from "styled-components";
import { ibm_plex_sans } from "@/app/fontDeclare";
import { useSearchParams } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { Power } from "lucide-react";
import SearchBar from "../searchBar";

const HeaderStyled = styled.header`
  .ant-switch-inner {
    background-color: #da251d;
  }

  .ant-switch-handle {
    &::before {
      background-color: #ffcd00 !important;
    }
  }

  .ant-switch-checked .ant-switch-handle {
    &::before {
      background-color: #fff !important;
    }
  }

  .ant-switch-checked .ant-switch-inner {
    background: #ccc;
  }
`;

export const NavMenuItemWithSubMenu = ({
  name,
  url,
  subMenu,
}: {
  name: string;
  url?: string;
  subMenu: Array<{
    name: string;
    group?: Array<{ name: string; url: string }>;
    url?: string;
  }>;
}) => {
  const locale = useLocale();

  return (
    <li className="nav-item before:hidden dropdown align-self-lg-stretch flex !static">
      {!url && (
        <div
          style={{ cursor: "pointer" }}
          className="nav-link nav-item dropdown-toggle"
          role="button"
          data-toggle="dropdown"
        >
          {name}
        </div>
      )}

      {url && (
        <Link
          locale={locale}
          style={{ cursor: "pointer" }}
          className="nav-link nav-item dropdown-toggle"
          role="button"
          data-toggle="dropdown"
          href={url}
        >
          {name}
        </Link>
      )}

      {/* Menu */}
      <div className="dropdown-menu w-full lg:!absolute lg:!top-[calc(100%-2px)] lg:!left-0 overflow-x-auto">
        <div className="d-lg-flex">
          {subMenu.map((sub) => (
            <Fragment key={sub.name}>
              <div className="dropdown-item">
                {sub.url && (
                  <Link
                    key={sub.name}
                    locale={locale}
                    href={sub.url}
                    className={`w-fit h-fit ${sub.url ?? "cursor-default"}`}
                  >
                    <p
                      className="text-[#ce2027]! mb-1"
                      style={ibm_plex_sans.style}
                    >
                      {sub.name}
                    </p>
                  </Link>
                )}

                {!sub.url && (
                  <div className="w-fit h-fit">
                    <p
                      className="text-[#ce2027]! mb-1"
                      style={ibm_plex_sans.style}
                    >
                      {sub.name}
                    </p>
                  </div>
                )}

                <ul>
                  {sub.group?.map((item) => (
                    <li key={item.name} className="block! w-full">
                      <Link
                        locale={locale}
                        href={item.url || "#"}
                        className="hover:underline"
                        target={
                          item.url.startsWith("http") ? "_blank" : "_self"
                        }
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </li>
  );
};

export const NavMenuItemWithoutSubMenu = ({
  name,
  url,
}: {
  name: string;
  url: string;
}) => {
  const locale = useLocale();

  return (
    <li
      className="nav-item align-self-lg-stretch"
      style={{ display: "flex", alignItems: "center" }}
    >
      <Link className="nav-link" locale={locale} href={url || "#"}>
        {name}
      </Link>
    </li>
  );
};

export default function Header() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { data: session } = useSession();

  const mainMenu = locale === "en" ? mainMenuEn : mainMenuVi;
  const iscmerMenu = locale === "en" ? iscmerMenuEn : iscmerMenuVi;

  const handleRedirectLocale = (checked: boolean) => {
    //  checked = En
    //  unchecked = Vi
    //  Add locale to current url
    const qs = searchParams.toString();
    const url = `${pathname}${qs ? `?${qs}` : ""}`;

    router.replace(url, { locale: checked ? "en" : "vi" });
  };

  return (
    <HeaderStyled className="fixed-top header">
      <div className="navigation overflow-y-scroll lg:overflow-y-visible nav-bg w-100 top-hider">
        <nav className="navbar navbar-expand-lg navbar-dark p-0">
          <Link
            href="/"
            className="navbar-brand lg:ml-[calc((100vw-1140px)/2)]"
          >
            <Image
              className="img-fluid"
              src="/images/logoiscm.png"
              alt="logo"
              width={150}
              height={48}
            />
          </Link>
          <button
            className="navbar-toggler rounded-0 collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="navbar-collapse bg-[#141414] text-center text-[14px] collapse"
            id="navigation"
          >
            <div className="relative w-full flex justify-between">
              <ul className="navbar-nav items-center">
                {mainMenu.map((item) => (
                  <Fragment key={item.name}>
                    {/* Render this JSX whenever have submenu */}
                    {item?.subMenu && (
                      <NavMenuItemWithSubMenu
                        name={item.name}
                        subMenu={item.subMenu}
                      />
                    )}
                    {/* Render this JSX whenever don't have submenu */}
                    {!item?.subMenu && item?.url && (
                      <NavMenuItemWithoutSubMenu
                        name={item.name}
                        url={item.url}
                      />
                    )}
                  </Fragment>
                ))}

                {/* ISCMer Menu */}
                <Fragment>
                  {!session?.AT && (
                    <NavMenuItemWithoutSubMenu name="ISCMer" url="iscmer" />
                  )}
                  {session?.AT && iscmerMenu?.subMenu && (
                    <NavMenuItemWithSubMenu
                      name={iscmerMenu.name}
                      url={iscmerMenu.url}
                      subMenu={iscmerMenu.subMenu}
                    />
                  )}
                </Fragment>
                <Switch
                  className="mb-4 mt-2 mb-lg-0 mt-lg-0 ml-lg-3"
                  checkedChildren={<span className="text-black">En</span>}
                  unCheckedChildren={
                    <span className="text-[#FFCD00]!">Vi</span>
                  }
                  defaultChecked={locale === "en"}
                  onChange={handleRedirectLocale}
                />

                {/* <div className="ml-3 h-full py-3">
                  <SearchBar />
                </div> */}
              </ul>
              {session?.AT && iscmerMenu?.subMenu && (
                <div className="flex items-center">
                  <span className="text-white !mb-0">{session.user.email}</span>
                  <div
                    className="cursor-pointer hover:bg-[#cd2027]/60 align-self-lg-stretch items-center flex px-3 transition-all"
                    onClick={() => signOut({ callbackUrl: "/" })}
                    title="logout"
                  >
                    <Power color="#fff" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </HeaderStyled>
  );
}

"use client";

import Image from "next/image";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";

import { iscmerMenuEn, mainMenuEn } from "../../constants/en/index";
import { mainMenuVi } from "@/constants/vi";
import { Fragment } from "react";
import { Switch } from "antd";
import styled from "styled-components";
import { ibm_plex_sans } from "@/app/fontDeclare";
import { useSearchParams } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { MenuType } from "@/types/menu.type";
import { LogOut } from "lucide-react";

const HeaderStyled = styled.header`
  .ant-switch-inner {
    background-color: #da251d;
  }

  .ant-switch-handle {
    &::before {
      background-color: #ffcd00;
    }
  }

  .ant-switch-checked .ant-switch-handle {
    &::before {
      background-color: #fff;
    }
  }

  .ant-switch-checked .ant-switch-inner {
    background: #ccc;
  }
`;

export const NavMenuItemWithSubMenu = ({
  name,
  subMenu,
}: {
  name: string;
  subMenu: Array<{
    name: string;
    group?: Array<{ name: string; url: string }>;
    url?: string;
  }>;
}) => {
  const locale = useLocale();

  return (
    <li className="nav-item before:hidden dropdown align-self-lg-stretch flex !static">
      <div
        style={{ cursor: "pointer" }}
        className="nav-link nav-item dropdown-toggle"
        role="button"
        data-toggle="dropdown"
      >
        {name}
      </div>

      {/* Menu */}
      <div className="dropdown-menu lg:w-[calc(100vw-500px)] lg:max-w-[60vw] lg:!absolute lg:!top-[calc(100%-2px)] lg:!left-0">
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
                      className="text-[#ce2027] mb-1"
                      style={ibm_plex_sans.style}
                    >
                      {sub.name}
                    </p>
                  </Link>
                )}

                {!sub.url && (
                  <div className="w-fit h-fit">
                    <p
                      className="text-[#ce2027] mb-1"
                      style={ibm_plex_sans.style}
                    >
                      {sub.name}
                    </p>
                  </div>
                )}

                <ul>
                  {sub.group?.map((item) => (
                    <li key={item.name} className="block w-full">
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
  const iscmerMenu = locale === "en" ? iscmerMenuEn : iscmerMenuEn;

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
      <div className="navigation overflow-y-scroll lg:overflow-y-visible max-h-screen nav-bg w-100 top-hider">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark p-0">
            <Link href="/" className="navbar-brand" style={{ width: "120px" }}>
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
              className="navbar-collapse text-center text-[14px] justify-center collapse"
              id="navigation"
            >
              <ul className="navbar-nav ml-auto pl-2 pl-xl-5 items-center relative">
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
                <Fragment>
                  {!(localStorage.getItem("sessionToken") || session?.AT) && (
                    <NavMenuItemWithoutSubMenu name="ISCMer" url="iscmer" />
                  )}
                  {(localStorage.getItem("sessionToken") || session?.AT) &&
                    iscmerMenu?.subMenu && (
                      <NavMenuItemWithSubMenu
                        name={iscmerMenu.name}
                        subMenu={iscmerMenu.subMenu}
                      />
                    )}
                  {(localStorage.getItem("sessionToken") || session?.AT) &&
                    iscmerMenu?.subMenu && (
                      <li
                        className="cursor-pointer hover:bg-[#cd2027]/60 align-self-lg-stretch items-center flex px-3 transition-all"
                        onClick={() => signOut({ callbackUrl: "/" })}
                      >
                        <LogOut color="#fff" />
                      </li>
                    )}
                </Fragment>
              </ul>
              <Switch
                className="mb-4 mt-2 mb-lg-0 mt-lg-0 ml-lg-3"
                checkedChildren={<span className="text-black">En</span>}
                unCheckedChildren={<span className="text-[#FFCD00]">Vi</span>}
                defaultChecked={locale === "en"}
                onChange={handleRedirectLocale}
              />
            </div>
          </nav>
        </div>
      </div>
    </HeaderStyled>
  );
}

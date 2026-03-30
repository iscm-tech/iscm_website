"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { Breadcrumb } from "antd";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function PageHeader() {
  const pathname = usePathname().split("/").slice(2);
  const locale = useLocale();

  const [breadcrumb, setBreadcrumb] = useState<
    { href: string; title: string }[]
  >([]);

  const [description, setDescription] = useState<string>();

  useEffect(() => {
    async function getBreadcrumb() {
      const list = (await import(`@/constants/${locale}/`)).breadcrumb;
      const breadcrumb: { href: string; title: string }[] = [];

      pathname.forEach((path: string) => {
        if (list[path]?.title)
          breadcrumb.push({
            href: "/" + path,
            title: list[path].title || "",
          });
      });

      if (list[pathname[pathname.length - 1]]?.shortDesc)
        setDescription(list[pathname[pathname.length - 1]].shortDesc);
      setBreadcrumb(breadcrumb);
    }

    getBreadcrumb();
  }, []);

  return (
    <section
      className="page-title-section overlay h-fit"
      style={{
        backgroundColor: "black",
        backgroundImage: `url(/images/page_header/page_header.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Breadcrumb
              className="justify-end"
              separator={
                <div className="h-full flex items-center">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="text-xl"
                    color="white"
                  />
                </div>
              }
              items={[
                { href: "/", title: locale === "en" ? "Home" : "Trang chủ" },
                ...breadcrumb,
              ]}
              itemRender={(route, params, routes, paths) => {
                const href = routes.reduce(
                  (accumulator, curVal) =>
                    (curVal.href?.length || 0) > 1 && curVal.title !== ""
                      ? accumulator + curVal.href
                      : accumulator,
                  ""
                );

                return route.title !== "" ? (
                  <Link
                    href={href}
                    className="!flex text-white text-2xl font-bold !h-full items-end"
                    title={route.title?.toString()}
                  >
                    {route.title}
                  </Link>
                ) : (
                  <></>
                );
              }}
            />
            <p className="text-lighten" style={{ textAlign: "justify" }}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

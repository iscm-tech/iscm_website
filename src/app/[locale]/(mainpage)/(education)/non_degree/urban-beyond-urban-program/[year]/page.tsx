// import { useDOMParser as DOMParser } from "@/hooks/domParser";
import { getLocale } from "next-intl/server";
import Image from "next/image";
import React from "react";
import Gallery from "../gallery.tsx";

import ubu from "./data/ubu.tsx";
import Booklet from "@/app/[locale]/(mainpage)/facilities/student_studiolab/[slug]/components/Booklet.tsx";

export default async function page({
  params,
}: {
  params: Promise<{ year: string; locale: string }>;
}) {
  const locale = await getLocale();
  const year = (await params).year;

  const data = ubu[year];

  return (
    <section className="section-sm">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-4">
            {/* <!-- course thumb --> */}
            <Image
              alt=""
              width={1200}
              height={500}
              src={data.thumbnail}
              className="w-full object-contain max-h-[500px]"
              quality={80}
            />
          </div>
        </div>
        {/* <!-- course info --> */}
        <div className="row align-items-center mb-5">
          <div className="col-12 mb-0">
            <h2>{data.topic}</h2>
          </div>

          {/* <!-- border --> */}
          <div className="col-12 mt-4 order-4">
            <div className="border-bottom border-primary"></div>
          </div>
        </div>
        {/* <!-- course details --> */}
        <div className="row">
          <div className="col-12 mb-4 content text-justify">
            {locale === "en" ? data.descEn : data.descVi}
          </div>
        </div>

        {data?.gallery && <Gallery gallery={data?.gallery} />}

        {data?.booklet && (
          <div className="w-full flex justify-center">
            <Booklet booklet={data.booklet} />
          </div>
        )}
      </div>
    </section>
  );
}

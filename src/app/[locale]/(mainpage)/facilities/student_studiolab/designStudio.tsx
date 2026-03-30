import { ibm_plex_sans } from "@/app/fontDeclare";
import CardOverlay from "@/components/card_overlay";
import React from "react";
import YearTabs from "./year_tabs";
import { TabsProps } from "antd";

import booklets from "./data/studio.json";
import slugify from "slugify";
import { getLocale } from "next-intl/server";

export default async function DesignStudio({ year }: { year: string }) {
  const locale = await getLocale();

  const items: TabsProps["items"] = booklets
    .map((book) => ({ key: book.year, label: book.year }))
    .sort((tab1, tab2) => Number(tab2.key) - Number(tab1.key));

  const stu: any = booklets.filter((book) => book.year === year)[0];

  return (
    <div className="flex relative pb-20">
      <YearTabs items={items} tabPosition="left" defaultKey={year} />
      <div className="w-full">
        {stu.studio.map((booklet: any) => (
          <div key={booklet.title} className="mb-5">
            <h3
              className={`text-3xl uppercase font-bold ${ibm_plex_sans.className}`}
            >
              {locale === "en"
                ? booklet.title
                : booklet.titleVie ?? booklet.title}
            </h3>
            <div className="row mt-3 gap-y-4">
              {booklet.topics.map((topic: any) => (
                <div
                  className="col-md-4 col-12 max-h-[225px]"
                  key={topic.title}
                >
                  <CardOverlay
                    thumb={topic.thumb}
                    title={
                      locale === "en"
                        ? topic.title
                        : topic?.titleVie ?? topic.title
                    }
                    basePath={`/facilities/student_studiolab/${slugify(
                      booklet.title,
                      {
                        replacement: "_",
                        lower: true,
                        remove: /[^\p{L}\p{N}\s]/gu,
                      }
                    ).toString()}/${slugify(topic.title, {
                      replacement: "_",
                      lower: true,
                      remove: /[^\p{L}\p{N}\s]/gu,
                    }).toString()}`}
                    query={{ year: year }}
                    overlayTitleStyle={{ textTransform: "uppercase" }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

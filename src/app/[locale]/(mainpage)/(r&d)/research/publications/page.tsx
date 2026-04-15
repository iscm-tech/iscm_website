import { barlow, ibm_plex_sans } from "@/app/fontDeclare";
import NotFound from "@/components/not-found";
import { getPublicationList } from "@/services/research.service";
import { Timeline } from "antd";
import { getLocale } from "next-intl/server";
import Link from "next/link";
import React from "react";

export default async function page() {
  const locale = await getLocale();

  try {
    const {
      payload: { data },
    } = await getPublicationList.getListAll(locale);

    return (
      <div className="container pb-24 pt-16">
        <Timeline
          className="w-fit px-3 pt-2"
          mode="left"
          items={data.map((list) => ({
            children: (
              <div>
                <div className="pt-4"></div>
                <ul className="ml-4">
                  {list.publications_list.map((publication) => (
                    <li
                      key={publication.id}
                      className="list-disc list-item hover:underline"
                    >
                      <Link
                        className="block text-base text-[#141414]! mb-2"
                        href={publication.link}
                        target="_blank"
                        style={barlow.style}
                      >
                        {publication.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ),
            dot: (
              <span
                className="text-base font-bold text-black"
                style={ibm_plex_sans.style}
              >
                {list.year}{" "}
                <span className="font-normal text-sm text-[#333]">
                  ({list.publications_list.length})
                </span>
              </span>
            ),
          }))}
        />
      </div>
    );
  } catch (error) {
    console.log(error);
    return <NotFound />;
  }
}

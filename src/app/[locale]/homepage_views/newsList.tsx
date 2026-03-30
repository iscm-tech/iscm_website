"use client";

import { getInnerText } from "@/hooks/domHook";
import { LatestAdmissionCardType } from "@/schemaValidations/post.schema";
import { List, Tag } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { barlow, ibm_plex_sans } from "../../fontDeclare";
import { useLocale, useTranslations } from "next-intl";
import { format } from "date-fns";
import { postCateTagColors } from "@/constants";

export default function NewsList({
  admissions,
}: {
  admissions: LatestAdmissionCardType[];
}) {
  const locale = useLocale();
  const i18n = useTranslations();

  useEffect(() => {
    // Clear all meta refresh
    const metas = document.querySelectorAll('meta[http-equiv="refresh"]');
    metas.forEach((meta) => meta.remove());
  }, []);

  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={admissions.map((admission) => ({
        href: `/${admission.category}/${admission.slug}`,
        ...admission,
      }))}
      renderItem={(item) => (
        <List.Item
          key={item.id}
          className="px-3"
          extra={
            <Image
              width={272}
              height={300}
              alt={item.title}
              src={item.thumbnail}
            />
          }
        >
          <List.Item.Meta
            className="mb-0"
            title={
              <>
                <Link
                  className="mb-2 block hover:!text-[#ce2027]"
                  href={item.href}
                >
                  {item.title}
                </Link>
                <p className="mb-2 text-sm">
                  <span
                    className="text-[#971919] font-bold"
                    style={ibm_plex_sans.style}
                  >
                    {locale === "en"
                      ? format(item.publishDate, "MMM. dd, yyyy")
                      : format(item.publishDate, "dd/MM/yyyy")}
                  </span>
                </p>
                <Link key={item.category} href={`/${item.category}`}>
                  <Tag
                    color={
                      postCateTagColors.filter(
                        (tag) => tag.name !== item.category,
                      )[0].hex
                    }
                  >
                    {i18n(item.category)}
                  </Tag>
                </Link>
              </>
            }
          />
          <div
            className="line-clamp-3 text-base text-justify"
            style={barlow.style}
          >
            {getInnerText(item.content)}
          </div>
        </List.Item>
      )}
    />
  );
}

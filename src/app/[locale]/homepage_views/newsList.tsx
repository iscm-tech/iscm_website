"use client";

import { getInnerText } from "@/hooks/domHook";
import { LatestAdmissionCardType } from "@/schemaValidations/post.schema";
import { Tag } from "antd";
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
    <div className="divide-y divide-gray-200">
      {admissions.map((admission) => {
        const href = `/${admission.category}/${admission.slug}`;
        return (
          <div key={admission.id} className="flex gap-4 py-4 items-start">
            {/* Text section — min-w-0 allows it to shrink */}
            <div className="flex-1 min-w-0">
              <Link
                className="mb-2 block font-semibold text-base hover:!text-[#ce2027] leading-snug"
                href={href}
              >
                {admission.title}
              </Link>
              <p className="mb-2 text-sm">
                <span
                  className="text-[#971919] font-bold"
                  style={ibm_plex_sans.style}
                >
                  {locale === "en"
                    ? format(admission.publishDate, "MMM. dd, yyyy")
                    : format(admission.publishDate, "dd/MM/yyyy")}
                </span>
              </p>
              <Link key={admission.category} href={`/${admission.category}`}>
                <Tag
                  color={
                    postCateTagColors.filter(
                      (tag) => tag.name !== admission.category,
                    )[0].hex
                  }
                >
                  {i18n(admission.category)}
                </Tag>
              </Link>
              <div
                className="mt-2 line-clamp-3 text-base text-justify"
                style={barlow.style}
              >
                {getInnerText(admission.content)}
              </div>
            </div>

            {/* Image section — fixed width, won't shrink */}
            {admission.thumbnail ? (
              <div className="shrink-0 w-[240px] h-[160px]">
                <Image
                  width={240}
                  height={160}
                  alt={admission.title}
                  src={admission.thumbnail}
                  className="object-cover w-full h-full"
                />
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

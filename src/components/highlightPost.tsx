"use client";

import { DateFormat, formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Tag } from "antd";
import { postCateTagColors } from "@/constants";
import { useLocale, useTranslations } from "next-intl";
import { getInnerText } from "@/hooks/domHook";
import { format } from "date-fns";
import { enUS, vi } from "date-fns/locale";
import { barlow } from "@/app/fontDeclare";

export default function HighlightPost({
  id,
  thumb,
  publishDate,
  title,
  basePath,
  sdgs,
  category,
  desc,
}: {
  id: string;
  thumb: string;
  publishDate: string;
  sdgs: number[];
  title: string;
  basePath: string;
  category?: string;
  desc: string;
}) {
  const i18n = useTranslations();
  const locale = useLocale();

  console.log(getInnerText(desc));

  return (
    <Link
      href={{
        pathname: `${basePath}/${id}`,
      }}
      className={`!flex flex-row-reverse
      card border-0 rounded-0 no-border !w-full !h-full !bg-[#f9f9f9]`}
      title={`${title} - SDGs [${sdgs.join(", ")}]`}
      style={{ cursor: "pointer" }}
    >
      <div
        className={`rounded-sm max-w-[60%] position-relative bg-black h-full`}
        style={{ aspectRatio: 1200 / 630 }}
      >
        <Image
          className={`card-img-top rounded-0 h-full object-cover`}
          loading="lazy"
          width={1200}
          height={630}
          alt=""
          src={thumb}
          quality={95}
        />

        {/* <div className="card-date text-white" style={{ fontSize: "14px" }}>
          <span className="text-current" style={{ fontSize: "150%" }}>
            {dateFormat.day}
          </span>
          <br />
          <span className="text-current" style={{ fontSize: "100%" }}>
            {dateFormat.month}
          </span>
        </div> */}
      </div>
      <div className={`card-body flex flex-col justify-between !flex-1`}>
        <div>
          <div className="flex gap-10">
            <em className="text-sm text-[#545658]">
              {format(
                publishDate,
                locale === "en" ? "dd LLL, yyyy" : "dd 'tháng' MM 'năm' yyyy",
                {
                  locale: locale === "en" ? enUS : vi,
                },
              )}
            </em>
          </div>
          <h4 className="card-title font-bold !mb-2 text-black !text-base w-full">
            {title}
          </h4>
          <p className="text-sm line-clamp-5" style={barlow.style}>
            {getInnerText(desc)}
          </p>
        </div>
        <div className="mt-auto w-full flex justify-between">
          {category && (
            <div>
              <Tag
                color={
                  postCateTagColors.filter((tag) => tag.name !== category)[0]
                    .hex
                }
                className="capitalize"
              >
                {i18n(category)}
              </Tag>
            </div>
          )}
          <div className="flex flex-wrap gap-2">
            {sdgs.map((sdg) => (
              <Image
                width={32}
                height={32}
                src={`/images/sdgs_icon/goal_${sdg}.svg`}
                alt={`sdg goal ${sdg}`}
                key={sdg}
              />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

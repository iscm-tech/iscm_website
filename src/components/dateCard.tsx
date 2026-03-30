"use client";

import { DateFormat, formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Tag } from "antd";
import { postCateTagColors } from "@/constants";
import { useLocale, useTranslations } from "next-intl";
import { format } from "date-fns";
import { enUS, vi } from "date-fns/locale";

export default function DateCard({
  id,
  thumb,
  publishDate,
  title,
  basePath,
  sdgs,
  titleStyle = {},
  bodyCls = "",
  bodyStyle = {},
  isBorder = true,
  cardStyle = {},
  thumbStyle = {},
  isHorizontal = false,
  imgQuality = 70,
  category,
}: {
  id: string;
  thumb: string;
  publishDate: string;
  sdgs: number[];
  title: string;
  basePath: string;
  titleStyle?: React.CSSProperties;
  bodyCls?: string;
  bodyStyle?: React.CSSProperties;
  isBorder?: boolean;
  cardStyle?: React.CSSProperties;
  thumbStyle?: React.CSSProperties;
  isHorizontal?: boolean;
  imgQuality?: number;
  category?: string;
}) {
  const i18n = useTranslations();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const locale = useLocale();

  useEffect(() => {
    document.onload = () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <Link
      href={{
        pathname: `${basePath}/${id}`,
      }}
      className={`!flex ${
        isHorizontal ? "flex-row" : "flex-col"
      } card border-0 rounded-0 !w-full ${isBorder ? "" : "no-border"} !h-full`}
      title={`${title} - SDGs [${sdgs.join(", ")}]`}
      style={{ cursor: "pointer", ...cardStyle }}
    >
      <div
        className={`card-img position-relative bg-black ${
          isHorizontal ? "!w-[45%] !h-full" : "w-full"
        }`}
        style={{ aspectRatio: 1200 / 630, ...thumbStyle }}
      >
        <Image
          className={`card-img-top rounded-0 w-full object-cover h-full`}
          loading="lazy"
          width={1200}
          height={630}
          alt=""
          src={thumb}
          quality={imgQuality}
          style={{ aspectRatio: 1200 / 630 }}
        />

        {/* <div
          className="card-date text-white"
          style={{ fontSize: isHorizontal ? "12px" : "14px" }}
        >
          <span className="text-current" style={{ fontSize: "150%" }}>
            {dateFormat.day}
          </span>
          <br />
          <span className="text-current" style={{ fontSize: "100%" }}>
            {dateFormat.month}
          </span>
        </div> */}
      </div>
      <div className={`card-body ${bodyCls}`} style={bodyStyle}>
        <div className="">
          <div className="flex flex-wrap flex-1 gap-2 mb-2">
            {sdgs.map((sdg) => (
              <Image
                width={28}
                height={28}
                src={`/images/sdgs_icon/goal_${sdg}.svg`}
                alt={`sdg goal ${sdg}`}
                key={sdg}
              />
            ))}
          </div>
          {category && (
            <div className="flex-wrap mb-2">
              <Tag
                color={
                  postCateTagColors.filter((tag) => tag.name !== category)[0]
                    .hex
                }
                className="capitalize text-[10px]"
              >
                {i18n(category)}
              </Tag>
            </div>
          )}
        </div>

        <div className="">
          <div className="flex gap-10 mb-2">
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
          <h4
            className="card-title font-bold !mb-0 text-black !text-sm w-full h-full"
            style={titleStyle}
          >
            {title}
          </h4>
        </div>
      </div>
    </Link>
  );
}

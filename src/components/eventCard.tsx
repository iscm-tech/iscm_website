"use client";

import { List, Skeleton } from "antd";
import { format, isBefore, isEqual } from "date-fns";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function EventCard({
  slug,
  thumbnail,
  eventTime,
  title,
  basePath,
  sdgs,
}: {
  slug: string;
  thumbnail: string;
  eventTime: string;
  sdgs: number[];
  title: string;
  basePath: string;
}) {
  const locale = useLocale();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    document.onload = () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <List.Item className="block">
      <Link
        className="row hover:text-[#ce2027]! py-3 hover:border-[#ce2020] border-[1px] rounded-bl-[calc(0.25rem)] rounded-lg"
        href={`/${basePath}/${slug}`}
      >
        <div className="col-md-4 col-12" style={{ aspectRatio: 1200 / 630 }}>
          <Image
            src={thumbnail}
            width={1200}
            height={630}
            alt=""
            quality={95}
            className="object-contain w-full h-full max-h-[435px] rounded-[calc(0.25rem-1px)]"
          />
        </div>

        <div className="col-md-7 col-12 h-full flex flex-col justify-center">
          <Skeleton title={false} loading={false} active>
            <span>
              {eventTime && (
                <div className="flex items-center text-sm!">
                  {isEqual(Date.now(), eventTime) ? (
                    <span className="mb-0 mr-1 text-[#971919]! font-bold! uppercase">
                      {locale === "en" ? "[Happening Now]" : "[Đang diễn ra]"}
                    </span>
                  ) : isBefore(Date.now(), eventTime) ? (
                    <span className="mb-0 mr-1 text-[#971919]! font-bold! uppercase">
                      {locale === "en" ? "[Upcoming]" : "[Sắp diễn ra]"}
                    </span>
                  ) : (
                    <span className="mb-0 mr-1 font-medium text-[#818181]! uppercase">
                      {locale === "en" ? "[Past Events]" : "[Đã diễn ra]"}
                    </span>
                  )}
                </div>
              )}
            </span>

            <h4 className="float-start inline mb-0 !text-current text-base! transition-colors duration-300 w-fit">
              {title}
            </h4>

            <div className="flex gap-10 mb-2">
              <em className="text-sm text-[#545658]!">
                {format(
                  eventTime,
                  locale === "en" ? "dd LLL, yyyy" : "dd 'tháng' MM 'năm' yyyy",
                )}
              </em>
            </div>
          </Skeleton>
        </div>

        <div className="col-1 flex flex-col gap-2 items-center">
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
      </Link>
    </List.Item>
  );
}

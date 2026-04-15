"use client";

import { getInnerText } from "@/hooks/domHook";
import { PostCardType } from "@/schemaValidations/post.schema";
import { List, Skeleton } from "antd";
import { format } from "date-fns";
import { enUS, vi } from "date-fns/locale";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function PostCard({
  item,
  basePath,
}: {
  item: PostCardType;
  basePath: string;
}) {
  const locale = useLocale();

  return (
    <List.Item className="block">
      <Link
        className="row hover:text-[#ce2027]! py-2 border-t-[1px] border-[#d9d9d9] rounded-bl-[calc(0.25rem)] rounded-br-[calc(0.25rem)] transition-shadow hover:shadow-xl duration-300"
        href={`/${basePath}/${item.slug}`}
      >
        <div className="col-md-4 col-12" style={{ aspectRatio: 1200 / 630 }}>
          <Image
            src={item.thumbnail}
            width={1200}
            height={630}
            alt=""
            quality={85}
            className="object-cover w-full h-full max-h-[435px] rounded-[calc(0.25rem-1px)]"
          />
        </div>

        <div className="col-md-7 col-12 h-full flex flex-col justify-center">
          <Skeleton title={false} loading={false} active>
            <h5 className="float-start inline mb-0 !text-current text-base! transition-colors duration-300 font-bold! w-fit">
              {item.title}
            </h5>

            <div className="flex gap-10 mb-2">
              <em className="text-sm text-[#545658]!">
                {format(
                  item.publishDate,
                  locale === "en" ? "dd LLL, yyyy" : "dd 'tháng' MM 'năm' yyyy",
                  {
                    locale: locale === "en" ? enUS : vi,
                  },
                )}
              </em>
            </div>

            {item?.description && (
              <p className="mb-0 text-justify text-[15px]! leading-snug! line-clamp-6 text-[#232323]!">
                {getInnerText(item.description)}
              </p>
            )}
          </Skeleton>
        </div>

        <div className="col-1 flex flex-col gap-2 items-center">
          {item.sdgs.map((sdg) => (
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

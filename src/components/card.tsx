"use client";

import { useDOMParser as DOMParser } from "@/hooks/domHook";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function Card({
  id,
  thumb,
  title,
  subTitle,
  basePath,
  thumbW = 350,
  thumbH = 450,
  style = {},
  titleStyle = {},
  imageStyle = {},
  isShowTitle = true,
  isDisabled = false,
  classname = "",
  query,
}: {
  id?: string;
  thumb: string;
  title?: string;
  subTitle?: string | ReactNode;
  basePath: string;
  thumbW?: number;
  thumbH?: number;
  style?: React.CSSProperties;
  isShowTitle?: boolean;
  titleStyle?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
  isDisabled?: boolean;
  classname?: string;
  query?: { [key: string]: string };
}) {
  return (
    <>
      {!isDisabled && (
        <Link
          href={{
            pathname: id ? `${basePath}/${id}` : basePath,
            query:
              query &&
              Object.keys(query)
                ?.map((value) => `${value}=${query[value]}`)
                .join("&"),
          }}
          className={`card pb-3 border-0 rounded-0 hover-shadow !mb-0 !w-full !h-full ${classname} ${
            isDisabled ? "!cursor-default" : "!cursor-pointer"
          }`}
          title={title}
          style={style}
          onClick={(e) => isDisabled && e.preventDefault()}
        >
          <Image
            className="card-img-top rounded-0 h-[60%] lg:h-1/2"
            src={thumb}
            alt={`${title} - ${subTitle}`}
            style={{
              objectFit: "cover",
              objectPosition: "center",
              ...imageStyle,
            }}
            loading="lazy"
            width={thumbW}
            height={thumbH}
          />
          {isShowTitle && (
            <div className="card-body h-[40%]">
              <h4
                className="card-title leading-6 line-clamp-2"
                style={{
                  maxHeight: "50px",
                  fontWeight: "bold",
                  color: "#141414",
                  fontSize: "16px",
                  fontFamily: "Barlow, sans-serif",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  wordBreak: "keep-all",
                  textDecoration: "none",
                  textOverflow: "ellipsis",
                  ...titleStyle,
                }}
              >
                {title}
              </h4>
              <p className="mt-3 mb-0 text-base!">
                {typeof subTitle === "string"
                  ? DOMParser(subTitle || "")
                  : subTitle}
              </p>
            </div>
          )}
        </Link>
      )}
      {isDisabled && (
        <div
          className={`card pb-3 border-0 rounded-0 hover-shadow !mb-0 !w-full !h-full ${classname} !cursor-default`}
          title={title}
          style={style}
        >
          <Image
            className="card-img-top rounded-0 h-[60%] lg:h-1/2"
            src={thumb}
            alt={`${title} - ${subTitle}`}
            style={{
              objectFit: "cover",
              objectPosition: "center",
              ...imageStyle,
            }}
            loading="lazy"
            width={thumbW}
            height={thumbH}
          />
          {isShowTitle && (
            <div className="card-body h-[40%]">
              <h4
                className="card-title leading-6 line-clamp-2"
                style={{
                  maxHeight: "50px",
                  fontWeight: "bold",
                  color: "#141414",
                  fontSize: "16px",
                  fontFamily: "Barlow, sans-serif",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  wordBreak: "keep-all",
                  textDecoration: "none",
                  textOverflow: "ellipsis",
                  ...titleStyle,
                }}
              >
                {title}
              </h4>
              <p className="mt-3 mb-0 text-base">
                {typeof subTitle === "string"
                  ? DOMParser(subTitle || "")
                  : subTitle}
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

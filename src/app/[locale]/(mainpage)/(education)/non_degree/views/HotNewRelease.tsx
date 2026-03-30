"use client";

import {
  CourseCardType,
  NondegreeCourseCardType,
} from "@/schemaValidations/course.schema";
import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import CourseCard from "../../components/courseCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import $ from "jquery";

export default function HotNewRelease({
  data,
}: {
  data: NondegreeCourseCardType[];
}) {
  const locale = useLocale();
  const i18n = useTranslations();

  const [stateIdx, setStateIdx] = useState(1);
  const [cardWidth, setCardWidth] = useState<number>(0);

  const steps = useMemo(() => data.length + 1 - 4 + 1, [data.length + 1]);

  useEffect(() => {
    const w = $(".release-courses")[0].clientWidth;

    setCardWidth(w);
  }, [data.length]);

  return (
    <div
      id="hot-new-release"
      className="scroll-m-36 container lg:!max-w-[80%] after:absolute after:top-0 after:right-0 after:w-[15%] after:h-full after:bg-gradient-to-r after:from-transparent after:to-white after:z-[1000] before:absolute before:top-0 before:left-0 before:w-[15%] before:h-full before:bg-gradient-to-l before:from-transparent before:to-white before:z-[1000]"
    >
      <div className="row">
        <h3 className="text-2xl">
          {locale === "en"
            ? "Hot new releases"
            : "Các khóa học nổi bật sắp diễn ra"}
        </h3>
      </div>
      <div
        className="row flex-nowrap mt-3 h-full transition-transform duration-500 flex-shrink-0"
        style={{
          transform: `translateX(-${(stateIdx - 1) * cardWidth}px)`,
        }}
      >
        <div
          className="col-xl-3 col-lg-4 col-sm-6 col-12 flex-shrink-0 h-full release-courses"
          key={"ubu"}
        >
          <CourseCard
            id={"urban-beyond-urban-program"}
            basePath="/non_degree/"
            title={"Urban Beyond Urban (UBU)"}
            duration={"1-2" + " " + (locale === "en" ? "weeks" : "tuần")}
            thumb={
              "https://iscm-api.ueh.edu.vn/public/static/images/courses/ubu.png"
            }
            category={i18n("beginner")}
            class_type={i18n("offline")}
          />
        </div>
        {data.map(
          ({ title, thumbnail, id, slug, duration, level, location }) => (
            <div
              className="col-xl-3 col-lg-4 col-sm-6 col-12 flex-shrink-0 h-full release-courses"
              key={id}
            >
              <CourseCard
                id={slug}
                basePath="/non_degree/course"
                title={title}
                duration={duration.value + " " + duration.unit}
                thumb={thumbnail}
                category={i18n(level)}
                class_type={i18n(location)}
              />
            </div>
          ),
        )}
      </div>

      <div className="flex gap-2 mt-5 justify-center">
        {data.map((_, idx) => (
          <div
            key={idx}
            className={`${
              stateIdx + 4 > idx + 1 && idx + 1 >= stateIdx ? "w-4" : "w-[5px]"
            } h-[5px] rounded-full bg-[rgba(151,25,25,1)] transition-all duration-700`}
          ></div>
        ))}
      </div>

      {stateIdx !== 1 && (
        <div
          onClick={() => {
            setStateIdx((prev) => (prev < 2 ? prev : prev - 1));
          }}
          className="absolute w-14 h-14 bg-black left-[5%] top-1/2 -translate-y-1/2 rounded-full z-[1028] flex items-center justify-center transition-transform cursor-pointer hover:scale-105"
        >
          <ChevronLeft size={40} color="white" className="-translate-x-1" />
        </div>
      )}
      {stateIdx < steps && (
        <div
          onClick={() => {
            setStateIdx((prev) => prev + 1);
          }}
          className="absolute w-14 h-14 bg-black right-[5%] top-1/2 -translate-y-1/2 rounded-full z-[1028] flex items-center justify-center transition-transform cursor-pointer hover:scale-105"
        >
          <ChevronRight size={40} color="white" className="translate-x-[2px]" />
        </div>
      )}
    </div>
  );
}

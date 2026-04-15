"use client";

import { useEffect, useRef, useState } from "react";
import StickyNav from "./StickyNav";
import { useLocale } from "next-intl";
import {
  CalendarRange,
  Captions,
  NotebookPen,
  PencilRuler,
} from "lucide-react";
import { List, Skeleton } from "antd";
import Image from "next/image";
import HotNewRelease from "../../../views/HotNewRelease";
import {
  CourseCardType,
  NondegreeCourseCardType,
  NondegreeCourseType,
} from "@/schemaValidations/course.schema";
import DomParser from "@/components/domParser";

export const sections = [
  { id: "about", label: { en: "About", vi: "Giới thiệu" } },
  {
    id: "outcome",
    label: { en: "Outcome", vi: "Kết quả" },
  },
  { id: "structure", label: { en: "Structure", vi: "Nội dung" } },
  {
    id: "recommendations",
    label: { en: "Recommendations", vi: "Các khóa học đề xuất" },
  },
] as const;

type SectionId = (typeof sections)[number]["id"];

export default function Content({
  courseRecommended,
  courseData,
}: {
  courseRecommended: NondegreeCourseCardType[];
  courseData: NondegreeCourseType;
}) {
  const locale = useLocale();

  const [activeId, setActiveId] = useState<SectionId>("about");

  const sectionRefs = useRef<Record<SectionId, HTMLElement | null>>({
    about: null,
    structure: null,
    recommendations: null,
    outcome: null,
  });

  useEffect(() => {
    let ticking = false;

    const MARK = 0.5;

    const computeActive = () => {
      const mid = window.innerHeight * MARK;

      const ids = sections.map((s) => s.id);

      let bestId: SectionId = activeId;
      let bestDist = Number.POSITIVE_INFINITY;

      for (const id of ids) {
        const el = sectionRefs.current[id];
        if (!el) continue;

        const top = el.getBoundingClientRect().top;

        if (top <= mid) {
          const dist = Math.abs(mid - top);
          if (dist < bestDist) {
            bestDist = dist;
            bestId = id;
          }
        }
      }

      if (bestDist === Number.POSITIVE_INFINITY) {
        bestId = ids[0];
      }

      if (bestId !== activeId) setActiveId(bestId);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        computeActive();
        ticking = false;
      });
    };

    const onResize = () => {
      computeActive();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    computeActive();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [activeId]);

  return (
    <>
      <StickyNav activeId={activeId} courseTitle={courseData.title} />

      <div className="min-h-[50vh] py-6 px-4 container">
        <div
          id="about"
          className="scroll-m-36 lg:max-w-[50%] border-b border-[#a1a1a1] pb-6"
          ref={(el) => {
            sectionRefs.current.about = el;
          }}
        >
          <div>
            <h4 className="flex gap-2 items-center">
              {locale === "en" ? "What you'll learn" : "Những gì bạn sẽ học"}
              <NotebookPen size={22} />
            </h4>
            <p className="text-justify">{courseData.description}</p>
          </div>

          <div className="mt-4">
            <h5>{locale === "en" ? "Details to know" : "Chi tiết cần biết"}</h5>
            <div className="flex gap-4 mt-3">
              <div>
                <Captions size={30} color="black" />
                <p className="mb-0 text-base! font-semibold!">
                  {locale === "en"
                    ? "Taught in Vietnamese"
                    : "Giảng dạy bằng tiếng Việt"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="outcome"
          className="scroll-m-36 mt-10 py-2 px-5 border border-[#a1a1a1] lg:max-w-[50%] rounded-lg"
          ref={(el) => {
            sectionRefs.current.outcome = el;
          }}
        >
          <h4 className="flex gap-2 items-center">
            <PencilRuler size={22} />
            {locale === "en" ? "Skill you gain" : "Kỹ năng bạn sẽ đạt được"}
          </h4>
          <p className="mb-0">
            <DomParser content={courseData.objectives} />
          </p>
        </div>

        <div
          id="structure"
          className="scroll-m-36 mt-6"
          ref={(el) => {
            sectionRefs.current.structure = el;
          }}
        >
          <h4 className="flex gap-2 items-center">
            {locale === "en" ? "Course Structure" : "Nội dung khóa học"}
            <CalendarRange size={22} />
          </h4>
          <div className="container">
            <div className="row justify-between">
              <div className="col-12 col-md-7">
                <div className="rounded-lg border border-[#a1a1a1] h-fit max-h-[calc(150px*3)] overflow-hidden relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1/5 after:bg-gradient-to-t after:from-white after:to-transparent">
                  {courseData.structure.map((lesson) => (
                    <List.Item key={lesson.title} className="block !px-4 !py-2">
                      <div className="row hover:text-[#ce2027] rounded-bl-[calc(0.25rem)] transition-shadow hover:shadow-xl duration-300 py-2">
                        <div
                          className="col-md-4 col-12"
                          style={{ aspectRatio: 1200 / 630 }}
                        >
                          <Image
                            src={lesson.thumb}
                            width={1200}
                            height={630}
                            alt={courseData.title}
                            quality={95}
                            className="object-cover w-full h-full max-h-[150px] rounded-[calc(0.25rem-1px)]"
                          />
                        </div>

                        <div className="col-md-7 col-12 h-full flex flex-col justify-center">
                          <Skeleton title={false} loading={false} active>
                            <h5 className="float-start inline mb-0 !text-current text-base! transition-colors duration-300 w-fit">
                              {lesson.title}
                            </h5>

                            <p className="mb-0 text-justify text-[15px]! leading-snug! line-clamp-6 text-[#232323]!"></p>
                          </Skeleton>
                        </div>
                      </div>
                    </List.Item>
                  ))}
                </div>
              </div>
              <div className="col-12 col-md-5 !mt-4 md:!mt-0">
                <div className="rounded-lg border border-[#a1a1a1] !py-2 px-4 h-fit">
                  <h5 className="mb-3">
                    {locale === "en" ? "Instructors" : "Giảng viên"}
                  </h5>

                  <ul className="flex flex-col gap-5">
                    {courseData.instructors.map((instructor, idx) => (
                      <li key={idx} className="flex items-center gap-5">
                        <figure className="mb-0 w-24">
                          <Image
                            src={instructor.avatar}
                            width={150}
                            height={150}
                            alt={instructor.name}
                            className="rounded-full w-full h-auto object-cover aspect-square object-top"
                          />
                        </figure>
                        <div className="mt-2">
                          <h6 className="mb-0">{instructor.name}</h6>
                          <p className="mb-0 text-sm text-[#555555]">
                            {instructor.title}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={(el) => {
          sectionRefs.current.recommendations = el;
        }}
        id="recommendations"
        className="scroll-m-36 bg-[rgba(151,25,25,0.07)] mt-5 py-5 relative w-full overflow-hidden"
      >
        <HotNewRelease data={courseRecommended} />
      </div>
    </>
  );
}

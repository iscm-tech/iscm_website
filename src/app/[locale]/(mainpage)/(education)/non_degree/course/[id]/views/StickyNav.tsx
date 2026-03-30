"use client";

import Link from "next/link";
import { sections } from "./Content";
import { useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";

type sectionLocales = keyof (typeof sections)[number]["label"];

export default function StickyNav({
  activeId,
  courseTitle,
}: {
  activeId: string | null;
  courseTitle: string;
}) {
  const locale = useLocale();
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (!sentinelRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      {
        threshold: 0.6,
      },
    );

    observer.observe(sentinelRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} className="h-[1px] relative -translate-y-[50px]" />
      <div
        className={`sticky top-12 lg:top-[60px] z-[1029] ${
          isSticky
            ? "shadow-lg w-full bg-white"
            : "container !p-0 border-b border-[#a1a1a1]"
        }`}
      >
        <div className="container flex flex-wrap-reverse items-center pt-2 gap-4 lg:!px-6">
          <ul
            className={`w-full lg:w-fit flex flex-wrap justify-between lg:justify-start gap-3 py-2 transition-all`}
          >
            {sections.map((section) => (
              <li key={section.id}>
                <Link
                  className={`font-semibold px-3 py-[10px] text-sm md:text-base w-full h-full block transition-colors duration-300 rounded-lg hover:bg-[rgba(206,32,39,.4)] hover:text-[#ce2027] ${
                    activeId === section.id
                      ? "bg-[rgba(206,32,39,.4)] text-[#ce2027] underline !font-bold"
                      : ""
                  }`}
                  href={`#${section.id}`}
                >
                  {section.label[locale as sectionLocales]}
                </Link>
              </li>
            ))}
          </ul>

          <h1
            className={`mb-0 flex-1 w-full h-fit transition-all duration-1000 !text-left !mt-3 lg:!mt-0 lg:!text-center text-base lg:text-lg xl:text-xl ${
              isSticky
                ? "visible scale-100 opacity-100"
                : "hidden scale-0 opacity-0"
            }`}
          >
            {courseTitle}
          </h1>
        </div>
      </div>
    </>
  );
}

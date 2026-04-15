"use client";

import { ibm_plex_sans } from "@/app/fontDeclare";
import React, { useEffect, useState } from "react";
import CollapseInfo from "./components/collapseInfo";
import { useLocale } from "next-intl";
import { CourseType } from "@/schemaValidations/course.schema";

import infoVi from "./data/vi";
import infoEn from "./data/en";
import Link from "next/link";

export default function Info() {
  const locale = useLocale();

  const [courseType, setCourseType] = useState<"standard" | "executive">(
    "standard",
  );

  const [info, setInfo] = useState(locale === "en" ? infoEn : infoVi);

  useEffect(() => {
    if (locale === "en") setInfo(infoEn);
    else setInfo(infoVi);
  }, [locale]);

  return (
    <div className="content">
      <ul className="program-opts flex border border-black">
        <li
          className={`flex-1 border-right border-black !p-0 last:!border-none mb-0 text-center font-bold cursor-pointer hover:bg-[#F0F0F0] hover:text-[#ce2027]! ${courseType == "standard" ? "text-[#ce2027]!" : "text-black!"}`}
          style={{
            ...ibm_plex_sans.style,
          }}
          onClick={() => setCourseType("standard")}
        >
          <p className="w-full h-full p-2 flex items-center justify-center font-bold! text-inherit! hover:text-[#ce2027]!">
            {locale === "en" ? "Standard" : "Hệ chính quy"}
          </p>
        </li>
        <li
          className={`flex-1 border-right border-black !p-0 last:!border-none mb-0 text-center font-bold cursor-pointer hover:bg-[#F0F0F0] hover:text-[#ce2027]! ${courseType == "executive" ? "text-[#ce2027]!" : "text-black!"}`}
          style={{
            ...ibm_plex_sans.style,
          }}
          onClick={() => setCourseType("executive")}
        >
          <p className="w-full h-full p-2 flex items-center justify-center font-bold! text-inherit! hover:text-[#ce2027]!">
            {locale === "en" ? "Executive" : "Hệ điều hành cao cấp"}
          </p>
        </li>
        <li
          className="flex-1 !px-0 border-right border-black last:!border-none mb-0 text-center font-bold! cursor-pointer hover:bg-[#F0F0F0] hover:text-[#ce2027]!"
          style={{
            ...ibm_plex_sans.style,
          }}
        >
          <Link
            href={"/graduate/double-degree-international-track"}
            className="inline-block w-full h-full !no-underline p-2"
          >
            {locale === "en"
              ? "Opportunities for International Exchange and Earning a Dual Degree"
              : "Trao đổi quốc tế & nhận song bằng"}
          </Link>
        </li>
      </ul>

      <div className="mt-2 p-3 border border-black">
        <p className="mb-3">{info[courseType].about}</p>

        <div className="info__container mt-3">
          <CollapseInfo
            data={info[courseType].accordion.map((item) => ({
              key: item.label,
              label: item.label,
              children: item.content,
            }))}
          />

          {/* Program Structures */}
          {/* {info[type].programStructure.length > 0 && (
            <>
              <h4 className="mt-5">
                {locale === "en"
                  ? "Program structure"
                  : "Cấu trúc chương trình"}
              </h4>
              <div className="mt-4">
                <ProgramStructure
                  programList={info[type].programStructure.sort(
                    (tab1, tab2) => -(Number(tab1.years) - Number(tab2.years))
                  )}
                />
              </div>
            </>
          )} */}
        </div>
      </div>
    </div>
  );
}

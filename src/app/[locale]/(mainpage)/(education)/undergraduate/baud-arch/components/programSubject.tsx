"use client";

import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, useAnimate } from "motion/react";
import * as motion from "motion/react-client";
import { Collapse, Pagination } from "antd";
import { useLocale } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import DomParser from "@/components/domParser";

const ProgramSubjectStyled = styled.div`
  .ant-pagination-next,
  .ant-pagination-prev {
    display: none;
  }

  .ant-pagination-item {
    a {
      color: #6a6868 !important;
      font-family: "Barlow", sans-serif !important;
      font-size: 18px;
    }
  }

  .ant-pagination-item-active {
    border-color: #cd2027 !important;
    a {
      color: #cd2027 !important;
    }
  }

  .ant-collapse .ant-collapse-item-disabled > .ant-collapse-header {
    cursor: default !important;
  }
`;

export default function ProgramSubject({
  subjectLists,
}: {
  subjectLists: {
    module: string;
    subjects: { name: string; credits: number; desc?: string }[];
  };
}) {
  const subPerPage = 4;
  const locale = useLocale();

  const [current, setCurrent] = useState<number>(0);
  const [subList, setSubList] = useState<
    {
      name: string;
      credits: number;
      desc?: string;
    }[]
  >([]);
  const [scope] = useAnimate();

  const currentSubjectList = useCallback(
    (current: number) => {
      if (subjectLists.subjects.length > subPerPage) {
        const start = current * subPerPage;

        return subjectLists.subjects.slice(start, start + subPerPage);
      } else {
        return subjectLists.subjects;
      }
    },
    [subjectLists],
  );

  useEffect(() => {
    setSubList(currentSubjectList(current));
  }, [current, subjectLists]);

  useEffect(() => {
    setCurrent(0);
  }, [subjectLists]);

  return (
    <ProgramSubjectStyled className="col-12 col-lg-7 program-subject">
      <div className="w-full bg-black py-2 px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={subjectLists.module}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="uppercase text-white mb-0 text-[22px] h-14 text-center flex items-center justify-center">
              <DomParser content={subjectLists.module} />
            </h3>
          </motion.div>
        </AnimatePresence>
      </div>

      <Collapse
        accordion
        ghost
        size="small"
        rootClassName="mt-3 -mx-2 min-h-[245px]"
        ref={scope}
        items={subList.map((sub) => ({
          key: sub.name,
          label: (
            <AnimatePresence mode="wait" key={sub.name}>
              <motion.p
                key={sub.name}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                className="subject-item gap-4 flex justify-between mb-0 items-end"
              >
                <span className="uppercase flex-1 leading-tight text-black font-bold">
                  {sub.name}
                </span>
                {/* <span className="flex-shrink-0 flex items-end text-sm">
                  {sub.credits} {locale === "en" ? "credits" : "tín chỉ"}
                </span> */}
              </motion.p>
            </AnimatePresence>
          ),
          children: <p className="text-justify leading-normal">{sub.desc}</p>,
          collapsible: sub.desc ? undefined : "disabled",
          showArrow: !!sub.desc,
          styles: {
            header: {
              borderBottom: "1px solid #cd2027",
              borderRadius: "0px",
              paddingTop: "14px",
              paddingBottom: "14px",
            },
          },
        }))}
        expandIcon={({ isActive }) => (
          <div className={`${isActive ? "rotate-90" : "rotate-0"}`}>
            <FontAwesomeIcon
              className="text-base text-black"
              icon={faCaretRight}
            />
          </div>
        )}
      />

      <Pagination
        className="mt-6"
        align="center"
        pageSize={subPerPage}
        total={subjectLists.subjects.length}
        current={current + 1}
        onChange={(page) => {
          setCurrent(page - 1);
        }}
        hideOnSinglePage
      />
    </ProgramSubjectStyled>
  );
}

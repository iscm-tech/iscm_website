"use client";

import React, { useMemo, useState } from "react";

import projectVi from "./data/research_project_vi.json";
import projectEn from "./data/research_project_en.json";
import { useLocale } from "next-intl";
import { List, Skeleton, Tag } from "antd";
import Link from "next/link";
import { barlow } from "@/app/fontDeclare";
import Image from "next/image";
import DomParser from "@/components/domParser";

export default function View() {
  const locale = useLocale();

  const [filter, setFilter] = useState("all");

  const projects = useMemo(() => {
    const data = locale === "en" ? projectEn : projectVi;
    if (filter === "all") {
      return data;
    } else {
      return data.filter((project) => project.progress === filter);
    }
  }, [locale, filter]);

  return (
    <div className="container pb-24 pt-16">
      <div className="flex gap-3">
        <button
          className={`border border-1 px-4 py-2 rounded-md ${
            filter === "all" ? "bg-[#ce2027] text-white" : ""
          }`}
          onClick={() => setFilter("all")}
        >
          {locale === "en" ? "All" : "Tất cả"}
        </button>
        <button
          className={`border border-1 px-4 py-2 rounded-md ${
            filter === "ongoing" ? "bg-[#ce2027] text-white" : ""
          }`}
          onClick={() => setFilter("ongoing")}
        >
          {locale === "en" ? "Ongoing" : "Đang thực hiện"}
        </button>
        <button
          className={`border border-1 px-4 py-2 rounded-md ${
            filter === "done" ? "bg-[#ce2027] text-white" : ""
          }`}
          onClick={() => setFilter("done")}
        >
          {locale === "en" ? "Completed" : "Đã hoàn thành"}
        </button>
      </div>

      <div className="mt-12">
        {projects
          .sort((p1, p2) => {
            if (p1.progress === "ongoing") return -1;
            return 1;
          })
          .map((pj) => (
            <List.Item className="block" key={pj.id}>
              <Link
                className="row w-full hover:text-[#ce2027] py-3 rounded-bl-[calc(0.25rem)] rounded-br-[calc(0.25rem)] transition-shadow hover:shadow-xl duration-300"
                href={`/research/projects/${pj.id}`}
              >
                <figure className="col-12 col-md-5 mb-0">
                  <Image
                    src={pj.thumbnail}
                    alt={pj.name}
                    width={500}
                    height={350}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </figure>
                <div className="col-12 col-md-7 h-full flex flex-col justify-center">
                  <Skeleton title={false} loading={false} active>
                    <h4 className="float-start inline mb-0 !text-current text-base transition-colors duration-300 w-fit">
                      {pj.name}
                    </h4>

                    <em
                      className="text-sm !italic text-[#545658] mt-2"
                      style={barlow.style}
                    >
                      <Tag
                        key={pj.progress}
                        color={pj.progress === "done" ? "green" : "volcano"}
                        className="w-fit"
                      >
                        {pj.progress === "done"
                          ? locale === "en"
                            ? "Completed"
                            : "Đã hoàn thành"
                          : locale === "en"
                            ? "Ongoing"
                            : "Đang thực hiện"}
                      </Tag>
                      {pj.years}
                    </em>

                    <p className="mt-4 text-justify line-clamp-3 lg:line-clamp-5">
                      <DomParser content={pj.objective} />
                    </p>
                  </Skeleton>
                </div>
              </Link>
            </List.Item>
          ))}
      </div>
    </div>
  );
}

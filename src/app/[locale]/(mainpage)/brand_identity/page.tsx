"use client";

import Link from "next/link";
import { barlow } from "@/app/fontDeclare";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Tabs } from "antd";
import styled from "styled-components";
import Booklet from "../facilities/student_studiolab/[slug]/components/Booklet";
import { CirclePlay, Download } from "lucide-react";

import data from "./data.json";
import { useLocale } from "next-intl";

const CustomTabs = styled(Tabs)`
  .ant-tabs-tab {
    ${barlow.style};
    font-size: 18px !important;
  }

  .ant-tabs-tab:hover {
    color: #ce2027;
  }

  .ant-tabs-tab[selected="true"] {
    font-weight: bold !important;
  }

  .ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #ce2027 !important;
    font-weight: bold !important;
  }

  .ant-tabs-ink-bar {
    background: #ce2027 !important;
  }
`;

export default function Page() {
  const locale = useLocale();

  return (
    <div className="container max-w-[70vw]! py-10">
      <div className="w-full">
        <Booklet booklet={data.guideline} />

        {/* MATERIALS FOR DOWNLOAD */}
        {/* FONTS */}
        <div className="mt-5">
          <h4>Fonts</h4>
          <div className="flex gap-3">
            <div className="flex gap-4 cursor-default">
              <Link
                className="my-2 overflow-hidden flex items-center shadow-lg font-bold gap-2 bg-[#ce2027]! w-fit text-white px-3 py-2 relative
                        before:w-[6px] before:h-[60%] before:bg-white before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:-translate-x-full before:rounded-2xl before:transition-transform hover:before:-translate-x-[2px]
                        after:w-[6px] after:h-[60%] after:bg-white after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2 after:translate-x-full after:rounded-2xl after:transition-transform hover:after:translate-x-[2px]"
                href={"/assets/fonts/Barlow.zip"}
                target="_blank"
              >
                <Download size={22} color="white" />
                Barlow
              </Link>
            </div>
            <div className="flex gap-4 cursor-default">
              <Link
                className="my-2 overflow-hidden flex items-center shadow-lg font-bold gap-2 bg-[#ce2027]! w-fit text-white px-3 py-2 relative
                        before:w-[6px] before:h-[60%] before:bg-white before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:-translate-x-full before:rounded-2xl before:transition-transform hover:before:-translate-x-[2px]
                        after:w-[6px] after:h-[60%] after:bg-white after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2 after:translate-x-full after:rounded-2xl after:transition-transform hover:after:translate-x-[2px]"
                href={"/assets/fonts/Barlow Condensed.zip"}
                target="_blank"
              >
                <Download size={22} color="white" />
                Barlow Condensed
              </Link>
            </div>
            <div className="flex gap-4 cursor-default">
              <Link
                className="my-2 overflow-hidden flex items-center shadow-lg font-bold gap-2 bg-[#ce2027]! w-fit text-white px-3 py-2 relative
                        before:w-[6px] before:h-[60%] before:bg-white before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:-translate-x-full before:rounded-2xl before:transition-transform hover:before:-translate-x-[2px]
                        after:w-[6px] after:h-[60%] after:bg-white after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2 after:translate-x-full after:rounded-2xl after:transition-transform hover:after:translate-x-[2px]"
                href={"/assets/fonts/IBM_Plex_Sans.zip"}
                target="_blank"
              >
                <Download size={22} color="white" />
                IBM Plex Sans
              </Link>
            </div>
          </div>
        </div>
        {/* LOGO */}
        <div className="mt-3">
          <h4>Logos</h4>
          <div className="flex gap-3">
            <div className="flex gap-4 cursor-default">
              <Link
                className="my-2 overflow-hidden flex items-center shadow-lg font-bold gap-2 bg-[#ce2027]! w-fit text-white px-3 py-2 relative
                        before:w-[6px] before:h-[60%] before:bg-white before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:-translate-x-full before:rounded-2xl before:transition-transform hover:before:-translate-x-[2px]
                        after:w-[6px] after:h-[60%] after:bg-white after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2 after:translate-x-full after:rounded-2xl after:transition-transform hover:after:translate-x-[2px]"
                href={"/assets/logo/UEH.zip"}
                target="_blank"
              >
                <Download size={22} color="white" />
                UEH
              </Link>
            </div>
            <div className="flex gap-4 cursor-default">
              <Link
                className="my-2 overflow-hidden flex items-center shadow-lg font-bold gap-2 bg-[#ce2027]! w-fit text-white px-3 py-2 relative
                        before:w-[6px] before:h-[60%] before:bg-white before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:-translate-x-full before:rounded-2xl before:transition-transform hover:before:-translate-x-[2px]
                        after:w-[6px] after:h-[60%] after:bg-white after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2 after:translate-x-full after:rounded-2xl after:transition-transform hover:after:translate-x-[2px]"
                href={"/assets/logo/CTD.zip"}
                target="_blank"
              >
                <Download size={22} color="white" />
                CTD
              </Link>
            </div>
            <div className="flex gap-4 cursor-default">
              <Link
                className="my-2 overflow-hidden flex items-center shadow-lg font-bold gap-2 bg-[#ce2027]! w-fit text-white px-3 py-2 relative
                        before:w-[6px] before:h-[60%] before:bg-white before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:-translate-x-full before:rounded-2xl before:transition-transform hover:before:-translate-x-[2px]
                        after:w-[6px] after:h-[60%] after:bg-white after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2 after:translate-x-full after:rounded-2xl after:transition-transform hover:after:translate-x-[2px]"
                href={"/assets/logo/ISCM.zip"}
                target="_blank"
              >
                <Download size={22} color="white" />
                ISCM
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

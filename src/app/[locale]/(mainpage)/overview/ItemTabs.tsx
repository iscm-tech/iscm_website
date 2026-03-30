"use client";

import { ConfigProvider, Tabs } from "antd";
import Link from "next/link";
import Booklet from "../facilities/student_studiolab/[slug]/components/Booklet";
import { Download } from "lucide-react";

import booklet from "./booklet.json";
import { recap_video } from "@/constants";

export default function ItemTabs() {
  const productions = [
    {
      booklet: booklet.brochure,
      link: "/assets/pdf/ISCM Brochure.pdf",
      title: "ISCM Brochure",
    },
    {
      booklet: booklet.portfolio,
      link: "/assets/pdf/ISCM Portfolio.pdf",
      title: "ISCM Portfolio",
    },
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            itemSelectedColor: "#ce2027",
          },
        },
      }}
    >
      <Tabs
        type="card"
        items={[
          ...productions.map((product) => ({
            key: product.title,
            label: product.title,
            children: (
              <div className="px-4 border border-black">
                <div className="flex gap-4 cursor-default">
                  <Link
                    className="my-2 overflow-hidden flex items-center shadow-lg font-bold gap-2 bg-[#ce2027] w-fit text-white px-3 py-2 relative
                        before:w-[6px] before:h-[60%] before:bg-white before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:-translate-x-full before:rounded-2xl before:transition-transform hover:before:-translate-x-[2px]
                        after:w-[6px] after:h-[60%] after:bg-white after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2 after:translate-x-full after:rounded-2xl after:transition-transform hover:after:translate-x-[2px]"
                    href={product.link}
                    download={product.title}
                    target="_blank"
                  >
                    <Download size={22} color="white" />
                    {product.title}
                  </Link>
                </div>
                <Booklet booklet={product.booklet} />
              </div>
            ),
          })),
          {
            key: "Recap 2025",
            label: "Recap 2025",
            children: (
              <div className="p-4 border border-black">
                <video
                  controls
                  // autoPlay
                  loop
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "black",
                  }}
                >
                  <source src={recap_video} type="video/mp4" />
                </video>
              </div>
            ),
            destroyOnHidden: true,
          },
        ]}
      />
    </ConfigProvider>
  );
}

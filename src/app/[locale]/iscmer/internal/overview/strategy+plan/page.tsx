"use client";

import { barlow } from "@/app/fontDeclare";
import { Image, Timeline } from "antd";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const yearPlanImgs = {
  2020: "/images/event-series/years_plan/2020.png",
  2021: "/images/event-series/years_plan/2021.jpg",
  2022: "/images/event-series/years_plan/2022.png",
  2023: "/images/event-series/years_plan/2023.png",
  2024: "/images/event-series/years_plan/2024.png",
  2025: "/images/event-series/years_plan/2025.png",
  2026: "/images/event-series/years_plan/2026.png",
};

type Year = keyof typeof yearPlanImgs;

export default function Page() {
  const [yearPlan, setYearPlan] = useState<Year>(2026);

  return (
    <div>
      <h1 className="text-center uppercase">
        Chiến lược phát triển ISCM & Kế hoạch năm
      </h1>

      <div className="content-body mt-5">
        <p>
          Link tổng hợp:{" "}
          <Link
            href="https://docs.google.com/spreadsheets/d/1TgBBAlvmUp_fUBigVoyFCA3MMyZ1EillTPLEkdMyf84"
            target="_blank"
            className="text-[#cd2027]!"
          >
            https://docs.google.com/spreadsheets/d/1TgBBAlvmUp_fUBigVoyFCA3MMyZ1EillTPLEkdMyf84
          </Link>
        </p>

        <h2>
          <Link
            href="https://docs.google.com/spreadsheets/d/1TgBBAlvmUp_fUBigVoyFCA3MMyZ1EillTPLEkdMyf84/edit?gid=0#gid=0"
            target="_blank"
            className="text-[#cd2027]! flex items-center gap-2"
          >
            Chiến lược phát triển ISCM
            <SquareArrowOutUpRight size={20} />
          </Link>
        </h2>

        <p className="text-justify">
          Chiến lược phát triển của ISCM là bản đồ dẫn đường cho mọi hoạt động
          nghiên cứu, đào tạo và kết nối cộng đồng. Sơ đồ phác họa tầm nhìn dài
          hạn của Viện trong việc trở thành đơn vị tiên phong về Đô thị thông
          minh và Quản lý bền vững, đồng thời khẳng định vị thế của ISCM trên
          bản đồ tri thức quốc tế thông qua các dự án trọng điểm.
        </p>

        <h2>
          <Link
            href="https://docs.google.com/spreadsheets/d/17XtJZfIEQXePCUySQ0743pzRDQFR5-whS8tWmp0ARL0"
            target="_blank"
            className="text-[#cd2027]! flex items-center gap-2"
          >
            Kế hoạch năm
            <SquareArrowOutUpRight size={20} />
          </Link>
        </h2>
        <p className="text-justify">
          Để hiện thực hóa các mục tiêu đã đề ra, ISCM xây dựng một hệ sinh thái
          hoạt động đa dạng xuyên suốt trong năm. Lộ trình này thể hiện rõ sự
          kết hợp chặt chẽ giữa học thuật, sáng tạo và các chương trình thực
          tiễn với mục tiêu tạo ra một môi trường mở, nơi các ý tưởng đột phá
          được nuôi dưỡng và triển khai thực tế.
          <br />
          Kế hoạch gồm 7 trụ cột chính: Event; Conference; Webinar; Show; Design
          Studio; Workshop; Competition.
        </p>

        <div>
          <Timeline
            items={[
              {
                title: (
                  <span
                    style={{
                      ...barlow.style,
                      color: yearPlan === 2020 ? "#ce2027" : "black",
                    }}
                    className="cursor-pointer font-bold hover:text-[#ce2027] transition-colors"
                    onClick={() => setYearPlan(2020)}
                  >
                    2020
                  </span>
                ),
              },
              {
                title: (
                  <span
                    style={{
                      ...barlow.style,
                      color: yearPlan === 2021 ? "#ce2027" : "black",
                    }}
                    className="cursor-pointer font-bold hover:text-[#ce2027] transition-colors"
                    onClick={() => setYearPlan(2021)}
                  >
                    2021
                  </span>
                ),
                content: "SmartCity+",
              },
              {
                title: (
                  <span
                    style={{
                      ...barlow.style,
                      color: yearPlan === 2022 ? "#ce2027" : "black",
                    }}
                    className="cursor-pointer font-bold hover:text-[#ce2027] transition-colors"
                    onClick={() => setYearPlan(2022)}
                  >
                    2022
                  </span>
                ),
                content: "A Future Resilience through Smart-City Lens",
              },
              {
                title: (
                  <span
                    style={{
                      ...barlow.style,
                      color: yearPlan === 2023 ? "#ce2027" : "black",
                    }}
                    className="cursor-pointer font-bold hover:text-[#ce2027] transition-colors"
                    onClick={() => setYearPlan(2023)}
                  >
                    2023
                  </span>
                ),
                content: "Design for Carbon Neutrality Future",
              },
              {
                title: (
                  <span
                    style={{
                      ...barlow.style,
                      color: yearPlan === 2024 ? "#ce2027" : "black",
                    }}
                    className="cursor-pointer font-bold hover:text-[#ce2027] transition-colors"
                    onClick={() => setYearPlan(2024)}
                  >
                    2024
                  </span>
                ),
                content: "Glocal Partnership for Carbon Neutrality Future",
              },
              {
                title: (
                  <span
                    style={{
                      ...barlow.style,
                      color: yearPlan === 2025 ? "#ce2027" : "black",
                    }}
                    className="cursor-pointer font-bold hover:text-[#ce2027] transition-colors"
                    onClick={() => setYearPlan(2025)}
                  >
                    2025
                  </span>
                ),
                content: "Symphony of Future Cities",
              },
              {
                title: (
                  <span
                    style={{
                      ...barlow.style,
                      color: yearPlan === 2026 ? "#ce2027" : "black",
                    }}
                    className="cursor-pointer font-bold hover:text-[#ce2027] transition-colors"
                    onClick={() => setYearPlan(2026)}
                  >
                    2026
                  </span>
                ),
                content: "Glocal Innovation for Sustainable Living",
              },
            ]}
            orientation="horizontal"
            styles={{
              itemIcon: {
                borderColor: "#cd2027",
              },
            }}
          />

          <figure className="w-full mt-4">
            <Image
              src={yearPlanImgs[yearPlan]}
              width="100%"
              alt={`Event Serie ${yearPlan}`}
              className="w-full"
              preview={{
                closeIcon: <i className="hidden"></i>,
                maskClassName: "bg-transparent hover:cursor-zoom-in!",
                mask: (
                  <div className="w-full h-full border-2 border-black"></div>
                ),
              }}
            />
          </figure>
        </div>
      </div>
    </div>
  );
}

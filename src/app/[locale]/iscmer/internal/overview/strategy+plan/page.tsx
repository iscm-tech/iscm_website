"use client";

import { barlow } from "@/app/fontDeclare";
import { Image, Timeline } from "antd";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const plans = {
  "2020": {
    image: "/images/event-series/years_plan/2020.png",
    title: "",
  },
  "2021": {
    image: "/images/event-series/years_plan/2021.jpg",
    title: "SmartCity+",
  },
  "2022": {
    image: "/images/event-series/years_plan/2022.png",
    title: "A Future Resilience through Smart-City Lens",
  },
  "2023": {
    image: "/images/event-series/years_plan/2023.png",
    title: "Design for Carbon Neutrality Future",
  },
  "2024": {
    image: "/images/event-series/years_plan/2024.png",
    title: "Glocal Partnership for Carbon Neutrality Future",
  },
  "2025": {
    image: "/images/event-series/years_plan/2025.png",
    title: "Symphony of Future Cities",
  },
  "2026": {
    image: "/images/event-series/years_plan/2026.png",
    title: "Glocal Innovation for Sustainable Living",
  },
};

type Year = keyof typeof plans;

export default function Page() {
  const [yearPlan, setYearPlan] = useState<Year>("2026");

  return (
    <div>
      <h1 className="text-center uppercase">
        Chiến lược phát triển và kế hoạch vận hành ISCM
      </h1>

      <div className="content-body mt-5">
        <h2>
          <Link
            href="https://docs.google.com/spreadsheets/d/1Cz1AINenNEsRqOc4BFRsiHqxOWEoGNYfss3g5km4LNQ/edit?gid=228169785#gid=228169785"
            target="_blank"
            className="text-[#cd2027]! flex items-center gap-2"
          >
            Chiến lược phát triển ISCM
            <SquareArrowOutUpRight size={20} />
          </Link>
        </h2>
        <p className="text-justify">
          Chiến lược phát triển là kim chỉ nam cho mọi hoạt động nghiên cứu, đào
          tạo và kết nối cộng đồng tại ISCM. Tầm nhìn dài hạn của Viện là trở
          thành đơn vị tiên phong về Đô thị thông minh & Quản lý bền vững, đồng
          thời khẳng định vị thế trên bản đồ học thuật quốc tế.
        </p>
        <p>Hệ thống tài liệu định hướng bao gồm 4 phần chính:</p>
        <ul className="list-disc! pl-4">
          <li className="list-item!">
            Chiến lược phát triển theo giai đoạn: Tầm nhìn và mục tiêu dài hạn.
          </li>
          <li className="list-item!">
            Kế hoạch hoạt động thường niên: Các mục tiêu và công việc cụ thể
            theo từng năm.
          </li>
          <li className="list-item!">
            Định hướng truyền thông (PR/Storytelling): Thông điệp và hình ảnh
            thương hiệu.
          </li>
          <li className="list-item!">
            Kế hoạch tổ chức sự kiện (Master Event Plan): Danh mục tổng hợp các
            sự kiện của Viện.
          </li>
        </ul>
        <p>
          Lưu ý riêng cho Kế hoạch sự kiện 2026: Vui lòng xem hướng dẫn trong
          file Excel đính kèm và chủ động cập nhật thông tin sự kiện thông qua
          Form đăng ký tương ứng.
        </p>
        <p>
          Yêu cầu: Tất cả thành viên có trách nhiệm thường xuyên tra cứu, cập
          nhật và tuân thủ các tài liệu định hướng này nhằm đảm bảo mọi hoạt
          động cá nhân/nhóm luôn đồng bộ với chiến lược phát triển chung của
          ISCM.
        </p>
        <h2>
          <Link
            href="https://docs.google.com/spreadsheets/d/17XtJZfIEQXePCUySQ0743pzRDQFR5-whS8tWmp0ARL0/edit?gid=1302269365#gid=1302269365"
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
            items={Object.keys(plans).map((plan) => ({
              title: (
                <span
                  style={{
                    ...barlow.style,
                  }}
                  className={`${yearPlan === plan ? "text-[#ce2027]!" : "text-black"} cursor-pointer font-bold hover:text-[#ce2027]! transition-colors`}
                  onClick={() => setYearPlan(plan as Year)}
                >
                  {plan}
                </span>
              ),
              content: (
                <span
                  className={`${yearPlan === plan ? "text-[#ce2027]!" : "text-black"} cursor-pointer hover:text-[#ce2027]! transition-colors`}
                  onClick={() => setYearPlan(plan as Year)}
                >
                  {plans[plan as Year].title}
                </span>
              ),
            }))}
            orientation="horizontal"
            styles={{
              itemIcon: {
                borderColor: "#cd2027",
              },
            }}
          />

          <figure className="w-full mt-4">
            <Image
              src={plans[yearPlan].image}
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

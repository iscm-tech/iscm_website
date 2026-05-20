"use client";

import { barlow } from "@/app/fontDeclare";
import { Image, Timeline } from "antd";
import { FileTextIcon, SquareArrowOutUpRight } from "lucide-react";
import { useLocale } from "next-intl";
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
  const locale = useLocale();

  const [yearPlan, setYearPlan] = useState<Year>("2026");

  return (
    <div>
      <h1 className="text-center uppercase">
        {locale === "en"
          ? "ISCM Development Strategy and Operational Plan"
          : "Chiến lược phát triển và kế hoạch vận hành ISCM"}
      </h1>

      <div className="content-body mt-5">
        <h2 className="text-[#cd2027]! flex items-center gap-2">
          {locale === "vi"
            ? "Chiến lược phát triển ISCM"
            : "ISCM Development Strategy"}
        </h2>
        <p className="text-justify">
          {locale === "en" ? (
            <>
              The ISCM Development Strategy serves as the master roadmap for all
              research, training, and community engagement activities. This
              framework outlines the Institute&apos;s long-term vision to become
              a pioneer in Smart Cities and Sustainable Management. Furthermore,
              it reinforces ISCM&apos;s position on the international knowledge
              map through key strategic projects.
            </>
          ) : (
            <>
              Chiến lược phát triển là kim chỉ nam cho mọi hoạt động nghiên cứu,
              đào tạo và kết nối cộng đồng tại ISCM. Tầm nhìn dài hạn của Viện
              là trở thành đơn vị tiên phong về Đô thị thông minh & Quản lý bền
              vững, đồng thời khẳng định vị thế trên bản đồ học thuật quốc tế.
            </>
          )}
        </p>
        <p>
          {locale === "en"
            ? "The guidance document system consists of four main parts:"
            : "Hệ thống tài liệu định hướng bao gồm 4 phần chính:"}
        </p>
        <ul className="list-disc! pl-4">
          {locale === "vi" && (
            <>
              <li className="list-item!">
                Chiến lược phát triển theo giai đoạn: Tầm nhìn và mục tiêu dài
                hạn.
              </li>
              <li className="list-item!">
                Kế hoạch hoạt động thường niên: Các mục tiêu và công việc cụ thể
                theo từng năm.
              </li>
              <li className="list-item!">
                Định hướng truyền thông (PR/Storytelling): Thông điệp và hình
                ảnh thương hiệu.
              </li>
              <li className="list-item!">
                Kế hoạch tổ chức sự kiện (Master Event Plan): Danh mục tổng hợp
                các sự kiện của Viện.
              </li>
            </>
          )}
          {locale === "en" && (
            <>
              <li className="list-item!">
                Phased development strategy: Long-term vision and objectives.
              </li>
              <li className="list-item!">
                Annual operational plan: Specific goals and tasks for each year.
              </li>
              <li className="list-item!">
                Communication orientation (PR/Storytelling): Brand messaging and
                identity.
              </li>
              <li className="list-item!">
                Event organization plan (Master Event Plan): A comprehensive
                portfolio of the Institute’s events.
              </li>
            </>
          )}
        </ul>
        <p>
          {locale === "en" ? (
            <>
              Note for the 2026 Event Plan: Please refer to the instructions in
              the attached Excel file and proactively update event information
              via the corresponding registration form.
            </>
          ) : (
            <>
              Lưu ý riêng cho Kế hoạch sự kiện 2026: Vui lòng xem hướng dẫn
              trong file Excel đính kèm và chủ động cập nhật thông tin sự kiện
              thông qua Form đăng ký tương ứng.
            </>
          )}
        </p>
        <p>
          {locale === "en" ? (
            <>
              Requirement: All members are responsible for regularly reviewing,
              updating, and complying with these guidance documents to ensure
              that all individual and team activities remain aligned with ISCM’s
              overall development strategy.
            </>
          ) : (
            <>
              Yêu cầu: Tất cả thành viên có trách nhiệm thường xuyên tra cứu,
              cập nhật và tuân thủ các tài liệu định hướng này nhằm đảm bảo mọi
              hoạt động cá nhân/nhóm luôn đồng bộ với chiến lược phát triển
              chung của ISCM.
            </>
          )}
        </p>

        <ul className="my-4">
          <h4>
            {locale === "en" ? "List of Links" : "Danh mục các liên kết"}:
          </h4>
          <li className="list-item! mt-3">
            <Link
              className="flex gap-1 hover:text-[#cd2027]! transition-colors"
              target="_blank"
              href={
                "https://docs.google.com/spreadsheets/d/1Cz1AINenNEsRqOc4BFRsiHqxOWEoGNYfss3g5km4LNQ/edit?gid=228169785#gid=228169785"
              }
            >
              <FileTextIcon />
              {locale === "en"
                ? "ISCM Strategy 2025 - 2030"
                : "ISCM Chiến lược 2025 - 2030"}
            </Link>
          </li>
          <li className="list-item! mt-3">
            <Link
              className="flex gap-1 hover:text-[#cd2027]! transition-colors"
              target="_blank"
              href={
                "https://docs.google.com/document/d/1IjnsN6KX4Ebpdr3so_Mru1N4TrRzI2iZZXeVY4pHNTw/edit?usp=sharing"
              }
            >
              <FileTextIcon />
              {locale === "en"
                ? "ISCM - Information & Strategy"
                : "ISCM - Thông tin & Chiến lược"}
            </Link>
          </li>
          <li className="list-item! mt-3">
            <Link
              className="flex gap-1 hover:text-[#cd2027]! transition-colors"
              target="_blank"
              href={
                "https://docs.google.com/spreadsheets/d/17XtJZfIEQXePCUySQ0743pzRDQFR5-whS8tWmp0ARL0/edit?gid=1302269365#gid=1302269365"
              }
            >
              <FileTextIcon />
              {locale === "en"
                ? "2026 ISCM - Event Year"
                : "ISCM - Kế hoạch năm 2026"}
            </Link>
          </li>
        </ul>

        <h2 className="text-[#cd2027]! flex items-center gap-2">
          {locale === "en" ? "Year Plan" : "Kế hoạch năm"}
        </h2>
        <p className="text-justify">
          {locale === "en" ? (
            <>
              To realize the established goals, ISCM builds a diverse
              operational ecosystem throughout the year. This roadmap reflects a
              strong integration of academic activities, creativity, and
              practical programs, aiming to create an open environment where
              innovative ideas are nurtured and implemented in practice.
              <br />
              The plan consists of seven key pillars: Event; Conference;
              Webinar; Show; Design Studio; Workshop; Competition.
            </>
          ) : (
            <>
              Để hiện thực hóa các mục tiêu đã đề ra, ISCM xây dựng một hệ sinh
              thái hoạt động đa dạng xuyên suốt trong năm. Lộ trình này thể hiện
              rõ sự kết hợp chặt chẽ giữa học thuật, sáng tạo và các chương
              trình thực tiễn với mục tiêu tạo ra một môi trường mở, nơi các ý
              tưởng đột phá được nuôi dưỡng và triển khai thực tế. <br /> Kế
              hoạch gồm 7 trụ cột chính: Event; Conference; Webinar; Show;
              Design Studio; Workshop; Competition.
            </>
          )}
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

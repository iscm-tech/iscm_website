"use client";

import "./style.scss";
import { barlow, ibm_plex_sans } from "@/app/fontDeclare";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import StudiolabCard from "./components/StudiolabCard";

import studiolab from "./data/studiolab.json";

export default function Main() {
  const locale = useLocale();

  const i18n = useTranslations();

  return (
    <>
      <div className="container pt-[60px] pb-20">
        <div className="row justify-between pb-10">
          <div className="col-5 flex flex-col justify-between">
            <div>
              <h1 className={`${ibm_plex_sans.className} text-4xl uppercase`}>
                {locale === "en" ? "Facilities" : "Cơ sở vật chất"}
              </h1>
              <p className={`text-base ${barlow.className} text-justify mt-3`}>
                {locale === "en" ? (
                  <>
                    ISCM is proud to possess a modern, intelligent, and
                    multifunctional infrastructure system, and above all, a
                    place that connects stakeholders (universities, government
                    management agencies, research organizations) to collaborate
                    in addressing urban issues towards a smart city and a
                    sustainable future
                  </>
                ) : (
                  <>
                    ISCM tự hào khi sở hữu hệ thống cơ sở vật chất hiện đại,
                    thông minh, tích hợp đa chức năng, và hơn hết là một nơi kết
                    nối các bên (trường đại học, đơn vị quản lý nhà nước, tổ
                    chức nghiên cứu và doanh nghiệp) chung tay trong việc giải quyết các vấn đề
                    đô thị hướng tới thành phố thông minh và tương lai bền vững.
                  </>
                )}
              </p>
            </div>
          </div>
          <div className="col-6">
            <figure className="w-full h-full">
              <Image
                src="/images/page_header/page_header.jpg"
                width={400}
                height={250}
                alt="StudioLab"
                className="w-full h-full object-cover"
              />
            </figure>
          </div>
        </div>
        <div>
          <div className="col-12 w-full border-2 border-[#ce2027] text-xl font-bold text-[#ce2027] py-2 text-center">
            {i18n("integrated_studiolab")}
          </div>
          <div className="studiolab__card-container my-3">
            {studiolab.map((item) => (
              <StudiolabCard
                key={item.path}
                en={item.en}
                vi={item.vi}
                thumb={item.thumb}
                path={item.path}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

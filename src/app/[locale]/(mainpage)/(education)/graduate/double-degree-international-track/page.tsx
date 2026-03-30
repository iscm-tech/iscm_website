"use client";

import { ibm_plex_sans } from "@/app/fontDeclare";
import { useLocale, useTranslations } from "next-intl";
import { RevealWrapper } from "next-reveal";
import React, { useCallback, useState } from "react";

import "../style.scss";
import Image from "next/image";

import infoVi from "./data/vi";
import infoEn from "./data/en";
import CollapseInfo from "../[id]/components/collapseInfo";
import { Calendar } from "lucide-react";

export default function DoubleDegree() {
  const locale = useLocale();
  const i18n = useTranslations();

  const [type, setType] = useState<"handong" | "uhasselt">("handong");

  const [info, setInfo] = useState(locale === "en" ? infoEn : infoVi);

  const scrollToSection = useCallback(
    (idEle: string, spacingFromTop?: number) => {
      const top =
        $(idEle)[0].getBoundingClientRect().top +
        window.pageYOffset -
        (spacingFromTop || 170);

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    },
    [],
  );

  return (
    <section className="pb-32">
      <div
        className="w-screen relative bg-black before:z-0 before:bg-[#12162CA1] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0"
        style={{
          backgroundImage: "url(/images/courses/double-degree1.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "calc(100vh - 60px)",
        }}
      >
        <div className="z-[1] relative pt-20 text-center container">
          <RevealWrapper delay={0} distance="0px" opacity={0} origin="bottom">
            <div className="mb-9">
              <h1
                className="uppercase text-4xl text-white mb-3"
                style={ibm_plex_sans.style}
              >
                {locale === "en"
                  ? "international exchange and earning a dual degree"
                  : "chương trình Trao đổi quốc tế & nhận song bằng"}
              </h1>
            </div>
            <div className="row pt-7">
              <div className="col-12 col-md-5">
                <div className="row justify-between pb-3">
                  <p
                    className="text-white text-lg font-medium col-12 leading-normal text-center mb-0"
                    style={ibm_plex_sans.style}
                  >
                    {locale === "en" ? (
                      <>
                        Bachelor Progam <br />
                        Architectural and Urban Design Inclusive Smart City
                      </>
                    ) : (
                      <>
                        Chương trình Thạc sĩ <br /> Quản trị Đô thị Thông minh
                        và Sáng tạo
                      </>
                    )}
                  </p>
                </div>
                <figure className="flex gap-7 items-center">
                  <Image
                    src="/images/logo/ctd white.png"
                    width={100}
                    height={50}
                    alt="logo ctd"
                    className="flex-1 w-full h-fit object-contain"
                    quality={100}
                  />
                  <Image
                    src="/images/logo/iscm white text.png"
                    width={100}
                    height={50}
                    alt="logo ctd"
                    className="flex-1 w-full h-fit object-contain"
                    quality={100}
                  />
                </figure>
              </div>
              <div className="col-2 hidden md:flex justify-center">
                <div className="h-full w-2 bg-white"></div>
              </div>
              <div className="col-12 col-md-5">
                <figure className="w-full flex gap-6 items-center justify-center">
                  <Image
                    src="/images/partners/handong_circle.png"
                    width={150}
                    height={50}
                    alt=""
                    className="object-contain w-fit  h-[125px]"
                    quality={100}
                  />
                  <Image
                    src="/images/partners/uhasselt_transparent.png"
                    width={150}
                    height={50}
                    alt=""
                    className="object-contain w-fit h-[125px]"
                    quality={100}
                  />
                </figure>
              </div>
            </div>
          </RevealWrapper>
        </div>

        <div
          id="mouse-scroll"
          className="cursor-pointer"
          onClick={() => scrollToSection("#content", 90)}
        >
          <div className="mouse">
            <div className="mouse-in"></div>
          </div>
          <div>
            <span className="down-arrow-1"></span>
            <span className="down-arrow-2"></span>
            <span className="down-arrow-3"></span>
          </div>
        </div>
      </div>
      <div className="container pt-20" id="content">
        <div className="flex items-center pt-20 pb-32 justify-center">
          <div className="flex flex-col items-center leading-normal">
            <h1
              className="uppercase text-[#CD2027] text-center"
              style={ibm_plex_sans.style}
            >
              {locale === "en" ? "about the program" : "tổng quan chương trình"}
            </h1>
            <p className="text-black text-lg text-center mt-3 leading-normal">
              {locale === "en" ? (
                <>
                  In addition to the full-time study option at UEH, the program
                  offers international exchange opportunities at leading
                  universities worldwide, enabling students to deepen their
                  expertise in smart, innovative, and sustainable urban
                  management while earning two Master’s degrees simultaneously
                </>
              ) : (
                <>
                  Ngoài lựa chọn học toàn thời gian tại UEH, chương trình cung
                  cấp cơ hội học tập trao đổi các trường đại học hàng đầu trên
                  thế giới, giúp người học phát triển chuyên môn trong lĩnh vực
                  quản trị đô thị thông minh, sáng tạo và bền vững và nhận cùng
                  lúc hai bằng
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <ul className="program-opts flex border border-black">
          <li
            className="flex-1 border-right border-black py-2 last:!border-none mb-0 text-center font-bold cursor-pointer hover:bg-[#F0F0F0] hover:text-[#ce2027]"
            style={{
              ...ibm_plex_sans.style,
              color: type === "handong" ? "#ce2027" : "black",
            }}
            onClick={() => setType("handong")}
          >
            {locale === "en"
              ? "Handong Global University (Korea)"
              : "Đại học Handong Global (Hàn Quốc)"}
          </li>
          <li
            className="flex-1 border-right border-black py-2 last:!border-none mb-0 text-center font-bold cursor-pointer hover:bg-[#F0F0F0] hover:text-[#ce2027]"
            style={{
              ...ibm_plex_sans.style,
              color: type === "uhasselt" ? "#ce2027" : "black",
            }}
            onClick={() => setType("uhasselt")}
          >
            {locale === "en"
              ? "Hasselt University (Belgium)"
              : "Đại học Hasselt (Bỉ)"}
          </li>
        </ul>

        <div className="mt-2 p-3 border border-black">
          <div className="info__container mt-3">{info[type].children}</div>
        </div>
      </div>

      <div className="mt-20">
        <div className="row">
          <div className="col-12 col-lg-6 flex-1">
            <figure className="w-full h-full">
              <Image
                src="/images/courses/graduate/handong.jpg"
                className="w-full h-full object-cover object-top"
                alt=""
                width={800}
                height={500}
                quality={100}
              />
            </figure>
          </div>
          <div className="col-12 col-lg-6 flex-1 mt-6 lg:mt-0">
            <div className="px-20 flex w-full h-full flex-col justify-center">
              <h3
                className="text-[#00477F] uppercase text-4xl text-center"
                style={ibm_plex_sans.style}
              >
                {locale === "en"
                  ? "Handong Global University (Korea)"
                  : "Đại học Handong Global (Hàn Quốc)"}
              </h3>

              <p className="text-black text-base text-justify">
                {locale === "en" ? (
                  <>
                    Handong Global University (HGU) is a university located in
                    Pohang, North Gyeongsang Province, South Korea. Founded in
                    December 1994 and officially commencing operations in 1995,
                    HGU features a campus of approximately 200 acres (0.81 km²),
                    with around 130 academic faculty members and 78
                    administrative staff, serving more than 3,955 undergraduate
                    and 397 graduate students (2021). HGU is ranked 90th in
                    South Korea and 4460th globally by EduRank 2025, while
                    achieving position 614 in the QS Asian University Rankings
                    2026, affirming its status as one of the standout young
                    universities with a strong focus on global education.
                  </>
                ) : (
                  <>
                    Handong Global University (HGU) là một trường đại học nằm
                    tại thành phố Pohang, tỉnh Bắc Gyeongsang, Hàn Quốc. Trường
                    được thành lập vào tháng 12 năm 1994 và chính thức hoạt động
                    từ năm 1995. HGU có khuôn viên rộng khoảng 200 acre (khoảng
                    0,81 km²) với 130 giảng viên học thuật và 78 nhân viên hành
                    chính, đào tạo hơn 3.955 sinh viên đại học và 397 sinh viên
                    sau đại học (2021). Theo các bảng xếp hạng uy tín mới nhất,
                    HGU xếp hạng 90 tại Hàn Quốc và 4460 trên thế giới theo
                    EduRank 2025, đồng thời đạt vị trí 614 trong QS Asian
                    University Rankings 2026, khẳng định vị thế là một trong
                    những trường đại học trẻ nổi bật với trọng tâm giáo dục toàn
                    cầu.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="row flex-row-reverse mt-9">
          <div className="col-12 col-lg-6 flex-1">
            <figure className="w-full h-full">
              <Image
                src="/images/courses/graduate/uhasselt.jpg"
                className="w-full h-full object-cover object-top"
                alt=""
                width={800}
                height={500}
                quality={100}
              />
            </figure>
          </div>
          <div className="col-12 col-lg-6 flex-1 mt-6 lg:mt-0">
            <div className="px-20 flex w-full h-full flex-col justify-center">
              <h3
                className="text-[#00477F] uppercase text-4xl text-center"
                style={ibm_plex_sans.style}
              >
                {locale === "en"
                  ? "Hasselt University (Belgium)"
                  : "Đại học Hasselt (Bỉ)"}
              </h3>

              <p className="text-black text-justify text-base">
                {locale === "en" ? (
                  <>
                    Hasselt University (UHasselt) is a public research-intensive
                    university, established in 1971 under the original name
                    Limburg Universitair Centrum (LUC) and officially renamed
                    Hasselt University in 2005. It began operations in 1973 with
                    only two faculties and has since grown into one of Belgium’s
                    leading young universities, emphasizing high-quality
                    education, innovative research, and strong international
                    orientation. UHasselt has two main campuses located in the
                    city of Hasselt (Martelarenlaan 42, 3500 Hasselt) and
                    Diepenbeek, in the multilingual and open region of Flanders,
                    Belgium – right in the heart of Europe and conveniently
                    connected to major cities such as Brussels, London, Paris,
                    and Berlin. According to the latest reputable rankings,
                    UHasselt is placed 301–350 in the Times Higher Education
                    (THE) World University Rankings, ranked 597 in the QS World
                    University Rankings 2026, 763 globally in US News Best
                    Global Universities, and 1086 worldwide (9th in Belgium)
                    according to EduRank 2025.
                  </>
                ) : (
                  <>
                    Đại học Hasselt (UHasselt) là một trường đại học công lập
                    nghiên cứu chuyên sâu, được thành lập năm 1971 với tên gọi
                    ban đầu là Limburg Universitair Centrum (LUC), và chính thức
                    đổi tên thành Hasselt University vào năm 2005. Trường bắt
                    đầu hoạt động từ năm 1973 với chỉ hai khoa ban đầu, và dần
                    phát triển thành một trong những trường đại học trẻ hàng đầu
                    tại Bỉ, nhấn mạnh vào giáo dục chất lượng cao, nghiên cứu
                    đổi mới và định hướng quốc tế. UHasselt tọa lạc tại hai
                    khuôn viên chính ở thành phố Hasselt (địa chỉ Martelarenlaan
                    42, 3500 Hasselt) và Diepenbeek, thuộc vùng Flanders, Bỉ –
                    một khu vực đa ngôn ngữ và cởi mở, nằm ở trung tâm châu Âu,
                    thuận tiện kết nối với các thành phố lớn như Brussels,
                    London, Paris hay Berlin. Theo các bảng xếp hạng uy tín mới
                    nhất, UHasselt đứng ở vị trí 301-350 trong Times Higher
                    Education (THE) World University Rankings. Trong QS World
                    University Rankings 2026, trường xếp hạng 597. Ngoài ra,
                    theo US News Best Global Universities, UHasselt xếp hạng 763
                    toàn cầu, và theo EduRank 2025, trường đứng thứ 1086 thế
                    giới cũng như thứ 9 tại Bỉ.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
        {/* <div className="row mt-9">
          <div className="col-12 col-lg-6 flex-1 max-w-">
            <figure className="w-full h-full">
              <Image
                src="/images/courses/graduate/kuleuven.png"
                className="w-full h-full object-cover object-top"
                alt=""
                width={800}
                height={500}
                quality={100}
              />
            </figure>
          </div>
          <div className="col-12 col-lg-6 flex-1">
            <div className="px-20 flex w-full h-full flex-col justify-center">
              <h3
                className="text-[#00477F] uppercase text-4xl text-center"
                style={ibm_plex_sans.style}
              >
                {locale === "en"
                  ? "KU Leuven University (Belgium)"
                  : "Đại học KU Leuven (Bỉ)"}
              </h3>
              <p className="text-black text-base text-justify">
                {locale === "en" ? (
                  <>
                    Provides a global perspective on housing, spatial planning,
                    and social inclusion, helping learners develop innovative
                    solutions for livable, equitable cities.
                    <br />
                    <br />
                    For 600 years, KU Leuven has been established in 1425, one
                    of the oldest universities in Europe. It has been driven by
                    unending curiosity and a search for knowledge. The result is
                    cutting-edge research that attracts the foremost minds in
                    academia, engages our diverse student body, and ignites
                    partnerships with industry to benefit society as a whole. KU
                    Leuven is an international community where innovative
                    research forms the basis of all our academic programs.
                    Across the university, driven researchers and curious
                    students continually gain new insights and use their
                    knowledge to tackle the foremost challenges of our time.
                  </>
                ) : (
                  <>
                    Mang đến góc nhìn toàn cầu về nhà ở, quy hoạch không gian và
                    hòa nhập xã hội, hỗ trợ người học phát triển các giải pháp
                    sáng tạo cho những đô thị đáng sống và công bằng.
                    <br />
                    <br />
                    Trường có 600 năm hình thành và phát triển, được thành lập
                    từ năm 1425 và là một trong những trường đại học lâu đời
                    nhất châu Âu. Đại học KU Leuven luôn giữ vững tinh thần học
                    hỏi và khát vọng khám phá tri thức. Chính điều đó đã tạo nên
                    những công trình nghiên cứu tiên tiến, thu hút các nhà khoa
                    học hàng đầu, truyền cảm hứng cho sinh viên đến từ nhiều
                    quốc gia, và mở rộng hợp tác với doanh nghiệp để phục vụ
                    cộng đồng. KU Leuven cung cấp một môi trường quốc tế, nơi
                    nghiên cứu sáng tạo là nền tảng cho mọi chương trình đào
                    tạo. Tại đây, các nhà nghiên cứu và sinh viên không ngừng
                    tìm tòi, học hỏi, và vận dụng kiến thức để giải quyết những
                    vấn đề cấp thiết của xã hội hiện đại.
                  </>
                )}
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

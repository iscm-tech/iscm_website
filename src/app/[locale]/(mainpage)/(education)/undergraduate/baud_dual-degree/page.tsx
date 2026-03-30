"use client";

import { useLocale, useTranslations } from "next-intl";
import { useCallback } from "react";

// Import Utils
import { ibm_plex_sans } from "@/app/fontDeclare";
import "../style.scss";

import Image from "next/image";
import Link from "next/link";
import { RevealWrapper } from "next-reveal";
import { Calendar } from "lucide-react";
import StickyNav from "../baud/components/stickyNav";

export default function DualDegree() {
  const locale = useLocale();
  const i18n = useTranslations();

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
    []
  );

  return (
    <section className="pb-32">
      <div
        className="w-screen relative bg-black before:z-0 before:bg-[#12162CA1] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0"
        style={{
          backgroundImage: "url(/images/courses/auckland_uni.png)",
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
                  ? "international dual degree program"
                  : "chương trình cử nhân song bằng"}
              </h1>
            </div>
            <div className="row pt-7">
              <div className="col-12 col-md-5">
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
                <div className="row justify-between pt-3">
                  <p
                    className="text-white font-medium col-8 leading-normal text-center mb-0"
                    style={ibm_plex_sans.style}
                  >
                    {locale === "en" ? (
                      "Bachelor Progam Architectural and Urban Design Inclusive Smart City"
                    ) : (
                      <>
                        Chương trình Cử nhân <br /> Thiết kế Kiến trúc và Đô thị
                        <br />
                        hướng tới Thành phố Thông minh
                      </>
                    )}
                  </p>

                  <div className="flex col-4 items-center justify-end">
                    <Calendar color="white" size={36} />
                    <span
                      className="text-white inline-block ml-3 font-bold text-xl whitespace-nowrap capitalize"
                      style={ibm_plex_sans.style}
                    >
                      2 {i18n("year")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-2 hidden md:flex justify-center">
                <div className="h-full w-2 bg-white"></div>
              </div>
              <div className="col-12 col-md-5">
                <figure className="w-full flex justify-center">
                  <Image
                    src="/images/logo/auckland.png"
                    width={150}
                    height={50}
                    alt="logo Univeristy of Auckland"
                    className="object-contain w-fit h-fit bg-white"
                    quality={100}
                  />
                </figure>
                <div className="row justify-between pt-3">
                  <p
                    className="text-white font-medium col-8 leading-normal text-center mb-0"
                    style={ibm_plex_sans.style}
                  >
                    {locale === "en" ? (
                      <>Bachelor Program Architectural Study</>
                    ) : (
                      <>
                        Chương trình Cử nhân <br /> Nghiên cứu Kiến trúc
                      </>
                    )}
                  </p>

                  <div className="flex col-4 items-center justify-end">
                    <Calendar color="white" size={36} />
                    <span
                      className="text-white inline-block ml-3 font-bold text-xl whitespace-nowrap capitalize"
                      style={ibm_plex_sans.style}
                    >
                      2 {i18n("year")}
                    </span>
                  </div>
                </div>
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
        <StickyNav />

        <div className="flex items-center pt-20 pb-32 justify-center">
          <div className="flex flex-col items-center leading-normal">
            <h1
              className="uppercase text-[#CD2027] text-center"
              style={ibm_plex_sans.style}
            >
              {locale === "en" ? "about the program" : "tổng quan chương trình"}
            </h1>
            <p className="text-black text-lg text-justify mt-3 leading-normal">
              {locale === "en" ? (
                <>
                  A dual degree program combining progressive curriculum with a
                  unique collaborative learning environment to develop
                  creativity, artistry and innovation. Affordable study abroad
                  opportunity to learn about Architecture and creative urban
                  planning in the world&apos;s leading Smart City.
                </>
              ) : (
                <>
                  Chương trình song bằng kết hợp giữa chương trình đào tạo tiên
                  tiến và môi trường học tập hợp tác độc đáo, nhằm phát triển tư
                  duy sáng tạo, năng lực nghệ thuật và tinh thần đổi mới. Đây là
                  cơ hội du học với chi phí hợp lý, giúp sinh viên tìm hiểu
                  chuyên sâu về Kiến trúc và quy hoạch đô thị sáng tạo tại một
                  trong những Thành phố Thông minh hàng đầu thế giới.
                </>
              )}
            </p>

            <div className="row xl:justify-evenly justify-center gap-y-5 gap-x-3 mt-4 w-full">
              <Link
                href="https://www.auckland.ac.nz/en.html"
                target="_blank"
                className="btn btn-outline-primary !text-[18px] !font-bold col-md-5 col-12"
              >
                {locale === "en"
                  ? "Learn more Auckland University"
                  : "Tìm hiểu thêm về Đại học Auckland"}
              </Link>
              <Link
                href="https://www.auckland.ac.nz/en/study/international-students.html"
                target="_blank"
                className="btn btn-outline-primary !text-[18px] !font-bold col-md-5 col-12"
              >
                {locale === "en"
                  ? "Learn more International Students"
                  : "Tìm hiểu thêm về sinh viên quốc tế"}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row gap-y-5 pl-[7px] pr-[26px]">
        <div className="col-md-6 col-xl-3 flex flex-col px-1">
          <figure className="aspect-[1/.5] lg:aspect-[1/1.025] w-full mb-0">
            <Image
              src="/images/courses/practice.png"
              alt=""
              width={250}
              height={150}
              className="w-full h-full object-cover"
              quality={90}
            />
          </figure>
          <div className="py-3 px-6 bg-[#CD2027] flex flex-col justify-around flex-1">
            <h4
              className="text-white text-xl lg:text-2xl font-bold mb-1 text-center"
              style={ibm_plex_sans.style}
            >
              {locale === "en" ? "Local Practice" : "Thực hành Địa phương"}
            </h4>
            <p className="text-white text-sm lg:text-base text-[15px] mb-0 text-justify">
              {locale === "en" ? (
                <>
                  Approaching practical issues happening in regions and cities
                  in Vietnam through the Smart Urban Architecture and Design
                  program.
                </>
              ) : (
                <>
                  Tiếp cận các vấn đề thực tiễn đang diễn ra tại các khu vực và
                  đô thị ở Việt Nam.
                </>
              )}
            </p>
          </div>
        </div>
        <div className="col-md-6 col-xl-3 flex flex-col px-1">
          <figure className="aspect-[1/.5] lg:aspect-[1/1.025] w-full mb-0">
            <Image
              src="/images/courses/SC-4.jpg"
              alt=""
              width={250}
              height={150}
              className="w-full h-full object-cover"
              quality={90}
            />
          </figure>
          <div className="py-3 px-6 bg-[#00477F] flex flex-col justify-around flex-1">
            <h4
              className="text-white text-2xl font-bold mb-1 text-center"
              style={ibm_plex_sans.style}
            >
              {locale === "en" ? "Think Globally" : "Tư duy Toàn cầu"}
            </h4>
            <p className="text-white lg:text-base text-sm text-justify mb-0">
              {locale === "en" ? (
                <>
                  Understand design trends and technology applications while
                  living and studying in the smart city of Auckland with the
                  Bachelor of Architecture program, University of Auckland.
                </>
              ) : (
                <>
                  Nắm bắt các xu hướng thiết kế và ứng dụng công nghệ trong khi
                  sinh sống và học tập tại thành phố thông minh Auckland, thông
                  qua chương trình Cử nhân Kiến trúc tại Đại học Auckland.
                </>
              )}
            </p>
          </div>
        </div>
        <div className="col-md-6 col-xl-3 flex flex-col px-1">
          <figure className="aspect-[1/.5] lg:aspect-[1/1.025] w-full mb-0">
            <Image
              src="/images/courses/activity.png"
              alt=""
              width={250}
              height={150}
              className="w-full h-full object-cover"
              quality={90}
            />
          </figure>
          <div className="py-3 px-6 bg-[#CD2027] flex flex-col justify-around flex-1">
            <h4
              className="text-white text-2xl text-center font-bold mb-1"
              style={ibm_plex_sans.style}
            >
              {locale === "en" ? "Act Locally" : "Hành động tại Địa phương"}
            </h4>
            <p className="text-white lg:text-base text-sm mb-0 text-justify">
              {locale === "en" ? (
                <>
                  Apply learned knowledge to solve local problems, contributing
                  to the creation of smart, sustainable architecture, regions
                  and cities in Vietnam.
                </>
              ) : (
                <>
                  Vận dụng kiến thức đã học để giải quyết các vấn đề thực tiễn,
                  góp phần xây dựng kiến trúc, vùng và đô thị thông minh, bền
                  vững tại Việt Nam.
                </>
              )}
            </p>
          </div>
        </div>
        <div className="col-md-6 col-xl-3 flex flex-col px-1">
          <figure className="aspect-[1/.5] lg:aspect-[1/1.025] w-full mb-0">
            <Image
              src="/images/courses/challenge.png"
              alt=""
              width={250}
              height={150}
              className="w-full h-full object-cover"
              quality={90}
            />
          </figure>
          <div className="py-3 px-6 bg-[#00477F] flex flex-col justify-around flex-1">
            <h4
              className="text-white text-2xl font-bold mb-1 text-center"
              style={ibm_plex_sans.style}
            >
              {locale === "en" ? "Lead the change" : "Tiên phong đổi mới"}
            </h4>
            <p className="text-white lg:text-base text-sm text-justify mb-0">
              {locale === "en" ? (
                <>
                  Continue to research and learn long-term to continuously
                  develop solutions for smart cities, leading the world&apos;s
                  development trends.
                </>
              ) : (
                <>
                  Không ngừng nghiên cứu và học tập trong dài hạn để liên tục
                  phát triển các giải pháp cho thành phố thông minh, đón đầu xu
                  hướng phát triển toàn cầu.
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-11">
        <div className="flex flex-wrap">
          <div className="flex-1">
            <figure className="w-full">
              <Image
                src="/images/courses/aucklandcity.jpg"
                className="w-full h-auto object-cover object-top"
                alt=""
                width={600}
                height={300}
                quality={90}
              />
            </figure>
          </div>
          <div className="flex-1">
            <div className="px-20 flex w-full h-full flex-col justify-center">
              <h3
                className="text-[#00477F] uppercase text-4xl text-center"
                style={ibm_plex_sans.style}
              >
                {locale === "en" ? "city of auckland" : "Thành phố Auckland"}
              </h3>
              <p
                className="text-[#00477F] !italic text-center"
                style={ibm_plex_sans.style}
              >
                {locale === "en"
                  ? "World Leading Smart City"
                  : "Dẫn đầu thế giới về Thành phố Thông minh"}
              </p>

              <p className="text-black text-justify text-base">
                {locale === "en" ? (
                  <>
                    Auckland City - a modern, multicultural city, is widely
                    regarded as the perfect destination for international
                    students. Located in the north of New Zealand, Auckland
                    possesses the beauty of European architecture, interwoven
                    with an efficient and intelligently planned natural
                    landscape.
                  </>
                ) : (
                  <>
                    Thành phố Auckland – một đô thị hiện đại và đa văn hóa, được
                    công nhận rộng rãi là điểm đến lý tưởng cho sinh viên quốc
                    tế. Nằm ở phía Bắc New Zealand, Auckland sở hữu vẻ đẹp kiến
                    trúc châu Âu, hòa quyện với một cảnh quan thiên nhiên được
                    quy hoạch thông minh và hiệu quả.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse mt-9 flex-wrap">
          <div className="flex-1">
            <figure className="w-full">
              <Image
                src="/images/courses/campus auckland city.jpg"
                className="w-full h-auto object-cover object-top"
                alt=""
                width={600}
                height={300}
                quality={90}
              />
            </figure>
          </div>
          <div className="flex-1">
            <div className="px-20 flex w-full h-full flex-col justify-center">
              <h3
                className="text-[#00477F] uppercase text-4xl text-center"
                style={ibm_plex_sans.style}
              >
                {locale === "en"
                  ? "UNIVERSITY OF AUCKLAND"
                  : "Đại học Auckland"}
              </h3>
              <p
                className="text-[#00477F] !italic text-center"
                style={ibm_plex_sans.style}
              >
                {locale === "en"
                  ? "World Top Sustainable University"
                  : "Đại học Bền vững Hàng đầu Thế giới"}
              </p>

              <p className="text-black text-justify text-base">
                {locale === "en" ? (
                  <>
                    Established in 1883, the University of Auckland (Waipa
                    Taumata Rau) is New Zealand&apos;s largest university with
                    over 40,000 students, and 10,000 graduates each year. In
                    2024, the University of Auckland became the leading
                    sustainable university, ranked 1st in Oceania, and 5th in
                    the world, according to the QS World University
                    Sustainability Rankings.
                  </>
                ) : (
                  <>
                    Được thành lập vào năm 1883, Đại học Auckland (Waipa Taumata
                    Rau) là trường đại học lớn nhất New Zealand với hơn 40,000
                    sinh viên và 10,000 cử nhân tốt nghiệp mỗi năm. Vào năm
                    2024, Đại học Auckland trở thành trường đại học dẫn đầu về
                    phát triển bền vững, xếp hạng 1 tại khu vực Châu Đại Dương
                    và xếp hạng 5 trên thế giới, theo bảng xếp hạng QS World
                    University Sustainability Rankings.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

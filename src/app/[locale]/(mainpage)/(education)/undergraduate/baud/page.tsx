"use client";

import { useCallback, useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { useDOMParser as DOMParser } from "@/hooks/domHook";
import $ from "jquery";

// Import Utils
import { ibm_plex_sans } from "@/app/fontDeclare";
import envConfig from "@/config";
import "../style.scss";

// Import Data
import workPositionVi from "./data/workPositionVi.json";
import workPositionEn from "./data/workPositionEn.json";
import subEn from "./data/2025/programEn.json";
import subVi from "./data/2025/programVi.json";
import programStructure from "./data/programStucture.json";

// Import Components
import Link from "next/link";
import * as motion from "motion/react-client";
import ImageNext from "next/image";
import { Collapse, Image } from "antd";
import { RevealWrapper } from "next-reveal";
import { AnimatePresence } from "motion/react";
import { AlignJustifyIcon } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import ProgramSubject from "./components/programSubject";
import DomParser from "@/components/domParser";

interface WorkPositionType {
  position: string;
  details: {
    desc: string;
    missions: string[];
  };
}

export default function UndergraduateCoursePage() {
  const locale = useLocale();
  const program: {
    module: string;
    subjects: { name: string; credits: number; desc?: string }[];
  }[] = locale === "en" ? subEn : subVi;
  const jobList = locale === "en" ? workPositionEn : workPositionVi;
  const [programStructureImage, setProgramStructureImage] = useState<string>(
    programStructure.filter((item) => item.id === 2025)[0].programCourse,
  );

  const [jobDesc, setJobDesc] = useState<WorkPositionType>(jobList[0]);
  const [subjectList, setSubjectLsit] = useState<{
    module: string;
    subjects: { name: string; credits: number; desc?: string }[];
  }>(program[0]);

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

  useEffect(() => {
    const ele = $(".jobDesc .contentt")[0];
    const observer = new MutationObserver(() => {
      if (ele.scrollHeight > ele.clientHeight) {
        $(".scroll-down").fadeIn();
      } else {
        $(".scroll-down").fadeOut();
      }
    });

    observer.observe(ele, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const headerEle = $(".header__poster")[0];

    if (window.scrollY >= 100) {
      headerEle.style.borderBottomRightRadius = "45px";
      headerEle.style.borderBottomLeftRadius = "45px";
    } else {
      headerEle.style.borderBottomRightRadius = "0";
      headerEle.style.borderBottomLeftRadius = "0";
    }

    if (document.body.clientWidth >= 992) {
      window.onscroll = () => {
        if (window.scrollY >= 100) {
          headerEle.style.borderBottomRightRadius = "45px";
          headerEle.style.borderBottomLeftRadius = "45px";
        } else {
          headerEle.style.borderBottomRightRadius = "0";
          headerEle.style.borderBottomLeftRadius = "0";
        }
      };
    }

    return () => {
      window.onscroll = null;
    };
  }, [document.body.clientWidth]);

  return (
    <section className="course_undergraduate pr-[15px]">
      <div
        className="header__poster mr-[15px] overflow-hidden duration-200 transition-all w-screen relative bg-black before:z-0 before:bg-black/40 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0"
        style={{
          backgroundImage: `url(/images/courses/undergraduate/2509-EVENT-K51OrientationDay.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "calc(100vh - 60px)",
        }}
      >
        <div className="z-[1] relative pt-[150px] text-center container">
          <RevealWrapper delay={0} distance="0px" opacity={0} origin="bottom">
            <h1
              className="uppercase text-white text-3xl! lg:text-5xl!"
              style={ibm_plex_sans.style}
            >
              {locale === "en"
                ? "bachelor of Architectural and Urban Design for inclusive Smart City"
                : "kiến trúc và thiết kế đô thị thông minh"}
            </h1>
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
        {/* <StickyNav /> */}

        {/* ABOUT SECTION  */}
        <div id="about">
          <h2
            className="uppercase mt-28 text-black"
            style={ibm_plex_sans.style}
          >
            {locale === "en" ? "about program" : "giới thiệu tổng quan"}
          </h2>

          <div className="mt-3 row">
            <p className="col-12 col-lg-7 text-justify mb-5 mb-lg-0">
              {locale === "en" ? (
                <>
                  Bachelor in Architectural and Urban Design for Inclusive Smart
                  City at UEH is developed with a multidisciplinary and
                  sustainable approach. Students enrolled in this program embark
                  on a journey of honing their analytical skills to examine
                  urban issues through an interdisciplinary perspective,
                  integrating technological applications to devise solutions
                  aligned with the principle of “Global Vision, Local
                  Commitment”. The program allows students to take four
                  theoretical courses and two studio courses entirely taught in
                  English. They will also be guided by international lecturers
                  and have the opportunity to study alongside international
                  students. Additionally, students have the opportunity to study
                  in New Zealand through a collaborative program, with the
                  potential to earn a dual degree in partnership with the
                  University of Auckland. Furthermore, annual scholarships
                  provided by the Institute of Smart Urban Management and its
                  associated partners offer financial support to outstanding
                  students. Upon graduation, students will be equipped to work
                  effectively in various organizations across related fields or
                  pursue further studies in master&apos;s programs. Their
                  interdisciplinary training and technological expertise will
                  allow them to adapt to diverse professional environments and
                  contribute meaningfully to urban and architectural
                  development. Let me know if you need additional refinements!
                </>
              ) : (
                <>
                  Chương trình Cử nhân Kiến trúc và Thiết kế Đô thị Thông minh
                  là một trong những chương trình của UEH được xây dựng theo
                  hướng tiếp cận đa ngành và bền vững. Sinh viên theo học sẽ
                  bước lên hành trình rèn giũa khả năng phân tích các vấn đề đô
                  thị thông qua góc nhìn đa ngành và ứng dụng công nghệ để đưa
                  ra các giải pháp “Tầm nhìn Toàn cầu, Cam kết Địa phương”.
                  <br />
                  <br />
                  Chương trình Cử nhân Kiến trúc và Thiết kế Đô thị Thông minh
                  Tiếng Anh bán phần là một trong những chương trình của UEH
                  được xây dựng theo hướng tiếp cận đa ngành và bền vững, và
                  toàn cầu hóa. Sinh viên theo học sẽ bước lên hành trình rèn
                  giũa khả năng phân tích các vấn đề đô thị thông qua góc nhìn
                  đa ngành và ứng dụng công nghệ để đưa ra các giải pháp “Tầm
                  nhìn Toàn cầu, Cam kết Địa phương”. Chương trình cho phép sinh
                  viên được học tập 4 môn học lý thuyết và 2 môn học đồ án được
                  hướng dẫn toàn bộ bằng tiếng Anh, cũng như được hướng dẫn bởi
                  các giảng viên quốc tế, và có cơ hội học tập chung với các
                  sinh viên quốc tế. Bên cạnh đó, sinh viên cũng có cơ hội để
                  học tập tại New Zealand với chương trình liên kết có cơ hội
                  nhận song bằng cùng Đại học Auckland, cùng với các học bổng
                  được trao tặng hàng năm đến từ Viện Đô thị Thông minh và Quản
                  lý và các đối tác. Sau khi tốt nghiệp, sinh viên có khả năng
                  làm việc hiệu quả trong các tổ chức khác nhau ở các lĩnh vực
                  có liên quan hoặc tiếp tục theo học các chương trình thạc sĩ.
                </>
              )}
              <br />
              <br />
              {locale === "en" ? (
                <>
                  Upon graduation, students will be equipped to work effectively
                  in various organizations across related fields or pursue
                  further studies in master&apos;s programs. Their
                  interdisciplinary training and technological expertise will
                  allow them to adapt to diverse professional environments and
                  contribute meaningfully to urban and architectural
                  development. Let me know if you need additional refinements!
                </>
              ) : (
                <>
                  Sau khi tốt nghiệp, sinh viên có khả năng làm việc hiệu quả
                  trong các tổ chức khác nhau ở các lĩnh vực có liên quan hoặc
                  tiếp tục theo học các chương trình thạc sĩ.
                </>
              )}
            </p>
            <div className="col-12 col-lg-5">
              <div className="row flex-col-reverse">
                <figure className="col-12 flex-1 mb-0">
                  <ImageNext
                    src="/images/courses/undergraduate/project gallery.jpg"
                    alt=""
                    width={500}
                    height={500}
                    quality={90}
                    className="w-full h-full object-contain"
                  />
                </figure>
                <figure className="col-12 flex-1 mb-1">
                  <div className="row">
                    <ImageNext
                      src="/images/courses/undergraduate/SC-2.jpg"
                      alt=""
                      width={250}
                      height={250}
                      quality={90}
                      className="w-full h-full object-contain col-6 pr-1"
                    />
                    <ImageNext
                      src="/images/courses/undergraduate/IMG_5525.png"
                      alt=""
                      width={250}
                      height={250}
                      quality={90}
                      className="w-full h-full object-contain col-6 pl-1"
                    />
                  </div>
                </figure>
              </div>
            </div>
          </div>

          {/* JOB CHANCE */}
          <div className="row mt-44">
            <div className="col-12">
              <h2 className="text-black uppercase" style={ibm_plex_sans.style}>
                {locale === "en"
                  ? "Unlock Your Future, Shape Your Career"
                  : "Cơ hội nghề nghiệp"}
              </h2>
            </div>
          </div>

          <div className="row justify-between mt-3">
            <div className="col-12 col-lg-5">
              <div className="flex flex-wrap gap-x-4 gap-y-8">
                {jobList.map(({ position, details }) => (
                  <div
                    className="btn btn-outline-primary !bg-[#CD2027] text-white !flex flex-col justify-center items-center text-base! p-3 whitespace-normal break-keep break-words text-wrap"
                    key={position}
                    style={{ width: "calc(50% - 8px)" }}
                    onClick={() => setJobDesc({ position, details })}
                  >
                    <p className="text-current! text-base! font-bold! mb-0 uppercase">
                      {DOMParser(position)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-12 col-lg-7 max-h-[550px] flex mt-6 lg:mt-0 relative">
              <div className="overflow-auto flex-1 jobDesc border-[3px] border-[#cd2027]">
                <h4
                  className="text-center bg-[#CD2027] py-3 uppercase text-xl! px-5 z-[99]"
                  style={{ position: "sticky", top: 0 }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={jobDesc.position}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-white">
                        {DOMParser(jobDesc.position)}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </h4>
                <div className="px-5 py-3 contentt">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={jobDesc.details.desc}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.1 }}
                    >
                      <p className="text-black text-justify">
                        {jobDesc.details.desc}
                      </p>
                      <h4 className="uppercase">
                        {locale === "en"
                          ? "primary responsibilities"
                          : "vai trò chính"}
                        :
                      </h4>
                      <ul className="list-disc! pl-4">
                        {jobDesc.details.missions.map((mission) => (
                          <li className="!list-item" key={mission}>
                            {mission}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              <div className="scroll-down hidden absolute bottom-0 !top-auto left-0 right-0 h-9 bg-transparent">
                <div
                  className="bg-black/50 w-full h-full"
                  style={{
                    maskImage:
                      "linear-gradient(0, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, .6) 50%, rgba(0, 0, 0, 0))",
                  }}
                ></div>
                <div className="box-animate mt-1 bg-transparent">
                  <FontAwesomeIcon icon={faAngleDown} className="text-2xl" />
                </div>
              </div>
            </div>
          </div>
          {/* ############### */}
        </div>
        {/* ############### */}
        {/* PROGRAM */}
        <div id="program" className="mt-16">
          <div className="row flex-row-reverse flex-md-row">
            <div
              className="col-12 col-md-6 text-black font-bold text-xl"
              style={ibm_plex_sans.style}
            >
              {locale === "en" ? (
                <>
                  <h2 className="uppercase">Program Structure</h2>
                  Comprising 5 core knowledge domains{" "}
                  <span className="text-base font-normal">123 credits</span>
                </>
              ) : (
                <>
                  <h2 className="uppercase">Tổng quan chương trình</h2>
                  Với 5 nhóm kiến thức cốt lõi{" "}
                  <span className="text-base font-normal">123 tín chỉ</span>
                </>
              )}
            </div>
          </div>
          <div className="row mt-10 flex-col flex-lg-row items-start justify-between">
            <div className="col-12 col-lg-5 flex flex-wrap gap-5 h-fit mb-5 mb-lg-0">
              {program.map(({ module, subjects }) => (
                <div
                  className="btn btn-outline-primary !flex justify-center items-center text-base p-3 whitespace-normal break-keep break-words text-wrap"
                  key={module}
                  style={{ width: "calc(50% - 10px)" }}
                  onClick={() => setSubjectLsit({ module, subjects })}
                >
                  <p className="text-[#CD2027]! text-base! font-bold! mb-0 uppercase">
                    <DomParser content={module} />
                  </p>
                </div>
              ))}
            </div>
            <ProgramSubject subjectLists={subjectList} />
          </div>

          <div className="mt-16">
            <h2 className="uppercase text-black mb-4">
              {locale === "en" ? "Program Objectives" : "Mục tiêu đào tạo"}
            </h2>

            <p>
              {locale === "en" ? (
                <>
                  The Bachelor of Architectural and Urban Design for inclusive
                  Smart City program trains students to become sustainable
                  design professionals towards smart cities
                </>
              ) : (
                <>
                  Chương trình cử nhân chuyên ngành Kiến trúc và Thiết kế đô thị
                  thông minh đào tạo sinh viên trở thành các chuyên gia thiết kế
                  bền vững hướng tới đô thị thông minh
                </>
              )}
            </p>
            {locale === "en" ? (
              <ul className="list-disc! pl-4">
                <li className="list-item! text-base">
                  Creates an innovative, general, and coherent body of knowledge
                  on architecture, urban development, and urban design inclusive
                  smart city from a multidisciplinary, transdisciplinary, and
                  global perspective.
                </li>
                <li className="list-item! text-base">
                  Provide learners with the skills to become global citizens
                  acting locally.
                </li>
                <li className="list-item! text-base">
                  To highlight professional ethics, intellectual integrity, and
                  social responsibility.
                </li>
              </ul>
            ) : (
              <ul className="list-disc! pl-4">
                <li className="list-item! text-base">
                  Có khối kiến thức sáng tạo, tổng quát và chặt chẽ về kiến
                  trúc, phát triển đô thị, và thiết kế đô thị thông minh trên
                  quan điểm đa ngành, xuyên ngành và toàn cầu.
                </li>
                <li className="list-item! text-base">
                  Cung cấp cho người học các kỹ năng để trở thành công dân toàn
                  cầu hành động địa phương.
                </li>
                <li className="list-item! text-base">
                  Đề cao đạo đức nghề nghiệp, trí tuệ liêm chính, trách nhiệm xã
                  hội và học tập suốt đời.
                </li>
              </ul>
            )}
          </div>

          <div className="mt-16">
            <h2 className="uppercase text-black mb-4">
              {locale === "en"
                ? "Program Learning Outcomes"
                : "Chuẩn đầu ra của chương trình đào tạo"}
            </h2>

            <div className="container border! border-black py-3">
              <div className="row">
                <div className="col-12 text-center font-bold text-xl text-[#ce2027]">
                  {locale === "en" ? "Knowledge" : "Kiến thức"}
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12 col-md-6 text-justify">
                  <b>PLO1.1</b>:{" "}
                  {locale === "en"
                    ? "Apply a foundational comprehensive, multidisciplinary, interdisciplinary and work-ready knowledge in architecture, urban design, and smart city development to solve complex problems"
                    : "Vận dụng được nền tảng vững chắc, kiến thức toàn diện, đa ngành, liên ngành và thực tế trong kiến trúc, thiết kế đô thị và phát triển thành phố thông minh để giải quyết các vấn đề phức tạp"}
                </div>
                <div className="col-12 col-md-6 text-justify">
                  <b>PLO1.2</b>:{" "}
                  {locale === "en"
                    ? "Demonstrate an international understanding on architecture, urban design and smart city development towards sustainability"
                    : "Thể hiện sự hiểu biết toàn cầu về kiến trúc, thiết kế đô thị và phát triển thành phố thông minh hướng tới bền vững"}{" "}
                </div>
              </div>
              <div className="row mt-4 border-t border-black mx-3">
                <div className="col-12 text-center font-bold text-xl text-[#ce2027] mt-3">
                  {locale === "en" ? "Skills" : "Kỹ năng"}
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12 col-md-4 text-justify">
                  <b>PLO2.1</b>:{" "}
                  {locale === "en"
                    ? "Show ability to communicate effectively from different types including interpersonal, textual, visual, numeracy, and information technology one in various contexts, both in Vietnamese and English"
                    : "Thể hiện được kỹ năng giao tiếp hiệu quả bằng cả tiếng Việt và tiếng Anh, bằng nhiều hình thức trong nhiều bối cảnh khác nhau, bao gồm giao tiếp cá nhân, giao tiếp bằng văn bản, hình ảnh, con số và các ứng dụng công nghệ thông tin khác"}
                </div>
                <div className="col-12 col-md-4 text-justify">
                  <b>PLO2.2</b>:{" "}
                  {locale === "en"
                    ? "Display ability to collect, analyze, and evaluate information and propose ideas for effective problem solving by innovation, simulate, creativity, and critical thinking of architectural and urban solutions"
                    : "Thể hiện khả năng thu thập, phân tích, đánh giá thông tin và đưa ra ý tưởng để giải quyết vấn đề hiệu quả bằng sự đổi mới, sáng tạo và tư duy phản biện trong giải pháp kiến trúc và đô thị"}
                </div>
                <div className="col-12 col-md-4 text-justify">
                  <b>PLO2.3</b>:{" "}
                  {locale === "en"
                    ? "Demonstrate teamwork, negotiation, conflict resolution, leadership and leading to others to achieve desired results"
                    : "Thể hiện năng lực làm việc nhóm, đàm phán, giải quyết xung đột, hợp tác, dẫn dắt, lãnh đạp người khác để đạt được kết quả mong muốn"}
                </div>
              </div>
              <div className="row mt-4 border-t border-black mx-3">
                <div className="col-12 text-center font-bold text-xl text-[#ce2027] mt-3">
                  {locale === "en"
                    ? "Autonomy and Responsibility"
                    : "Tự chủ và Trách nhiệm"}
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12 col-md-4 text-justify">
                  <b>PLO3.1</b>:{" "}
                  {locale === "en"
                    ? "Demonstrate a sense of civic, social responsibility as an urge to act on sustainability"
                    : "Thể hiện ý thức trách nhiệm công dân, xã hội và hành động vì sự bền vững"}
                </div>
                <div className="col-12 col-md-4 text-justify">
                  <b>PLO3.2</b>:{" "}
                  {locale === "en"
                    ? "Perform an ability to learn and work autonomously, independently, and ethically to become lifelong learners with resilience and confidence"
                    : "Thể hiện khả năng học tập và làm việc tự chủ, độc lập và có đạo đức, hướng đến mục tiêu học tập suốt đời với sự tự tin và kiên trì"}
                </div>
                <div className="col-12 col-md-4 text-justify">
                  <b>PLO3.3</b>:{" "}
                  {locale === "en"
                    ? "Comply an intercultural understanding and diversity respect"
                    : "Thấu hiểu môi trường đa văn hoá và tôn trọng sự khác biệt"}
                </div>
              </div>
            </div>
          </div>

          {/* PROGRAM STRUCTURE */}
          <div className="mt-12">
            <h2 className="uppercase text-black mb-4">
              {locale === "en" ? "Program Curriculum" : "Sơ đồ đào tạo"}
            </h2>
            <ul className="flex">
              {programStructure.map(
                (program: {
                  id: number;
                  programCourse: string;
                  years: string;
                  credits: number;
                }) => (
                  <li
                    key={program.id}
                    className={`flex-1 text-center ${
                      program.programCourse === programStructureImage
                        ? "text-[#cd2027]!"
                        : "text-[#3c3939]!"
                    } py-2 px-4 transition-colors cursor-pointer duration-200 hover:bg-[#F0F0F0]`}
                    onClick={() => {
                      setProgramStructureImage(program.programCourse);
                    }}
                  >
                    <p className="mb-0 font-bold! text-xl! text-current!">
                      {program.years}
                    </p>
                    <p className="mb-0">
                      {program.credits}{" "}
                      {locale === "en" ? "credits" : "tín chỉ"}
                    </p>
                  </li>
                ),
              )}
            </ul>
            {programStructureImage && (
              <motion.figure
                key={programStructureImage}
                initial={{
                  opacity: 0,
                  filter: "blur(40px)",
                }}
                animate={{ opacity: 1, filter: "blur(0)" }}
                transition={{ duration: 0.1 }}
                className="w-full min-h-[300px] mt-3"
              >
                <Image
                  src={`${envConfig.API_ENDPOINT}/public/static${programStructureImage}`}
                  alt=""
                  width="100%"
                  className="w-full"
                  preview={{
                    closeIcon: <i className="hidden"></i>,
                    maskClassName: "bg-transparent hover:cursor-zoom-in",
                    mask: (
                      <div className="w-full h-full border-2 border-black"></div>
                    ),
                  }}
                />
              </motion.figure>
            )}
          </div>
          {/* ############### */}

          <div className="mt-16">
            <h2
              className="text-black uppercase leading-normal"
              style={ibm_plex_sans.style}
            >
              {locale === "en"
                ? "Strengths of the Program"
                : "Thế mạnh chương trình"}
            </h2>

            <div className="row justify-around mt-3 gap-11">
              <Link
                href="/facilities/international_studiolab"
                className="col-lg-4 col-md-8 col-12 h-fit lg:h-auto border p-0 overflow-hidden"
              >
                <figure className="w-full mb-2 h-[50%]">
                  <ImageNext
                    src={"/images/studiolab/design-stu_thumb.png"}
                    width={512}
                    height={528}
                    alt=""
                    className="w-full h-full bg-[#ccc] object-cover"
                  />
                </figure>
                <div className="w-full h-[50%] mt-0 py-2 px-4">
                  <h4
                    className="uppercase text-center text-lg! font-bold!"
                    style={ibm_plex_sans.style}
                  >
                    {locale === "en"
                      ? "Collaboration Studio"
                      : "Hợp tác quốc tế"}
                  </h4>
                  <p
                    className="text-base! text-justify mb-0"
                    style={{ textAlignLast: "center" }}
                  >
                    {locale === "en"
                      ? "The project collaborates with domestic and international universities and enterprises."
                      : "Đồ án kết hợp cùng các đại học, doanh nghiệp trong nước và quốc tế"}
                  </p>
                </div>
              </Link>
              <Link
                href="/events"
                className="col-lg-4 col-md-8 h-fit lg:h-auto col-12 flex flex-col border p-0 overflow-hidden"
              >
                <figure className="w-full mb-2 h-[50%]">
                  <ImageNext
                    src={"/images/event-series/ISCM2026timeline-v2.png"}
                    width={512}
                    height={528}
                    alt=""
                    className="w-full h-full bg-[#ccc] object-cover"
                  />
                </figure>
                <div className="w-full h-[50%] mt-0 py-2 px-4">
                  <h4
                    className="uppercase text-center text-lg! font-bold!"
                    style={ibm_plex_sans.style}
                  >
                    {locale === "en"
                      ? "Knowledge Sharing"
                      : "Chuỗi hoạt động chia sẻ tri thức"}
                  </h4>
                  <p
                    className="text-base! text-justify mb-0 overflow-hidden"
                    style={{ textAlignLast: "center" }}
                  >
                    {locale === "en" ? (
                      <>
                        The series of international conferences and workshops is
                        organized annually by the Institute for Smart City and
                        Management in collaboration with its partners, focusing
                        on the theme of Smart and Sustainable Cities.
                      </>
                    ) : (
                      <>
                        Chuỗi sự kiện Hội thảo, Workshop quốc tế được tổ chức
                        hàng năm bởi <br />
                        Viện Đô thị Thông minh và Quản lý cùng các đối tác, với
                        chủ đề hướng tới <br />
                        Đô thị Thông minh và Bền vững
                      </>
                    )}
                  </p>
                </div>
              </Link>
              <Link
                href="/student_life"
                className="col-lg-4 col-md-8 h-fit lg:h-auto col-12 border p-0 overflow-hidden"
              >
                <figure className="w-full mb-2 h-[50%]">
                  <ImageNext
                    src={"/images/backgrounds/student-activitie.jpg"}
                    width={512}
                    height={528}
                    alt=""
                    className="w-full h-full bg-[#ccc] object-cover"
                  />
                </figure>
                <div className="w-full h-[50%] mt-0 py-2 px-4">
                  <h4
                    className="uppercase text-center text-lg! font-bold!"
                    style={ibm_plex_sans.style}
                  >
                    {locale === "en"
                      ? "student activities"
                      : "Hoạt động sinh viên"}
                  </h4>
                  <p
                    className="text-base! text-justify mb-0"
                    style={{ textAlignLast: "center" }}
                  >
                    {locale === "en" ? (
                      <>
                        The dynamic and energetic series of student-led
                        activities fosters connections between different student
                        cohorts of the Smart Architecture and Urban Design
                        Program.
                      </>
                    ) : (
                      <>
                        Năng động và tràn đầy năng lượng, chuỗi các hoạt động do
                        sinh viên thực hiện, gắn kết giữa các khóa sinh viên của
                        Chương trình <br /> Kiến trúc và Thiết kế Đô thị Thông
                        minh
                      </>
                    )}
                  </p>
                </div>
              </Link>
              <Link
                href="/facilities"
                className="col-lg-4 col-md-8 h-fit lg:h-auto col-12 border p-0 overflow-hidden"
              >
                <figure className="w-full mb-2 h-[50%]">
                  <ImageNext
                    src={"/images/backgrounds/studiolab-thumb.jpg"}
                    width={512}
                    height={528}
                    alt=""
                    className="w-full h-full bg-[#ccc] object-cover"
                  />
                </figure>
                <div className="w-full h-[50%] mt-0 py-2 px-4">
                  <h4
                    className="uppercase text-center text-lg! font-bold!"
                    style={ibm_plex_sans.style}
                  >
                    {locale === "en"
                      ? "studiolab system"
                      : "HỆ THỐNG STUDIOLAB"}
                  </h4>
                  <p
                    className="text-base! text-justify mb-0 overflow-clip"
                    style={{ textAlignLast: "center" }}
                  >
                    {locale === "en" ? (
                      <>
                        The modern infrastructure system includes 3 StudioLab
                        rooms, 1 MakerSpace, 1 Gallery, and a Living Lab
                        currently under construction at UEH campuses.
                      </>
                    ) : (
                      <>
                        Hệ thống cơ sở vật chất hiện đại, bao gồm 3 phòng
                        StudioLab, 1 MakerSpace, 1 Gallery, và Living Lab đang
                        được xây dựng ở các cơ sở của UEH
                      </>
                    )}
                  </p>
                </div>
              </Link>
              <Link
                href="/undergraduate/baud_dual-degree"
                className="col-lg-4 col-md-8 h-fit lg:h-auto col-12 border p-0 overflow-hidden"
              >
                <figure className="w-full mb-2 h-[50%]">
                  <ImageNext
                    src={"/images/courses/undergraduate/auckland_uni.png"}
                    width={512}
                    height={528}
                    alt=""
                    className="w-full h-full bg-[#ccc] object-cover object-bottom"
                  />
                </figure>
                <div className="w-full h-[50%] mt-0 py-2 px-4">
                  <h4
                    className="uppercase text-center text-lg! font-bold!"
                    style={ibm_plex_sans.style}
                  >
                    {locale === "en" ? (
                      <>
                        Dual-degree Program with <br /> Auckland University
                      </>
                    ) : (
                      <>
                        Chương trình song bằng với <br /> Đại học Auckland
                      </>
                    )}
                  </h4>
                  <p
                    className="text-base! text-justify mb-0 overflow-clip"
                    style={{ textAlignLast: "center" }}
                  >
                    {locale === "en" ? (
                      <>
                        A dual degree program combining progressive curriculum
                        with a unique collaborative learning environment to
                        develop creativity, artistry and innovation.
                      </>
                    ) : (
                      <>
                        Chương trình song bằng kết hợp giữa chương trình đào tạo
                        tiên tiến và môi trường học tập hợp tác độc đáo, nhằm
                        phát triển tư duy sáng tạo, năng lực nghệ thuật và tinh
                        thần đổi mới.
                      </>
                    )}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* ############### */}
        {/* ADMISSIONS */}
        <div id="apply" className="my-16">
          <h2
            className="text-black uppercase mt-28"
            style={ibm_plex_sans.style}
          >
            {locale === "en"
              ? "Admissions information"
              : "Thông tin tuyển sinh"}
          </h2>

          <Collapse
            ghost
            defaultActiveKey={[0, 1]}
            size="small"
            rootClassName="mt-3 -mx-2"
            items={[
              {
                key: 0,
                showArrow: false,
                label: (
                  <div className="py-3 pl-8 text-white bg-[#CD2027] flex gap-6 items-center">
                    <AlignJustifyIcon />
                    <h3
                      className="uppercase text-white mb-0"
                      style={ibm_plex_sans.style}
                    >
                      {locale === "en"
                        ? "admission information 2026"
                        : "thông tin tuyển sinh 2026"}
                    </h3>
                  </div>
                ),
                children: (
                  <div className="border-2 border-[#CE2027] p-3 -ml-1 mr-0">
                    <div className="py-3">
                      <div className="flex flex-wrap justify-around">
                        <div className="text-center">
                          <h4 className="text-[#CD2027]! text-5xl!">80</h4>
                          <p
                            className="text-2xl! text-black uppercase font-bold! mb-0 mt-3 whitespace-nowrap"
                            style={ibm_plex_sans.style}
                          >
                            {locale === "en" ? "students" : "chỉ tiêu"}
                          </p>
                          <p className="text-black">
                            {locale === "en" ? (
                              <>
                                Standard Programs (Vietnamese) <br />
                                English Standard Programs (100% English)
                              </>
                            ) : (
                              "Chương trình chuẩn và Chương trình bán phần"
                            )}
                          </p>
                        </div>
                        <div className="text-center">
                          <h4 className="text-[#CD2027]! text-5xl!">7580104</h4>
                          <p
                            className="text-2xl! text-black uppercase font-bold! mb-0 mt-3 whitespace-nowrap"
                            style={ibm_plex_sans.style}
                          >
                            {locale === "en"
                              ? "registration code"
                              : "MÃ ĐĂNG KÝ XÉT TUYỂN"}
                          </p>
                          <p className="text-black">
                            {locale === "en"
                              ? "Bachelor in Architectural and Urban Design inclusive Smart City"
                              : "Cử nhân Kiến trúc và Thiết kế Đô thị Thông minh"}
                          </p>
                        </div>
                      </div>

                      <div className="row gap-y-8 mt-4">
                        <div className="col-lg-6 col-12 flex items-center gap-4">
                          <h3
                            style={ibm_plex_sans.style}
                            className="bg-[#CD2027] w-fit! h-fit! aspect-square! px-1 leading-[0.75] text-[46px] mb-0 text-white"
                          >
                            1
                          </h3>
                          <p
                            className="mb-0 leading-tight text-black text-justify"
                            style={ibm_plex_sans.style}
                          >
                            <b>
                              {locale === "en" ? "METHOD" : "PHƯƠNG THỨC"} 1:
                            </b>{" "}
                            {locale === "en" ? (
                              <>
                                Direct admission according to the regulations of
                                the Ministry of Education and Training, quota 2%
                              </>
                            ) : (
                              <>
                                Xét tuyển thẳng theo quy định của Bộ Giáo dục và
                                Đào tạo;
                              </>
                            )}
                          </p>
                        </div>
                        <div className="col-lg-6 col-12 flex items-center gap-4">
                          <h3
                            style={ibm_plex_sans.style}
                            className="bg-[#CD2027] w-fit! h-fit! aspect-square! px-1 leading-[0.75] text-[46px] mb-0 text-white"
                          >
                            2
                          </h3>
                          <p
                            className="mb-0 leading-tight text-black text-justify"
                            style={ibm_plex_sans.style}
                          >
                            <b>
                              {locale === "en" ? "METHOD" : "PHƯƠNG THỨC"} 2:
                            </b>{" "}
                            {locale === "en" ? (
                              <>
                                Admission for candidates graduating from foreign
                                high school programs and holding international
                                certificates, quota 1%
                              </>
                            ) : (
                              <>
                                Phương thức xét tuyển kết hợp: Điểm xét tuyển
                                theo thang điểm 100, là điểm kết hợp của các đầu
                                điểm thí sinh;
                              </>
                            )}
                          </p>
                        </div>
                      </div>

                      <div className="row justify-center mt-16">
                        <Link
                          target="_blank"
                          href={
                            "https://tuyensinh.ueh.edu.vn/bai-viet/ueh-chinh-thuc-khoi-dong-mua-tuyen-sinh-dai-hoc-chinh-quy-2026-doi-moi-phuong-thuc-tuyen-sinh-mo-rong-chuong-trinh-dao-tao-gia-tang-chieu-sau-quoc-te/"
                          }
                          className="btn btn-primary uppercase !font-bold"
                        >
                          {locale === "en"
                            ? "More Information"
                            : "Xem thông tin chi tiết"}
                        </Link>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                key: 1,
                showArrow: false,
                label: (
                  <div className="py-3 pl-8 text-white bg-[#CD2027] flex gap-6 items-center">
                    <AlignJustifyIcon />
                    <h3
                      className="uppercase text-white mb-0"
                      style={ibm_plex_sans.style}
                    >
                      {locale === "en"
                        ? "admission information 2025"
                        : "thông tin tuyển sinh 2025"}
                    </h3>
                  </div>
                ),
                children: (
                  <div className="border-2 border-[#CE2027] p-3 -ml-1 mr-0">
                    <div className="py-3 mb-3">
                      <div className="flex flex-wrap justify-around">
                        <div className="text-center">
                          <h4 className="text-[#CD2027]! text-5xl!">110</h4>
                          <p
                            className="text-2xl! text-black uppercase font-bold! mb-0 mt-3 whitespace-nowrap"
                            style={ibm_plex_sans.style}
                          >
                            {locale === "en" ? "students" : "chỉ tiêu"}
                          </p>
                          <p className="text-black">
                            {locale === "en" ? (
                              <>
                                Standard Programs (Vietnamese) <br />
                                English Standard Programs (100% English)
                              </>
                            ) : (
                              "Chương trình chuẩn và Chương trình bán phần"
                            )}
                          </p>
                        </div>
                        <div className="text-center">
                          <h4 className="text-[#CD2027]! text-5xl!">7580104</h4>
                          <p
                            className="text-2xl! text-black uppercase font-bold! mb-0 mt-3 whitespace-nowrap"
                            style={ibm_plex_sans.style}
                          >
                            {locale === "en"
                              ? "registration code"
                              : "MÃ ĐĂNG KÝ XÉT TUYỂN"}
                          </p>
                          <p className="text-black">
                            {locale === "en"
                              ? "Bachelor in Architectural and Urban Design inclusive Smart City"
                              : "Cử nhân Kiến trúc và Thiết kế Đô thị Thông minh"}
                          </p>
                        </div>
                      </div>

                      <div className="row gap-y-8 mt-4">
                        <div className="col-lg-6 col-12 flex items-center gap-4">
                          <h3
                            style={ibm_plex_sans.style}
                            className="bg-[#CD2027] w-fit! h-fit! aspect-square! px-1 leading-[0.75] text-[46px] mb-0 text-white"
                          >
                            1
                          </h3>
                          <p
                            className="mb-0 leading-tight text-black text-justify"
                            style={ibm_plex_sans.style}
                          >
                            <b>
                              {locale === "en" ? "METHOD" : "PHƯƠNG THỨC"} 1:
                            </b>{" "}
                            {locale === "en" ? (
                              <>
                                Direct admission according to the regulations of
                                the Ministry of Education and Training, quota 2%
                              </>
                            ) : (
                              <>
                                Xét tuyển thẳng theo quy định của Bộ Giáo dục và
                                Đào tạo, chỉ tiêu 2%;
                              </>
                            )}
                          </p>
                        </div>
                        <div className="col-lg-6 col-12 flex items-center gap-4">
                          <h3
                            style={ibm_plex_sans.style}
                            className="bg-[#CD2027] w-fit! h-fit! aspect-square! px-1 leading-[0.75] text-[46px] mb-0 text-white"
                          >
                            2
                          </h3>
                          <p
                            className="mb-0 leading-tight text-black text-justify"
                            style={ibm_plex_sans.style}
                          >
                            <b>
                              {locale === "en" ? "METHOD" : "PHƯƠNG THỨC"} 2:
                            </b>{" "}
                            {locale === "en" ? (
                              <>
                                Admission for candidates graduating from foreign
                                high school programs and holding international
                                certificates, quota 1%
                              </>
                            ) : (
                              <>
                                Xét tuyển đối với thí sinh tốt nghiệp chương
                                trình trung học phổ thông nước ngoài và có chứng
                                chỉ quốc tế, chỉ tiêu 1%;
                              </>
                            )}
                          </p>
                        </div>
                        <div className="col-lg-6 col-12 flex items-center gap-4">
                          <h3
                            style={ibm_plex_sans.style}
                            className="bg-[#CD2027] w-fit! h-fit! aspect-square! px-1 leading-[0.75] text-[46px] mb-0 text-white"
                          >
                            3
                          </h3>
                          <p
                            className="mb-0 leading-tight text-black text-justify"
                            style={ibm_plex_sans.style}
                          >
                            <b>
                              {locale === "en" ? "METHOD" : "PHƯƠNG THỨC"} 3:
                            </b>{" "}
                            {locale === "en" ? (
                              <>
                                Admission for students with good academic
                                performance, quota 40%-50%
                              </>
                            ) : (
                              <>
                                Xét tuyển thí sinh có kết quả học tập tốt, chỉ
                                tiêu 40%-50%
                              </>
                            )}
                            ;
                          </p>
                        </div>
                        <div className="col-lg-6 col-12 flex items-center gap-4">
                          <h3
                            style={ibm_plex_sans.style}
                            className="bg-[#CD2027] w-fit! h-fit! aspect-square! px-1 leading-[0.75] text-[46px] mb-0 text-white"
                          >
                            4
                          </h3>
                          <p
                            className="mb-0 leading-tight text-black text-justify"
                            style={ibm_plex_sans.style}
                          >
                            <b>
                              {locale === "en" ? "METHOD" : "PHƯƠNG THỨC"} 4:
                            </b>{" "}
                            {locale === "en" ? (
                              <>
                                Admission based on the results of the competency
                                assessment exam by Vietnam National University
                                Ho Chi Minh City, quota 10-20%
                              </>
                            ) : (
                              <>
                                Xét tuyển dựa trên kết quả thi đánh giá năng lực
                                ĐHQG TP.HCM, chỉ tiêu 10-20%;
                              </>
                            )}
                          </p>
                        </div>
                        <div className="col-lg-6 col-12 flex items-center gap-4">
                          <h3
                            style={ibm_plex_sans.style}
                            className="bg-[#CD2027] w-fit! h-fit! aspect-square! px-1 leading-[0.75] text-[46px] mb-0 text-white"
                          >
                            5
                          </h3>
                          <p
                            className="mb-0 leading-tight text-black text-justify"
                            style={ibm_plex_sans.style}
                          >
                            <b>
                              {locale === "en" ? "METHOD" : "PHƯƠNG THỨC"} 5:
                            </b>{" "}
                            {locale === "en" ? (
                              <>
                                Admission based on high school graduation exam
                                results, the remaining quota;
                              </>
                            ) : (
                              <>
                                Xét tuyển dựa trên kết quả thi tốt nghiệp THPT,
                                chỉ tiêu còn lại;
                              </>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="py-4 px-2 bg-[#f2f2f2]">
                      <h2 className="text-center uppercase text-4xl font-bold text-[#CD2027] mb-5">
                        {locale === "en"
                          ? "Admission Results 2025"
                          : "Kết quả tuyển sinh 2025"}
                      </h2>
                      <div className="flex flex-wrap gap-8 justify-around">
                        <div className="text-center w-fit">
                          <h4 className="text-[#CD2027]! text-4xl!">23.00</h4>
                          <p
                            className="text-xl! text-black uppercase font-bold! mb-0 mt-3 whitespace-nowrap"
                            style={ibm_plex_sans.style}
                          >
                            {locale === "en" ? "entrance score" : "Điểm chuẩn"}
                          </p>
                        </div>
                        <div className="text-center w-fit">
                          <h4 className="text-[#CD2027]! text-4xl!">21</h4>
                          <p
                            className="text-xl! text-black uppercase font-bold! mb-0 mt-3 whitespace-nowrap"
                            style={ibm_plex_sans.style}
                          >
                            {locale === "en" ? (
                              <>
                                English-partial <br /> program
                              </>
                            ) : (
                              <>
                                Chương trình <br /> Tiếng Anh Bán phần
                              </>
                            )}
                          </p>
                        </div>
                        <div className="text-center w-fit">
                          <h4 className="text-[#CD2027]! text-4xl!">62</h4>
                          <p
                            className="text-xl! text-black uppercase font-bold! mb-0 mt-3 whitespace-nowrap"
                            style={ibm_plex_sans.style}
                          >
                            {locale === "en" ? (
                              <>
                                Vietnamese Standard <br />
                                Programs
                              </>
                            ) : (
                              <>
                                chương trình <br /> tiếng việt
                              </>
                            )}
                          </p>
                        </div>
                        <div className="text-center w-fit">
                          <h4 className="text-[#CD2027]! text-4xl!">28.31</h4>
                          <p
                            className="text-xl! text-black uppercase font-bold! mb-0 mt-3 whitespace-nowrap"
                            style={ibm_plex_sans.style}
                          >
                            {locale === "en"
                              ? "highest score"
                              : "điểm cao nhất"}
                          </p>
                        </div>
                        <div className="text-center w-fit">
                          <h4 className="text-[#CD2027]! text-4xl!">2,5%</h4>
                          <p
                            className="text-xl! text-black uppercase font-bold! mb-0 mt-3 whitespace-nowrap"
                            style={ibm_plex_sans.style}
                          >
                            {locale === "en" ? (
                              <>
                                Results from <br />
                                Admission Method 4
                              </>
                            ) : (
                              "kết quả từ PT4"
                            )}
                          </p>
                          <p className="leading-snug">
                            {locale === "en" ? (
                              <>
                                Assessment of general aptitude <br /> combined
                                with English proficiency
                              </>
                            ) : (
                              <>Đánh giá năng lực kết hợp năng lực tiếng Anh</>
                            )}
                          </p>
                        </div>
                        <div className="text-center w-fit">
                          <h4 className="text-[#CD2027]! text-4xl!">9,6%</h4>
                          <p
                            className="text-xl! text-black uppercase font-bold! mb-0 mt-3 whitespace-nowrap"
                            style={ibm_plex_sans.style}
                          >
                            {locale === "en" ? (
                              <>
                                Results from <br />
                                admission method 2
                              </>
                            ) : (
                              "kết quả từ PT2"
                            )}
                          </p>
                          <p className="leading-snug">
                            {locale === "en" ? (
                              <>
                                High-school graduation and English proficiency
                                combination
                              </>
                            ) : (
                              <>
                                Xét tuyển tốt nghiệp THPT <br /> kết hợp năng
                                lực tiếng Anh
                              </>
                            )}
                          </p>
                        </div>
                        <div className="text-center w-fit">
                          <h4 className="text-[#CD2027]! text-4xl!">88%</h4>
                          <p
                            className="text-xl! text-black uppercase font-bold! mb-0 mt-3 whitespace-nowrap"
                            style={ibm_plex_sans.style}
                          >
                            {locale === "en" ? (
                              <>
                                Results from <br />
                                admission method 3
                              </>
                            ) : (
                              "kết quả từ PT3"
                            )}
                          </p>
                          <p className="leading-snug">
                            {locale === "en" ? (
                              <>Admission by academic achievement</>
                            ) : (
                              <>Xét tuyển thí sinh có kết quả học tập tốt</>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </div>
        {/* ############### */}
      </div>
    </section>
  );
}

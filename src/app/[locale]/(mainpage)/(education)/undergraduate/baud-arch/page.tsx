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
import subEn from "./data/2026/programEn.json";
import subVi from "./data/2026/programVi.json";
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
import Strengths from "./components/Strengths";

interface WorkPositionType {
  position: string;
  subtitle?: string[];
  details: {
    desc: string;
  };
}

export default function BAUDArchPage() {
  const locale = useLocale();
  const program: {
    module: string;
    subjects: { name: string; credits: number; desc?: string }[];
  }[] = locale === "en" ? subEn : subVi;
  const jobList = locale === "en" ? workPositionEn : workPositionVi;
  const [programStructureImage, setProgramStructureImage] = useState<string>(
    programStructure.filter((item) => item.id === 2026)[0].programCourse,
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
    <section className="course_undergraduate course_undergraduate-baud-arch pr-[15px]">
      <div
        className="header__poster h-[calc(100vh-48px)] md:h-[calc(100vh-60px)] mr-[15px] overflow-hidden duration-200 transition-all w-screen relative bg-[#000] before:z-0 before:bg-black/70 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0"
        style={{
          backgroundImage: `url(/images/courses/undergraduate/baud-arch/baud-arch.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="z-[1] relative pt-[150px] text-center">
          <RevealWrapper delay={0} distance="0px" opacity={0} origin="bottom">
            <h1
              className="uppercase text-white text-3xl! lg:text-5xl!"
              style={ibm_plex_sans.style}
            >
              {locale === "en" ? (
                <>
                  bachelor of Architectural and Urban Design for inclusive Smart
                  City{" "}
                  <span
                    className="text-[#cd2027]"
                    style={{
                      WebkitTextStrokeColor: "#fff",
                      WebkitTextStrokeWidth: ".4px",
                    }}
                  >
                    Architect
                  </span>
                </>
              ) : (
                <>
                  <span className="text-[#cd2027]">Kiến trúc sư</span> Kiến trúc
                  và Thiết kế Đô thị Thông minh
                </>
              )}
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
            <p className="col-12 text-justify mb-5 mb-lg-0">
              {locale === "en" ? (
                <>
                  The Bachelor of Architectural and Urban Design for Inclusive
                  Smart City (BAUD - Architect) is a professional degree program
                  at UEH designed to grant students a professional
                  Architect`&apos;s degree upon graduation. With a comprehensive
                  4.5-year track, the program ensures that graduates possess the
                  full legal and professional capacity to obtain an
                  architect`&apos;s practicing certificate and are ready to lead
                  real-world projects immediately.
                  <br />
                  <br />
                  The curriculum is developed with a multi-disciplinary,
                  sustainable, and experimental approach, focusing on analyzing
                  complex urban systems through the lens of technology and data
                  to propose optimal design solutions under the philosophy of
                  &quot;Global Vision, Local Commitment.&quot; Students
                  experience an international academic environment with
                  specialized design studios taught by highly experienced
                  faculty with significant international expertise. The core
                  distinction of the Architect track lies in its deep
                  integration with industry practice: the final-year studio
                  system features direct guidance and feedback from corporate
                  experts on &quot;live&quot; projects, alongside two intensive
                  internship periods at prestigious organizations. This rigorous
                  training bridge the gap between academia and the profession,
                  empowering students to enter the workforce with the confidence
                  of a seasoned practitioner.
                </>
              ) : (
                <>
                  Chương trình Kiến trúc sư Kiến trúc và Thiết kế Đô thị Thông
                  minh (BAUD - Architect) là chương trình đào tạo chuyên nghiệp
                  của UEH, được thiết kế để cấp bằng Kiến trúc sư cho sinh viên
                  sau khi tốt nghiệp. Với lộ trình đào tạo toàn diện trong 4,5
                  năm, chương trình đảm bảo sinh viên tốt nghiệp có đầy đủ năng
                  lực chuyên môn để sẵn sàng tham giac các dự án thực tế ngay
                  sau khi ra trường.
                  <br />
                  <br />
                  Chương trình được xây dựng theo hướng tiếp cận đa ngành, bền
                  vững và thực nghiệm, tập trung vào việc phân tích các hệ thống
                  đô thị phức hợp thông qua góc nhìn công nghệ và dữ liệu nhằm
                  đề xuất các giải pháp thiết kế tối ưu theo triết lý “Tầm nhìn
                  Toàn cầu, Cam kết Địa phương”. Sinh viên được trải nghiệm môi
                  trường học thuật quốc tế với các đồ án chuyên ngành được hướng
                  dẫn bởi đội ngũ giảng viên giàu kinh nghiệm và có chuyên môn
                  quốc tế cao. Điểm khác biệt cốt lõi của hệ Kiến trúc sư nằm ở
                  tính kết nối sâu sắc với thực tiễn ngành nghề: hệ thống đồ án
                  năm cuối có sự tham gia hướng dẫn và phản biện trực tiếp từ
                  các chuyên gia doanh nghiệp trên các dự án &quot;thực&quot;,
                  cùng với hai kỳ thực tập chuyên sâu tại các tổ chức uy tín.
                  Quá trình đào tạo nghiêm ngặt này giúp xóa nhòa khoảng cách
                  giữa học thuật và nghề nghiệp, giúp sinh viên tự tin gia nhập
                  thị trường lao động như một chuyên gia lành nghề.
                </>
              )}
            </p>
          </div>

          {/* JOB CHANCE */}
          <div className="row mt-24">
            <div className="col-12">
              <h2 className="text-black uppercase" style={ibm_plex_sans.style}>
                {locale === "en"
                  ? "Unlock Your Future, Shape Your Career"
                  : "Cơ hội nghề nghiệp"}
              </h2>
              <p>
                {locale === "en" ? (
                  <>
                    Upon graduating from the Architect track, students are
                    capable of assuming key roles across the value chain of
                    modern design, construction, and urban management
                  </>
                ) : (
                  <>
                    Sau khi tốt nghiệp hệ Kiến trúc sư, sinh viên có khả năng
                    đảm nhận các vai trò chủ chốt trong chuỗi giá trị thiết kế,
                    xây dựng và quản trị đô thị hiện đại
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="row justify-between mt-3">
            <div className="col-12 col-lg-5">
              <div className="flex flex-wrap gap-x-4 gap-y-8">
                {jobList.map(({ position, details }) => (
                  <div
                    className="btn btn-outline-primary !bg-[#CD2027] text-white !flex flex-col justify-center items-center text-base p-3 whitespace-normal break-keep wrap-break-word text-wrap"
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
                <h3
                  className="text-center bg-[#CD2027] text-white py-3 uppercase text-xl px-5 z-[99]"
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
                </h3>
                <div className="px-5 py-3 contentt">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={jobDesc.details.desc}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.1 }}
                    >
                      <p className="text-black">{jobDesc.details.desc}</p>
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
                  <span className="text-base font-normal">150 credits</span>
                </>
              ) : (
                <>
                  <h2 className="uppercase">Tổng quan chương trình</h2>
                  Với 5 nhóm kiến thức cốt lõi{" "}
                  <span className="text-base font-normal">150 tín chỉ</span>
                </>
              )}
            </div>
          </div>
          <div className="row mt-10 flex-col flex-lg-row items-start justify-between">
            <div className="col-12 col-lg-5 flex flex-wrap gap-5 h-fit mb-5 mb-lg-0">
              {program.map(({ module, subjects }) => (
                <div
                  className="btn btn-outline-primary !flex justify-center items-center p-3 whitespace-normal break-keep break-words text-wrap"
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

          {/* PROGRAM STRUCTURE */}
          <div className="mt-12">
            <h2 className="uppercase text-black mb-4">
              {locale === "en" ? "Program Curriculum" : "Sơ đồ đào tạo"}
            </h2>
            <ul className="flex">
              {programStructure.map((program) => (
                <li
                  key={program.id}
                  className={`flex-1 text-center text-xl! font-bold! ${
                    program.programCourse === programStructureImage
                      ? "text-[#cd2027]!"
                      : "text-[#3c3939]!"
                  } py-2 px-4 transition-colors cursor-pointer duration-200 hover:bg-[#F0F0F0]`}
                  onClick={() => {
                    setProgramStructureImage(program.programCourse);
                  }}
                >
                  {program.years}
                </li>
              ))}
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
            <Strengths />
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
                          <h4 className="text-[#CD2027]! text-6xl!">40</h4>
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
                          <h4 className="text-[#CD2027]! text-6xl!">7580104</h4>
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
                              ? "Bachelor of Architectural and Urban Design for Inclusive Smart City - Architect"
                              : "Kiến trúc sư Kiến trúc và Thiết kế Đô thị Thông minh"}
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
              // {
              //   key: 1,
              //   showArrow: false,
              //   label: (
              //     <div className="py-3 pl-8 text-white bg-[#CD2027] flex gap-6 items-center">
              //       <AlignJustifyIcon />
              //       <h3
              //         className="uppercase text-white mb-0"
              //         style={ibm_plex_sans.style}
              //       >
              //         {locale === "en"
              //           ? "admission information 2025"
              //           : "thông tin tuyển sinh 2025"}
              //       </h3>
              //     </div>
              //   ),
              //   children: (
              //     <div className="border-2 border-[#CE2027] p-3 -ml-1 -mr-0">
              //       <div className="py-3 mb-3">
              //         <div className="flex flex-wrap justify-around">
              //           <div className="text-center">
              //             <h4 className="text-[#CD2027] text-6xl">110</h4>
              //             <p
              //               className="text-2xl text-black uppercase font-bold mb-0 mt-3 whitespace-nowrap"
              //               style={ibm_plex_sans.style}
              //             >
              //               {locale === "en" ? "students" : "chỉ tiêu"}
              //             </p>
              //             <p className="text-black">
              //               {locale === "en" ? (
              //                 <>
              //                   Standard Programs (Vietnamese) <br />
              //                   English Standard Programs (100% English)
              //                 </>
              //               ) : (
              //                 "Chương trình chuẩn và Chương trình bán phần"
              //               )}
              //             </p>
              //           </div>
              //           <div className="text-center">
              //             <h4 className="text-[#CD2027] text-6xl">7580104</h4>
              //             <p
              //               className="text-2xl text-black uppercase font-bold mb-0 mt-3 whitespace-nowrap"
              //               style={ibm_plex_sans.style}
              //             >
              //               {locale === "en"
              //                 ? "registration code"
              //                 : "MÃ ĐĂNG KÝ XÉT TUYỂN"}
              //             </p>
              //             <p className="text-black">
              //               {locale === "en"
              //                 ? "Bachelor in Architectural and Urban Design inclusive Smart City"
              //                 : "Cử nhân Kiến trúc và Thiết kế Đô thị Thông minh"}
              //             </p>
              //           </div>
              //         </div>

              //         <div className="row gap-y-8 mt-4">
              //           <div className="col-lg-6 col-12 flex items-center gap-4">
              //             <h3
              //               style={ibm_plex_sans.style}
              //               className="bg-[#CD2027] w-fit h-fit aspect-square px-1 leading-[0.75] text-[46px] mb-0 text-white"
              //             >
              //               1
              //             </h3>
              //             <p
              //               className="mb-0 leading-tight text-black text-justify"
              //               style={ibm_plex_sans.style}
              //             >
              //               <b>
              //                 {locale === "en" ? "METHOD" : "PHƯƠNG THỨC"} 1:
              //               </b>{" "}
              //               {locale === "en" ? (
              //                 <>
              //                   Direct admission according to the regulations of
              //                   the Ministry of Education and Training, quota 2%
              //                 </>
              //               ) : (
              //                 <>
              //                   Xét tuyển thẳng theo quy định của Bộ Giáo dục và
              //                   Đào tạo, chỉ tiêu 2%;
              //                 </>
              //               )}
              //             </p>
              //           </div>
              //           <div className="col-lg-6 col-12 flex items-center gap-4">
              //             <h3
              //               style={ibm_plex_sans.style}
              //               className="bg-[#CD2027] w-fit h-fit aspect-square px-1 leading-[0.75] text-[46px] mb-0 text-white"
              //             >
              //               2
              //             </h3>
              //             <p
              //               className="mb-0 leading-tight text-black text-justify"
              //               style={ibm_plex_sans.style}
              //             >
              //               <b>
              //                 {locale === "en" ? "METHOD" : "PHƯƠNG THỨC"} 2:
              //               </b>{" "}
              //               {locale === "en" ? (
              //                 <>
              //                   Admission for candidates graduating from foreign
              //                   high school programs and holding international
              //                   certificates, quota 1%
              //                 </>
              //               ) : (
              //                 <>
              //                   Xét tuyển đối với thí sinh tốt nghiệp chương
              //                   trình trung học phổ thông nước ngoài và có chứng
              //                   chỉ quốc tế, chỉ tiêu 1%;
              //                 </>
              //               )}
              //             </p>
              //           </div>
              //           <div className="col-lg-6 col-12 flex items-center gap-4">
              //             <h3
              //               style={ibm_plex_sans.style}
              //               className="bg-[#CD2027] w-fit h-fit aspect-square px-1 leading-[0.75] text-[46px] mb-0 text-white"
              //             >
              //               3
              //             </h3>
              //             <p
              //               className="mb-0 leading-tight text-black text-justify"
              //               style={ibm_plex_sans.style}
              //             >
              //               <b>
              //                 {locale === "en" ? "METHOD" : "PHƯƠNG THỨC"} 3:
              //               </b>{" "}
              //               {locale === "en" ? (
              //                 <>
              //                   Admission for students with good academic
              //                   performance, quota 40%-50%
              //                   <span className="text-[#ce2027]"> [New]</span>
              //                 </>
              //               ) : (
              //                 <>
              //                   Xét tuyển thí sinh có kết quả học tập tốt, chỉ
              //                   tiêu 40%-50%{" "}
              //                   <span className="text-[#ce2027]"> [Mới]</span>;
              //                 </>
              //               )}
              //             </p>
              //           </div>
              //           <div className="col-lg-6 col-12 flex items-center gap-4">
              //             <h3
              //               style={ibm_plex_sans.style}
              //               className="bg-[#CD2027] w-fit h-fit aspect-square px-1 leading-[0.75] text-[46px] mb-0 text-white"
              //             >
              //               4
              //             </h3>
              //             <p
              //               className="mb-0 leading-tight text-black text-justify"
              //               style={ibm_plex_sans.style}
              //             >
              //               <b>
              //                 {locale === "en" ? "METHOD" : "PHƯƠNG THỨC"} 4:
              //               </b>{" "}
              //               {locale === "en" ? (
              //                 <>
              //                   Admission based on the results of the competency
              //                   assessment exam by Vietnam National University
              //                   Ho Chi Minh City, quota 10-20%
              //                 </>
              //               ) : (
              //                 <>
              //                   Xét tuyển dựa trên kết quả thi đánh giá năng lực
              //                   ĐHQG TP.HCM, chỉ tiêu 10-20%;
              //                 </>
              //               )}
              //             </p>
              //           </div>
              //           <div className="col-lg-6 col-12 flex items-center gap-4">
              //             <h3
              //               style={ibm_plex_sans.style}
              //               className="bg-[#CD2027] w-fit h-fit aspect-square px-1 leading-[0.75] text-[46px] mb-0 text-white"
              //             >
              //               5
              //             </h3>
              //             <p
              //               className="mb-0 leading-tight text-black text-justify"
              //               style={ibm_plex_sans.style}
              //             >
              //               <b>
              //                 {locale === "en" ? "METHOD" : "PHƯƠNG THỨC"} 5:
              //               </b>{" "}
              //               {locale === "en" ? (
              //                 <>
              //                   Admission based on high school graduation exam
              //                   results, the remaining quota;
              //                 </>
              //               ) : (
              //                 <>
              //                   Xét tuyển dựa trên kết quả thi tốt nghiệp THPT,
              //                   chỉ tiêu còn lại;
              //                 </>
              //               )}
              //             </p>
              //           </div>
              //         </div>
              //       </div>
              //       <div className="py-4 bg-[#f2f2f2]">
              //         <h2 className="text-center uppercase text-4xl font-bold text-[#CD2027] mb-5">
              //           {locale === "en"
              //             ? "Admission Results 2025"
              //             : "Kết quả tuyển sinh 2025"}
              //         </h2>
              //         <div className="flex flex-wrap gap-6 justify-around">
              //           <div className="text-center w-fit">
              //             <h4 className="text-[#CD2027] text-6xl">23.00</h4>
              //             <p
              //               className="text-2xl text-black uppercase font-bold mb-0 mt-3 whitespace-nowrap"
              //               style={ibm_plex_sans.style}
              //             >
              //               {locale === "en" ? "entrance score" : "Điểm chuẩn"}
              //             </p>
              //           </div>
              //           <div className="text-center w-fit">
              //             <h4 className="text-[#CD2027] text-6xl">21</h4>
              //             <p
              //               className="text-2xl text-black uppercase font-bold mb-0 mt-3 whitespace-nowrap"
              //               style={ibm_plex_sans.style}
              //             >
              //               {locale === "en" ? (
              //                 <>
              //                   English-partial <br /> program
              //                 </>
              //               ) : (
              //                 <>
              //                   Chương trình <br /> Tiếng Anh Bán phần
              //                 </>
              //               )}
              //             </p>
              //           </div>
              //           <div className="text-center w-fit">
              //             <h4 className="text-[#CD2027] text-6xl">62</h4>
              //             <p
              //               className="text-2xl text-black uppercase font-bold mb-0 mt-3 whitespace-nowrap"
              //               style={ibm_plex_sans.style}
              //             >
              //               {locale === "en" ? (
              //                 <>
              //                   Vietnamese Standard <br />
              //                   Programs
              //                 </>
              //               ) : (
              //                 <>
              //                   chương trình <br /> tiếng việt
              //                 </>
              //               )}
              //             </p>
              //           </div>
              //           <div className="text-center w-fit">
              //             <h4 className="text-[#CD2027] text-6xl">28.31</h4>
              //             <p
              //               className="text-2xl text-black uppercase font-bold mb-0 mt-3 whitespace-nowrap"
              //               style={ibm_plex_sans.style}
              //             >
              //               {locale === "en"
              //                 ? "highest score"
              //                 : "điểm cao nhất"}
              //             </p>
              //           </div>
              //           <div className="text-center w-fit">
              //             <h4 className="text-[#CD2027] text-6xl">2,5%</h4>
              //             <p
              //               className="text-2xl text-black uppercase font-bold mb-0 mt-3 whitespace-nowrap"
              //               style={ibm_plex_sans.style}
              //             >
              //               {locale === "en" ? (
              //                 <>
              //                   Results from <br />
              //                   Admission Method 4
              //                 </>
              //               ) : (
              //                 "kết quả từ PT4"
              //               )}
              //             </p>
              //             <p className="leading-snug">
              //               {locale === "en" ? (
              //                 <>
              //                   Assessment of general aptitude <br /> combined
              //                   with English proficiency
              //                 </>
              //               ) : (
              //                 <>Đánh giá năng lực kết hợp năng lực tiếng Anh</>
              //               )}
              //             </p>
              //           </div>
              //           <div className="text-center w-fit">
              //             <h4 className="text-[#CD2027] text-6xl">9,6%</h4>
              //             <p
              //               className="text-2xl text-black uppercase font-bold mb-0 mt-3 whitespace-nowrap"
              //               style={ibm_plex_sans.style}
              //             >
              //               {locale === "en" ? (
              //                 <>
              //                   Results from <br />
              //                   admission method 2
              //                 </>
              //               ) : (
              //                 "kết quả từ PT2"
              //               )}
              //             </p>
              //             <p className="leading-snug">
              //               {locale === "en" ? (
              //                 <>
              //                   High-school graduation and English proficiency
              //                   combination
              //                 </>
              //               ) : (
              //                 <>
              //                   Xét tuyển tốt nghiệp THPT <br /> kết hợp năng
              //                   lực tiếng Anh
              //                 </>
              //               )}
              //             </p>
              //           </div>
              //           <div className="text-center w-fit">
              //             <h4 className="text-[#CD2027] text-6xl">88%</h4>
              //             <p
              //               className="text-2xl text-black uppercase font-bold mb-0 mt-3 whitespace-nowrap"
              //               style={ibm_plex_sans.style}
              //             >
              //               {locale === "en" ? (
              //                 <>
              //                   Results from <br />
              //                   admission method 3
              //                 </>
              //               ) : (
              //                 "kết quả từ PT3"
              //               )}
              //             </p>
              //             <p className="leading-snug">
              //               {locale === "en" ? (
              //                 <>Admission by academic achievement</>
              //               ) : (
              //                 <>Xét tuyển thí sinh có kết quả học tập tốt</>
              //               )}
              //             </p>
              //           </div>
              //         </div>
              //       </div>
              //     </div>
              //   ),
              // },
            ]}
          />

          {/* <div className="w-full flex justify-center pb-10 mt-11">
            <Link
              href="https://xettuyenk51.ueh.edu.vn"
              target="_blank"
              className="uppercase bg-[#971919] text-white font-bold py-3 px-16 text-xl"
              style={ibm_plex_sans.style}
            >
              {locale === "en" ? "Apply now" : "nộp hồ sơ ngay"}
            </Link>
          </div> */}
        </div>
        {/* ############### */}
      </div>
    </section>
  );
}

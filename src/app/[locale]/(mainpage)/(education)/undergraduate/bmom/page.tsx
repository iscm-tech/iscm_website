"use client";

import { useCallback, useEffect, useState } from "react";
import { useLocale } from "next-intl";
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

import ContactForm from "../../components/contactForm";
import { AlignJustifyIcon } from "lucide-react";
import HighlightsBox from "./components/HighlightPoint";
import { AnimatePresence } from "motion/react";
import DomParser from "@/components/domParser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

interface WorkPositionType {
  position: string;
  desc: string;
  company: string;
}

export default function UndergraduateCoursePage() {
  const locale = useLocale();
  const program: {
    module: string;
    subjects: { name: string; credits: number; desc?: string }[];
  }[] = locale === "en" ? subEn : subVi;
  const jobList = locale === "en" ? workPositionEn : workPositionVi;
  const programStructureImage = programStructure.filter(
    (item) => item.id === 2026,
  )[0].programCourse;

  const [jobDesc, setJobDesc] = useState<WorkPositionType>(jobList[0]);

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
    <section className="course_undergraduate course_undergraduate-bmom bg-[#EEF3FA]">
      <figure className="header__poster xl:h-[calc(100vh-60px)] bg-[#be2826] duration-200 overflow-hidden transition-all !shadow-lg !shadow-white/40 w-full relative before:z-0 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0">
        <ImageNext
          src={
            locale === "en"
              ? "/images/courses/undergraduate/bmom/Portal_Website_ENG-new.png"
              : `/images/courses/undergraduate/bmom/bmom-new.png`
          }
          alt="BMOM"
          width={1200}
          height={630}
          className="w-full h-full object-contain"
        />
      </figure>

      <div className="container !max-w-[85vw] pt-5" id="content">
        {/* ABOUT SECTION  */}
        <div id="about" className="mt-3 row">
          <h2 className="text-[#be2826] uppercase" style={ibm_plex_sans.style}>
            {locale === "en" ? "about program" : "giới thiệu tổng quan"}
          </h2>

          <p
            className="col-12 text-justify text-[#000] text-base leading-snug backdrop-filter rounded-lg backdrop-blur-lg bg-opacity-20 bg-white/10 p-4"
            style={{ ...ibm_plex_sans.style }}
          >
            {locale === "en" ? (
              <>
                In the context of the
                <span className="text-[#be2826] font-bold">
                  {" "}
                  Industrial Revolution 4.0
                </span>
                , logistics, transportation, and urban mobility are undergoing a
                strong shift toward modern{" "}
                <span className="text-[#be2826] font-bold">
                  Operations Management
                </span>{" "}
                models and{" "}
                <span className="text-[#be2826] font-bold">Smart Mobility</span>
                , with extensive application of{" "}
                <span className="text-[#be2826] font-bold">
                  AI, Big Data, IoT,{" "}
                </span>
                and{" "}
                <span className="text-[#be2826] font-bold">
                  {" "}
                  Intelligent Transportation Systems (ITS)
                </span>
                . In Vietnam, this process is driven by national strategies on
                digital transformation in the transport sector, smart city
                development, green and sustainable transportation, as well as
                strategic infrastructure projects such as high-speed railways,
                metro systems, airports, ports and logistics centers.
                <br />
                <br />
                The{" "}
                <span className="text-[#be2826] font-bold">
                  Bachelor of Smart Mobility and Operation Management (BMOM)
                </span>{" "}
                program at the{" "}
                <span className="text-[#be2826] font-bold">
                  Institute of Smart City and Management (ISCM), University of
                  Economics Ho Chi Minh City (UEH)
                </span>
                , is designed with a specialized focus to train high-quality
                human resources that directly meet Vietnam&apos;s national
                strategies for developing transportation, smart cities, and
                sustainable growth. <br />
                <br />
                <span className="text-[#be2826] font-bold">
                  Core values that the program delivers:
                </span>
                <ul className="list-disc pl-4">
                  <li className="list-item">
                    <span className="text-[#be2826] font-bold">
                      Solid interdisciplinary knowledge:
                    </span>{" "}
                    A close integration of economics, management, operation, and
                    advanced technology, equipping students with the ability to
                    manage, operate, and optimize{" "}
                    <span className="text-[#be2826] font-bold">
                      multimodal transportation systems
                    </span>{" "}
                    (road, rail, maritime, aviation) in smart urban environments
                    and sustainable development contexts. Students in the
                    program have opportunities for international exchange and to
                    earn{" "}
                    <span className="text-[#be2826] font-bold">
                      dual degrees
                    </span>
                    .
                  </li>
                  <li className="list-item">
                    <span className="text-[#be2826] font-bold">
                      Practical skills & Industry 4.0 technologies:
                    </span>{" "}
                    Proficiency in transport data analysis, logistics & supply
                    chain management, transport project evaluation, operation of
                    green and smart mobility systems; along with strong mastery
                    of AI, Big Data, IoT, as well as research capabilities,
                    entrepreneurship, and effective work in national and
                    international environments.
                  </li>
                  <li className="list-item">
                    <span className="text-[#be2826] font-bold">
                      Strategic human resource orientation:
                    </span>{" "}
                    In-depth training for key sectors including logistics,
                    supply chains, multimodal transportation, and smart urban
                    mobility—particularly aligned with the national direction
                    toward 2035–2045: completing urban railway networks in major
                    cities, developing the North–South high-speed railway,
                    managing smart transport infrastructure, and building
                    high-quality transport human resources. Through this, the
                    program directly contributes to enhancing national
                    competitiveness and promoting sustainable development.
                  </li>
                </ul>
                <br />
                <span className="text-[#be2826] font-bold">
                  Scholarship policy:
                </span>{" "}
                UEH supports{" "}
                <span className="text-[#be2826] font-bold">
                  50% of the total number of admitted students
                </span>{" "}
                in programs within the{" "}
                <span className="text-[#be2826] font-bold">
                  transport services sector
                </span>{" "}
                (including BMOM) and several other priority fields (Computer
                Science & Information Technology, Architecture & Construction,
                Engineering Technology), with the structure comprising{" "}
                <span className="text-[#be2826] font-bold">
                  50% full scholarships
                </span>{" "}
                and{" "}
                <span className="text-[#be2826] font-bold">
                  50% partial scholarships
                </span>
                .
                <br />
                <br />
                BMOM is not just a training program—it is a{" "}
                <span className="text-[#be2826] font-bold">
                  strategic choice
                </span>{" "}
                to become a leading force in driving Vietnam&apos;s
                transportation transformation in the digital era.
              </>
            ) : (
              <>
                Trong bối cảnh Cách mạng Công nghiệp 4.0, logistics, vận tải và
                di chuyển đô thị đang chuyển dịch mạnh mẽ sang mô hình Quản trị
                Vận hành hiện đại và Di chuyển Thông minh, với sự ứng dụng sâu
                rộng của AI, Big Data, IoT, hệ thống giao thông thông minh
                (ITS). Tại Việt Nam, quá trình này được thúc đẩy bởi các chương
                trình quốc gia về chuyển đổi số ngành GTVT, phát triển đô thị
                thông minh, giao thông xanh – bền vững và các dự án hạ tầng
                chiến lược như đường sắt cao tốc, metro, cảng biển và trung tâm
                logistics.
                <br />
                <br />
                <span className="text-[#be2826] font-bold">
                  Chương trình Cử nhân Quản trị Vận hành và Di chuyển Thông minh
                  (BMOM)
                </span>{" "}
                tại Viện Đô thị Thông minh và Quản lý (ISCM), Đại học Kinh tế
                TP.HCM (UEH), được thiết kế chuyên sâu nhằm đào tạo nguồn nhân
                lực chất lượng cao, trực tiếp đáp ứng chiến lược quốc gia về
                phát triển giao thông vận tải, đô thị thông minh và bền vững của
                Việt Nam.
                <br />
                Giá trị cốt lõi mà chương trình mang lại:
                <ul className="list-disc pl-5 mt-2">
                  <li className="list-item">
                    <span className="text-[#be2826] font-bold">
                      Kiến thức liên ngành vững chắc:
                    </span>{" "}
                    Kết hợp chặt chẽ kinh tế, quản lý và công nghệ tiên tiến,
                    trang bị cho sinh viên khả năng quản trị, khai thác và tối
                    ưu hóa hệ thống vận tải đa phương thức{" "}
                    <span className="text-[#be2826] font-bold">
                      (đường bộ, đường sắt, đường thủy, hàng không)
                    </span>{" "}
                    trong môi trường đô thị thông minh và phát triển bền vững.
                    Tham gia chương trình, sinh viên có cơ hội được học tập trao
                    đổi nước ngoài và nhận song bằng.
                  </li>
                  <li className="list-item">
                    <span className="text-[#be2826] font-bold">
                      Kỹ năng thực tiễn & công nghệ 4.0:
                    </span>{" "}
                    Thành thạo phân tích dữ liệu vận tải, quản lý logistics &
                    chuỗi cung ứng, đánh giá dự án giao thông, vận hành hệ thống
                    di chuyển xanh – thông minh; đồng thời ứng dụng thành thạo
                    AI, Big Data, IoT, cùng năng lực nghiên cứu khoa học, khởi
                    nghiệp và làm việc hiệu quả trong môi trường quốc tế.
                  </li>
                  <li className="list-item">
                    <span className="text-[#be2826] font-bold">
                      Định hướng nguồn nhân lực chiến lược:
                    </span>{" "}
                    Đào tạo chuyên sâu cho các lĩnh vực then chốt bao gồm{" "}
                    <span className="text-[#be2826] font-bold">
                      logistics, chuỗi cung ứng, vận tải đa phương thức và giao
                      thông đô thị thông minh{" "}
                    </span>
                    – đặc biệt phù hợp với định hướng quốc gia đến năm
                    2035–2045: hoàn thiện mạng lưới đường sắt đô thị tại các
                    thành phố lớn, phát triển đường sắt cao tốc Bắc – Nam, quản
                    lý hạ tầng giao thông thông minh, xây dựng nguồn nhân lực
                    vận tải chất lượng cao. Qua đó, chương trình góp phần trực
                    tiếp nâng cao năng lực cạnh tranh quốc gia và thúc đẩy phát
                    triển bền vững.
                  </li>
                </ul>
                <br />
                <span className="text-[#be2826] font-bold">
                  Chính sách học bổng hấp dẫn:{" "}
                </span>
                UEH hỗ trợ 50% tổng số sinh viên trúng tuyển vào các chương
                trình thuộc lĩnh vực dịch vụ vận tải (bao gồm BMOM) và một số
                lĩnh vực ưu tiên khác (máy tính & công nghệ thông tin, kiến trúc
                & xây dựng, công nghệ kỹ thuật), với cơ cấu 50% học bổng toàn
                phần và 50% học bổng bán phần.
                <br />
                <br />
                BMOM không chỉ là chương trình đào tạo, mà còn là lựa chọn chiến
                lược để bạn trở thành nhân tố dẫn dắt sự chuyển đổi giao thông
                Việt Nam trong kỷ nguyên số.
              </>
            )}
          </p>

          <HighlightsBox />
        </div>
      </div>
      {/* JOB CHANCE */}
      <div className="w-full container !max-w-[85vw] mt-[68px]">
        <div className="row">
          <div className="col-12">
            <h2
              className="text-[#be2826] uppercase"
              style={ibm_plex_sans.style}
            >
              {locale === "en"
                ? "Unlock Your Future, Shape Your Career"
                : "Cơ hội nghề nghiệp"}
            </h2>
          </div>
        </div>

        <div className="row justify-between mt-3">
          <div className="col-12 col-lg-6">
            <div className="row flex-wrap gap-x-4 gap-y-4 lg:gap-x-0">
              {jobList.map(({ position, desc, company }) => (
                <div
                  className="col-12 col-lg-6"
                  key={position}
                  style={{ width: "calc(50% - 8px)" }}
                  onClick={() => setJobDesc({ position, desc, company })}
                >
                  <p className="btn btn-outline-primary w-full h-full text-current break-words text-sm md:!text-[17px] mb-0 uppercase !bg-[#be2826] text-white !flex flex-col justify-center items-center p-3 whitespace-normal text-wrap">
                    <DomParser content={position} />
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-lg-6 max-h-[550px] flex mt-6 lg:mt-0 relative">
            <div className="overflow-auto flex-1 jobDesc border-[3px] border-[#be2826]">
              <h3
                className="text-center bg-[#be2826] text-white py-3 uppercase text-2xl px-3 lg:px-5 z-[99]"
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
                      <DomParser content={jobDesc.position} />
                    </span>
                  </motion.div>
                </AnimatePresence>
              </h3>
              <div className="px-3 lg:px-5 py-3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={jobDesc.desc}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                  >
                    <p className="text-black text-justify">{jobDesc.desc}</p>
                    <p className={`text-base text-black mb-0`}>
                      <span className={`font-bold text-black`}>
                        {locale === "en" ? "Working at" : "Làm việc tại"}
                      </span>
                      : {jobDesc.company}
                    </p>
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
      </div>

      <div className="container !max-w-[85vw] mt-[68px]">
        <div className="row flex-row-reverse flex-md-row">
          <div
            className="col-12 col-md-6 text-black font-bold text-xl"
            style={ibm_plex_sans.style}
          >
            {locale === "en" ? (
              <>
                <h2 className="uppercase text-[#be2826]">Program Structure</h2>
                Comprising 5 core knowledge domains{" "}
                <span className="text-base font-normal block md:inline-block">
                  125 credits
                </span>
              </>
            ) : (
              <>
                <h2 className="uppercase text-[#be2826]">
                  Tổng quan chương trình
                </h2>
                Với 5 nhóm kiến thức cốt lõi{" "}
                <span className="text-base font-normal block md:inline-block">
                  125 tín chỉ
                </span>
              </>
            )}
          </div>
        </div>
        <figure className="mt-6 h-[500px]">
          <ImageNext
            src={
              locale === "en"
                ? "/images/courses/undergraduate/bmom/Diagram ENG.png"
                : "/images/courses/undergraduate/bmom/Diagram.png"
            }
            alt=""
            width={1200}
            height={600}
            className="w-full h-full object-contain"
          />
        </figure>
      </div>

      {/* ############### */}
      {/* PROGRAM */}
      <div id="program" className="mt-[68px] container !max-w-[85vw]">
        {/* PROGRAM STRUCTURE */}
        <div className="mt-12">
          <h2 className="uppercase text-[#be2826] mb-4">
            {locale === "en" ? "Program Curriculum" : "Sơ đồ đào tạo"}
          </h2>

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
        </div>
      </div>

      {/* ############### */}
      {/* ADMISSIONS */}
      <div id="apply" className="my-16 container !max-w-[85vw]">
        <h2 className="text-[#be2826] uppercase" style={ibm_plex_sans.style}>
          {locale === "en" ? "Admissions information" : "Thông tin tuyển sinh"}
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
                <div className="py-3 pl-8 text-white bg-[#be2826] flex gap-6 items-center">
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
                <div className="border-2 border-[#be2826] p-3 -ml-1 -mr-0">
                  <div className="py-3">
                    <div className="flex flex-wrap justify-around">
                      <div className="text-center">
                        <h4 className="text-[#be2826] text-6xl">40</h4>
                        <p
                          className="text-2xl text-[#be2826] uppercase font-bold mb-0 mt-3 whitespace-nowrap"
                          style={ibm_plex_sans.style}
                        >
                          {locale === "en" ? "students" : "chỉ tiêu"}
                        </p>
                        {/* <p className="text-black">
                          {locale === "en" ? (
                            <>
                              Standard Programs (Vietnamese) <br />
                              English Standard Programs (100% English)
                            </>
                          ) : (
                            "Chương trình chuẩn và Chương trình bán phần"
                          )}
                        </p> */}
                      </div>
                      <div className="text-center">
                        <h4 className="text-[#be2826] text-6xl">7840104</h4>
                        <p
                          className="text-2xl text-[#be2826] uppercase font-bold mb-0 mt-3 whitespace-nowrap"
                          style={ibm_plex_sans.style}
                        >
                          {locale === "en"
                            ? "registration code"
                            : "MÃ ĐĂNG KÝ XÉT TUYỂN"}
                        </p>
                        <p className="text-black">
                          {locale === "en"
                            ? "Bachelor of Smart Mobility and Operation Management"
                            : "Cử nhân Quản trị Vận hành và Di chuyển Thông minh"}
                        </p>
                      </div>
                    </div>

                    <div className="row gap-y-8 mt-4">
                      <div className="col-lg-6 col-12 flex items-center gap-4">
                        <h3
                          style={ibm_plex_sans.style}
                          className="bg-[#be2826] w-fit h-fit aspect-square px-1 leading-[0.75] text-[46px] mb-0 text-white"
                        >
                          1
                        </h3>
                        <p
                          className="mb-0 leading-tight text-black text-justify"
                          style={ibm_plex_sans.style}
                        >
                          <b>{locale === "en" ? "METHOD" : "PHƯƠNG THỨC"} 1:</b>{" "}
                          {locale === "en" ? (
                            <>
                              Direct admission according to the regulations of
                              the Ministry of Education and Training
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
                          className="bg-[#be2826] w-fit h-fit aspect-square px-1 leading-[0.75] text-[46px] mb-0 text-white"
                        >
                          2
                        </h3>
                        <p
                          className="mb-0 leading-tight text-black text-justify"
                          style={ibm_plex_sans.style}
                        >
                          <b>{locale === "en" ? "METHOD" : "PHƯƠNG THỨC"} 2:</b>{" "}
                          {locale === "en" ? (
                            <>
                              Admission for candidates graduating from foreign
                              high school programs and holding international
                              certificates
                            </>
                          ) : (
                            <>
                              Phương thức xét tuyển kết hợp: Điểm xét tuyển theo
                              thang điểm 100, là điểm kết hợp các đầu điểm của
                              thí sinh;
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
                        className="btn btn-primary  uppercase !font-bold"
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
            //               <b>{locale === "en" ? "METHOD" : "PHƯƠNG THỨC"} 1:</b>{" "}
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
            //               <b>{locale === "en" ? "METHOD" : "PHƯƠNG THỨC"} 2:</b>{" "}
            //               {locale === "en" ? (
            //                 <>
            //                   Admission for candidates graduating from foreign
            //                   high school programs and holding international
            //                   certificates, quota 1%
            //                 </>
            //               ) : (
            //                 <>
            //                   Xét tuyển đối với thí sinh tốt nghiệp chương trình
            //                   trung học phổ thông nước ngoài và có chứng chỉ
            //                   quốc tế, chỉ tiêu 1%;
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
            //               <b>{locale === "en" ? "METHOD" : "PHƯƠNG THỨC"} 3:</b>{" "}
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
            //               <b>{locale === "en" ? "METHOD" : "PHƯƠNG THỨC"} 4:</b>{" "}
            //               {locale === "en" ? (
            //                 <>
            //                   Admission based on the results of the competency
            //                   assessment exam by Vietnam National University Ho
            //                   Chi Minh City, quota 10-20%
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
            //               <b>{locale === "en" ? "METHOD" : "PHƯƠNG THỨC"} 5:</b>{" "}
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
            //               {locale === "en" ? "highest score" : "điểm cao nhất"}
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
            //                   Xét tuyển tốt nghiệp THPT <br /> kết hợp năng lực
            //                   tiếng Anh
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

      {/* Form Contact */}
      <div className="mt-60">
        <ContactForm
          primaryColor="#be2826"
          category={`chương trình cử nhân kiến trúc và thiết kế đô thị thông minh (tiếng Việt)`}
        />
      </div>
    </section>
  );
}

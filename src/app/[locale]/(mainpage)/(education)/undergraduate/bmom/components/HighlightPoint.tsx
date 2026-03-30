"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ibm_plex_sans } from "@/app/fontDeclare";
import { useLocale } from "next-intl";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HighlightsBox() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cubeRef = useRef<HTMLDivElement | null>(null);

  const locale = useLocale();

  useLayoutEffect(() => {
    if (!sectionRef.current || !cubeRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(cubeRef.current!, {
        rotationX: 270,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current!,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (self.progress >= 0.999)
              gsap.set(cubeRef.current!, { rotationX: 270 });
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // cleanup triggers + animations
  }, []);

  return (
    <section
      ref={sectionRef}
      className="strengths-section xl:h-[300vh] h-fit mt-5"
    >
      <div className="wrapper 2xl:flex flex-col justify-between">
        <h2
          className="uppercase text-[#be2826] font-bold w-full mb-[10vh]"
          style={ibm_plex_sans.style}
        >
          {locale === "en"
            ? "A Comprehensive Foundation with Core Strengths"
            : "Nền tảng đào tạo toàn diện với các thế mạnh cốt lõi"}
        </h2>
        <div className="boxWrapper !hidden xl:!flex">
          <div ref={cubeRef} className="box">
            <div className="face top">
              <div className="rounded-lg p-4 h-full w-full row">
                <figure className="rounded-lg overflow-hidden col-6 h-full w-full">
                  <Image
                    src="/images/courses/undergraduate/bmom/system.jpg"
                    alt=""
                    quality={100}
                    width={800}
                    height={750}
                    className="object-cover w-full h-full"
                  />
                </figure>
                <div className="col-6 h-full w-full flex flex-col justify-center">
                  <h2 className="text-white text-center mb-5 text-3xl font-bold">
                    {locale === "en" ? (
                      "Experiential Learning in Multimodal Transportation Systems"
                    ) : (
                      <>
                        Trải nghiệm Thực tế Hệ thống <br /> Giao thông Đa phương
                        thức
                      </>
                    )}
                  </h2>
                  <p className="text-white text-justify">
                    {locale === "en"
                      ? "Conduct actual on-site visits domestically and internationally to investigate and learn about the operational methods and management approaches for road traffic, railways, aviation, and maritime transport"
                      : "Tham quan thực tế trong và ngoài nước tìm hiểu cách thức vận hành và quản lý giao thông đường bộ, đường sắt, đường hàng không, đường hàng hải"}
                  </p>
                </div>
              </div>
            </div>
            <div className="face back">
              <div className="rounded-lg p-4 h-full w-full row">
                <figure className="rounded-lg overflow-hidden col-6 h-full w-full">
                  <Image
                    src="/images/courses/undergraduate/bmom/lab.jpeg"
                    alt=""
                    quality={80}
                    width={800}
                    height={750}
                    className="object-cover w-full h-full"
                  />
                </figure>
                <div className="col-6 h-full w-full flex flex-col justify-center">
                  <h2 className="text-white text-center mb-5 text-3xl font-bold">
                    {locale === "en"
                      ? "M.O.V.E SYSTEM"
                      : 'Hệ thống phòng labs "M.O.V.E SYSTEM"'}
                  </h2>

                  <p className="text-white text-justify">
                    {locale === "en" ? (
                      <>
                        Simulate, interact with, and vividly visualize ideas,
                        models, and solutions to support the management and
                        operation of smart mobility
                      </>
                    ) : (
                      <>
                        Mô phỏng, tương tác và trực quan sinh động các ý tưởng,
                        mô hình, giải pháp phục vụ công tác quản trị, vận hành
                        di chuyển thông minh
                      </>
                    )}
                  </p>

                  <p className="text-white text-justify">
                    &bull; <span className="inline-block ml-4"></span>S.E.E
                    Living Lab <br />
                    &bull; <span className="inline-block ml-4"></span>Smart
                    Mobility Lab <br /> &bull;{" "}
                    <span className="inline-block ml-4"></span>CE-Rail@UEH
                    <br /> &bull; <span className="inline-block ml-4"></span>
                    CTrl Lab
                  </p>
                </div>
              </div>
            </div>
            <div className="face front">
              <div className="rounded-lg p-4 h-full w-full row">
                <figure className="col-6 rounded-lg overflow-hidden h-full w-full">
                  <Image
                    src="/images/courses/undergraduate/bmom/bmom-simulation.png"
                    alt=""
                    quality={80}
                    width={800}
                    height={750}
                    className="object-cover w-full h-full"
                  />
                </figure>
                <div className="col-6 h-full w-full flex flex-col justify-center">
                  <h2 className="text-white text-center mb-5 text-3xl font-bold">
                    {locale === "en"
                      ? "Projected-based Learning"
                      : "Học tập Thực chiến"}
                  </h2>
                  <p className="text-white text-justify">
                    {locale === "en"
                      ? "Designed as a project-based solution, addressing real-world practical issues closely aligned with the needs of businesses and regulatory authorities"
                      : "Được thiết kế theo dự án, giải quyết vấn đề thực tiễn sát với nhu cầu doanh nghiệp và cơ quan quản lý"}
                  </p>
                </div>
              </div>
            </div>
            <div className="face bottom">
              <div className="rounded-lg p-4 h-full w-full row">
                <figure className="rounded-lg overflow-hidden col-6 h-full w-full">
                  <Image
                    src="/images/courses/undergraduate/bmom/career.png"
                    alt=""
                    quality={80}
                    width={800}
                    height={750}
                    className="object-cover w-full h-full"
                  />
                </figure>
                <div className="col-6 h-full w-full flex flex-col justify-center">
                  <h2 className="text-white text-center mb-5 text-3xl font-bold">
                    {locale === "en"
                      ? "Internship and Employment Opportunities"
                      : "Giới thiệu Thực tập và Việc làm"}
                  </h2>
                  <p className="text-white text-justify">
                    {locale === "en"
                      ? "Introduced to internships at enterprises, organizations or state management agencies in the fields of railways, aviation, public transport, and maritime affairs"
                      : "Được giới thiệu thực tập tại các doanh nghiệp,tổ chức và cơ quan quản lý Nhà nước trong lĩnh vực đường sắt, hàng không, giao thông công cộng, hàng hải"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile, Tablet */}
        <div className="!block xl:!hidden">
          <div className="rounded-lg p-4 h-full w-full row bg-[#1e272e] mt-6">
            <figure className="col-12 rounded-lg overflow-hidden h-full w-full">
              <Image
                src="/images/courses/undergraduate/bmom/bmom-simulation.png"
                alt=""
                quality={80}
                width={800}
                height={750}
                className="object-cover w-full h-full"
              />
            </figure>
            <div className="col-12 h-full w-full flex flex-col justify-center">
              <h2 className="text-white text-center mb-5 text-2xl md:text-3xl font-bold">
                {locale === "en"
                  ? "Projected-based Learning"
                  : "Học tập Thực chiến"}
              </h2>
              <p className="text-white text-justify">
                {locale === "en"
                  ? "Designed as a project-based solution, addressing real-world practical issues closely aligned with the needs of businesses and regulatory authorities"
                  : "Được thiết kế theo dự án, giải quyết vấn đề thực tiễn sát với nhu cầu doanh nghiệp và cơ quan quản lý"}
              </p>
            </div>
          </div>
          <div className="rounded-lg p-4 h-full w-full row bg-[#1e272e] mt-6">
            <figure className="rounded-lg overflow-hidden col-12 h-full w-full">
              <Image
                src="/images/courses/undergraduate/bmom/lab.jpeg"
                alt=""
                quality={80}
                width={800}
                height={750}
                className="object-cover w-full h-full"
              />
            </figure>
            <div className="col-12 h-full w-full flex flex-col justify-center">
              <h2 className="text-white text-center mb-5 text-2xl md:text-3xl font-bold">
                {locale === "en"
                  ? "M.O.V.E SYSTEM"
                  : 'Hệ thống phòng labs "M.O.V.E SYSTEM"'}
              </h2>

              <p className="text-white text-justify">
                {locale === "en" ? (
                  <>
                    Simulate, interact with, and vividly visualize ideas,
                    models, and solutions to support the management and
                    operation of smart mobility
                  </>
                ) : (
                  <>
                    Mô phỏng, tương tác và trực quan sinh động các ý tưởng, mô
                    hình, giải pháp phục vụ công tác quản trị, vận hành di
                    chuyển thông minh
                  </>
                )}
              </p>

              <p className="text-white text-justify">
                &bull; <span className="inline-block ml-4"></span>S.E.E Living
                Lab <br />
                &bull; <span className="inline-block ml-4"></span>Smart Mobility
                Lab <br /> &bull; <span className="inline-block ml-4"></span>
                CE-Rail@UEH
                <br /> &bull; <span className="inline-block ml-4"></span>
                CTrl Lab
              </p>
            </div>
          </div>
          <div className="rounded-lg p-4 h-full w-full row bg-[#1e272e] mt-6">
            <figure className="rounded-lg overflow-hidden col-12 h-full w-full">
              <Image
                src="/images/courses/undergraduate/bmom/system.jpg"
                alt=""
                quality={80}
                width={800}
                height={750}
                className="object-cover w-full h-full"
              />
            </figure>
            <div className="col-12 h-full w-full flex flex-col justify-center">
              <h2 className="text-white text-center mb-5 text-2xl md:text-3xl font-bold">
                {locale === "en" ? (
                  "Experiential Learning in Multimodal Transportation Systems"
                ) : (
                  <>
                    Trải nghiệm Thực tế <br />
                    Hệ thống Giao thông <br /> Đa phương thức
                  </>
                )}
              </h2>
              <p className="text-white text-justify">
                {locale === "en"
                  ? "Conduct actual on-site visits domestically and internationally to investigate and learn about the operational methods and management approaches for road traffic, railways, aviation, and maritime transport"
                  : "Tham quan thực tế trong và ngoài nước tìm hiểu cách thức vận hành và quản lý giao thông đường bộ, đường sắt, đường hàng không, đường hàng hải"}
              </p>
            </div>
          </div>
          <div className="rounded-lg p-4 h-full w-full row bg-[#1e272e] mt-6">
            <figure className="rounded-lg overflow-hidden col-12 h-full w-full">
              <Image
                src="/images/courses/undergraduate/bmom/career.png"
                alt=""
                quality={80}
                width={800}
                height={750}
                className="object-cover w-full h-full"
              />
            </figure>
            <div className="col-12 h-full w-full flex flex-col justify-center">
              <h2 className="text-white text-center mb-5 text-2xl md:text-3xl font-bold">
                {locale === "en"
                  ? "Internship and Employment Opportunities"
                  : "Giới thiệu Thực tập và Việc làm"}
              </h2>
              <p className="text-white text-justify">
                {locale === "en"
                  ? "Introduced to internships at enterprises, organizations or state management agencies in the fields of railways, aviation, public transport, and maritime affairs"
                  : "Được giới thiệu thực tập tại các doanh nghiệp, tổ chức và cơ quan quản lý Nhà nước trong lĩnh vực đường sắt, hàng không, giao thông công cộng, hàng hải"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

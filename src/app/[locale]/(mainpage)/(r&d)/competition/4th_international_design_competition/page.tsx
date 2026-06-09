"use client";
// Import Libs
import { useEffect, useState } from "react";
import $ from "jquery";

// Import Utils
import "./style.scss";
import envConfig from "@/config";

// Import Components
import Image from "next/image";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Booklet from "../../../facilities/student_studiolab/[slug]/components/Booklet";

// Import Data
import jury from "./data/jury.json";
import booklet from "./data/booklet.json";
import { useLocale } from "next-intl";
import DomParser from "@/components/domParser";

export default function Page() {
  const locale = useLocale();

  const [months, setMonths] = useState<string>("00");
  const [days, setDays] = useState<string>("00");
  const [hours, setHours] = useState<string>("00");
  const [minutes, setMinutes] = useState<string>("00");
  const [seconds, setSeconds] = useState<string>("00");

  useEffect(() => {
    function calculateClock() {
      const targetDate = new Date("2025-07-15T23:59:59"); // Set your target date here
      const now = new Date();

      const diff: number = targetDate.getTime() - now.getTime();

      if (diff < 0) {
        return;
      }

      // Calculate time units
      let months = targetDate.getMonth() - now.getMonth();
      let days = targetDate.getDate() - now.getDate();
      let hours = targetDate.getHours() - now.getHours();
      let minutes = targetDate.getMinutes() - now.getMinutes();
      let seconds = targetDate.getSeconds() - now.getSeconds();

      // Adjust for negative values
      if (seconds < 0) {
        seconds += 60;
        minutes--;
      }
      if (minutes < 0) {
        minutes += 60;
        hours--;
      }
      if (hours < 0) {
        hours += 24;
        days--;
      }
      if (days < 0) {
        months--;
        const lastMonth = new Date(
          now.getFullYear(),
          now.getMonth(),
          0,
        ).getDate();
        days += lastMonth;
      }
      if (months < 0) {
        months += 12;
      }

      setMonths(String(months).padStart(2, "0"));
      setDays(String(days).padStart(2, "0"));
      setHours(String(hours).padStart(2, "0"));
      setMinutes(String(minutes).padStart(2, "0"));
      setSeconds(String(seconds).padStart(2, "0"));
    }

    calculateClock();
    const timer = setInterval(calculateClock, 1000);

    const headerEle = $(".header__poster")[0];

    if (document.body.clientWidth >= 992) {
      window.onscroll = () => {
        if (window.scrollY >= 100) {
          headerEle.style.borderBottomRightRadius = "77px";
          headerEle.style.borderBottomLeftRadius = "77px";
        } else {
          headerEle.style.borderBottomRightRadius = "0";
          headerEle.style.borderBottomLeftRadius = "0";
        }
      };
    }

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="launching w-100">
      <section
        style={{
          background: `no-repeat center url(${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/background.jpg)`,
          backgroundSize: "cover",
          backgroundColor: "transparent",
          backgroundClip: "border-box",
          boxSizing: "border-box",
        }}
        className="pb-24 h-fit lg:h-[calc(100vh-60px)] header__poster relative pt-[61px] px-[91px] overflow-hidden before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:bg-black/40"
      >
        <div className="row">
          <div className="col-12 col-lg-4">
            <figure className="h-20 flex w-full justify-center">
              <Image
                src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/4th_compe_logo.png`}
                width={100}
                height={100}
                alt="4th_compe_logo"
                className="object-contain h-full w-auto"
              />
            </figure>
          </div>
          <div className="col-12 col-lg-8">
            <h2 className="text-lg-right text-center text-white lg:text-5xl! text-3xl! mb-2">
              (Re)Engaging Cities’ Landscape <br />
              for Cultural and Economics Vibrancy
            </h2>
            <div className="d-flex justify-content-lg-end justify-content-center mt-4">
              <div className="subTitle text-right max-w-[572px]">
                <span className="p-1 bg-black text-white w-fit text-lg! lg:text-xl! inline box-decoration-clone">
                  Smart and integrated solution for Nha Trang towards vibrant
                  and sustainable city.
                </span>
              </div>
            </div>
            <div className="w-full flex flex-wrap mt-9 header__info">
              <div className="w-full xl:w-1/2 mb-2 align-items-center d-flex flex-column justify-between">
                <h3 className="text-uppercase text-white font-weight-light text-xl! mb-0 text-center w-fit whitespace-nowrap">
                  {locale === "en" ? "total prize" : "tổng giá trị giải thưởng"}
                </h3>
                <p className="text-white flex-1 font-weight-bold text-4xl! w-fit text-center">
                  $5,700
                </p>
              </div>
              <div className="w-full xl:w-1/2">
                <h3 className="text-uppercase text-white font-weight-light text-xl! mb-0 text-center text-lg-left">
                  {locale === "en" ? "AWARD CEREMONY" : "Ngày trao giải"}
                </h3>
                <p className="text-white font-weight-bold text-4xl! text-center text-lg-left">
                  {locale === "en" ? (
                    <>
                      OCTOBER 1
                      <span className="align-text-top text-sm text-current">
                        ST
                      </span>
                      2025
                    </>
                  ) : (
                    <>01/10/2025</>
                  )}
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-12 d-flex justify-content-center d-xl-block">
                <a
                  href="#booklet"
                  className="row align-items-center header__info-btn-register mt-6 lg:mt-[37px] w-fit"
                >
                  <button className="text-uppercase text-white btn !bg-[#324c5b] px-9 py-[14px] !rounded-xl">
                    {locale === "en"
                      ? "See the final competition booklet"
                      : "Xem Booklet cuộc thi"}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="mouse-scroll">
          <div className="mouse">
            <div className="mouse-in"></div>
          </div>
          <div>
            <span className="down-arrow-1"></span>
            <span className="down-arrow-2"></span>
            <span className="down-arrow-3"></span>
          </div>
        </div>
      </section>
      <section className="mt-[67px]" style={{ padding: "0 20px 0 15px" }}>
        <div className="row px-8">
          <div className="col-12 col-md-6">
            <p className="font-italic text-center text-xl! max-w-[755px]">
              “
              {locale === "en" ? (
                <>
                  From Ponagar Tower to the foot of San Mountain, Nha Trang -
                  Khanh Hoa will soon have a heritage route along the Cai River.
                </>
              ) : (
                <>
                  Từ Tháp Bà Ponagar đến chân núi San, Nha Trang - Khánh Hòa{" "}
                  <br /> sẽ sớm có tuyến đường di sản dọc theo sông Cái.
                </>
              )}
              ”
            </p>
            <p className="font-weight-bold text-right max-w-[755px] text-[15px]">
              {locale === "en"
                ? "People’s Committee of Khanh Hoa Province"
                : "Ủy ban Nhân dân tỉnh Khánh Hòa"}
            </p>
          </div>
          <div className="col-12 col-md-6 text-justify text-base lg:text-xl">
            {locale === "en" ? (
              <>
                Following the success of the 2023 International Design
                Competition, which focused on Bac Phuoc Thang - Vung Tau, the
                competition is officially returning with the theme{" "}
                <b className="text-[#324C5B]">
                  (Re)engaging Cities’ Landscape for Cultural and Economic
                  Vibrancy
                </b>
                . This year, the selected site is in the Cai River area, aiming
                to propose innovative smart urban solutions that boost the local
                economy while preserving and enhancing the cityscape and coastal
                ecosystem of Nha Trang. <br />
                <br />
                The fourth year of the International Design Competition is now
                more than a design challenge; it is a global platform where we
                inspire the next generation to envision future cities that
                harmoniously blend innovation and tradition. <br />
                <br />
                <b className="text-[#324C5B]">Location:</b> Nha Trang City,
                Khanh Hoa Province, Vietnam
                <br />
                <b className="text-[#324C5B]">Participants eligibility:</b>{" "}
                University students and master students all around the world
                (maximum 3 students can form a team)
              </>
            ) : (
              <>
                Tiếp nối thành công của Cuộc thi Thiết kế Quốc tế năm 2023 – tập
                trung vào khu vực Bắc Phước Thắng, Vũng Tàu – cuộc thi chính
                thức trở lại với chủ đề{" "}
                <b className="text-[#324C5B]">
                  (Re)engaging Cities’ Landscape for Cultural and Economic
                  Vibrancy
                </b>
                .
                <br />
                <br />
                Năm nay, địa điểm được chọn nằm ở khu vực sông Cái, nhằm đề xuất
                các giải pháp đô thị thông minh sáng tạo, thúc đẩy kinh tế địa
                phương đồng thời bảo tồn và nâng tầm cảnh quan đô thị cùng hệ
                sinh thái ven biển của Nha Trang.
                <br />
                <br />
                Cuộc thi Thiết kế Quốc tế lần thứ tư năm nay không chỉ là một
                thử thách thiết kế, mà còn là nền tảng toàn cầu để truyền cảm
                hứng cho thế hệ trẻ hình dung về các thành phố tương lai – nơi
                hòa quyện hài hòa giữa đổi mới và truyền thống.
                <br />
                <br />
                <b className="text-[#324C5B]">Địa điểm:</b> Thành phố Nha Trang,
                tỉnh Khánh Hòa, Việt Nam
                <br />
                <b className="text-[#324C5B]">Đối tượng tham gia:</b> Sinh viên
                đại học và học viên cao học trên toàn thế giới (mỗi đội tối đa 3
                thành viên)
              </>
            )}
          </div>
        </div>
        <div className="row mt-[55px]">
          <div className="col-12 col-md-6 d-flex flex-column align-items-center">
            <h2 className="text-uppercase text-center font-weight-bold! w-fit text-[#324c5b]!">
              {locale === "en" ? "AWARD" : "giải thưởng"}
            </h2>
            <p
              className="text-center text-base! xl:text-lg! leading-10 mt-2 border-t-2 border-[#9eb9c5] max-w-[500px]"
              style={{ padding: "20px 25px 0 25px" }}
            >
              {locale === "en" ? (
                <>
                  <p className="text-xs! lg:text-lg!">
                    <b>$ 3,000</b> to 1st Award
                  </p>
                  <p className="text-xs! lg:text-lg!">
                    <b>$ 1,000</b> to 2nd Award
                  </p>
                  <p className="text-xs! lg:text-lg!">
                    <b>$ 700</b> to 3rd Award
                  </p>
                  <p className="text-xs! lg:text-lg!">
                    <b>$ 500</b> to Most Popular Award
                  </p>
                  <p className="text-xs! lg:text-lg!">
                    <b>$ 500</b> to Sponsor Favourite Award
                  </p>
                  <p className="text-xs! lg:text-lg!">10 Honourable Mentions</p>
                  <p className="text-xs! lg:text-lg!"> 15 Finalists</p>
                </>
              ) : (
                <>
                  <p className="text-xs! lg:text-lg!">
                    Giải Nhất: <b>$ 3,000</b>
                  </p>
                  <p className="text-xs! lg:text-lg!">
                    Giải Nhì: <b>$ 1,000</b>
                  </p>
                  <p className="text-xs! lg:text-lg!">
                    Giải Ba: <b>$ 700</b>
                  </p>
                  <p className="text-xs! lg:text-lg!">
                    Giải được bình chọn: <b>$ 500</b>
                  </p>
                  <p className="text-xs! lg:text-lg!">
                    Giải Yêu thích của Nhà tài trợ<b>$ 500</b>
                  </p>
                  <p className="text-xs! lg:text-lg!"> 10 Giải khuyến khích </p>
                  <p className="text-xs! lg:text-lg!">
                    15 Tác phẩm lọt vào vòng Chung kết
                  </p>
                </>
              )}
            </p>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column align-items-center w-fit">
            <h2 className="text-uppercase text-center font-weight-bold! w-full text-[#324c5b]!">
              {locale === "en" ? <>RECOGNITIONS</> : "Các quyền lợi khác"}
            </h2>
            <p
              className="text-center leading-10 mt-2 border-t-2 border-[#9eb9c5] max-w-[640px]"
              style={{ padding: "20px 25px 0 25px" }}
            >
              {locale === "en" ? (
                <>
                  <p className="text-xs! lg:text-lg!">
                    <b>Feature</b> in A special session of Smart Urbanisms &
                    Beyond Book series
                    <br />
                    <b>published by UEH Press</b>
                  </p>
                  <p className="text-xs! lg:text-lg!">
                    <b>Experiment</b> and Exploring Tour
                  </p>
                  <p className="text-xs! lg:text-lg!">
                    <b>Exhibition</b> and sharing with partners Opportunity to
                    be supported with <br /> flight tickets and accomodation in
                    Nha Trang City
                  </p>
                  <p className="text-xs! lg:text-lg!">
                    Opportunity to receive special awards from sponsors
                  </p>
                </>
              ) : (
                <>
                  <p className="text-xs! lg:text-lg!">
                    <b>Được giới thiệu</b> trong một phiên đặc biệt của loạt
                    sách <br />
                    <b>Smart Urbanisms & Beyond xuất bản bởi UEH Press</b>
                  </p>
                  <p className="text-xs! lg:text-lg!">
                    <b>Thực nghiệm và Tham quan Khám phá</b>
                  </p>
                  <p className="text-xs! lg:text-lg!">
                    <b>Triển lãm và chia sẻ cùng các đối tác</b>
                  </p>
                  <p className="text-xs! lg:text-lg!">
                    Cơ hội được hỗ trợ vé máy bay và chỗ ở
                    <br className="lg:hidden" /> tại Thành phố Nha Trang
                  </p>
                  <p className="text-xs! lg:text-lg!">
                    Cơ hội nhận giải thưởng đặc biệt từ các nhà tài trợ
                  </p>
                </>
              )}
            </p>
          </div>
        </div>
      </section>
      <section className="mt-[60px]">
        <figure className="relative">
          <Image
            width={2000}
            height={800}
            className="w-full object-contain"
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/Timeline.png`}
            alt="timeline"
            quality={100}
          />
          <figcaption className="text-[#9F7361] text-xs md:text-4xl lg:text-5xl absolute top-0 left-0 -translate-x-1/3 translate-y-[250%] -rotate-90 tracking-widest">
            TIMELINES
          </figcaption>
        </figure>
      </section>
      <section>
        <div className="d-flex justify-content-center">
          <h2
            className="text-uppercase text-4xl! text-[#324c5b]! border-b-[5px] border-[#9eb9c5] w-fit!"
            style={{ padding: "0 40px 10px" }}
          >
            {locale === "en" ? " jury" : "HỘI ĐỒNG GIÁM KHẢO"}
          </h2>
        </div>
        <div className="container mt-[50px] !max-w-[90%]">
          <div className="row jury">
            {/* JURY LOAD */}
            {jury.map(
              ({ name, title, image, country, affiliation, faculty }) => (
                <div
                  key={name}
                  className="col-12 col-lg-6 col-xl-4 my-3 h-[280px]!"
                >
                  <div className="row h-full">
                    <div className="col-5 h-full">
                      <figure className="w-full h-full">
                        <Image
                          className="w-full h-full object-cover"
                          width={162}
                          height={289}
                          src={`${envConfig.API_ENDPOINT}/public/static/${image}`}
                          alt={name}
                          quality={80}
                        />
                      </figure>
                    </div>
                    <div className="col-7 t">
                      <h4 className="text-base! text-[#324C5B]!">{name}</h4>
                      <p className="text-base! mb-[5px] text-[#9EB9C5]!">
                        {title}
                      </p>
                      <p className="text-base! mb-[5px] text-[#9EB9C5]!">
                        <DomParser
                          content={(faculty ?? "" + " " + affiliation).trim()}
                        />
                      </p>
                      <p className="text-base! mb-[5px] text-[#9EB9C5]!">
                        {country}
                      </p>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
      {Number(months) +
        Number(days) +
        Number(hours) +
        Number(minutes) +
        Number(seconds) !==
        0 && (
        <section className="countdown_clock mt-[167px] gap-5 position-relative text-center d-flex justify-content-center align-items-baseline flex-wrap px-3">
          <span className="text-uppercase font-weight-bold text-5xl text-[#324c5b]">
            only
          </span>
          <span
            className="font-weight-bolder text-5xl text-[#324c5b]"
            id="months"
          >
            {months}
          </span>
          <span className="font-weight-normal text-2xl">months</span>
          <span
            className="font-weight-bolder text-5xl text-[#324c5b] w-[55px]"
            id="days"
          >
            {days}
          </span>
          <span className="font-weight-normal text-2xl">days</span>
          <span
            className="font-weight-bolder text-5xl text-[#324c5b] w-[55px]"
            id="hours"
          >
            {hours}
          </span>
          <span className="font-weight-normal  text-2xl">hours</span>
          <span
            className="font-weight-bolder text-5xl text-[#324c5b] w-[55px]"
            id="minutes"
          >
            {minutes}
          </span>
          <span className="font-weight-normal text-2xl">minutes</span>
          <span
            className="font-weight-bolder text-5xl text-[#324c5b] w-[55px]"
            id="seconds"
          >
            {seconds}
          </span>
          <span className="font-weight-normal text-2xl">seconds</span>
          <span className="text-uppercase font-weight-bolder text-5xl text-[#324c5b]">
            left
          </span>
        </section>
      )}
      <div className="d-flex justify-content-center mt-5 mb-[55px]">
        <div className="w-[290px] h-[5px] bg-[#9eb9c5]"></div>
      </div>
      <section className="d-flex align-items-center justify-content-center px-3 w-100 mb-[150px]">
        <div className="d-flex align-items-center justify-content-center register max-w-[900px]">
          {Number(months) +
            Number(days) +
            Number(hours) +
            Number(minutes) +
            Number(seconds) !==
            0 && (
            <>
              <a
                className="text-uppercase text-white font-weight-bold d-block text-center p-2 p-md-3 text-[32px] bg-[#324c5b] rounded-xl"
                target="_blank"
                href="https://forms.gle/csQ27AGmyDPYWkR18"
              >
                register now
              </a>
              <div className="position-relative w-[350px]">
                <div className="d-flex align-items-center">
                  <div className="w-full h-[2px] bg-[#9eb9c5]"></div>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    width={12}
                    className="ml-[-11px]"
                    color="#9eb9c5"
                  />
                </div>
              </div>
              <a
                className="text-[32px] bg-[#324c5b] p-2 rounded-xl text-uppercase text-white font-weight-bold text-center p-md-3"
                href="https://bit.ly/ISCM4thCompetition"
                target="_blank"
              >
                our brochure
              </a>
            </>
          )}
        </div>
      </section>

      {/* Vote Section */}
      <section className="mb-52" id="archive-of-2025">
        <h2 className="flex gap-2 items-center uppercase text-4xl! lg:text-5xl! ml-2 md:ml-16 mb-[55px]">
          <span className="hidden md:flex items-center">
            <span className="text-5xl leading-relaxed text-[#9F736142]">
              {">"}
            </span>
            <span className="text-[58px] leading-relaxed -ml-3 text-[#9F73618A]">
              {">"}
            </span>
          </span>
          {locale === "en" ? (
            <>
              <span className="text-[#9F7361B0]">the</span>
              <span className="text-[#9F7361]">archive</span>
              <span className="text-[#9F7361B0]">of</span>
              <span className="text-[#9F7361]">2025</span>
            </>
          ) : (
            <>
              <span className="text-[#9F7361B0]">kết quả</span>{" "}
              <span className="text-[#9F7361]">năm 2025</span>
            </>
          )}
        </h2>

        <div className="text-center text-[#324C5B]! mb-28">
          <h4 className="text-base! lg:text-xl! text-current!">
            {locale === "en"
              ? "The next generation always perceive the vision toward"
              : "Thế hệ trẻ luôn nhận thức rõ ràng về tầm nhìn hướng tới"}
          </h4>
          <h3 className="text-2xl! lg:text-4xl! text-current! font-bold!">
            (Re)engaging Cities’ Landscape for <br /> Cultural and Economic
            Vibrancy
          </h3>
        </div>

        <div className="flex flex-wrap gap-16 px-10 md:px-28 mb-32">
          <motion.div
            transition={{ duration: 0.5, delay: 0.5 }}
            whileInView={{
              opacity: 1,
              transform: "translateY(0)",
              repeatCount: 1,
            }}
            className="w-full md:flex-1 opacity-0 translate-y-7"
          >
            <div>
              <p className="text-[#9F7361]! text-center font-extrabold! text-5xl!">
                56115+
              </p>
              <p className="uppercase text-2xl! text-center mb-4">
                {locale === "en" ? "STUDENTS & EXPERTS" : "người theo dõi"}
              </p>

              <h4 className="text-[#324C5B]! text-center">
                {locale === "en" ? (
                  <>
                    Follow us on <br />
                    the journey of future cities
                  </>
                ) : (
                  "Theo dõi chúng tôi trên hành trình kiến tạo những thành phố tương lai"
                )}
              </h4>
              <p className="text-justify text-xl! text-[#324C5B]!">
                {locale === "en" ? (
                  <>
                    With urbanization on the rise, cities face growing
                    challenges -
                    <i className="text-[#9F7361]">from cultural loss</i> to the
                    need for{" "}
                    <i className="text-[#9F7361]">human-centric design</i>. Over
                    the past 5 months of the{" "}
                    <b>4th International Design Competition</b>, thousands of
                    people have voiced their passion and ideas, showing true
                    commitment to shaping better cities for tomorrow.
                  </>
                ) : (
                  <>
                    Với tốc độ đô thị hóa ngày càng tăng, các thành phố đang đối
                    mặt với những thách thức ngày càng lớn -
                    <i className="text-[#9F7361]">từ sự mai một văn hóa</i> đến
                    nhu cầu về
                    <i className="text-[#9F7361]">
                      thiết kế lấy con người làm trung tâm
                    </i>
                    . Trong suốt 5 tháng qua của
                    <b>Cuộc thi Thiết kế Quốc tế lần thứ 4</b>, hàng ngàn người
                    đã bày tỏ niềm đam mê và những ý tưởng của mình, thể hiện sự
                    cam kết thực sự để kiến tạo những thành phố tốt đẹp hơn cho
                    ngày mai.
                  </>
                )}
              </p>
            </div>
          </motion.div>
          <motion.div
            transition={{ duration: 0.5, delay: 0.8 }}
            whileInView={{
              opacity: 1,
              transform: "translateY(0)",
              repeatCount: 1,
            }}
            className="w-full md:flex-1 opacity-0 translate-y-7"
          >
            <div>
              <p className="text-[#9F7361]! text-center font-extrabold! text-5xl!">
                {/* <NumberFlow value="492+" /> */}
                492+
              </p>
              <p className="uppercase text-2xl! text-center mb-4">
                {locale === "en" ? " YOUNG TALENTS" : "TÀI NĂNG TRẺ"}
              </p>

              <h4 className="text-[#324C5B]! text-center">
                {locale === "en"
                  ? "Choose to take action towards sustainable city"
                  : "Chọn hành động hướng tới thành phố bền vững"}
              </h4>
              <p className="text-justify text-xl! text-[#324C5B]!">
                {locale === "en" ? (
                  <>
                    By participating in the journey to{" "}
                    <b>
                      (re)engage city landscapes for cultural and economic
                      vibrancy
                    </b>
                    , the next generation has taken its first steps toward
                    shaping cities where{" "}
                    <i className="text-[#9F7361]">innovation</i> and{" "}
                    <i className="text-[#9F7361]">tradition</i> live in harmony
                    — an essential path to a{" "}
                    <i className="text-[#9F7361]">sustainable future</i>.
                  </>
                ) : (
                  <>
                    Bằng việc tham gia hành trình
                    <b>
                      (tái) gắn kết cảnh quan đô thị vì sự sôi động văn hóa và
                      kinh tế
                    </b>
                    , thế hệ trẻ đã thực hiện những bước đi đầu tiên để định
                    hình các thành phố nơi
                    <i className="text-[#9F7361]">đổi mới</i> và
                    <i className="text-[#9F7361]">truyền thống</i> cùng tồn tại
                    hài hòa — một con đường thiết yếu hướng tới
                    <i className="text-[#9F7361]">tương lai bền vững</i>.
                  </>
                )}
              </p>
            </div>
          </motion.div>
          <motion.div
            transition={{ duration: 0.5, delay: 1 }}
            whileInView={{
              opacity: 1,
              transform: "translateY(0)",
              repeatCount: 1,
            }}
            className="w-full md:flex-1 opacity-0 translate-y-7"
          >
            <div>
              <p className="text-[#9F7361]! text-center font-extrabold! text-5xl!">
                30+
              </p>
              <p className="uppercase text-2xl! text-center mb-4">
                {locale === "en" ? "countries" : "quốc gia"}
              </p>

              <h4 className="text-[#324C5B]! text-center">
                {locale === "en" ? (
                  <>
                    {" "}
                    Joint hand to research, think, <br />
                    and dare bold ideas
                  </>
                ) : (
                  <>
                    Cùng nhau bắt tay nghiên cứu, suy nghĩ, và dám đưa ra những
                    ý tưởng táo bạo
                  </>
                )}
              </h4>
              <p className="text-justify text-xl text-[#324C5B]">
                {locale === "en" ? (
                  <>
                    {" "}
                    With the mission{" "}
                    <i className="text-[#9F7361]">
                      “From Ponagar Tower to the foot of San Mountain – a
                      heritage route along the Cai River”
                    </i>
                    , the next generation unites across continents, bringing
                    global visions to local challenges. Together, they aim to
                    shape smarter solutions and create a better life for the
                    people of Nha Trang, Khanh Hoa, Viet Nam.
                  </>
                ) : (
                  <>
                    Với sứ mệnh
                    <i className="text-[#9F7361]">
                      “Từ Tháp Bà Ponagar đến chân núi San – tuyến đường di sản
                      dọc sông Cái”
                    </i>
                    , thế hệ trẻ đoàn kết vượt qua các châu lục, mang những tầm
                    nhìn toàn cầu đến với các thách thức địa phương. Cùng nhau,
                    họ hướng tới việc kiến tạo những giải pháp thông minh hơn và
                    tạo nên một cuộc sống tốt đẹp hơn cho người dân Nha Trang,
                    Khánh Hòa, Việt Nam.
                  </>
                )}
              </p>
            </div>
          </motion.div>
        </div>

        {/* <div className="flex items-center flex-col mb-5">
          <i className="mb-3 text-center">Through our brochure</i>
          <a
            className="text-2xl hover:bg-black bg-[#324c5b] p-2 rounded-xl text-uppercase text-white font-weight-bold text-center p-md-3"
            href="https://bit.ly/ISCM4thCompetition"
            target="_blank"
          >
            rewind the journey
          </a>
        </div> */}

        {/* <div id="voting" className="text-[#324C5B] uppercase font-bold">
          <p className="font-bold text-current text-2xl text-center mb-0">
            AMONG 150+ CREATIVE IDEAS,{" "}
          </p>
          <p className="font-bold text-current text-3xl text-center">
            15 ideas have profoundly has left an indelible mark
          </p>
        </div>
        <p className="font-bold mb-24 text-xl px-2 uppercase text-center">
          <span className="p-1 bg-[#9F7361] text-white w-fit text-xl inline box-decoration-clone">
            voting period for Audience Choice Award <br />
            21/08/2025 - 01/09/2025
          </span>
        </p> */}

        <div className="w-full flex flex-col items-center" id="booklet">
          <Booklet booklet={booklet} />
        </div>
      </section>

      <section className="d-flex flex-column align-items-center logo">
        <h2 className="text-uppercase font-weight-normal mb-4 text-center text-[#9eb9c5]!">
          {locale === "en" ? "in co-organizer with" : "Đồng tổ chức cùng"}
        </h2>
        <div className="w-100 d-flex justify-content-center flex-wrap">
          <Image
            className="object-contain"
            width={150}
            height={90}
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/Logo_UEH_xanh 1.png`}
            alt="UEH"
          />
          <Image
            className="object-contain"
            width={150}
            height={90}
            quality={90}
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/Logo-Khanh-Hoa 1.png`}
            alt="Khanh Hoa"
          />
          <Image
            className="object-contain"
            width={150}
            height={90}
            quality={90}
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/iscm.png`}
            alt=""
          />
          <Image
            className="object-contain"
            width={150}
            height={90}
            quality={90}
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/handong.png`}
            alt=""
          />
          <Image
            className="object-contain"
            width={150}
            height={90}
            quality={90}
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/trieste.png`}
            alt=""
          />
          <Image
            className="object-contain"
            width={150}
            height={90}
            quality={90}
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/thammasat.png`}
            alt=""
          />
          <Image
            className="object-contain"
            width={150}
            height={90}
            quality={90}
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/kuleuven.png`}
            alt=""
          />
          <Image
            className="object-contain"
            width={150}
            height={90}
            quality={90}
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/melbourne.png`}
            alt=""
          />
          <Image
            className="object-contain"
            width={150}
            height={90}
            quality={90}
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/omgeving_logo.jpg`}
            alt=""
          />
          <Image
            className="object-contain"
            width={150}
            height={90}
            quality={90}
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/rmit.png`}
            alt=""
          />
          <Image
            alt=""
            className="object-contain"
            width={150}
            height={90}
            quality={90}
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/sutd.png`}
          />
          <Image
            alt=""
            className="object-contain"
            width={150}
            height={90}
            quality={90}
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/xaydunguni.png`}
          />
          <Image
            alt=""
            className="object-contain"
            width={150}
            height={90}
            quality={90}
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/ktscqvn.png`}
          />
          <Image
            alt=""
            className="object-contain"
            width={150}
            height={90}
            quality={90}
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/tdtuni.png`}
          />
          <Image
            alt=""
            className="object-contain"
            width={150}
            height={90}
            quality={90}
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/chula.png`}
          />
          <Image
            alt=""
            className="object-contain"
            width={150}
            height={90}
            quality={90}
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/apds.png`}
          />
          <Image
            alt=""
            className="object-contain"
            width={150}
            height={90}
            quality={90}
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/seouluni.png`}
          />
          <Image
            alt=""
            className="object-contain"
            width={150}
            height={90}
            quality={90}
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/trihitakarana.png`}
          />
          <Image
            alt=""
            className="object-contain"
            width={150}
            height={90}
            quality={90}
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/yersin.png`}
          />
          <Image
            alt=""
            className="object-contain"
            width={150}
            height={90}
            quality={90}
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/USJ-01.png`}
          />
          <Image
            alt=""
            className="object-contain"
            width={150}
            height={90}
            quality={90}
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/hcmute.png`}
          />
        </div>
      </section>
      <section className="d-flex flex-column align-items-center mt-5 logo">
        <h2 className="text-uppercase font-weight-normal mb-4 text-center text-[#9eb9c5]!">
          {locale === "en" ? "With Sponsorship from" : "Với sự tài trợ từ"}
        </h2>
        <div className="d-flex justify-content-center flex-wrap">
          <div className="w-100 d-flex justify-content-center">
            <Image
              alt=""
              width={150}
              height={90}
              quality={60}
              className="object-contain mr-[60px]"
              src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/Logo-Khanh-Hoa 1.png`}
            />
            <Image
              width={150}
              height={90}
              quality={60}
              className="object-contain mr-[60px]"
              src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/Logo_UEH_xanh 1.png`}
              alt="UEH"
            />
          </div>
          <Image
            alt=""
            width={150}
            height={90}
            quality={60}
            className="object-contain ml-[44px]"
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/Vingroup_logo_small.svg.png`}
          />
          <Image
            alt=""
            width={150}
            height={90}
            quality={60}
            className="object-contain ml-[44px]"
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/Champa Group.png`}
          />
          <Image
            alt=""
            width={150}
            height={90}
            quality={60}
            className="object-contain ml-[44px]"
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/Sun-group-logo.png`}
          />
          <Image
            alt=""
            width={150}
            height={90}
            quality={60}
            className="object-contain ml-[44px]"
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/logo-KDI-Holdings-feature.png`}
          />
          <Image
            className="object-contain"
            width={150}
            height={90}
            quality={90}
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/omgeving_logo.jpg`}
            alt=""
          />
          <Image
            alt=""
            width={150}
            height={90}
            quality={60}
            className="object-contain ml-[40px]"
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/logo-ngang-1805.492.png`}
          />
          <Image
            alt=""
            width={150}
            height={90}
            quality={60}
            className="object-contain ml-[40px]"
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/gse&c.png`}
          />
          <Image
            alt=""
            width={150}
            height={90}
            quality={60}
            className="object-contain ml-[-40px]"
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/Van Tri.png`}
          />
          <Image
            alt=""
            width={150}
            height={90}
            quality={60}
            className="object-contain ml-[-40px]"
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/handong_construction.png`}
          />
          <Image
            alt=""
            width={150}
            height={90}
            quality={60}
            className="object-contain ml-[40px]"
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/logo-prime.svg`}
          />
          <Image
            alt=""
            width={150}
            height={90}
            quality={60}
            className="object-contain ml-[-40px]"
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/ongvang.png`}
          />
          <Image
            alt=""
            width={150}
            height={90}
            quality={60}
            className="object-contain ml-[-40px]"
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/isc.png`}
          />
          <Image
            alt=""
            width={150}
            height={90}
            quality={60}
            className="object-contain ml-[-40px]"
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/BIT ROOM-03.png`}
          />
          <Image
            alt=""
            width={150}
            height={90}
            quality={60}
            className="object-contain ml-[-40px]"
            src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/ljgroup.png`}
          />
        </div>
      </section>
      <section className="d-flex justify-content-center flex-wrap logo mt-5">
        <h2 className="text-uppercase font-weight-normal mb-4 text-center text-[#9eb9c5]!">
          {locale === "en"
            ? "With MEDIA SPONSORSHIP FROM"
            : "Tài trợ truyền thông bởi"}
        </h2>
        <div className="px-5">
          <div className="d-flex flex-wrap justify-content-center">
            <Image
              alt=""
              className="object-contain"
              width={150}
              height={90}
              quality={90}
              src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/ashui.png`}
            />
            <Image
              alt=""
              className="object-contain"
              width={150}
              height={90}
              quality={90}
              src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/kientrucvn.png`}
            />
            <Image
              alt=""
              className="object-contain"
              width={150}
              height={90}
              quality={90}
              src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/nhipcau.png`}
            />
          </div>
          <div className="flex flex-wrap justify-content-center">
            <Image
              alt=""
              className="object-contain"
              width={150}
              height={90}
              quality={90}
              src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/ybox.png`}
            />
            <Image
              alt=""
              className="object-contain"
              width={150}
              height={90}
              quality={90}
              src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/architectureexcursions.png`}
            />
            <Image
              alt=""
              className="object-contain"
              width={150}
              height={90}
              quality={90}
              src={`${envConfig.API_ENDPOINT}/public/static/images/competitive/4th-international/partners/ardor.png`}
            />
          </div>
        </div>
      </section>
      <Image
        src={
          "https://iscm-api.ueh.edu.vn/public/static/images/competitive/4th-international/footer.png"
        }
        className="w-full"
        width={2000}
        height={800}
        quality={100}
        alt="footer"
      />
    </section>
  );
}

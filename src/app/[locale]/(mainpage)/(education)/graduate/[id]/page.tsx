import { getCourseServices } from "@/services/course.service";
import { getLocale } from "next-intl/server";
import Image from "next/image";
import ContactForm from "../../components/contactForm";
import Link from "next/link";
import Info from "./info";
import { CalendarDays } from "lucide-react";
import { ibm_plex_sans } from "@/app/fontDeclare";

export default async function page({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const locale = await getLocale();
  const postID = (await params).id;

  const {
    payload: { data },
  } = await getCourseServices.getCourse("course_graduate", postID, locale);

  return (
    <section className="section-sm">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-4">
            {/* <!-- course thumb --> */}
            <Image
              alt=""
              width={1200}
              height={800}
              src={data.thumbnail}
              className="w-full object-contain"
              quality={90}
            />
          </div>
        </div>
        {/* <!-- course info --> */}
        <div className="row align-items-center mb-5">
          <div className="col-12 order-1 mb-4 mb-xl-0">
            <div className="row">
              <div className="col-lg-9 flex items-center">
                <h2 className="w-full uppercase">{data.title}</h2>
              </div>

              <div className="col-lg-3">
                <div className="flex gap-3 items-center">
                  <div>
                    <p className="text-base mb-0">
                      <span className="text-base text-[#ce2027]">
                        {locale === "vi" ? "Đợt 1" : "Period 1"}
                      </span>
                      : 12/2025
                    </p>
                    <p className="text-base mb-0">
                      <span className="text-base text-[#ce2027]">
                        {locale === "vi" ? "Đợt 2" : "Period 2"}
                      </span>
                      : 03/2026
                    </p>
                    <p className="text-base mb-0">
                      <span className="text-base text-[#ce2027]">
                        {locale === "vi" ? "Đợt 3" : "Period 3"}
                      </span>
                      : 06/2026
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- border --> */}
          <div className="col-12 mt-2 order-4">
            <div className="border-bottom border-primary"></div>
          </div>
        </div>
        {/* <!-- course details --> */}
        <div className="row">
          <div className="col-12 mb-4 content">
            {/* {DOMParser(data.content)} */}

            <h3 className="font-bold">
              {locale === "en" ? "About Course" : "Tổng quan về chương trình"}
            </h3>
            <p className="text-justify">
              {locale === "en"
                ? `The Master of Smart City and Innovation Management (MSCIM) at the
              Institute of Smart City and Management (ISCM), University of
              Economics Ho Chi Minh City (UEH) is a future-oriented,
              interdisciplinary program designed to shape innovative urban
              leaders. This 2-year program provides cutting-edge knowledge in
              technology, urban planning, and management, empowering learners to
              tackle real-world challenges and build sustainable, smart cities.`
                : `Chương trình Thạc sĩ Quản trị Đô thị thông minh và sáng tạo (MSCIM) của Viện Đô thị thông minh và Quản lý (ISCM), Đại học Kinh tế TP. Hồ Chí Minh (UEH) là một chương trình đào tạo liên ngành, định hướng tương lai, được thiết kế nhằm đào tạo những nhà quản trị đô thị đổi mới sáng tạo. Với 2 năm học, chương trình sẽ cung cấp kiến thức tiên tiến về công nghệ, quy hoạch đô thị và quản lý, giúp người học có khả năng giải quyết các thách thức thực tiễn và góp phần xây dựng các thành phố thông minh, bền vững.`}
              <p className="mt-2">
                {locale === "en"
                  ? `MSCIM offers two learning tracks tailored to different career
                paths and experience levels:`
                  : `MSCIM cung cấp hai lộ trình học tập phù hợp với các định hướng nghề nghiệp và trình độ kinh nghiệm khác nhau:`}
              </p>
              <ul className="mt-2 !pl-10">
                <li className="list-item !list-disc">
                  {locale === "en" ? (
                    <p>
                      <b>Standard Master Program</b> – Designed for learners
                      seeking a comprehensive education in smart city
                      development, innovation, and governance.
                    </p>
                  ) : (
                    <p>
                      <b>Chương trình Thạc sĩ hệ chính quy</b> – Dành cho người
                      học mong muốn được đào tạo toàn diện về phát triển đô thị
                      thông minh, đổi mới sáng tạo và quản trị.
                    </p>
                  )}
                </li>
                <li className="list-item !list-disc">
                  {locale === "en" ? (
                    <p>
                      <b>Executive Master Program</b> – Tailored for high-level
                      officials and professionals, focusing on strategic
                      decision-making and leadership in urban transformation.
                    </p>
                  ) : (
                    <p>
                      <b>Chương trình Thạc sĩ hệ điều hành cao cấp</b> – Thiết
                      kế dành riêng cho các cán bộ cấp cao và chuyên gia, tập
                      trung vào ra quyết định chiến lược và năng lực lãnh đạo
                      trong quá trình chuyển đổi đô thị.
                    </p>
                  )}
                </li>
              </ul>
            </p>

            <div className="mt-4">
              <Info data={data} />
            </div>
          </div>
        </div>

        {/* <div className="text-center">
          <button className="btn btn-primary !bg-[#ce2027] px-3">
            <Link
              href="https://tuyensinh.ueh.edu.vn/bai-viet/ueh-thong-bao-tuyen-sinh-dao-tao-trinh-do-thac-si-dot-1-nam-2026-2/"
              target="_blank"
              className="ml-2 !no-underline font-bold text-lg"
              style={{ textTransform: "none" }}
            >
              {locale === "en"
                ? "Details of the application profile"
                : "Chi tiết hồ sơ dự tuyển"}
            </Link>
          </button>
        </div> */}

        <h3
          className="mt-5 pb-3 font-bold text-3xl uppercase"
          style={ibm_plex_sans.style}
        >
          {locale === "en" ? "Why choose ISCM?" : "Tại sao nên chọn ISCM?"}
        </h3>

        <div className="flex flex-wrap mt-3 gap-6">
          <div className="mb-2 border-y border-[#ce2027] py-4 w-full md:w-[calc(50%-24px)]">
            <h4 className="font-bold mb-2 uppercase flex items-start gap-3">
              <span
                className="text-4xl text-[#ce2027]"
                style={ibm_plex_sans.style}
              >
                1
              </span>{" "}
              <span className="leading-loose text-[#ce2027]">
                {locale === "en"
                  ? "Hands-on Learning & Innovation"
                  : "Học tập thực hành & Đổi mới"}
              </span>
            </h4>
            <p className="text-justify">
              {locale === "en"
                ? `Learners engage in real-world projects, problem-solving workshops, and
          cutting-edge StudioLab technology, including urban simulation,
          AI-driven planning, and data analytics for smart cities.`
                : `Người học tham gia vào các dự án thực tế, hội thảo giải quyết vấn đề và công nghệ StudioLab tiên tiến, bao gồm mô phỏng đô thị, lập kế hoạch dựa trên AI và phân tích dữ liệu cho các thành phố thông minh.`}
            </p>
          </div>
          <div className="mb-2 border-b md:border-y border-[#ce2027] md:py-4 w-full md:w-[calc(50%-24px)]">
            <h4 className="font-bold mb-2 uppercase flex items-start gap-3">
              <span
                className="text-4xl text-[#ce2027]"
                style={ibm_plex_sans.style}
              >
                2
              </span>{" "}
              <span className="leading-loose text-[#ce2027]">
                {locale === "en" ? "Global Networking" : "Mạng lưới toàn cầu"}
              </span>
            </h4>
            <p className="text-justify">
              {locale === "en"
                ? `With a network of 40 national and international academic institutions
          and 15 partner businesses, the program connects learners with
          international experts, policymakers, and industry leaders, fostering a
          dynamic learning environment that encourages cross-border
          collaboration.`
                : "Với mạng lưới gồm 40 tổ chức học thuật quốc gia và quốc tế cùng 15 doanh nghiệp đối tác, chương trình kết nối người học với các chuyên gia, nhà hoạch định chính sách và lãnh đạo ngành quốc tế, thúc đẩy môi trường học tập năng động khuyến khích sự hợp tác xuyên biên giới."}
            </p>
          </div>
          <div className="mb-2 border-b border-[#ce2027] pb-4 w-full md:w-[calc(50%-24px)]">
            <h4 className="font-bold mb-2 uppercase flex items-start gap-3">
              <span
                className="text-4xl text-[#ce2027]"
                style={ibm_plex_sans.style}
              >
                3
              </span>{" "}
              <span className="leading-loose text-[#ce2027]">
                {locale === "en"
                  ? "Future-Ready Skillset"
                  : "Bộ kỹ năng sẵn sàng cho tương lai"}
              </span>
            </h4>
            <p className="text-justify">
              {locale === "en"
                ? `Graduates of SCIM are equipped with expertise in digital
          transformation, sustainable urban development, and smart city
          governance, making them highly sought after in urban planning,
          policy-making, and tech-driven infrastructure development.`
                : "Sinh viên tốt nghiệp SCIM được trang bị chuyên môn về chuyển đổi số, phát triển đô thị bền vững và quản trị thành phố thông minh, khiến họ trở thành ứng viên được săn đón trong lĩnh vực quy hoạch đô thị, hoạch định chính sách và phát triển cơ sở hạ tầng dựa trên công nghệ."}
            </p>
          </div>
          <div className="mb-2 border-b border-[#ce2027] pb-4 w-full md:w-[calc(50%-24px)]">
            <h4 className="font-bold mb-2 uppercase flex items-start gap-3">
              <span
                className="text-4xl text-[#ce2027]"
                style={ibm_plex_sans.style}
              >
                4
              </span>{" "}
              <span className="leading-loose text-[#ce2027]">
                {locale === "en"
                  ? "Active & Collaborative Alumni Network"
                  : "Mạng lưới Cựu Sinh viên Năng động & Hợp tác"}
              </span>
            </h4>
            <p className="text-justify">
              {locale === "en"
                ? `Become part of a dynamic alumni network that connects professionals,
          researchers, and leaders in the field of smart urban development. Stay
          engaged through joint projects, research collaborations, mentoring,
          events, and contributions to urban innovation initiatives.`
                : "Trở thành một phần của mạng lưới cựu sinh viên, nơi kết nối các chuyên gia, nhà nghiên cứu và nhà lãnh đạo trong lĩnh vực đô thị thông minh. Cùng duy trì kết nối, tham gia các dự án, nghiên cứu, mentoring, sự kiện, và đóng góp vào các sáng kiến đổi mới đô thị."}
            </p>
          </div>
        </div>
        {/* Form Contact */}
        <ContactForm category={`chương trình ${data.title}`} />
      </div>
    </section>
  );
}

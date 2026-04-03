import { getCourseServices } from "@/services/course.service";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import NotFound from "@/components/not-found";
import { CalendarDays } from "lucide-react";
import Link from "next/link";
import DomParser from "@/components/domParser";

export default async function page({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const i18n = await getTranslations();
  const locale = await getLocale();

  try {
    // const {
    //   payload: { data },
    // } = await getCourseServices.getCourse(
    //   "non-degree",
    //   "urban-beyond-urban-program",
    //   locale
    // );

    return (
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
              {/* <!-- course thumb --> */}
              <Image
                alt=""
                width={1200}
                height={500}
                src="https://iscm-api.ueh.edu.vn/public/static/images/courses/ubu.png"
                className="w-full object-contain max-h-[500px]"
                quality={80}
              />
            </div>
          </div>
          {/* <!-- course info --> */}
          <div className="row align-items-center mb-5">
            <div className="col-xl-7 order-1 col-sm-6 mb-4 mb-xl-0">
              <h2>
                {locale === "en"
                  ? "Urban Beyond Urban Program"
                  : "Khóa học Urban Beyond Urban"}
              </h2>
            </div>
            <div className="col-xl-5 order-sm-3 order-xl-2 col-12 order-2">
              <ul className="list-inline text-xl-center">
                <li className="list-inline-item mr-4 mb-3 mb-sm-0">
                  <div className="d-flex align-items-center">
                    <CalendarDays size={40} className="mr-2" />
                    <div className="text-left">
                      <h6 className="mb-0 uppercase font-bold text-base">
                        {i18n("duration")}
                      </h6>
                      <p className="mb-0 text-base">
                        {locale === "en" ? "1-2 weeks" : "1-2 tuần"}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* <!-- border --> */}
            <div className="col-12 mt-4 order-4">
              <div className="border-bottom border-primary"></div>
            </div>
          </div>
          {/* <!-- course details --> */}
          <div className="row">
            <div className="col-12 mb-4 content">
              <DomParser
                content={
                  locale === "en"
                    ? `<p style="text-align: justify"><strong>Urban Beyond Urban</strong> is a flagship international summer program by ISCM, bringing together learners from around the world to explore urban innovation beyond conventional city planning. Running successfully for over five years, this program is co-organized with Trieste University (Italy), KU Leuven University (Belgium), Handong Global University (Korea), Thammasat University (Thailand), and Ngurah Rai University (Indonesia).</p><p style="text-align: justify"></p><p style="text-align: justify">Through hands-on design studios, field research, and real-world case studies, participants tackle global urban challenges, from smart infrastructure to sustainable city growth. Learners engage in interactive workshops, site visits to smart city projects, and collaborative hackathons, developing innovative solutions with an interdisciplinary approach. Cultural immersion activities and community engagement provide deeper insights into local urban dynamics, fostering a global network of future city-makers.</p><p style="text-align: justify"></p><p style="text-align: justify">This immersive, multi-location experience empowers participants with cutting-edge knowledge, practical skills, and an international perspective on shaping resilient, people-centric cities for the future. </p>`
                    : `<p style="text-align: justify"><strong>"Urban Beyond Urban"</strong> là chương trình hè quốc tế hàng đầu do ISCM tổ chức, quy tụ học viên từ khắp nơi trên thế giới để khám phá những sáng tạo đô thị vượt ra ngoài khuôn khổ quy hoạch truyền thống. Chương trình đã được tổ chức thành công suốt hơn 5 năm qua, với sự đồng hành của các trường đại học danh tiếng: Đại học Trieste (Ý), Đại học KU Leuven (Bỉ), Đại học Handong Global (Hàn Quốc), Đại học Thammasat (Thái Lan) và Đại học Ngurah Rai (Indonesia).</p><p style="text-align: justify"></p><p style="text-align: justify">Thông qua các studio thiết kế thực hành, nghiên cứu thực địa và phân tích các tình huống đô thị thực tế, học viên sẽ cùng nhau giải quyết các thách thức toàn cầu về phát triển đô thị – từ hạ tầng thông minh đến tăng trưởng bền vững. Chương trình bao gồm các workshop tương tác, tham quan thực tế các dự án thành phố thông minh, và các cuộc thi hackathon hợp tác liên ngành nhằm phát triển những giải pháp đổi mới sáng tạo.</p><p style="text-align: justify"></p><p style="text-align: justify">Bên cạnh đó, các hoạt động giao lưu văn hóa và gắn kết cộng đồng mang đến góc nhìn sâu sắc hơn về bối cảnh đô thị địa phương, mở rộng mạng lưới quốc tế cho những nhà kiến tạo thành phố tương lai.</p><p style="text-align: justify"></p><p style="text-align: justify">Với trải nghiệm đa quốc gia đầy cảm hứng này, học viên sẽ được trang bị kiến thức tiên tiến, kỹ năng thực tiễn và tầm nhìn toàn cầu để định hình những thành phố bền vững, lấy con người làm trung tâm trong kỷ nguyên mới.</p>`
                }
              />
            </div>
          </div>

          <h4 className="mb-4">
            {locale === "en"
              ? "Take a look back at our journey over the years"
              : "Khám phá hành trình qua các năm"}
          </h4>

          <div className="flex gap-3">
            <Link
              href={"/non_degree/urban-beyond-urban-program/2025"}
              className="btn btn-primary !bg-[#ce2027]"
            >
              2025
            </Link>
            <Link
              href={"/non_degree/urban-beyond-urban-program/2024"}
              className="btn btn-primary !bg-[#ce2027]"
            >
              2024
            </Link>
            <Link
              href={"/non_degree/urban-beyond-urban-program/2023"}
              className="btn btn-primary !bg-[#ce2027]"
            >
              2023
            </Link>
            <Link
              href={"/non_degree/urban-beyond-urban-program/2022"}
              className="btn btn-primary !bg-[#ce2027]"
            >
              2022
            </Link>
            <Link
              href={"/non_degree/urban-beyond-urban-program/2021"}
              className="btn btn-primary !bg-[#ce2027]"
            >
              2021
            </Link>
            <Link
              href={"/non_degree/urban-beyond-urban-program/2020"}
              className="btn btn-primary !bg-[#ce2027]"
            >
              2020
            </Link>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.log(error);
    return <NotFound />;
  }
}

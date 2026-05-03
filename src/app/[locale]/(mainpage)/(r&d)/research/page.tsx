import { ibm_plex_sans } from "@/app/fontDeclare";
import { getLocale } from "next-intl/server";
import ResearchCategory from "./category";
import { Metadata } from "next";
import Image from "next/image";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "R&D",
};

export default async function ResearchPage() {
  const locale = await getLocale();

  return (
    <section className="py-24">
      <div id="mainstream" className="container !max-w-full">
        <div className="row">
          <div className="col-12 col-lg-5">
            <h2
              className={`text-[#971919] uppercase ${ibm_plex_sans.className} text-center`}
            >
              {locale === "en"
                ? "research mainstream"
                : "xu hướng nghiên cứu chính"}
            </h2>
            <span className="flex w-full justify-center mt-6">
              <p className="text-black text-justify leading-6">
                {locale === "en" ? (
                  <>
                    The mission of ISCM is to conduct in-depth research and
                    problem-solving projects guided by the principle “Think
                    Globally – Act Locally.” Its R&D activities reflect a
                    pioneering commitment to seeking innovative solutions to
                    contemporary challenges through five main research streams:
                    “Framework Transition,” “Glocal Design,” “Human-Centric
                    Orientation,” “Tech Solutions,” and “Urban System.” These
                    pillars form the foundation for research and development
                    efforts, contributing to the creation of practical and
                    sustainable solutions for the future.
                    <br />
                    To realize these orientations, ISCM develops a multi-layered
                    system of Research Units, including Research Groups, Labs,
                    Living Labs, Centers, along with Individual Research and
                    Fundraising activities. Each model plays a distinct role
                    within the research and innovation value chain. Research
                    Groups focus on in-depth studies within specific themes and
                    promote academic collaboration; Labs develop technical
                    research, experimentation, and prototypes; Living Labs
                    implement applied research in real-world environments based
                    on co-creation with communities and stakeholders; while
                    Centers act as interdisciplinary hubs capable of connecting
                    partners, mobilizing resources, providing policy
                    consultation, facilitating technology transfer, and
                    developing commercially viable products. In parallel,
                    Individual Research encourages independent research
                    directions based on personal expertise, while Fundraising
                    teams support funding acquisition and proposal development
                    for strategic research projects.
                    <br />
                    ISCM’s Research Units are oriented not only toward producing
                    high-quality scientific publications but also toward
                    fostering young research talent, developing practical
                    experimental models, strengthening collaboration with
                    businesses, government, and communities, and supporting
                    knowledge transfer and innovation for sustainable
                    development.
                  </>
                ) : (
                  <>
                    Sứ mệnh của ISCM là thực hiện các nghiên cứu chuyên sâu và
                    các dự án giải quyết vấn đề theo phương châm “Suy nghĩ toàn
                    cầu - Hành động địa phương” (Think Globally – Act Locally).
                    R&D thể hiện cam kết tiên phong trong việc tìm kiếm các giải
                    pháp sáng tạo nhằm giải quyết những thách thức đương đại
                    thông qua năm dòng nghiên cứu chính: “Framework Transition”,
                    “Glocal Design”, “Human-Centric Orientation”, “Tech
                    Solutions”, và “Urban System”. Những trụ cột này tạo nên nền
                    tảng cho nỗ lực nghiên cứu và phát triển, góp phần kiến tạo
                    các giải pháp có tác động thực tiễn và bền vững cho tương
                    lai.
                    <br />
                    Để hiện thực hóa các định hướng này, ISCM phát triển
                    Research Units đa tầng gồm Research Group, Lab, Living Lab,
                    Center, cùng các hoạt động Individual Research và
                    Fundraising. Mỗi mô hình đảm nhận một vai trò riêng trong
                    chuỗi giá trị nghiên cứu – đổi mới sáng tạo. Các Research
                    Group tập trung vào nghiên cứu chuyên sâu theo từng chủ đề
                    hẹp và thúc đẩy hợp tác học thuật; các Lab phát triển nghiên
                    cứu kỹ thuật, thí nghiệm và prototype; Living Lab triển khai
                    nghiên cứu ứng dụng trong môi trường thực tế dựa trên nền
                    tảng co-creation với cộng đồng và các bên liên quan; trong
                    khi các Center đóng vai trò đầu mối liên ngành với khả năng
                    kết nối đối tác, huy động nguồn lực, tư vấn chính sách,
                    chuyển giao công nghệ và phát triển các sản phẩm có khả năng
                    thương mại hóa. Song song đó, hoạt động Individual Research
                    khuyến khích các hướng nghiên cứu độc lập theo chuyên môn cá
                    nhân, còn các nhóm Fundraising hỗ trợ tìm kiếm nguồn tài trợ
                    và xây dựng proposal cho các dự án nghiên cứu chiến lược.
                    <br />
                    Research Units của ISCM được định hướng không chỉ nhằm tạo
                    ra các công bố khoa học chất lượng cao mà còn thúc đẩy đào
                    tạo nguồn nhân lực nghiên cứu trẻ, phát triển các mô hình
                    thử nghiệm thực tiễn, tăng cường hợp tác với doanh nghiệp –
                    chính quyền – cộng đồng, cũng như hỗ trợ chuyển giao tri
                    thức và đổi mới sáng tạo phục vụ phát triển bền vững.
                  </>
                )}
              </p>
            </span>

            <div className="flex gap-3">
              <Link
                href="/research/publications"
                className="!flex !w-fit h-full items-center gap-2 btn btn-primary"
              >
                {locale === "en" ? "Publications" : "Công bố khoa học"}
                <SquareArrowOutUpRight />
              </Link>
              <Link
                href="/research/projects"
                className="!flex !w-fit h-full items-center gap-2 btn btn-primary"
              >
                {locale === "en" ? "Projects" : "Dự án nghiên cứu"}
                <SquareArrowOutUpRight />
              </Link>
              <Link
                href="/research/books"
                className="!flex !w-fit h-full items-center gap-2 btn btn-primary"
              >
                {locale === "en" ? "Books" : "Sách"} <SquareArrowOutUpRight />
              </Link>
            </div>
          </div>

          <div className="col-12 col-lg-7 overflow-hidden">
            <ResearchCategory />
          </div>
        </div>
      </div>
    </section>
  );
}

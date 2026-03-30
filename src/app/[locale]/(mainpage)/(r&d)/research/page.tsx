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
                    problem-solving projects under the principle of “Think
                    Globally - Act Locally”. The R&D section showcases a
                    commitment to pioneering innovative solutions that address
                    contemporary challenges through five key mainstreams:
                    Framework Transition, Glocal Design, Human-Centric
                    Orientation, Tech Solutions and Urban System. These pillars
                    forms the backbone of research and development efforts,
                    enabling impactful solutions for a better future.
                  </>
                ) : (
                  <>
                    Sứ mệnh của ISCM là thực hiện các nghiên cứu chuyên sâu và
                    các dự án giải quyết vấn đề theo phương châm “Suy nghĩ toàn
                    cầu - Hành động địa phương”. Bộ phận R&D thể hiện cam kết
                    tiên phong trong việc tìm kiếm các giải pháp sáng tạo nhằm
                    giải quyết những thách thức đương đại thông qua năm dòng
                    chính: &quot;Framework Transition&quot;, &quot;Glocal
                    Design&quot;, &quot;Human-Centric Orientation&quot;,
                    &quot;Tech Solutions&quot;, &quot;Urban System&quot;. Những
                    trụ cột này tạo nên nền tảng cho nỗ lực nghiên cứu và phát
                    triển, giúp kiến tạo các giải pháp có tác động mạnh mẽ vì
                    một tương lai tốt đẹp hơn.
                  </>
                )}
              </p>
            </span>

            <Link
              href="/research/publications"
              className="!flex !w-fit items-center gap-2 btn btn-primary"
            >
              {locale === "en" ? "Publications" : "Công bố khoa học"}
              <SquareArrowOutUpRight />
            </Link>
            <Link
              href="/research/projects"
              className="!flex !w-fit items-center gap-2 btn btn-primary mt-3"
            >
              {locale === "en" ? "Projects" : "Dự án nghiên cứu"}
              <SquareArrowOutUpRight />
            </Link>
            <Link
              href="/research/books"
              className="!flex !w-fit items-center gap-2 btn btn-primary mt-3"
            >
              {locale === "en" ? "Books" : "Sách"} <SquareArrowOutUpRight />
            </Link>
          </div>

          <div className="col-12 col-lg-7 overflow-hidden">
            <ResearchCategory />
          </div>
        </div>
      </div>
    </section>
  );
}

import { ibm_plex_sans } from "@/app/fontDeclare";
import PageHeader from "@/components/partials/pageHeader";
import NotFound from "@/components/not-found";
import DesignStudio from "./designStudio";
import { getLocale } from "next-intl/server";
import DomParser from "@/components/domParser";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ year?: string }>;
}) {
  const year = (await searchParams).year || "2025";
  const locale = await getLocale();

  try {
    return (
      <>
        <PageHeader />
        <section className="container pt-16">
          <div>
            <h1
              className={`text-4xl ${ibm_plex_sans.className} mb-4 uppercase text-center`}
            >
              {locale === "en" ? "Student StudioLab" : "Đồ án sinh viên"}
            </h1>
            <p className="mt-2 pb-3 text-justify text-base break-keep">
              <DomParser
                content={
                  locale === "vi"
                    ? `Đồ án sinh viên là nơi khởi nguồn cho những hành trình sáng tạo đầy thử thách và khám phá. Mỗi studio là một không gian học thuật độc lập, nơi các nhà thiết kế trẻ được dẫn dắt để đào sâu vào một chủ đề cụ thể, phát triển tư duy phản biện, và hình thành những giải pháp thiết kế mang tính thực tiễn và sáng tạo.
                      <br /><br />
                      Mỗi năm, các studio mang đến những góc nhìn đa dạng, phản ánh sự tiến hóa trong tư duy thiết kế và sự trưởng thành trong cách tiếp cận vấn đề. Từ những dự án mang tính cộng đồng đến các nghiên cứu mang chiều sâu cá nhân, Design StudioLab là nơi các ý tưởng được định hình, thử thách và phát triển thành những giải pháp có giá trị.`
                    : `Student StudioLab is the heart of creative inquiry, where each studio becomes a distinct space for critical thinking, experimentation, and innovation. Throughout the year, students engage deeply with specific themes, guided by a process that encourages both intellectual rigor and imaginative exploration.
                      <br /><br />
                      Each studio offers a unique perspective, reflecting the diversity of thought and the evolution of design thinking across disciplines. From community-driven initiatives to introspective conceptual studies, design studioLab fosters a culture of inquiry where every outcome is rooted in research, reflection, and relevance.`
                }
              />
            </p>
          </div>

          <DesignStudio year={year} />
        </section>
      </>
    );
  } catch (error) {
    console.log(error);
    return <NotFound />;
  }
}

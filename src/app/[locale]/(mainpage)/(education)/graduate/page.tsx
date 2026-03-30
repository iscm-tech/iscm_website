import PageHeader from "@/components/partials/pageHeader";
import { getCourseServices } from "@/services/course.service";
import { RequestProps } from "@/types/page.type";
import { getLocale } from "next-intl/server";
import CourseCard from "../components/courseCard";
import NotFound from "@/components/not-found";

export async function generateMetadata() {
  const locale = (await getLocale()) as "vi" | "en";

  return {
    title: locale === "en" ? "Master Program" : "Chương trình thạc sĩ",
  };
}

export default async function CourseGraduatePage({ params }: RequestProps) {
  const locale = (await params).locale;

  try {
    const {
      payload: { data },
    } = await getCourseServices.getList("course_graduate", locale);

    return (
      <>
        <PageHeader />
        <section className="section">
          <div className="container">
            <div className="row">
              {data.map(({ title, thumbnail, id, slug, duration }) => (
                <div className="col-lg-4 col-sm-6 mb-4" key={id}>
                  <CourseCard
                    id={slug}
                    basePath="course_graduate"
                    title={title}
                    duration={duration}
                    thumb={thumbnail}
                    category={locale === "en" ? "Graduate" : "Thạc sĩ"}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  } catch (error) {
    console.log(JSON.parse(JSON.stringify(error)));

    return <NotFound />;
  }
}

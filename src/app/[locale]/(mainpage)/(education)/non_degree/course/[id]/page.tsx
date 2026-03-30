import Image from "next/image";
import SummarizeBar from "./views/SummarizeBar";
import Content from "./views/Content";
import HotNewRelease from "../../views/HotNewRelease";
import { getLocale } from "next-intl/server";
import { getCourseServices } from "@/services/course.service";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const courseSlug = (await params).id;
  // const locale = await getLocale();
  const locale = "vi";

  try {
    const {
      payload: { data },
    } = await getCourseServices.getNonDegreeCourseList(locale);

    const {
      payload: { data: courseData },
    } = await getCourseServices.getNonDegreeCourse(courseSlug, locale);

    return (
      <section className="w-full">
        <figure className="w-full">
          <Image
            src={courseData.thumbnail}
            alt={courseSlug}
            width={1440}
            height={1440}
            quality={100}
            className="w-full max-h-[70vh] object-cover"
          />
        </figure>
        <div className="w-full relative container lg:h-[69px]">
          <SummarizeBar
            items={courseData.summarize}
            level={{ level: courseData.level }}
          />
        </div>
        <div className="course__content mt-2">
          <Content courseRecommended={data} courseData={courseData} />
        </div>
      </section>
    );
  } catch (error) {
    console.log(error);
  }
}

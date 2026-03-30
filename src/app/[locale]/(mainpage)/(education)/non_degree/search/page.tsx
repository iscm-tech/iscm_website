import NotFound from "@/components/not-found";
import { getCourseServices } from "@/services/course.service";
import { getLocale, getTranslations } from "next-intl/server";
import React from "react";
import CourseCard from "../../components/courseCard";
import { Badge, Divider, Empty } from "antd";
import SearchSection from "../views/SearchSection";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

type searchParamsType = {
  title?: string;
  level?: string;
  language?: string;
  type?: string;
  status?: string;
};

export default async function page({
  searchParams,
}: {
  searchParams: Promise<searchParamsType>;
}) {
  const locale = await getLocale();
  const search = await searchParams;

  const i18n = await getTranslations();

  try {
    const {
      payload: { data },
    } = await getCourseServices.searchNonDegreeCourses("vi", search);

    return (
      <section className="container py-10">
        <Link
          href={"/non_degree"}
          className="flex w-fit py-2 px-3 rounded-md gap-2 items-center hover:bg-[#d3d3d3]"
        >
          <MoveLeft color="#000" />{" "}
          <span className="text-xl">
            {locale === "en" ? "All Courses" : "Tất cả khóa học"}
          </span>
        </Link>

        <Divider className="mt-3 bg-[#d3d3d3]" />

        <div className="mt-5">
          <SearchSection />
        </div>

        <h3 className="mt-5">
          {locale === "en" ? "Results for " : "Kết quả cho "}
          <span className="italic lowercase font-normal text-lg">
            &quot;
            {Object.keys(search)
              .map((key) => i18n(search[key as keyof searchParamsType]))
              .join(" & ")}
            &quot;
          </span>
          <span className="text-lg font-normal text-gray-400 inline-block ml-2">
            ({data.length})
          </span>
        </h3>

        {data.length < 1 && (
          <div className="mt-5">
            <Empty
              description={
                locale === "en"
                  ? "No suitable course"
                  : "Không có khóa học phù hợp"
              }
            />
          </div>
        )}

        {data.length > 0 && (
          <div className="row gap-y-10 mt-3">
            {data.map(
              ({ title, thumbnail, id, slug, duration, level, location }) => (
                <div
                  className="col-xl-4 col-sm-6 col-12 flex-shrink-0 h-fit release-courses"
                  key={id}
                >
                  <CourseCard
                    id={slug}
                    basePath="/non_degree/course"
                    title={title}
                    duration={duration.value + " " + duration.unit}
                    thumb={thumbnail}
                    category={i18n(level)}
                    class_type={i18n(location)}
                  />
                </div>
              ),
            )}
          </div>
        )}
      </section>
    );
  } catch (error) {
    console.log(error);
    return <NotFound />;
  }
}

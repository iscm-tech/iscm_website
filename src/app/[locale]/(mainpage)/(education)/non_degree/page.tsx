import { getCourseServices } from "@/services/course.service";
import { getLocale } from "next-intl/server";
import NotFound from "@/components/not-found";
import SearchSection from "./views/SearchSection";
import HotNewRelease from "./views/HotNewRelease";
import { getMemberServices } from "@/services/member.service";
import Teachers from "./views/Teachers";
import Link from "next/link";

export async function generateMetadata() {
  const locale = (await getLocale()) as "vi" | "en";

  return {
    title: locale === "en" ? "Non - Degree Program" : "Khóa học ngắn hạn",
  };
}

export default async function CourseGraduatePage() {
  const locale = await getLocale();

  try {
    const {
      payload: { data },
    } = await getCourseServices.getNonDegreeCourseList("vi");

    const {
      payload: { data: instructors },
    } = await getMemberServices.getList(
      "members",
      locale === "en" ? "lecturer" : "giảng viên",
      locale,
    );

    return (
      <>
        <div
          className="mr-[15px] h-[60vh] min-h-[800px] overflow-hidden duration-200 transition-all w-full relative bg-black py-6 before:z-0 before:bg-black/40 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0"
          style={{
            backgroundImage: `url(/images/courses/non-degree/nondegree_bg.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container-lg lg:!max-w-[80vw] h-full w-full">
            <div className="row h-full items-center">
              <div className="col-lg-6 col-12 h-fit">
                <h1 className="text-5xl uppercase text-white !text-center lg:!text-start">
                  {locale === "vi" ? "Khóa học ngắn hạn" : "Non-degree Program"}
                </h1>
                <p className="text-white text-3xl mt-5 !text-center lg:!text-start">
                  {locale === "vi" ? (
                    <>
                      Học cùng chuyên gia, <br /> nâng cấp kỹ năng
                    </>
                  ) : (
                    <>
                      Learn with experts, <br /> improve your skills
                    </>
                  )}
                </p>
                <div className="flex gap-5 mt-9 justify-center lg:justify-start">
                  <Link
                    href={"#hot-new-release"}
                    className="bg-white rounded-md text-2xl font-bold text-black py-2 px-3 border border-black"
                  >
                    {locale === "en"
                      ? "Explore our courses"
                      : "Khám phá các khóa học"}
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <video
                  src="/images/courses/non-degree/ubu.mp4"
                  className="rounded-xl w-full h-full object-contain shadow-xl shadow-white/70"
                  autoPlay
                  muted
                  loop
                ></video>
              </div>
            </div>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <h3>
              {locale === "en"
                ? "What do you want to learn?"
                : "Bạn muốn tìm kiếm khóa học gì?"}
            </h3>
            <SearchSection />
          </div>
          <div className="bg-[rgba(151,25,25,0.07)] mt-5 py-5 relative w-full overflow-hidden">
            <HotNewRelease data={data} />
          </div>
          <div className="py-5">
            <div className="container lg:!max-w-[80%]">
              <h3 className="text-2xl">
                {locale === "en"
                  ? "Instructors"
                  : "Đội ngũ giảng viên tiêu biểu"}
              </h3>
            </div>
            <Teachers instructors={instructors} />
          </div>
        </section>
      </>
    );
  } catch (error) {
    console.log(JSON.parse(JSON.stringify(error)));

    return <NotFound />;
  }
}

// Services
import PageHeader from "@/components/partials/pageHeader";

import "./style.scss";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import ItemTabs from "./ItemTabs";
import DomParser from "@/components/domParser";
import { recap_video } from "@/constants";

const mission = {
  en: [
    "We advance interdisciplinary research that support diverse communities and protect the environment in our cities.",
    "We cultivate learners and professionals through education that integrates technology, governance and urban innovation for sustainable development.",
    "We foster a dynamic and inclusive platform that connects people, nature, technology, and infrastructure to enable co-creation, drive innovation and generate global impact.",
  ],
  vi: [
    "Thúc đẩy nghiên cứu liên ngành để hỗ trợ cộng đồng và bảo vệ môi trường đô thị",
    "Đào tạo thế hệ người học và chuyên gia thông qua giáo dục tích hợp công nghệ, quản trị và đổi mới vì sự phát triển bền vững",
    "Xây dựng nền tảng kết nối giữa con người, công nghệ, môi trường và hạ tầng để thúc đẩy đồng sáng tạo, và tạo ra tác động toàn cầu",
  ],
};

export async function generateMetadata() {
  const locale = (await getLocale()) as "vi" | "en";

  return {
    title: locale === "en" ? "About Us" : "Về chúng tôi",
  };
}

export default async function AboutPage() {
  const i18n = await getTranslations();
  const locale = (await getLocale()) as "vi" | "en";

  return (
    <>
      <PageHeader />
      <section className="section about-page">
        <div className="container">
          <div className="row">
            <div className="col-12 text-justify flex justify-center mb-4 p-0">
              <video
                id="introduce_iscm"
                className="img-fluid w-auto"
                style={{ height: "fit-content", maxHeight: "80vh" }}
                width={540}
                height={360}
                controls
                autoPlay
                muted
                playsInline
                loop
              >
                <source src={recap_video} type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="mt-5 mb-5 row">
            <div className="slogan col-md-4 col-12">
              <figure className="flex flex-wrap items-end gap-3 md:block">
                <Image
                  width={250}
                  height={150}
                  src="/images/about/Tu-Anh Trinh.png"
                  alt="Assoc.Prof. Tú Anh Trinh"
                  className="object-contain w-fit h-[180px] mb-0 mb-md-3"
                />
                <figcaption>
                  <b className="mb-2 block">
                    {locale === "en"
                      ? "Assoc.Prof. Tú Anh Trinh"
                      : "PGS.TS. Trịnh Tú Anh"}
                  </b>
                  <span className="inline-block !text-[#A9A8A8] mb-0 text-base">
                    {locale === "en" ? "Director" : "Viện trưởng"} <br />{" "}
                    {locale === "en" ? (
                      <>
                        Institute of{" "}
                        <br className="md:block hidden lg:hidden" /> Smart City
                        and Management
                      </>
                    ) : (
                      "Viện Đô thị Thông minh và Quản lý"
                    )}
                  </span>
                </figcaption>
              </figure>
            </div>
            <div className="col-md-8 col-12">
              <p className="text-justify bg-gray-100 p-4 italic">
                <DomParser content={i18n("about_quote")} />
              </p>
              <p className="font-bold mt-3"></p>
            </div>
          </div>

          <h3 className="w-fit uppercase font-bold">
            {i18n("about_introduction_title")}
          </h3>
          <p className="text-justify mt-2">
            <DomParser content={i18n("about_introduction")} />
          </p>

          <h3 className="w-fit uppercase font-bold mt-5">
            {i18n("about_vision_title")}
          </h3>

          <p className="text-justify mt-2">{i18n("about_vision")}</p>

          <h3 className="w-fit uppercase font-bold mt-5">
            {i18n("about_mission_title")}
          </h3>

          <ul className="mission mt-2">
            {mission[locale].map((mission: string) => (
              <li className="ml-3" key={mission}>
                {mission}
              </li>
            ))}
          </ul>

          {/* <div className="pt-10">
            <h4>{locale === "en" ? "ISCM Recap" : "ISCM qua các năm"}</h4>
            <div className="flex flex-wrap gap-3">
              {(() => {
                const ytbList = [];

                for (const [key, value] of Object.entries(booklet.youtube)) {
                  ytbList.push(
                    <Link href={value} target="_blank">
                      <button
                        className="btn btn-primary !flex items-center gap-2 !bg-[#ce2027] !text-white"
                        key={key}
                      >
                        <CirclePlay />
                        {key}
                      </button>
                    </Link>
                  );
                }

                return ytbList.reverse();
              })()}
            </div>
          </div> */}

          <div className="mt-4">
            <ItemTabs />
          </div>
        </div>
      </section>
    </>
  );
}

import { getLocale } from "next-intl/server";
import NotFound from "@/components/not-found";
import { Timeline } from "antd";
import { Tree } from "antd";

import projectVi from "../data/research_project_vi.json";
import projectEn from "../data/research_project_en.json";
import Image from "next/image";
import DomParser from "@/components/domParser";

export async function generateMetadata() {
  const locale = (await getLocale()) as "vi" | "en";

  return {
    title: locale === "en" ? "Projects" : "Dự án nghiên cứu",
  };
}

export default async function page({
  params,
}: {
  params: Promise<{
    id: number;
  }>;
}) {
  const { id } = await params;
  const locale = await getLocale();

  const projects = locale === "vi" ? projectVi : projectEn;

  const data = projects.find((proj) => proj.id === Number(id));

  if (!data) return <NotFound />;

  return (
    <section className="container pb-24 pt-16">
      <h2 className="flex justify-center text-center w-full">
        <span className="block max-w-[85%]">{data.name}</span>
      </h2>

      <h4 className="text-2xl font-bold mt-14">
        {locale === "en" ? "Objective" : "Mục tiêu"}
      </h4>
      <div className="row">
        <div className="col-12 col-md-7">
          <p className="text-justify">
            <DomParser content={data.objective} />
          </p>
        </div>
        <div className="col-12 col-md-5">
          <figure>
            <Image
              src={data.thumbnail}
              alt={data.name}
              width={1200}
              height={600}
              className="object-contain w-full"
            />
            {data.thumbnailCredit && (
              <figcaption className="text-xs italic text-end">
                {locale === "en" ? "Credit:" : "Nguồn:"} {data.thumbnailCredit}
              </figcaption>
            )}
          </figure>

          <div>
            <p className="mb-0">
              {locale === "en" ? "Duration:" : "Thời gian thực hiện:"}{" "}
              {data.years}
            </p>
            {data.partners.length > 0 && (
              <p className="mb-0 text-base">
                {locale === "en" ? "Partners:" : "Đối tác:"}{" "}
                {data.partners.join("; ")}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

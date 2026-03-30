import { ibm_plex_sans } from "@/app/fontDeclare";
import Card from "@/components/card";
import NotFound from "@/components/not-found";
import PageHeader from "@/components/partials/pageHeader";
import { RequestProps } from "@/types/page.type";

import studios from "../../data/studio.json";
import slugify from "slugify";
import DomParser from "@/components/domParser";
import { getLocale } from "next-intl/server";

export default async function page({ params, searchParams }: RequestProps) {
  const locale = await getLocale();

  const { slug, id } = await params;
  const year = (await searchParams).year || "2024";

  const stu = studios.filter((book) => book.year === year)[0];

  const studio = stu.studio.filter(
    (studio) =>
      slugify(studio.title, {
        replacement: "_",
        lower: true,
        remove: /[^\p{L}\p{N}\s]/gu,
      }).toString() === slug
  )[0];

  const item: any = studio.topics.filter(
    (topic) =>
      slugify(topic.title, {
        replacement: "_",
        lower: true,
        remove: /[^\p{L}\p{N}\s]/gu,
      }).toString() === id
  )[0];

  try {
    return (
      <>
        <PageHeader />
        <section className="container py-8">
          <div className="row mt-20 gap-y-5">
            <h1 className={`text-center ${ibm_plex_sans.className}`}>
              <DomParser
                content={
                  locale === "en" ? item.title : item?.titleVie ?? item.title
                }
              />
            </h1>
            <p>
              <DomParser content={item.description} />
            </p>

            {item.groups.map((book: any) => (
              <div className="col-md-4 col-12" key={book.id}>
                <Card
                  id={book.id}
                  thumb={book.thumb}
                  basePath={`/facilities/student_studiolab/${slug}/${id}`}
                  query={{ year: year }}
                  title={
                    locale === "en" ? book.title : book?.titleVie ?? book.title
                  }
                  style={{
                    maxWidth: "350px",
                    fontWeight: "400",
                  }}
                  imageStyle={{ height: "250px" }}
                  titleStyle={{ fontSize: "16px", fontWeight: "normal" }}
                />
              </div>
            ))}
          </div>
        </section>
      </>
    );
  } catch (error) {
    console.log(error);
    return <NotFound />;
  }
}

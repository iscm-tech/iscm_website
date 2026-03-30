import { RequestProps } from "@/types/page.type";
import Booklet from "../../components/Booklet";

import studiolab from "../../../data/studio.json";
import slugify from "slugify";
import Masonry from "../../components/Masonry";
import PageHeader from "@/components/partials/pageHeader";
import { getLocale } from "next-intl/server";

/*
  slug = studio
  id = topics
  studio = group
*/

export default async function page({ params, searchParams }: RequestProps) {
  const { slug, id, studio } = await params;
  const { year } = await searchParams;

  const locale = await getLocale();

  const stu = studiolab.filter((book) => book.year === year)[0];

  const studioItem = stu.studio.filter(
    (studio) =>
      slugify(studio.title, {
        replacement: "_",
        lower: true,
        remove: /[^\p{L}\p{N}\s]/gu,
      }).toString() === slug
  )[0];

  const topic = studioItem.topics.filter(
    (topic) =>
      slugify(topic.title, {
        replacement: "_",
        lower: true,
        remove: /[^\p{L}\p{N}\s]/gu,
      }).toString() === id
  )[0];

  const group: any = topic.groups.filter((group) => group.id === studio)[0];

  return (
    <>
      <PageHeader />
      <div className="py-6">
        <h2 className="text-center text-4xl font-extrabold mb-11">
          {locale === "en" ? group.title : group?.titleVie ?? group.title}
        </h2>

        {group.type === "booklet" && (
          <div className="w-full flex justify-center">
            <Booklet booklet={group.gallery} />
          </div>
        )}
        {group.type === "masonry" && (
          <div className="container">
            <Masonry gallery={group.gallery} />
          </div>
        )}
      </div>
    </>
  );
}

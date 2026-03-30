import { getPostServices } from "@/services/post.service";
import { format } from "date-fns";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

import "./latestPost.style.scss";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";

export default async function LatestPosts() {
  const locale = await getLocale();
  const translate = await getTranslations();

  try {
    const {
      payload: { data: newsList },
    } = await getPostServices.getLatestPostByCategory(locale, "news");

    const {
      payload: { data: evolvingResearchList },
    } = await getPostServices.getLatestPostByCategory(
      locale,
      "evolving-research"
    );

    const {
      payload: { data: admissionList },
    } = await getPostServices.getLatestPostByCategory(locale, "open-admission");

    // const {
    //   payload: { data: inTheMediaList },
    // } = await getPostServices.getLatestPostByCategory(
    //   locale,
    //   "iscm_in_the_media"
    // );

    const {
      payload: { data: eventList },
    } = await getPostServices.getLatestPostByCategory(locale, "events");

    const categories = [
      { cateName: "news", data: newsList },
      { cateName: "expert_insight", data: evolvingResearchList },
      // { cateName: "iscm_in_the_media", data: inTheMediaList },
      { cateName: "open_admission", data: admissionList },
      { cateName: "events", data: eventList },
    ];

    return (
      <div className="row flex-wrap">
        {categories.map((cate) => (
          <>
            {cate.data.length > 0 && (
              <div
                className="col-lg-12 col-md-6 col-12 mb-12"
                key={cate.cateName}
              >
                <h3 className="uppercase text-[#ce2027] font-extrabold mb-3">
                  {translate(cate.cateName)}
                </h3>
                <ul className="lastest-post__item">
                  {cate.data.map((item) => (
                    <li key={item.id} className="my-1">
                      <HoverCard openDelay={0} closeDelay={0}>
                        <HoverCardTrigger>
                          <Link
                            href={`/${cate.cateName}/${item.slug}`}
                            className="text-[15px] text-black line-clamp-2 hover:text-[#ce2027]"
                            style={{ float: "left" }}
                          >
                            <span className="date whitespace-nowrap hover:!no-underline pr-1 mr-1 border-r border-black">
                              <i className="text-[#bbb]">
                                {format(item.publishDate, "dd/MM/yyyy")}
                              </i>
                            </span>
                            <span className="title inline transition-all">
                              {item.title}
                            </span>
                          </Link>
                        </HoverCardTrigger>
                        <HoverCardContent
                          key={item.id}
                          align="start"
                          className="p-2 flex flex-col"
                        >
                          <figure
                            className={`card-img w-[250px] h-[120px] mb-0`}
                          >
                            <Image
                              className={`card-img-top rounded-0 w-full h-full`}
                              loading="lazy"
                              style={{ objectFit: "contain" }}
                              width={350}
                              height={200}
                              alt=""
                              src={item.thumbnail}
                            />
                          </figure>
                          <div className={`card-body p-2`}>
                            <div className="overflow-hidden">
                              <h4 className="card-title !mb-0 !text-sm line-clamp-2">
                                {item.title}
                              </h4>
                            </div>
                            <div className="flex gap-2 mt-1">
                              {item.sdgs.map((sdg) => (
                                <Image
                                  width={24}
                                  height={24}
                                  src={`/images/sdgs_icon/goal_${sdg}.svg`}
                                  alt={`sdg goal ${sdg}`}
                                  key={sdg}
                                />
                              ))}
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        ))}
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}

import { format } from "date-fns";
import { vi, enUS } from "date-fns/locale";
import { getPostServices } from "@/services/post.service";
import Image from "next/image";
import NotFound from "@/components/not-found";
import { Separator } from "@/components/ui/separator";
import LatestPosts from "../../../components/latestPosts";
import DomParser from "@/components/domParser";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { locale, id: postID } = await params;

  const {
    payload: { data },
  } = await getPostServices.getPost("news", postID, locale);

  return {
    title: data.metadata.title,
    openGraph: {
      title: data.metadata.title,
      images: [{ url: data.metadata.thumbnail }],
      url: `https://iscm.ueh.edu.vn/${locale}/iscm_life/${data.metadata.slug}`,
      type: "article",
      locale: locale,
      article: {
        publishedTime: data.metadata.publishDate,
        authors: ["https://iscm.ueh.edu.vn"],
        section: "ISCM Life",
      },
    },
  };
}

export default async function page({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const locale = (await params).locale;
  const postID = (await params).id;

  try {
    const {
      payload: { data },
    } = await getPostServices.getPost("news", postID, locale);

    return (
      <section className="section-sm mt-3">
        <div className="container">
          <div className="row">
            <section className="col-lg-8 col-12 content-body">
              <div className="row mb-8">
                <div className="col-12">
                  <h1 className="section-title mb-3">{data.metadata.title}</h1>
                </div>
                <div className="col-12 mb-2">
                  <em className="text-[15px]">
                    {format(
                      data.metadata.publishDate,
                      locale === "en"
                        ? "dd LLL, yyyy"
                        : "dd 'tháng' MM 'năm' yyyy",
                      {
                        locale: locale === "en" ? enUS : vi,
                      },
                    )}
                  </em>
                </div>
                <div className="col-12">
                  <div className="flex gap-3">
                    {data.metadata.sdgs.map((sdg) => (
                      <div key={sdg}>
                        <Image
                          style={{ objectFit: "contain" }}
                          src={`/images/sdgs_icon/goal_${sdg}.svg`}
                          className="img-fluid w-9 h-9"
                          alt="thumbnail"
                          width={20}
                          height={20}
                          quality={90}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 mb-3 content">
                  <DomParser content={data.content} />
                </div>
              </div>
            </section>

            <div className="col-lg-4 col-12 mt-4 mt-lg-0">
              <LatestPosts />
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.log(error);
    return <NotFound />;
  }
}

import { format } from "date-fns";
import { vi, enUS } from "date-fns/locale";
import NotFound from "@/components/not-found";
import { getRecruitmentPost } from "@/services/recruitment.service";
import DomParser from "@/components/domParser";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const locale = (await params).locale;
  const postID = (await params).id;

  const {
    payload: { data },
  } = await getRecruitmentPost.getPost(postID, locale);

  return {
    title: data.metadata.title,
    openGraph: {
      title: data.metadata.title,
      images: [{ url: data.metadata.thumbnail }],
      url: `https://iscm.ueh.edu.vn/${locale}/recruitment/${data.metadata.slug}`,
      type: "article",
      locale: locale,
      article: {
        publishedTime: data.metadata.publishDate,
        authors: ["https://iscm.ueh.edu.vn"],
        section: "Recruitment",
        // tags: data.metadata.tags || [], // optional
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
    } = await getRecruitmentPost.getPost(postID, locale);

    return (
      <section className="section-sm mt-3">
        <div className="container">
          <div className="row">
            <section className="col-lg-10 col-12 content-body">
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
                      }
                    )}
                  </em>
                </div>
              </div>

              <div className="row">
                <div className="col-12 mb-3 content">
                  <DomParser content={data.content} />
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.log(error);
    return <NotFound />;
  }
}

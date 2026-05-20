import { format } from "date-fns";
import { vi, enUS } from "date-fns/locale";
import { getPostServices } from "@/services/post.service";
import Image from "next/image";
import NotFound from "@/components/not-found";
import { Separator } from "@/components/ui/separator";
import LatestPosts from "../../../components/latestPosts";
import Booklet from "../../../../facilities/student_studiolab/[slug]/components/Booklet";
import DomParser from "@/components/domParser";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { locale, id: postID } = await params;

  const {
    payload: { data },
  } = await getPostServices.getPost("student_life", postID, locale);

  return {
    title: data.metadata.title,
    // description: data.metadata.description,
    openGraph: {
      title: data.metadata.title,
      // description: data.metadata.description,
      images: [{ url: data.metadata.thumbnail }],
      url: `https://iscm.ueh.edu.vn/${locale}/student_life/${data.metadata.slug}`,
      type: "article",
      locale: locale,
      article: {
        publishedTime: data.metadata.publishDate,
        authors: ["https://iscm.ueh.edu.vn"],
        section: "Student Life",
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
    } = await getPostServices.getPost("student_life", postID, locale);

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
                {data.metadata.author === "ISCM" && (
                  <>
                    <Separator className="mb-3" />
                    <div className="col-12 mb-50 text-right">
                      <em>
                        <b>
                          {locale === "en"
                            ? "News, photos: Institute of Smart City And Management"
                            : "Tin, ảnh: Viện Đô thị Thông minh và Quản lý"}
                        </b>
                      </em>
                    </div>
                  </>
                )}
              </div>

              <div className="w-[60vw] relative z-[1010]">
                {data.metadata.slug ===
                  "sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025" && (
                  <Booklet
                    booklet={[
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-01.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-02.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-03.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-04.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-05.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-06.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-07.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-08.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-09.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-10.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-11.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-12.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-13.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-14.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-15.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-16.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-17.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-18.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-19.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-20.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-21.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-22.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-23.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-24.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-25.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-26.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-27.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-28.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-29.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-30.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-31.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-32.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-33.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-34.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-35.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-36.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-37.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-38.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-39.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-40.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-41.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-42.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-43.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-44.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-45.jpg",
                      "https://iscm-api.ueh.edu.vn/public/static/images/news/sinh-vien-dai-hoc-kinh-te-tp-ho-chi-minh-xuat-sac-dat-giai-nhi-giai-thuong-loa-thanh-2025/ban_ve-46.jpg",
                    ]}
                  />
                )}
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

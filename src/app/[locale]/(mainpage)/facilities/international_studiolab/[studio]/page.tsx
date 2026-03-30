import { ibm_plex_sans } from "@/app/fontDeclare";
import Card from "@/components/card";
import NotFound from "@/components/not-found";
import PageHeader from "@/components/partials/pageHeader";
import { Separator } from "@/components/ui/separator";
import envConfig from "@/config";
import { getCollaborationServices } from "@/services/studiolab.service";
import { RequestProps } from "@/types/page.type";
import { MapPinnedIcon } from "lucide-react";
import Image from "next/image";

export default async function page({ searchParams, params }: RequestProps) {
  const locale = (await params).locale;
  const page = (await searchParams).page;

  try {
    const {
      payload: { data },
    } = await getCollaborationServices.getList(page, locale);

    return (
      <>
        <PageHeader />
        <section className="container py-8">
          <h1 className={`text-center ${ibm_plex_sans.className}`}>
            Drowing minor cities / Urban Adaptation Scenarios for Thanh Da
          </h1>
          <div className="row min-h-[400px] mt-20">
            <div className="col-lg-5 col-12 mt-3 mt-lg-0 h-full">
              {/* <h3>{"fasdfs"}</h3> */}
              <Separator className="bg-black h-[1.5px] mb-3" />
              <p className="text-justify">
                {locale === "en" ? (
                  <>
                    Reading the two cities (HCM and Thu Duc) as twins reveals
                    that the west city is slowing down development while the
                    east city is accelerating it. The Saigon River and its
                    associated landscapes (Thanh Da Peninsula and Thu Thiem) can
                    be interpreted as an urban void. This void works as a hinge
                    and a main landscape figure, anchoring and structuring the
                    two cities to withstand increased population and a warmer
                    climate in 2050 and 2100.
                  </>
                ) : (
                  <>
                    Hai đô thị (TP.HCM và TP. Thủ Đức) như một cặp song sinh cho
                    thấy đô thị phía Tây đang có xu hướng chậm lại trong tiến
                    trình phát triển, trong khi đô thị phía Đông đang tăng tốc
                    mạnh mẽ. Sông Sài Gòn cùng các cấu trúc cảnh quan liên kết
                    (bán đảo Thanh Đa và khu vực Thủ Thiêm) có thể được diễn
                    giải như một “khoảng trống đô thị” (urban void). Khoảng
                    trống này đóng vai trò như một bản lề không gian và là hình
                    thái cảnh quan chủ đạo, giữ chức năng neo và định hình cấu
                    trúc cho hai đô thị, nhằm đảm bảo khả năng thích ứng trước
                    áp lực gia tăng dân số và biến đổi khí hậu nóng hơn vào các
                    mốc 2050 và 2100.
                  </>
                )}
              </p>
              <figure className="flex">{/* <Image /> */}</figure>
            </div>
            <div className="col-lg-7 col-12 max-h-[450px]">
              <figure className="w-full h-fit">
                <Image
                  src={`${envConfig.API_ENDPOINT}/public/static/images/studiolab/collaboration/thanhda/thanhda.jpg`}
                  alt={"fasdf"}
                  width={1000}
                  height={800}
                  quality={100}
                  className="w-full h-full object-contain object-top"
                />
              </figure>
            </div>
          </div>
          <div className="row gap-y-3 mt-24">
            {data.map((project) => (
              <div
                className="col-lg-4 col-12 flex justify-center"
                key={project.id}
              >
                <Card
                  id={project.id}
                  thumb={project.thumbnail}
                  basePath="./thanhda"
                  title={project.title}
                  style={{
                    width: "100%",
                    fontWeight: "400",
                  }}
                  imageStyle={{ height: "205px", objectPosition: "top left" }}
                  titleStyle={{ fontSize: "18px", fontWeight: "normal" }}
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

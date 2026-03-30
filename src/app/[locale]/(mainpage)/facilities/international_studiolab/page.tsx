import { ibm_plex_sans } from "@/app/fontDeclare";
import Card from "@/components/card";
import PageHeader from "@/components/partials/pageHeader";
import envConfig from "@/config";
import { RequestProps } from "@/types/page.type";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = { title: "Collaboration Studio" };

export default async function page({ searchParams, params }: RequestProps) {
  const locale = await getLocale();
  // const page = (await searchParams).page;

  return (
    <>
      <PageHeader />
      <section className="container py-16">
        <h1
          className={`text-center text-4xl ${ibm_plex_sans.className} uppercase`}
        >
          {locale === "en" ? "International Studios" : "Đồ án quốc tế"}
        </h1>
        <div className="flex justify-center mt-3">
          <p className="text-justify w-[80%]">
            {locale === "en" ? (
              <>
                Each year, ISCM has collaborated with international partners in
                order to create interactive design studios between the local and
                global students and experts. In these studios, we are all
                together trying to explore alternative future scenarios for
                urban environments to contribute to smart and sustainable
                cities.
              </>
            ) : (
              <>
                Mỗi năm, ISCM hợp tác với các đối tác quốc tế để tổ chức các
                xưởng thiết kế tương tác giữa sinh viên và chuyên gia trong nước
                cũng như quốc tế. Trong các xưởng này, tất cả chúng ta cùng nhau
                tìm kiếm và khám phá những kịch bản tương lai thay thế cho môi
                trường đô thị, nhằm đóng góp vào việc phát triển các thành phố
                thông minh và bền vững.
              </>
            )}
          </p>
        </div>
        <div className="row gap-y-3 mt-16">
          <div className="col-12 col-lg-4">
            <Card
              id="thanhda"
              thumb={`${envConfig.API_ENDPOINT}/public/static/images/studiolab/collaboration/thanhda/thanhda.jpg`}
              basePath="international_studiolab"
              title="Drowing minor cities / Urban Adaptation Scenarios for Thanh Da"
              style={{
                maxWidth: "350px",
                fontWeight: "400",
              }}
              imageStyle={{ height: "250px" }}
              titleStyle={{ fontSize: "16px", fontWeight: "normal" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

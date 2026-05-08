import MemberCard from "@/components/card";
import NotFound from "@/components/not-found";
import { getMemberServices } from "@/services/member.service";
import { RequestProps } from "@/types/page.type";

export default async function page({ searchParams, params }: RequestProps) {
  const locale = (await params).locale;
  const page = (await searchParams).page;

  try {
    const {
      payload: { data },
    } = await getMemberServices.getList("network", undefined, locale);

    return (
      <>
        <section className="section">
          <div className="container">
            <div className="row items-stretch md:justify-stretch justify-center">
              {data.map(({ name, image, title, id }) => (
                <div
                  className="col-lg-4 col-sm-6 max-w-[350px] mb-4 h-[350px] lg:h-[500px]"
                  key={name}
                >
                  <MemberCard
                    basePath="members"
                    title={name}
                    thumb={image}
                    subTitle={title}
                    id={id}
                    imageStyle={{
                      objectFit: "contain",
                      objectPosition: "top center",
                      height: "50%",
                    }}
                    subTitleStyle={{
                      fontSize: "14px",
                    }}
                    isDisabled
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  } catch (error) {
    console.log(error);
    return <NotFound />;
  }
}

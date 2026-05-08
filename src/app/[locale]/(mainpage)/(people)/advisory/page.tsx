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
    } = await getMemberServices.getList("advisory", undefined, locale);

    return (
      <>
        <section className="section">
          <div className="container">
            <div className="row items-stretch justify-stretch">
              {data.map(({ name, image, title, id }) => (
                <div className="col-lg-4 col-sm-6 mb-4" key={id}>
                  <MemberCard
                    basePath="advisory"
                    title={name}
                    thumb={image}
                    subTitle={title}
                    id={id}
                    isDisabled={true}
                    style={{ height: "100%" }}
                    imageStyle={{
                      objectPosition: "top center",
                      height: "300px",
                    }}
                    subTitleStyle={{
                      fontSize: "14px",
                    }}
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

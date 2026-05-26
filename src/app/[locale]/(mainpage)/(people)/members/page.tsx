import MemberCard from "@/components/card";
import NotFound from "@/components/not-found";
import { getMemberServices } from "@/services/member.service";
import { RequestProps } from "@/types/page.type";
import { Divider } from "antd";

export default async function MembersPage({
  searchParams,
  params,
}: RequestProps) {
  const locale = (await params).locale;
  const page = (await searchParams).page;

  try {
    const {
      payload: { data: members },
    } = await getMemberServices.getList("members", undefined, locale);

    const {
      payload: { data: interns },
    } = await getMemberServices.getList("intern", undefined, locale);

    return (
      <>
        <section className="section">
          <div className="container">
            <div className="row items-stretch md:justify-stretch justify-center">
              {members.map(({ name, image, title, id }) => (
                <div
                  className="col-lg-3 col-sm-6 max-w-[350px] mb-4 h-[480px] lg:h-[420px]"
                  key={name}
                >
                  <MemberCard
                    basePath="members"
                    title={name}
                    thumb={image}
                    subTitle={title}
                    id={id}
                    imageStyle={{
                      objectPosition: "top center",
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="row mt-5">
              <div className="col-12">
                <div className="row items-center">
                  <h2 className="col-2 text-4xl!">
                    {locale === "en" ? "Interns" : "Thực tập sinh"}
                  </h2>
                  <div className="col-10">
                    <Divider
                      styles={{
                        root: {
                          borderWidth: 1.5,
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5 row items-stretch md:justify-stretch justify-center">
                {interns.map(({ name, image, title, id }) => (
                  <div
                    className="col-lg-3 col-sm-6 max-w-[350px] mb-4 h-[480px] lg:h-[420px]"
                    key={name}
                  >
                    <MemberCard
                      title={name}
                      thumb={image}
                      subTitle={title}
                      id={id}
                      imageStyle={{
                        objectPosition: "top center",
                      }}
                      isDisabled={true}
                    />
                  </div>
                ))}
              </div>
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

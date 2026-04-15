import MemberCard from "@/components/card";
import NotFound from "@/components/not-found";
import { getMemberServices } from "@/services/member.service";
import { RequestProps } from "@/types/page.type";

export default async function MembersPage({
  searchParams,
  params,
}: RequestProps) {
  const locale = (await params).locale;
  const page = (await searchParams).page;

  try {
    const {
      payload: { data },
    } = await getMemberServices.getList("members", undefined, locale);

    return (
      <>
        <section className="section">
          <div className="container">
            <div className="row items-stretch md:justify-stretch justify-center">
              {data.map(({ name, image, title, id }) => (
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
          </div>
        </section>
      </>
    );
  } catch (error) {
    console.log(error);
    return <NotFound />;
  }
}

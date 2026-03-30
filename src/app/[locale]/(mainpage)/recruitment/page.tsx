import NotFound from "@/components/not-found";
import { RequestProps } from "@/types/page.type";
import ListCustom from "./views/ListCustom";
import { getRecruitmentPost } from "@/services/recruitment.service";

export default async function page({ params }: RequestProps) {
  const locale = (await params).locale;

  try {
    const {
      payload: { data },
    } = await getRecruitmentPost.getList(locale);

    return (
      <>
        <section className="section">
          <div className="container">
            <div className="row items-stretch">
              <div className="col-12 col-md-8">
                <ListCustom data={data} />
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

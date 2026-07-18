import Pagination from "@/components/pagination";
import { getPostServices } from "@/services/post.service";
import { RequestProps } from "@/types/page.type";
import NotFound from "@/components/not-found";
import NewsList from "@/app/[locale]/homepage_views/newsList";

export default async function UehNewsPage({
  searchParams,
  params,
}: RequestProps) {
  const locale = (await params).locale;
  const page = (await searchParams).page;

  try {
    const {
      payload: { data, totalPage },
    } = await getPostServices.getLatestPortal(locale, page, 10);

    return (
      <>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <NewsList admissions={data} />
              </div>
            </div>
          </div>
        </section>
        <Pagination totalPage={totalPage} />
      </>
    );
  } catch (error) {
    console.log(error);
    return <NotFound />;
  }
}

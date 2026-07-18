import Pagination from "@/components/pagination";
import { getPostServices } from "@/services/post.service";
import { RequestProps } from "@/types/page.type";
import NotFound from "@/components/not-found";
import PostCard from "@/components/postCard";

export default async function HighlightsPage({ searchParams, params }: RequestProps) {
  const locale = (await params).locale;
  const page = (await searchParams).page;

  try {
    const {
      payload: { data, totalPage },
    } = await getPostServices.getLatestPost(locale, page, 10);

    return (
      <>
        <section className="section">
          <div className="container">
            <div className="row items-stretch gap-6">
              {data.map((item: any) => (
                <div className="col-12" key={item.id}>
                  <PostCard basePath={item.category || "news"} item={item} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <Pagination totalPage={totalPage as number} />
      </>
    );
  } catch (error) {
    console.log(error);
    return <NotFound />;
  }
}

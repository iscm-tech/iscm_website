import DateCard from "@/components/dateCard";
import NotFound from "@/components/not-found";
import Pagination from "@/components/pagination";
import PostCard from "@/components/postCard";
import { getPostServices } from "@/services/post.service";
import { RequestProps } from "@/types/page.type";

export default async function page({ searchParams, params }: RequestProps) {
  const locale = (await params).locale;
  const page = (await searchParams).page;

  try {
    const {
      payload: { data, totalPage },
    } = await getPostServices.getList("open-admission", page, locale);

    return (
      <>
        <section className="section">
          <div className="container">
            <div className="row items-stretch">
              {data.map((item) => (
                <div className="col-12" key={item.id}>
                  <PostCard basePath="open_admission" item={item} />
                </div>
              ))}
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

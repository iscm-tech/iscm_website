import Pagination from "@/components/pagination";

import { getPostServices } from "@/services/post.service";

import { RequestProps } from "@/types/page.type";
import DateCard from "@/components/dateCard";
import NotFound from "@/components/not-found";
import PostCard from "@/components/postCard";

export default async function NewsPage({ searchParams, params }: RequestProps) {
  await new Promise((resolve) => {
    setTimeout(() => resolve(""), 2000);
  });

  const locale = (await params).locale;
  const page = (await searchParams).page;

  try {
    const {
      payload: { data, totalPage },
    } = await getPostServices.getList("student_life", page, locale);

    return (
      <>
        <section className="section">
          <div className="container">
            <div className="row items-stretch gap-6">
              {data.map((item) => (
                <div className="col-12" key={item.id}>
                  <PostCard basePath="student_life" item={item} />
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

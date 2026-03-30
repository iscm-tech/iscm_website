import EventCard from "@/components/eventCard";
import NotFound from "@/components/not-found";
import Pagination from "@/components/pagination";
import { EventCardType } from "@/schemaValidations/post.schema";
import { getPostServices } from "@/services/post.service";
import { RequestProps } from "@/types/page.type";

export default async function EventPage({
  searchParams,
  params,
}: RequestProps) {
  const locale = (await params).locale;
  const page = (await searchParams).page;

  try {
    const {
      payload: { data, totalPage },
    } = await getPostServices.getList<EventCardType>("events", page, locale);

    return (
      <>
        <section className="section">
          <div className="container">
            <div className="row">
              {data.map((item) => (
                <div className="col-12 mb-4" key={item.id}>
                  <EventCard
                    {...{
                      ...item,
                      basePath: "events",
                      eventTime: item.eventTime ?? item.publishDate,
                    }}
                  />
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

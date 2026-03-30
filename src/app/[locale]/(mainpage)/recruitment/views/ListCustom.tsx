"use client";

import { Empty, List, Skeleton } from "antd";
import { RecruitmentListType } from "@/schemaValidations/post.schema";
import { useLocale } from "next-intl";
import Link from "next/link";
import { enUS, vi } from "date-fns/locale";
import { format } from "date-fns";
import { barlow } from "@/app/fontDeclare";
import { CalendarFold, MonitorCog } from "lucide-react";

export default function ListCustom({ data }: { data?: RecruitmentListType[] }) {
  const locale = useLocale();

  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item className="block">
          <Link
            className="row w-full hover:text-[#ce2027] py-2 rounded-bl-[calc(0.25rem)] rounded-br-[calc(0.25rem)] transition-shadow hover:shadow-xl duration-300"
            href={`/recruitment/${item.slug}`}
          >
            <div className="col-12 h-full flex flex-col justify-center">
              <Skeleton title={false} loading={false} active>
                <h4 className="float-start inline mb-0 !text-current text-base transition-colors duration-300 w-fit">
                  {item.applicationPeriod &&
                  new Date(item.applicationPeriod) < new Date() ? (
                    <span className="font-normal text-[#666] text-sm mr-2">
                      {locale === "vi" ? <>[Đã đóng]</> : <>[Closed]</>}
                    </span>
                  ) : (
                    <span className="font-normal text-[#ce2027] text-sm mr-2">
                      {locale === "vi" ? <>[Đang mở]</> : <>[Opening]</>}
                    </span>
                  )}

                  {item.title}
                </h4>

                <em
                  className="text-sm !italic text-[#545658]"
                  style={barlow.style}
                >
                  {format(
                    item.publishDate,
                    locale === "en"
                      ? "dd LLL, yyyy"
                      : "dd 'tháng' MM 'năm' yyyy",
                    {
                      locale: locale === "en" ? enUS : vi,
                    }
                  )}
                </em>

                {item?.applicationPeriod && (
                  <div className="flex items-end gap-2 mt-3">
                    <CalendarFold color="black" size={18} />
                    <p className="w-fit text-sm whitespace-nowrap mb-0">
                      {locale === "en" ? (
                        <>Application Period:</>
                      ) : (
                        <>Thời hạn ứng tuyển:</>
                      )}
                    </p>
                    <p className="w-fit text-sm mb-0">
                      {format(item.applicationPeriod, "dd/MM/yyyy", {
                        locale: locale === "en" ? enUS : vi,
                      })}
                    </p>
                  </div>
                )}

                {!item?.applicationPeriod && (
                  <div className="flex items-end gap-2 mt-3">
                    <CalendarFold color="black" size={18} />
                    <p className="w-fit text-sm whitespace-nowrap mb-0">
                      {locale === "en" ? (
                        <>Application Period:</>
                      ) : (
                        <>Thời hạn ứng tuyển:</>
                      )}
                    </p>
                    <p className="w-fit text-sm mb-0">
                      {locale === "en" ? (
                        <>Open until filled</>
                      ) : (
                        <>Đến khi đủ số lượng</>
                      )}
                    </p>
                  </div>
                )}

                {/* {item?.jobType && (
                  <div className="flex items-end gap-2 mt-3">
                    <MonitorCog color="black" size={18} />
                    <p className="text-sm mb-0 capitalize">{item.jobType}</p>
                  </div>
                )} */}
              </Skeleton>
            </div>
          </Link>
        </List.Item>
      )}
      locale={{
        emptyText: (
          <Empty
            description={
              locale === "en"
                ? "There are no job openings available at this time"
                : "Hiện tại, chúng tôi chưa có vị trí tuyển dụng nào"
            }
          />
        ),
      }}
    />
  );
}

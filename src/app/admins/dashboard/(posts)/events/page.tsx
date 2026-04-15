import { TableCell, TableRow } from "@/components/ui/table";
import { getPostServices } from "@/services/post.service";
import { RequestProps } from "@/types/page.type";
import React from "react";
import { DataTableRowActions } from "../../components/datatable-row-actions";
import DataTable from "../../components/datatable";
import { cookies } from "next/headers";
import ErrorComp from "../../components/error";
import EditPost from "./edit";
import DeletePost from "./delete";
import HidePost from "./hide";
import { LangType } from "@/types/lang.type";
import { Eye, EyeOff } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";
import envConfig from "@/config";
import { Tag } from "antd";
import { EventCardType } from "@/schemaValidations/post.schema";
import { ibm_plex_sans } from "@/app/fontDeclare";

export default async function page({ searchParams }: RequestProps) {
  const page = (await searchParams).page || 1;
  const lang = (await searchParams).lang;
  const cookieStorage = await cookies();

  try {
    let data: {
        draft: boolean;
        id: string;
        lang: LangType;
        publishDate: string;
        sdgs: number[];
        thumbnail: string;
        title: string;
        slug: string;
        author: string;
        eventTime: string | null;
      }[],
      totalPage;

    if (lang) {
      const { payload } = await getPostServices.getList<EventCardType>(
        "events",
        page,
        lang,
        {
          headers: {
            authorization: cookieStorage.get("sessionToken")?.value,
          },
        },
      );

      data = payload.data.map((post) => ({ lang, ...post }));
      totalPage = payload.totalPage;
    } else {
      const { payload: payloadEn } =
        await getPostServices.getList<EventCardType>("events", page, "en", {
          headers: {
            authorization: cookieStorage.get("sessionToken")?.value,
          },
        });

      const payloadEnData = payloadEn.data.map((post) => ({
        lang: "en" as LangType,
        ...post,
      }));

      const { payload: payloadVi } =
        await getPostServices.getList<EventCardType>("events", page, "vi", {
          headers: {
            authorization: cookieStorage.get("sessionToken")?.value,
          },
        });

      totalPage = Math.max(payloadEn.totalPage, payloadVi.totalPage);

      const payloadViData = payloadVi.data.map((post) => ({
        lang: "vi" as LangType,
        ...post,
      }));

      data = payloadEnData
        .concat(payloadViData)
        .sort(
          (a, b) =>
            new Date(b.publishDate).getTime() -
            new Date(a.publishDate).getTime(),
        );
    }

    return (
      <DataTable
        totalPage={totalPage}
        tableHead={[
          "ID",
          "Title",
          "Publish Date",
          "Event Time",
          "Lang",
          "Visible",
          "Author",
        ]}
        currentPage={page}
      >
        {data.map((post, id) => (
          <TableRow key={post.title} className="h-[75px] border-[#e5e5e5]">
            <TableCell className="!text-black/50 text-center text-sm!">
              {post.id}
            </TableCell>
            <TableCell
              className="flex-1 w-full h-fit overflow-hidden"
              title={`${post.title}\n[${post.id}]`}
            >
              <Link
                href={`${envConfig.PRODUCTION_DOMAIN}/${post.lang}/events/${post.slug}`}
                target="_blank"
                className="line-clamp-2 w-full text-base! hover:underline hover:text-[#ce2027]!"
                style={ibm_plex_sans.style}
              >
                {post.title}
              </Link>
            </TableCell>
            <TableCell className="text-center">
              {format(post.publishDate, "dd/MM/yyyy")}
            </TableCell>
            <TableCell className="text-center">
              {post.eventTime && format(post.eventTime, "dd/MM/yyyy")}
            </TableCell>
            <TableCell className="capitalize text-center">
              <Tag color={post.lang === "vi" ? "red" : "blue"}>{post.lang}</Tag>
            </TableCell>
            <TableCell className="capitalize">
              <div className="w-full flex justify-center">
                {post.draft ? <EyeOff width={20} /> : <Eye width={20} />}
              </div>
            </TableCell>
            <TableCell>
              <p className="max-w-[140px] text-sm! line-clamp-1 mb-0!">
                {post.author}
              </p>
            </TableCell>
            {/* Actions */}
            <TableCell>
              <DataTableRowActions
                id={post.id}
                category="events"
                locale={lang || post.lang}
                isDraft={post.draft}
                actionGroup={[
                  [
                    <EditPost
                      key="edit"
                      idPost={post.slug}
                      lang={lang || post.lang}
                    />,
                  ],
                  [
                    <HidePost
                      key="hide"
                      idPost={post.id}
                      isDraft={post.draft}
                      lang={lang || post.lang}
                    />,
                  ],
                  [
                    <DeletePost
                      key="delete"
                      idPost={post.id}
                      lang={lang || post.lang}
                    />,
                  ],
                ]}
              />
            </TableCell>
          </TableRow>
        ))}
      </DataTable>
    );
  } catch (error) {
    console.log(error);
    return <ErrorComp />;
  }
}

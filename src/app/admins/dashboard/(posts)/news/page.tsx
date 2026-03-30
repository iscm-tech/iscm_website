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

export default async function page({ searchParams }: RequestProps) {
  const page = (await searchParams).page || 1;
  const lang = (await searchParams).lang;

  try {
    const cookieStorage = await cookies();
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
      }[],
      totalPage;

    if (lang) {
      const { payload } = await getPostServices.getList("news", page, lang, {
        headers: {
          authorization: cookieStorage.get("sessionToken")?.value,
        },
      });

      data = payload.data.map((post) => ({ lang, ...post }));
      totalPage = payload.totalPage;
    } else {
      const { payload: payloadEn } = await getPostServices.getList(
        "news",
        page,
        "en",
        {
          headers: {
            authorization: cookieStorage.get("sessionToken")?.value,
          },
        },
      );

      const payloadEnData = payloadEn.data.map((post) => ({
        lang: "en" as LangType,
        ...post,
      }));

      const { payload: payloadVi } = await getPostServices.getList(
        "news",
        page,
        "vi",
        {
          headers: {
            authorization: cookieStorage.get("sessionToken")?.value,
          },
        },
      );

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
          "",
          "ID",
          "Title",
          "Publish Date",
          "Lang",
          "Visible",
          "Author",
        ]}
        currentPage={page}
        lang={lang}
      >
        {data.map((post, id) => (
          <TableRow key={post.title} className="h-[75px]">
            <TableCell>{6 * (page - 1) + id + 1}.</TableCell>
            <TableCell className="text-black/50 text-center">
              {post.id}
            </TableCell>
            <TableCell
              className="flex-1 w-full h-fit overflow-hidden"
              title={`${post.title}\n[${post.id}]`}
            >
              <Link
                href={`${envConfig.PRODUCTION_DOMAIN}/${post.lang}/news/${post.slug}`}
                target="_blank"
                className="line-clamp-2 w-full hover:underline hover:text-[#ce2027]"
              >
                {post.title}
              </Link>
            </TableCell>
            <TableCell className="text-center">
              {format(post.publishDate, "dd/MM/yyyy")}
            </TableCell>
            <TableCell className="capitalize text-center">
              <Tag color={post.lang === "vi" ? "red" : "blue"}>{post.lang}</Tag>
            </TableCell>
            <TableCell className="capitalize">
              <div className="w-full flex justify-center">
                {post.draft ? <EyeOff width={20} /> : <Eye width={20} />}
              </div>
            </TableCell>
            <TableCell className="overflow-clip">
              <p className="max-w-[140px] text-sm line-clamp-1">
                {post.author}
              </p>
            </TableCell>
            <TableCell>
              <DataTableRowActions
                id={post.id}
                category="news"
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

import ErrorComp from "./components/error";
import { getPendingPost } from "@/services/post.service";
import DataTable from "./components/datatable";
import { TableCell, TableRow } from "@/components/ui/table";
import { DataTableRowActions } from "./components/datatable-row-actions";
import { Badge } from "@/components/ui/badge";
import AcceptPendingPost from "./pending/[id]/accpetPendingPost";
import { cookies } from "next/headers";
import { iscmCates, portalCatesVi, postCateTagColors } from "@/constants";
import RejectPending from "./pending/[id]/rejectPending";
import EditPending from "./pending/[id]/editPending";
import { Empty, Tag } from "antd";
import { getTranslations } from "next-intl/server";

export default async function page() {
  const i18n = await getTranslations();
  try {
    const cookieStorage = await cookies();

    const {
      payload: { data: dataEn },
    } = await getPendingPost.getList("en", {
      headers: {
        authorization: cookieStorage.get("sessionToken")?.value,
      },
    });

    const {
      payload: { data: dataVi },
    } = await getPendingPost.getList("vi", {
      headers: {
        authorization: cookieStorage.get("sessionToken")?.value,
      },
    });

    const data = dataEn.concat(dataVi);

    data.sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
    );

    return (
      <>
        {data.length > 0 && (
          <DataTable
            totalPage={1}
            tableHead={[
              "ID",
              "Title",
              "Publish Date",
              "Author",
              "Lang",
              "Portal Categories",
            ]}
          >
            {data.map((post) => (
              <TableRow key={post.id} className="h-[75px]">
                <TableCell className="text-center">{post.id}</TableCell>
                <TableCell
                  className="flex-1 h-fit overflow-auto"
                  title={`${post.title}\n[${post.id}]`}
                >
                  <p className="line-clamp-1">{post.title}</p>
                </TableCell>
                <TableCell className="text-center">
                  {new Date(post.publishDate).toLocaleDateString()}
                </TableCell>
                <TableCell className="capitalize text-center">
                  {post.author}
                </TableCell>
                <TableCell className="capitalize text-center">
                  {post.lang}
                </TableCell>
                <TableCell className="capitalize">
                  <div className="flex justify-center gap-1">
                    {post.categories.map((cate) => (
                      <Tag
                        key={cate}
                        color={
                          postCateTagColors.filter(
                            (tag) => tag.name !== iscmCates[cate],
                          )[0].hex
                        }
                        className="capitalize"
                      >
                        {portalCatesVi[cate]}
                      </Tag>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="flex justify-end">
                  <DataTableRowActions
                    id={post.id}
                    category="news"
                    locale={post.lang}
                    isDraft={post.draft}
                    actionGroup={[
                      [
                        <EditPending key="edit" idPost={post.id} />,
                        <AcceptPendingPost
                          key="accept"
                          idPost={post.id}
                          lang={post.lang}
                        />,
                      ],
                      [
                        <RejectPending
                          key="reject"
                          idPost={post.id}
                          lang={post.lang}
                        />,
                      ],
                    ]}
                  />
                </TableCell>
              </TableRow>
            ))}
          </DataTable>
        )}
        {data.length < 1 && <Empty className="mt-10" />}
      </>
    );
  } catch (error) {
    console.log(error, "Error fetching pending posts");

    return <ErrorComp />;
  }
}

import { TableCell, TableRow } from "@/components/ui/table";
import { RequestProps } from "@/types/page.type";
import React from "react";
import { getMemberServices } from "@/services/member.service";
import DataTable from "../../components/datatable";
import { Eye, EyeOff } from "lucide-react";
import { DataTableRowActions } from "../../components/datatable-row-actions";
import Edit from "./edit";
import DomParser from "@/components/domParser";
// import { DataTableRowActions } from "../../components/datatable-row-actions";

export default async function page({ searchParams }: RequestProps) {
  const page = (await searchParams).page || 1;
  const lang = (await searchParams).lang || "en";

  const {
    payload: { data },
  } = await getMemberServices.getList("members", undefined, "en");

  return (
    <DataTable
      tableHead={["ID", "Name", "Title", "Order", "Visible"]}
      currentPage={page}
    >
      {data.map((people) => (
        <TableRow key={people.id} className="h-[75px]">
          <TableCell>{people.id}</TableCell>
          <TableCell
            className="flex-1 max-w-[700px] h-fit overflow-hidden"
            title={people.name}
          >
            <p className="line-clamp-1 max-w-[700px]">{people.name}</p>
          </TableCell>
          <TableCell className="text-center">
            <DomParser content={people.title} />
          </TableCell>
          <TableCell className="capitalize text-center">
            {String(people.order)}
          </TableCell>
          <TableCell className="capitalize text-center">
            <div className="w-full flex justify-center">
              {people.draft ? <EyeOff width={20} /> : <Eye width={20} />}
            </div>
          </TableCell>
          <TableCell className="flex justify-end">
            <DataTableRowActions
              id={people.id}
              category="news"
              locale={lang}
              isDraft={people.draft}
              actionGroup={[
                [<Edit key="edit" id={people.id} lang={lang} />],
                // [
                //   <HidePost
                //     key="hide"
                //     idPost={post.id}
                //     isDraft={post.draft}
                //     lang={lang || post.lang}
                //   />,
                // ],
                // [
                //   <DeletePost
                //     key="delete"
                //     idPost={post.id}
                //     lang={lang || post.lang}
                //   />,
                // ],
              ]}
            />
          </TableCell>
        </TableRow>
      ))}
    </DataTable>
  );
}

import { RequestProps } from "@/types/page.type";
import React from "react";
import { getMemberServices } from "@/services/member.service";
import DataTable from "../../components/datatable";
import { TableCell, TableRow } from "@/components/ui/table";
import { useDOMParser } from "@/hooks/domHook";
import DomParser from "@/components/domParser";
// import { DataTableRowActions } from "../../components/datatable-row-actions";

export default async function page({ searchParams }: RequestProps) {
  const page: number = (await searchParams).page || 1;

  const {
    payload: { data },
  } = await getMemberServices.getList("network", undefined, "en");

  return (
    <DataTable tableHead={["", "Name", "Title", "Order"]} currentPage={page}>
      {data.map((people, id) => (
        <TableRow key={people.id} className="h-[75px]">
          <TableCell>{6 * (page - 1) + id + 1}.</TableCell>
          <TableCell
            className="flex-1 max-w-[700px] h-fit overflow-hidden"
            title={people.name}
          >
            <DomParser content={people.name} />
          </TableCell>
          <TableCell>
            <DomParser content={people.title} />
          </TableCell>
          <TableCell className="capitalize text-center">
            {String(people.order)}
          </TableCell>
          {/* <TableCell className="flex justify-end">
            <DataTableRowActions />
          </TableCell> */}
        </TableRow>
      ))}
    </DataTable>
  );
}

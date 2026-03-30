"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import DataTablePagination from "./datatable-pagination";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Button, Dropdown } from "antd";
import { LangType } from "@/types/lang.type";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function DataTable({
  totalPage,
  children,
  tableHead,
  currentPage,
  lang,
}: {
  totalPage?: number;
  children: React.JSX.Element | React.JSX.Element[];
  tableHead: string[];
  currentPage?: number;
  lang?: LangType;
}) {
  const searchParams = useSearchParams();
  const paramsObject = Object.fromEntries(searchParams.entries());
  const router = useRouter();

  return (
    <div
      className="flex flex-col h-full justify-between pb-2 rounded-lg"
      style={{ boxShadow: "0 0 20px rgba(23, 24, 25, 0.5)" }}
    >
      <Table>
        <TableHeader className="sticky top-0 bg-[#fafafa] shadow-md z-[999999]">
          <TableRow>
            {tableHead.map((head) => (
              <TableHead
                className="font-bold text-base text-center text-black py-2 whitespace-nowrap"
                key={head}
              >
                {head}
              </TableHead>
            ))}
            <TableHead className="font-bold"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{children}</TableBody>
      </Table>
      {currentPage && (
        <div className="flex flex-col flex-1">
          <Separator className="h-[1px] bg-red-500" />
          <div className="pt-3 flex gap-4">
            <DataTablePagination
              totalPage={totalPage || 1}
              currentPage={currentPage}
            />

            <Dropdown
              menu={{
                items: [
                  {
                    label: (
                      <Link
                        href={{
                          query: { ...paramsObject, lang: "vi" },
                        }}
                        className="block text-center"
                      >
                        Vi
                      </Link>
                    ),
                    key: "vi",
                  },
                  {
                    label: (
                      <Link
                        href={{
                          query: { ...paramsObject, lang: "en" },
                        }}
                        className="block text-center"
                      >
                        En
                      </Link>
                    ),
                    key: "en",
                  },
                  {
                    label: (
                      <p
                        onClick={() => {
                          const params = new URLSearchParams(
                            searchParams.toString(),
                          ); // clone it
                          params.delete("lang");

                          // Update the URL without reloading the page
                          router.replace(`?${params.toString()}`);
                        }}
                        className="block text-center"
                      >
                        En + Vi
                      </p>
                    ),
                    key: "both",
                  },
                ],
              }}
              trigger={["click"]}
            >
              <Button className="capitalize">{lang || "En + Vi"}</Button>
            </Dropdown>
          </div>
        </div>
      )}
    </div>
  );
}

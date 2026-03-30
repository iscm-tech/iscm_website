"use client";

import { Pagination } from "antd";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function MyPagination({ totalPage }: { totalPage: number }) {
  const searchParams = useSearchParams();
  const currentPathname = usePathname();
  const currentPage: number = Number(searchParams.get("page")) || 1;

  const router = useRouter();

  return (
    <div className="mb-3">
      <Pagination
        total={totalPage * 5}
        showSizeChanger={false}
        pageSize={5}
        align="center"
        current={currentPage}
        onChange={(page, pageSize) => {
          router.push(`${currentPathname}?page=${page}`);
        }}
        itemRender={(page, type, originalEle) => {
          if (type === "page")
            return (
              <div
                className={`${page === currentPage ? "bg-black text-white" : "bg-white"} outline-none rounded-md border-none`}
              >
                {page}
              </div>
            );
          else return originalEle;
        }}
      />
    </div>
  );
}

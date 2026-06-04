import { getLocale } from "next-intl/server";
import Link from "next/link";
import React from "react";

export default async function pgae() {
  const locale = await getLocale();

  return (
    <div>
      <h1 className="text-center uppercase">ISCM & UEH Co-Lab</h1>

      <div className="content-body mt-5">
        <p>
          {locale === "en" ? "Access Link:" : "Link truy cập:"}{" "}
          <Link
            href="https://docs.google.com/spreadsheets/d/1uqJ6M9DdCln_xQWPC92hSZmszbkzKuDK1LAfA2a7bs8/"
            target="_blank"
            className="text-[#cd2027]!"
          >
            {locale === "en" ? "[Click here]" : "[Nhấn vào đây]"}
          </Link>
        </p>
        <p>
          {locale === "en" ? (
            <>
              General folders and information about Sustainable UEH, including
              development strategies and related activities.
              <span className="block italic font-bold! text-[#cd2027]!">
                * Only members who are directly involved can access.
              </span>
            </>
          ) : (
            <>
              Các folder, thông tin chung về UEH bền vững như Chiến lược phát
              triển và các hoạt động.
              <span className="block italic font-bold! text-[#cd2027]!">
                * Chỉ nhưng thành viên làm chính mới access được.
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

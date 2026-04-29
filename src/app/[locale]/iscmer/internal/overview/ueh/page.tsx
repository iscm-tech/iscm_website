import { getLocale } from "next-intl/server";
import Link from "next/link";
import React from "react";

export default async function page() {
  const locale = await getLocale();

  return (
    <div>
      <h1 className="text-center uppercase">ISCM & UEH</h1>

      <div className="content-body mt-5">
        <p>
          {locale === "en" ? "Access Link:" : "Link truy cập:"}{" "}
          <Link
            href="https://drive.google.com/drive/folders/1KzOTxlTeDH75bB7USN_YJlq8A5bq585y"
            target="_blank"
            className="text-[#cd2027]!"
          >
            {locale === "en" ? "[Click here]" : "[Nhấn vào đây]"}
          </Link>
        </p>
        <p>
          {locale === "en" ? (
            <>
              General folders and information about UEH, including UEH’s
              development strategy, storyline, and shared activities across UEH.
              <span className="block italic font-bold! text-[#cd2027]!">
                * Only members who are directly involved in UEH activities can
                access.
              </span>
            </>
          ) : (
            <>
              Các folder, thông tin chung về UEH như Chiến lược phát triển UEH,
              storyline và các hoạt động làm chung cho UEH.{" "}
              <span className="block italic font-bold! text-[#cd2027]!">
                * Chỉ những thành viên làm chính trong hoạt động UEH mới access
                được.
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

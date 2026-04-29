import { getLocale } from "next-intl/server";
import Link from "next/link";
import React from "react";

export default async function page() {
  const locale = await getLocale();

  return (
    <div>
      <h1 className="uppercase text-center">
        {locale === "en"
          ? "Operations & Finance Team"
          : "Nhóm Vận hành & Tài chính"}
      </h1>

      <div className="content-body mt-5">
        <p>
          {locale === "en" ? "Access Link:" : "Link truy cập:"}{" "}
          <Link
            target="blank"
            href={
              "https://docs.google.com/spreadsheets/d/1JosXOpkCx42hxWZbhGmIFB9LEwvoFBCRDwdSZCgCtfU"
            }
            className="text-[#cd2027]!"
          >
            {locale === "en" ? "[Click here]" : "[Nhấn vào đây]"}
          </Link>
        </p>

        {locale === "en" ? (
          <>
            <p>
              The Operations & Finance team is responsible for all internal
              operations and financial management at ISCM, including workflows,
              budgeting, and cost control.
            </p>

            <p>
              Access mechanism: Strict role-based hierarchy (Head → Coordinator
              → Member).
            </p>

            <p>
              Secure scope: Financial records and sensitive operational
              information are only accessible to personnel directly assigned to
              handle and process them.
            </p>
          </>
        ) : (
          <>
            <p>
              Nhóm Operation & Finance phụ trách toàn bộ hoạt động vận hành nội
              bộ và quản lý tài chính của ISCM, bao gồm quy trình, ngân sách và
              kiểm soát chi phí.
            </p>
            <p>
              Cơ chế truy cập: Phân cấp nghiêm ngặt theo vai trò (Head &rarr;
              Coordinator &rarr; Member).
            </p>
            <p>
              Vùng bảo mật: Các hồ sơ tài chính và thông tin vận hành nhạy cảm
              chỉ được cấp quyền cho nhân sự trực tiếp phụ trách xử lý.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

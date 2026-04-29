import { getLocale } from "next-intl/server";
import Link from "next/link";
import React from "react";

export default async function page() {
  const locale = await getLocale();
  return (
    <div>
      <h1 className="uppercase text-center">
        {locale === "en"
          ? "PR & Communication Team"
          : "Nhóm Truyền thông & Quan hệ công chúng"}
      </h1>

      <div className="content-body mt-5">
        <p>
          {locale === "en" ? "Access Link:" : "Link truy cập:"}{" "}
          <Link
            target="blank"
            href={
              "https://docs.google.com/spreadsheets/d/18lJECuTTWv_Xekg0wyGk22feDCF4QdmaJLAQFmlMKyA/edit?gid=1077188630#gid=1077188630"
            }
            className="text-[#cd2027]!"
          >
            {locale === "en" ? "[Click here]" : "[Nhấn vào đây]"}
          </Link>
        </p>

        {locale === "en" ? (
          <>
            <p>
              The PR & Communication team is responsible for executing
              communication activities, including content creation, design,
              website management, and ISCM’s communication products.
            </p>

            <p>
              Access mechanism: Role-based allocation according to expertise
              (Content, Design, Web, etc.).
            </p>

            <p>
              Secure scope: Strategic documents (brand strategy, overall
              communication plans, and PR budgets) are restricted to
              management-level personnel and directly assigned staff only.
            </p>
          </>
        ) : (
          <>
            <p>
              Nhóm PR & Communication triển khai các hoạt động truyền thông, bao
              gồm nội dung, thiết kế, website và các sản phẩm truyền thông của
              ISCM.
            </p>
            <p>
              Cơ chế truy cập: Phân quyền dựa trên chuyên môn thực thi (Nội
              dung, Thiết kế, Web...).
            </p>
            <p>
              Vùng bảo mật: Tài liệu định hướng (Chiến lược thương hiệu, kế
              hoạch tổng, ngân sách PR) chỉ giới hạn cho cấp Quản lý và nhân sự
              trực tiếp phụ trách.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

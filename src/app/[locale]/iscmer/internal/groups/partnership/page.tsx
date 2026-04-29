import { getLocale } from "next-intl/server";
import Link from "next/link";
import React from "react";

export default async function page() {
  const locale = await getLocale();
  return (
    <div>
      <h1 className="uppercase text-center">
        {locale === "en" ? "Partnership Team" : "Nhóm Hợp tác Đối tác"}
      </h1>

      <div className="content-body mt-5">
        <p>
          {locale === "en" ? "Access Link:" : "Link truy cập:"}{" "}
          <Link
            target="blank"
            href={
              "https://docs.google.com/spreadsheets/d/1T6JoLqdo8wT7g9BCQ3girfmXojIvfkoVDhImFCYL3Yc/edit?gid=716758812#gid=716758812"
            }
            className="text-[#cd2027]!"
          >
            {locale === "en" ? "[Click here]" : "[Nhấn vào đây]"}
          </Link>
        </p>

        {locale === "en" ? (
          <>
            <p>
              The Partnership team is responsible for building and developing
              relationships with partners, businesses, and relevant
              organizations.
            </p>

            <p>
              Access mechanism: Role-based access depending on project
              assignment and the level of direct partner engagement.
            </p>

            <p>
              Secure scope: External relations data (VIP contact information,
              sponsorship contracts, and MOU documents) is strictly controlled
              and fully confidential.
            </p>
          </>
        ) : (
          <>
            <p>
              Nhóm Partnership chịu trách nhiệm xây dựng và phát triển quan hệ
              với các đối tác, doanh nghiệp và tổ chức liên quan.
            </p>
            <p>
              Cơ chế truy cập: Phân quyền theo dự án và mức độ trực tiếp chăm
              sóc đối tác.
            </p>
            <p>
              Vùng bảo mật: Dữ liệu đối ngoại (Thông tin liên hệ VIP, hợp đồng
              tài trợ, biên bản MOU) được kiểm soát và bảo mật tuyệt đối.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="uppercase text-center">Nhóm Hợp tác</h1>

      <div className="content-body mt-5">
        <p>
          Link truy cập:{" "}
          <Link
            target="blank"
            href={
              "https://docs.google.com/spreadsheets/d/1T6JoLqdo8wT7g9BCQ3girfmXojIvfkoVDhImFCYL3Yc/edit?gid=716758812#gid=716758812"
            }
            className="text-[#cd2027]!"
          >
            [Nhấn vào đây]
          </Link>
        </p>

        <p>
          Nhóm Partnership chịu trách nhiệm xây dựng và phát triển quan hệ với
          các đối tác, doanh nghiệp và tổ chức liên quan.
        </p>
        <p>
          Cơ chế truy cập: Phân quyền theo dự án và mức độ trực tiếp chăm sóc
          đối tác.
        </p>
        <p>
          Vùng bảo mật: Dữ liệu đối ngoại (Thông tin liên hệ VIP, hợp đồng tài
          trợ, biên bản MOU) được kiểm soát và bảo mật tuyệt đối.
        </p>
      </div>
    </div>
  );
}

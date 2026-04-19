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
          Mục tiêu: Mở rộng mạng lưới hợp tác, gia tăng nguồn lực và tạo cơ hội
          phát triển cho các hoạt động của ISCM.
        </p>
        <p>
          Người truy cập: Tài liệu được phân quyền theo vai trò và mức độ tham
          gia làm việc với đối tác. Các thông tin liên quan đến đối tác được
          kiểm soát truy cập chặt chẽ.
        </p>
      </div>
    </div>
  );
}

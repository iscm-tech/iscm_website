import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="uppercase text-center">Nhóm Vận hành & Tài chính</h1>

      <div className="content-body mt-5">
        <p>
          Link truy cập:{" "}
          <Link
            target="blank"
            href={
              "https://docs.google.com/spreadsheets/d/1JosXOpkCx42hxWZbhGmIFB9LEwvoFBCRDwdSZCgCtfU"
            }
            className="text-[#cd2027]!"
          >
            [Nhấn vào đây]
          </Link>
        </p>

        <p>
          Giới thiệu:Nhóm Operation & Finance phụ trách toàn bộ hoạt động vận
          hành nội bộ và quản lý tài chính của ISCM, bao gồm quy trình, ngân
          sách và kiểm soát chi phí.
        </p>
        <p>
          Mục tiêu: Đảm bảo hoạt động diễn ra trơn tru, minh bạch tài chính và
          tối ưu hóa nguồn lực trong quá trình triển khai.
        </p>
        <p>
          Người truy cập: Tùy theo vai trò (Head, Coordinator, Member), quyền
          truy cập tài liệu sẽ được phân quyền khác nhau. Các nội dung tài chính
          và vận hành nhạy cảm chỉ giới hạn cho các vị trí phụ trách.
        </p>
      </div>
    </div>
  );
}

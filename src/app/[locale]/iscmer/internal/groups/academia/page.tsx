import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="uppercase text-center">Nhóm Học thuật</h1>

      <div className="content-body mt-5">
        <p>
          Link truy cập:{" "}
          <Link
            target="blank"
            href={
              "https://docs.google.com/spreadsheets/d/1C-sOSQ8y2pM5paUr6QsyH9tYM5qp0GwQLuVqdBKc_0I/edit?gid=0#gid=0"
            }
            className="text-[#cd2027]!"
          >
            [Nhấn vào đây]
          </Link>
        </p>

        <p>
          Nhóm Academia triển khai các hoạt động học thuật, xây dựng nội dung
          chuyên môn và phát triển chương trình đào tạo của ISCM.
        </p>
        <p>
          Mục tiêu: Nâng cao chất lượng học thuật, chuẩn hóa nội dung đào tạo và
          đảm bảo tính ứng dụng trong thực tiễn.
        </p>
        <p>
          Người truy cập: Quyền truy cập được phân theo vai trò và mức độ tham
          gia vào chương trình. Một số tài liệu chuyên môn chỉ dành cho nhóm phụ
          trách và các vị trí liên quan.
        </p>
      </div>
    </div>
  );
}

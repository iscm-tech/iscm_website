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
          Cơ chế truy cập: Linh hoạt theo vai trò giảng dạy và mức độ tham gia
          môn học/dự án.
        </p>
        <p>
          Vùng bảo mật: Tài liệu cốt lõi (Đề thi, bản quyền chương trình, chiến
          lược đào tạo) được bảo mật tuyệt đối; chỉ dành cho Giám đốc chương
          trình và Giảng viên phụ trách môn.
        </p>
      </div>
    </div>
  );
}

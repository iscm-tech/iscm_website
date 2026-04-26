import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="uppercase text-center">
        Nhóm Truyền thông & Quan hệ công chúng
      </h1>

      <div className="content-body mt-5">
        <p>
          Link truy cập:{" "}
          <Link
            target="blank"
            href={
              "https://docs.google.com/spreadsheets/d/18lJECuTTWv_Xekg0wyGk22feDCF4QdmaJLAQFmlMKyA/edit?gid=1077188630#gid=1077188630"
            }
            className="text-[#cd2027]!"
          >
            [Nhấn vào đây]
          </Link>
        </p>

        <p>
          Nhóm PR & Communication triển khai các hoạt động truyền thông, bao gồm
          nội dung, thiết kế, website và các sản phẩm truyền thông của ISCM.
        </p>
        <p>
          Cơ chế truy cập: Phân quyền dựa trên chuyên môn thực thi (Nội dung,
          Thiết kế, Web...).
        </p>
        <p>
          Vùng bảo mật: Tài liệu định hướng (Chiến lược thương hiệu, kế hoạch
          tổng, ngân sách PR) chỉ giới hạn cho cấp Quản lý và nhân sự trực tiếp
          phụ trách.
        </p>
      </div>
    </div>
  );
}

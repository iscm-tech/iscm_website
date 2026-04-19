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
          Mục tiêu: Đảm bảo hình ảnh thương hiệu nhất quán, nâng cao độ nhận
          diện và hiệu quả truyền thông.
        </p>
        <p>
          Người truy cập: Quyền truy cập được phân theo vai trò trong team. Các
          tài liệu liên quan đến chiến lược và kế hoạch truyền thông có thể bị
          giới hạn đối với một số đối tượng.
        </p>
      </div>
    </div>
  );
}

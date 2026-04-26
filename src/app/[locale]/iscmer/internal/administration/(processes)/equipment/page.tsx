import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="py-4">
      <h1 className="text-center uppercase">Quản lý và mượn Thiết bị</h1>

      <div className="content-body mt-5">
        <p>
          Link truy cập:{" "}
          <Link
            target="blank"
            href={
              "https://docs.google.com/spreadsheets/d/1EaDvhYbHuwrkIXDIs96j460LOMGwbjiJJD8b6muCoPo/edit?usp=sharing"
            }
            className="text-[#cd2027]!"
          >
            [Nhấn vào đây]
          </Link>
        </p>

        <p>
          Nhằm hỗ trợ tối đa cho hoạt động giảng dạy và nghiên cứu, ISCM cung
          cấp hệ thống thiết bị công nghệ tại ISCM. Để việc mượn và sử dụng diễn
          ra nhanh chóng, trách nhiệm, thành viên vui lòng tra cứu và thao tác
          theo 4 mục dưới đây:
        </p>
        <ul className="list-disc! pl-4">
          <li className="list-item!">
            Quy định sử dụng: Chi tiết các nguyên tắc mượn, trả và quản lý tài
            sản chung.
          </li>
          <li className="list-item!">
            Danh mục thiết bị: Cập nhật thông tin và tình trạng các máy móc,
            công cụ hiện có tại ISCM.
          </li>
          <li className="list-item!">
            Đăng ký Mượn - Trả: Truy cập biểu mẫu (form) để đăng ký mượn và hoàn
            trả thiết bị.
          </li>
          <li className="list-item!">
            Mua sắm & Thanh toán: Nơi theo dõi tiến độ các đề xuất mua mới,
            thanh toán và bảo trì thiết bị.
          </li>
        </ul>
      </div>
    </div>
  );
}

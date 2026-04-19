import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="text-center uppercase">Biên bản cuộc họp</h1>
      <div className="content-body mt-5">
        <p>
          Link truy cập:{" "}
          <Link
            href="https://docs.google.com/spreadsheets/d/1tMc-Iuul27ykrobGg2pjW1lH_b_NigwdGCbNTp4hxos"
            target="_blank"
            className="text-[#cd2027]!"
          >
            [Nhấn vào đây]{" "}
          </Link>
        </p>
        <div className="text-justify">
          <p>
            Tất cả các buổi họp đều phải được ghi nhận theo mẫu minute report
            thống nhất.
          </p>
          <p>
            Đối với các hoạt động theo sự kiện/dự án, biên bản họp và tài liệu
            liên quan sẽ được lưu trữ tại thư mục (folder) của từng event/dự án
            do Host/Coordinator phụ trách thiết lập và quản lý.
          </p>
          <p>
            Đối với các hoạt động liên quan đến vận hành chung (operation) của
            ISCM, tài liệu sẽ được lưu trữ tập trung theo từng nhóm phân loại,
            bao gồm nhưng không giới hạn:
          </p>
          <ul className="list-disc! pl-4 mb-4">
            <li className="list-item! text-justify">
              Các buổi họp toàn bộ ISCM
            </li>
            <li className="list-item! text-justify">Các buổi họp với Heads</li>
            <li className="list-item! text-justify">
              Các buổi họp với stakeholders
            </li>
            <li className="list-item! text-justify">
              Các buổi họp triển khai theo từng nhóm
            </li>
            <li className="list-item! text-justify">
              Các buổi họp chuyên sâu, dài hạn thuộc hoạt động vận hành (ví dụ:
              ASIIN, program development, …)
            </li>
            <li className="list-item! text-justify">
              Việc lưu trữ cần đảm bảo đầy đủ, đúng cấu trúc và dễ truy xuất
              nhằm phục vụ công tác theo dõi, phối hợp và đánh giá.{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

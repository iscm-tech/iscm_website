import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="py-4">
      <h1 className="text-center uppercase">Quản trị Tổ chức sự kiện</h1>

      <div className="content-body mt-5">
        <p>
          Link truy cập:{" "}
          <Link
            target="blank"
            href={
              "https://docs.google.com/spreadsheets/d/1heZR15BjNubKwrxgswnT401OG6emShMCeqzs6Dslr_k/edit?gid=487548954#gid=487548954"
            }
            className="text-[#cd2027]!"
          >
            [Nhấn vào đây]
          </Link>
        </p>

        <p>
          Tài liệu này cung cấp tổng quan về định nghĩa, phạm vi và quy trình tổ
          chức các sự kiện của ISCM trong năm 2026, bao gồm:
        </p>
        <ul className="">
          <li className="list-item!">
            (1) Toàn bộ các sự kiện được hệ thống hóa theo kế hoạch chung, bao
            gồm các hạng mục chính như: lập kế hoạch (planning), thiết kế
            (design) và truyền thông (communication);
          </li>
          <li className="list-item!">
            (2) Các form đăng ký và biểu mẫu liên quan đã được tích hợp trong
            file quy trình tổ chức sự kiện, nhằm đảm bảo tính thống nhất trong
            triển khai và phối hợp giữa các bộ phận;
          </li>
          <li className="list-item!">
            (3) Người Host/phụ trách cần tuân thủ đầy đủ quy trình và sử dụng
            đúng các biểu mẫu được cung cấp để đảm bảo hiệu quả vận hành và chất
            lượng sự kiện.
          </li>
        </ul>
      </div>
    </div>
  );
}

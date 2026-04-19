import { LinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="text-center uppercase">Quy chế chi tiêu nội bộ</h1>
      <div className="content-body mt-5">
        <p className="text-justify">
          Quy chế chi tiêu nội bộ thiết lập các nguyên tắc và định mức cụ thể,
          đảm bảo mọi nguồn tài chính được tối ưu hóa cho mục đích nghiên cứu,
          phát triển dự án và nâng cao chất lượng môi trường làm việc cho tất cả
          thành viên tại Viện.
        </p>

        <p className="text-justify">
          Để đảm bảo các giao dịch tài chính tại Viện được xử lý chính xác và
          nhanh chóng, ISCM phân loại quy trình thanh toán dựa trên đối tượng và
          mục đích sử dụng:
        </p>

        <ul className="list-disc! pl-4 mb-4">
          <li className="list-item! text-justify">
            Thanh toán cá nhân (Individual Payment): Áp dụng cho các khoản công
            tác phí, thù lao giảng dạy hoặc tạm ứng cá nhân. Phần này các thành
            viên sẽ chủ động thực hiện thủ tục tự thanh toán (Self-payment)
          </li>
          <li className="list-item! text-justify">
            Thanh toán dự án (Project Payment): Dành cho các hoạt động nghiên
            cứu khoa học, mua sắm thiết bị dự án... Các khoản này sẽ được thực
            hiện thông qua Điều phối viên (Coordinator) của dự án đó.
          </li>
          <li className="list-item! text-justify">
            Thanh toán quỹ chung (ISCM Fund Payment): Bao gồm các khoản chi từ
            quỹ đơn vị, quỹ hoạt động chung hoặc tài trợ. Nhóm thanh toán này sẽ
            do bộ phận chuyên trách (Mai/Trâm) trực tiếp xử lý.
          </li>
        </ul>

        <p>
          Link truy cập:{" "}
          <Link
            href={
              "https://drive.google.com/file/d/1A0VgvrBOaX1FhFCcrcRrTermjOrJUfLP/view?usp=drive_link"
            }
            target="_blank"
            className="text-[#cd2027]!"
          >
            [Nhấn vào đây]
          </Link>
        </p>
      </div>
    </div>
  );
}

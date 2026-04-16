import ComingSoon from "@/components/comingSoon";
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
      </div>
    </div>
  );
}

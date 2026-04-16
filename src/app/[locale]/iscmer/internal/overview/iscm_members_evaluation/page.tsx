import { LinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="text-center uppercase">
        Chiến lược phát triển ISCM & Kế hoạch năm
      </h1>

      <div className="content-body mt-5">
        <p>
          Hệ thống đánh giá ISCM members được xây dựng nhằm theo dõi mức độ tham
          gia, chất lượng đóng góp và hiệu quả thực hiện công việc của từng
          thành viên trong quá trình hoạt động.
        </p>

        <p className="text-justify">Nội dung đánh giá bao gồm: </p>

        <ul className="list-disc! pl-4 mb-4">
          <li className="list-item!">
            <Link
              href="https://docs.google.com/spreadsheets/d/1EG6fWZM7fgZ7kLRg83fb4pURnkmGsvhYVEIChdFiZ0g"
              target="_blank"
              className="text-[#cd2027]! inline-flex items-center gap-1"
            >
              Điểm danh
              <LinkIcon size={14} />
            </Link>
            : Xác nhận mức độ tham gia của ISCM members trong các hoạt động
          </li>
          <li className="list-item!">
            Thu thập ý kiến: Ghi nhận phản hồi của sinh viên đối với ISCM và các
            chương trình liên quan
          </li>
          <li className="list-item!">
            <Link
              href="https://forms.gle/SxMBaT16JRtAxEJH9"
              target="_blank"
              className="text-[#cd2027]! inline-flex items-center gap-1"
            >
              Đánh giá hiệu suất
              <LinkIcon size={14} />
            </Link>
            : Đánh giá chất lượng thực hiện công việc của Host/Coordinator và
            Members theo định kỳ (mỗi quý 1 lần)
          </li>
        </ul>
        <p>
          Kết quả đánh giá được tổng hợp và quản lý bởi ISCM Director nhằm phục
          vụ công tác theo dõi, điều chỉnh và phát triển đội ngũ.
        </p>
        <p className="italic text-[#cd2027]!">
          * Đối với các trường hợp vắng mặt, làm việc từ xa hoặc thay đổi hình
          thức tham gia, members cần chủ động xin phép ISCM Director và cập nhật
          thông tin đầy đủ trên hệ thống. Các trường hợp nghỉ dài hạn hoặc công
          tác cần thực hiện theo quy trình phê duyệt chính thức.
        </p>
      </div>
    </div>
  );
}

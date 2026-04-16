import { LinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="text-center uppercase">Nội quy</h1>

      <div className="content-body mt-5">
        <p>
          ISCM tin rằng môi trường làm việc kỷ luật nhưng sáng tạo là nền tảng
          để hiện thực hóa những giá trị đột phá. Vậy nên các quy định tại Viện
          được xây dựng dựa trên sự kết hợp giữa truyền thống đáng tự hào của
          UEH và văn hóa làm việc hiện đại, năng động của ISCM.
        </p>
        <h4>1. Thời gian làm việc</h4>
        <p>Khung giờ làm việc linh hoạt nhưng đảm bảo tính cam kết cao:</p>
        <ul className="list-disc! pl-4 mb-4">
          <li className="list-item!">
            Buổi sáng: 7:30/8:30 AM – 11:30/12:30 PM
          </li>
          <li className="list-item!">
            Buổi chiều: 12:30/1.30 PM – 4:30/5.30 PM
          </li>
          <li className="list-item!">
            <i>Quy định vắng mặt</i>: Thành viên cần chủ động cập nhật trạng
            thái làm việc qua hệ thống{" "}
            <Link
              href="https://docs.google.com/spreadsheets/d/1EG6fWZM7fgZ7kLRg83fb4pURnkmGsvhYVEIChdFiZ0g"
              target="_blank"
              className="text-[#cd2027]! inline-flex items-center gap-1"
            >
              Time Keeper
              <LinkIcon size={14} />
            </Link>
            . Mọi trường hợp vắng mặt ngoài lịch trình học tập/giảng dạy chính
            thức cần được phê duyệt bởi Viện trưởng để đảm bảo tiến độ công việc
            và đánh giá OKRs cá nhân một cách minh bạch.
          </li>
        </ul>
        <h4>2. Tác phong và Văn hóa làm việc</h4>
        <p>
          Với phương châm &quot;Learning by Doing&quot; và &quot;Together we do
          the best&quot;, mỗi thành viên ISCM đều là một đại sứ thương hiệu:
        </p>
        <ul className="list-disc! pl-4 mb-4">
          <li className="list-item!">
            Đồng phục & Chỉnh chu: Upholding UEH’s tradition – Luôn chỉn chu
            trong trang phục, thể hiện sự tôn trọng đối với bản thân và tổ chức.
          </li>
          <li className="list-item!">
            Kỷ luật trong cuộc họp & Bữa ăn: Để tối ưu hóa sự kết nối và hiệu
            quả thảo luận, ISCM quy định không sử dụng điện thoại thông minh
            hoặc làm việc riêng trong các buổi họp và bữa ăn chung của Viện.
          </li>
          <li className="list-item!">
            Quản lý cảm xúc (Self-manage Mood): Khuyến khích sự tích cực, thẳng
            thắn trong trao đổi (Direct Talk) và luôn hỗ trợ đồng đội với tinh
            thần &quot;Make Smiles – Be Happy&quot;.
          </li>
        </ul>
        <h4>3. Trách nhiệm với cộng đồng và Tài sản chung</h4>
        <p>Văn hóa ISCM gắn liền với trách nhiệm xã hội và sự bền vững:</p>
        <ul className="list-disc! pl-4 mb-4">
          <li className="list-item!">
            Bảo vệ tài sản: Có ý thức giữ gìn không gian làm việc sạch sẽ, ngăn
            nắp; thực hiện tiết kiệm điện và bảo vệ tài sản chung của UEH/ISCM.
          </li>
          <li className="list-item!">
            Chia sẻ tri thức (Knowledge Sharing): Sẵn sàng chuyển giao thông
            tin, hỗ trợ và bảo vệ các thành viên trong &quot;đại gia đình&quot; ISCM để
            cùng nhau phát triển hài hòa với cộng đồng.
          </li>
        </ul>
        <h4>4. Cam kết chuyên nghiệp</h4>
        <ul className="list-disc! pl-4 mb-4">
          <li className="list-item!">
            Đảm bảo chất lượng công việc, tôn trọng Deadline và luôn hành động
            đúng vai trò (Empower – Act on our role).
          </li>
          <li className="list-item!">
            Mọi hành vi đều hướng tới giá trị cốt lõi: Sáng tạo – Cam kết –
            Trách nhiệm xã hội.
          </li>
        </ul>
      </div>
    </div>
  );
}

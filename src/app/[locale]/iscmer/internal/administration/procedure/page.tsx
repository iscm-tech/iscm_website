import { Link2, LinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="text-center uppercase">
        Quy trình Tổ chức sự kiện/Mượn thiết bị/Sách ISCM
      </h1>
      <div className="content-body mt-5">
        <p className="text-justify">
          Để mọi hoạt động tại Viện được diễn ra trôi chảy và tối ưu nguồn lực,
          ISCM đã xây dựng các quy trình hướng dẫn cụ thể cho từng nhu cầu thực
          tế:
        </p>

        <ul className="list-disc! pl-4 mb-4">
          <li className="list-item! text-justify">
            <Link
              href={
                "https://docs.google.com/spreadsheets/d/1heZR15BjNubKwrxgswnT401OG6emShMCeqzs6Dslr_k"
              }
              target="_blank"
              className="text-[#cd2027]! inline-flex items-center gap-1"
            >
              <LinkIcon size={14} />
              <b>Tổ chức sự kiện (Event)</b>
            </Link>
            : Cung cấp lộ trình bài bản và đầy đủ từ khâu lên ý tưởng, xin phê
            duyệt đến triển khai thực tế. Quy trình này giúp các host và
            coordinator nắm vững các bước phối hợp giữa các bộ phận, đảm bảo sự
            kiện diễn ra đúng tiêu chuẩn chuyên nghiệp của Viện.
          </li>
          <li className="list-item! text-justify">
            <Link
              href={
                "https://docs.google.com/spreadsheets/d/1EaDvhYbHuwrkIXDIs96j460LOMGwbjiJJD8b6muCoPo"
              }
              target="_blank"
              className="text-[#cd2027]! inline-flex items-center gap-1"
            >
              <LinkIcon size={14} />
              <b>Mượn thiết bị</b>
            </Link>
            : Nhằm hỗ trợ tối đa cho việc nghiên cứu và giảng dạy, ISCM xây dựng
            quy trình quản lý thiết bị chặt chẽ. Thành viên có thể dễ dàng đăng
            ký mượn và sử dụng các công cụ công nghệ, máy móc tại Lab hoặc Maker
            Space một cách nhanh chóng và có trách nhiệm.
          </li>
          <li className="list-item! text-justify">
            <Link
              href={
                "https://docs.google.com/spreadsheets/d/1BqVkgmMstfq1ZP7eLkdLN87PqeP5iiqPVTgQflOhGuk"
              }
              target="_blank"
              className="text-[#cd2027]! inline-flex items-center gap-1"
            >
              <LinkIcon size={14} />
              <b>Mượn/Share sách ISCM</b>
            </Link>
            : Thúc đẩy văn hóa chia sẻ tri thức (Knowledge Sharing) thông qua
            thư viện nội bộ. Quy trình mượn và chia sẻ sách giúp các thành viên
            tiếp cận dễ dàng với nguồn tài liệu chuyên ngành quý giá, đồng thời
            cùng nhau làm giàu thêm kho tàng kiến thức chung của &quot;đại gia
            đình&quot; ISCM.
          </li>
        </ul>
      </div>
    </div>
  );
}

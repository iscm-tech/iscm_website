import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="py-4">
      <h1 className="text-center uppercase">
        TỔNG QUAN VỀ QUẢN LÝ VÀ TỔ CHỨC SỰ KIỆN <br />{" "}
        <span className="text-base">
          (Áp dụng cho hệ thống Kế hoạch sự kiện 2026)
        </span>
      </h1>

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
          Thông tin trong này đưa ra định nghĩa, phạm vi và nguyên tắc vận hành
          chung cho toàn bộ sự kiện tại ISCM:
        </p>
        <ul className="list-disc! pl-4">
          <li className="list-item!">
            Quy trình đồng bộ: Mọi sự kiện đều được hệ thống hóa xuyên suốt từ
            khâu Lập kế hoạch (Planning), Thiết kế (Design) đến Truyền thông
            (Communication).
          </li>
          <li className="list-item!">
            Công cụ tập trung: Toàn bộ biểu mẫu (templates) và link đăng ký công
            việc đã được tích hợp sẵn vào quy trình, đảm bảo sự phối hợp nhất
            quán giữa các nhóm chức năng.
          </li>
          <li className="list-item!">
            Trách nhiệm thực thi: Người phụ trách (Host) bắt buộc tuân thủ chặt
            chẽ quy trình này và sử dụng đúng biểu mẫu được cung cấp nhằm tối ưu
            hóa vận hành và đảm bảo chất lượng sự kiện.
          </li>
        </ul>
      </div>
    </div>
  );
}

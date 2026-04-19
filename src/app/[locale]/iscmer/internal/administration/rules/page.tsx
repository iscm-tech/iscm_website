import { FileTextIcon, LinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="text-center uppercase">Nội quy và quy định</h1>

      <div className="content-body mt-5">
        <p>
          Tổng hợp Quy định, Hướng dẫn và Tài liệu nội bộ – ISCM nhằm đảm bảo
          tính nhất quán trong vận hành và hỗ trợ hiệu quả cho các hoạt động nội
          bộ, ISCM cung cấp hệ thống tài liệu bao gồm các quy định chung của
          UEH, ISCM và các hướng dẫn liên quan đến nhiều nhóm hoạt động.
        </p>
        <p>
          Kho tài liệu này được xây dựng như một nguồn tham chiếu chính thức,
          bao gồm các guideline, danh sách biểu mẫu (templates), cũng như các
          quy định và chính sách áp dụng cho ISCM members trong quá trình học
          tập, làm việc và tham gia hoạt động.
        </p>
        <p>
          Thành viên được khuyến nghị chủ động tra cứu và tuân thủ các nội dung
          liên quan nhằm đảm bảo đúng quy trình, tối ưu hiệu quả phối hợp và hạn
          chế sai sót trong quá trình triển khai.
        </p>

        <ul>
          <p>Tổng hợp các quy định:</p>
          <li className="list-item! mt-3">
            <Link
              className="flex gap-1 hover:text-[#cd2027]! transition-colors"
              target="_blank"
              href={
                "https://drive.google.com/file/d/1hb5X0-IJvnf6yvx8H6jH-Ps1F5b1A9OF/view?usp=sharing"
              }
            >
              <FileTextIcon />
              Quy định và nguyên tắc ứng xử và làm việc tại ISCM
            </Link>
          </li>
          <li className="list-item! mt-3">
            <Link
              className="flex gap-1 hover:text-[#cd2027]! transition-colors"
              target="_blank"
              href={
                "https://drive.google.com/file/d/1wLREpa62Ycd1oP93e5XNC2IZEoYDL7jp/view?usp=drive_link"
              }
            >
              <FileTextIcon /> Quy định và nguyên tắc làm việc giành cho cộng
              tác viên ISCM
            </Link>
          </li>
          <li className="list-item! mt-3">
            <Link
              className="flex gap-1 hover:text-[#cd2027]! transition-colors"
              target="_blank"
              href={
                "https://drive.google.com/file/d/1m_oGNuF5oqUJ_pLf2rLvU8oLuiSXtnnL/view?usp=drive_link"
              }
            >
              <FileTextIcon /> Quy định về chế độ làm việc đối với giảng viên
            </Link>
          </li>
          <li className="list-item! mt-3">
            <Link
              className="flex gap-1 hover:text-[#cd2027]! transition-colors"
              target="_blank"
              href={
                "https://drive.google.com/file/d/1WGJFodwHJo00p-pqJRDOlF_rBXqCiywP/view?usp=drive_link"
              }
            >
              <FileTextIcon /> Quy định về chế độ trợ giảng
            </Link>
          </li>
          <li className="list-item! mt-3">
            <Link
              className="flex gap-1 hover:text-[#cd2027]! transition-colors"
              target="_blank"
              href={
                "https://drive.google.com/file/d/1DU3JSgHqQlD-7JN8dmiXiokwAPbmx-mF/view?usp=drive_link"
              }
            >
              <FileTextIcon /> Nghị quyết ban hành quy chế tuyển dụng viên chức
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="text-center uppercase">Mẫu - Tài liệu</h1>
      <div className="content-body mt-5">
        <p>
          Link truy cập:{" "}
          <Link
            href="https://docs.google.com/spreadsheets/d/1ow2qBTsU06JcIjms9_627CDyyAVWmLp5/edit?usp=drive_link&ouid=108537813011262227879&rtpof=true&sd=true"
            target="_blank"
            className="text-[#cd2027]!"
          >
            [Nhấn vào đây]
          </Link>
        </p>
        <div className="text-justify">
          <p>
            Danh mục này lưu trữ và phân loại toàn bộ thông tin, biểu mẫu phục
            vụ cho công việc vận hành hàng ngày của ISCM. Nhằm hỗ trợ tra cứu
            nhanh và đảm bảo tính thống nhất, kho tài liệu được chia thành 6
            nhóm chính:
          </p>
          <ol className="list-decimal! pl-4 mb-4">
            <li className="list-item!">
              Danh sách (List): Tập hợp các danh sách tổng quát được phân loại
              theo từng nhóm đối tượng cụ thể (ví dụ: nhân sự, giảng viên, đối
              tác,...).
            </li>
            <li className="list-item!">
              Hướng dẫn (Guideline): Các tài liệu hướng dẫn chi tiết từng bước
              (step-by-step) về cách sử dụng phần mềm, hệ thống, hoặc cách thực
              hiện quy trình làm việc chuẩn của UEH và ISCM.
            </li>
            <li className="list-item!">
              Hồ sơ & Văn bản (Document): Nơi lưu trữ các văn bản, hồ sơ quản lý
              hành chính/vận hành (bao gồm cả tài liệu đang xử lý và đã hoàn
              tất).
            </li>
            <li className="list-item!">
              Tệp mẫu (Template): Các file văn bản đã được định dạng chuẩn sẵn
              về hình thức và nội dung, sử dụng cho lưu hành nội bộ hoặc phát
              hành ra bên ngoài.
            </li>
            <li className="list-item!">
              Nộp dữ liệu (Submission): Nơi tập hợp các biểu mẫu thu thập thông
              tin (Form/Survey), nộp dữ liệu (Data) và các mẫu nộp đánh giá
              (Evaluation).
            </li>
            <li className="list-item!">
              Ấn phẩm thương hiệu (ISCM Materials): Kho lưu trữ các tài liệu
              nhận diện hình ảnh của Viện bao gồm brochure, portfolio, name
              card, video clip giới thiệu,...
            </li>
          </ol>
          <p>
            <b className="text-[#cd2027]">Yêu cầu</b>: Đối với những nội dung
            chưa được cập nhật vào Kho tri thức (Knowledge Base), thông tin sẽ
            được ưu tiên bổ sung tại đây. Thành viên ISCM có trách nhiệm tải và
            sử dụng đúng tài liệu, biểu mẫu tương ứng để tuân thủ quy trình và
            tối ưu hiệu quả công việc.
          </p>
        </div>
      </div>
    </div>
  );
}

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
            href="https://docs.google.com/spreadsheets/d/1ow2qBTsU06JcIjms9_627CDyyAVWmLp5"
            target="_blank"
            className="text-[#cd2027]!"
          >
            [Nhấn vào đây]
          </Link>
        </p>
        <div className="text-justify">
          <p>
            Danh mục này tổng hợp các thông tin, biểu mẫu và tài liệu phục vụ
            cho hoạt động của ISCM, bao gồm: danh sách, quy định, hướng dẫn và
            các form đăng ký (đăng ký, đánh giá, mượn, …).
          </p>
          <p>
            Các tài liệu tại đây được cung cấp nhằm hỗ trợ tra cứu nhanh và đảm
            bảo tính thống nhất trong quá trình triển khai. Đối với những nội
            dung chưa được cập nhật trong Kho tri thức (Knowledge Base), thông
            tin sẽ được bổ sung tại danh mục này.
          </p>
          <p>
            Người dùng cần sử dụng đúng biểu mẫu và tài liệu tương ứng để đảm
            bảo tuân thủ quy trình và tối ưu hiệu quả vận hành.
          </p>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="text-center uppercase">ISCM & CTD</h1>

      <div className="content-body mt-5">
        <p>
          Các folder, thông tin chung về CTD như Chiến lược phát triển UEH,
          chuẩn đầu ra và các hoạt động làm chung cho CTD.
        </p>

        <p>
          Link truy cập:{" "}
          <Link
            href="https://drive.google.com/drive/folders/1pOjBvEW-ccYC4NbUW_TtZINMb4kw9Zts"
            target="_blank"
            className="text-[#cd2027]!"
          >
            [Nhấn vào đây]
          </Link>
          <span className="block italic font-bold! text-[#cd2027]!">
            * Chỉ nhưng thành viên làm chính trong hoạt động CTD mới access
            được.
          </span>
        </p>
      </div>
    </div>
  );
}

import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="text-center uppercase">ISCM & UEH</h1>

      <div className="content-body mt-5">
        <p>
          Các folder, thông tin chung về UEH như Chiến lược phát triển UEH,
          storyline và các hoạt động làm chung cho UEH.
        </p>

        <p>
          Link truy cập:{" "}
          <Link
            href="https://drive.google.com/drive/folders/1KzOTxlTeDH75bB7USN_YJlq8A5bq585y"
            target="_blank"
            className="text-[#cd2027]!"
          >
            https://drive.google.com/drive/folders/1KzOTxlTeDH75bB7USN_YJlq8A5bq585y
          </Link>
          <span className="block italic font-bold! text-[#cd2027]!">
            * Chỉ những thành viên làm chính trong hoạt động UEH mới access
            được.
          </span>
        </p>
      </div>
    </div>
  );
}

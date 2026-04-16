import Link from "next/link";
import React from "react";

export default function pgae() {
  return (
    <div>
      <h1 className="text-center uppercase">ISCM & Covergence Tech Hub</h1>

      <div className="content-body mt-5">
        <p>
          Các folder, thông tin chung về CTH như Chiến lược phát triển, tổ chức
          phòng và lab tại Nguyễn Văn Thủ, danh sách thiết bị.
        </p>

        <p>
          Link truy cập:{" "}
          <Link
            href="https://drive.google.com/drive/folders/1bSNVnfWOmTgDidQ0S-L_OSJOS3XmL7Ns"
            target="_blank"
            className="text-[#cd2027]!"
          >
            https://drive.google.com/drive/folders/1bSNVnfWOmTgDidQ0S-L_OSJOS3XmL7Ns
          </Link>
          <span className="block italic font-bold! text-[#cd2027]!">
            * Chỉ nhưng thành viên làm chính mới access được.
          </span>
        </p>
      </div>
    </div>
  );
}

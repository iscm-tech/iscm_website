import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="text-center uppercase">ISCM & MakerSpace</h1>

      <div className="content-body mt-5">
        <p>
          Các folder, thông tin chung về như Chiến lược phát triển và các hoạt
          động làm chung.
        </p>

        <p>
          Link truy cập:{" "}
          <Link
            href="https://drive.google.com/drive/folders/1UOcQtZVpSmxsVARqNzeVvAeTrsxoJ9r2"
            target="_blank"
            className="text-[#cd2027]!"
          >
            https://drive.google.com/drive/folders/1UOcQtZVpSmxsVARqNzeVvAeTrsxoJ9r2
          </Link>
          <span className="block italic font-bold! text-[#cd2027]!">
            * Chỉ những thành viên làm chính trong hoạt động MS mới access được.
          </span>
        </p>
      </div>
    </div>
  );
}

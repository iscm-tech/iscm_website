import Link from "next/link";
import React from "react";

export default function pgae() {
  return (
    <div>
      <h1 className="text-center uppercase">ISCM & UEH Sustainability</h1>

      <div className="content-body mt-5">
        <p>
          Các folder, thông tin chung về UEH bền vững như Chiến lược phát triển
          và các hoạt động.
        </p>

        <p>
          Link truy cập:{" "}
          <Link
            href="https://drive.google.com/drive/folders/1l-wGBcnLEsInX5ZF-A2UQ_8yfiz7qL5C"
            target="_blank"
            className="text-[#cd2027]!"
          >
            https://drive.google.com/drive/folders/1l-wGBcnLEsInX5ZF-A2UQ_8yfiz7qL5C
          </Link>
          <span className="block italic font-bold! text-[#cd2027]!">
            * Chỉ nhưng thành viên làm chính mới access được.
          </span>
        </p>
      </div>
    </div>
  );
}

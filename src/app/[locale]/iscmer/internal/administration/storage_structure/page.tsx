import { FileTextIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="text-center uppercase">Tổng quan cấu trúc lưu trữ</h1>

      <div className="content-body mt-5">
        <p>
          Link truy cập:{" "}
          <Link
            className="text-[#cd2027]!"
            target="_blank"
            href={
              "https://drive.google.com/file/d/1hb5X0-IJvnf6yvx8H6jH-Ps1F5b1A9OF/view?usp=sharing"
            }
          >
            [Nhấn vào đây]
          </Link>
        </p>

        <p>
          Sơ đồ/cấu trúc, hướng dẫn của các folder lưu trữ/ sử dụng, ai được
          quyền truy cập như thế nào
        </p>
      </div>
    </div>
  );
}

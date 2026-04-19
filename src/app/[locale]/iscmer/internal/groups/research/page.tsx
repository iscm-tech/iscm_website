import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="uppercase text-center">Nhóm Nghiên cứu</h1>

      <div className="content-body mt-5">
        <p>
          Link truy cập:{" "}
          <Link
            target="blank"
            href={
              "https://docs.google.com/spreadsheets/d/1yuTGUS76TTQ2mV8psy5WbOuNIpdqY4hqtglwb9inN7k/edit?usp=sharing"
            }
            className="text-[#cd2027]!"
          >
            [Nhấn vào đây]
          </Link>
        </p>

        <p>
          Giới thiệu: Nhóm Research thực hiện các hoạt động nghiên cứu, thu thập
          và phân tích dữ liệu nhằm hỗ trợ định hướng phát triển và các dự án
          của ISCM.
        </p>
        <p>
          Mục tiêu: Cung cấp dữ liệu và insight có giá trị, phục vụ việc ra
          quyết định và nâng cao chất lượng các chương trình.
        </p>
        <p>
          Người truy cập: Tài liệu được phân quyền theo vai trò và mức độ tham
          gia dự án. Một số dữ liệu nghiên cứu có giới hạn truy cập để đảm bảo
          tính bảo mật.
        </p>
      </div>
    </div>
  );
}

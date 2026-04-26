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
          Nhóm Research thực hiện các hoạt động nghiên cứu, thu thập và phân
          tích dữ liệu nhằm hỗ trợ định hướng phát triển và các dự án của ISCM.
        </p>
        <p>
          Cơ chế truy cập: Cấp quyền theo mức độ tham gia thực tế vào từng dự án
          nghiên cứu.
        </p>
        <p>
          Vùng bảo mật: Tài sản trí tuệ (IP) (Dữ liệu thô, kết quả nghiên cứu
          chưa công bố) bị giới hạn nghiêm ngặt, chỉ dành cho nhóm tác giả hoặc
          người có thẩm quyền.
        </p>
      </div>
    </div>
  );
}

import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="py-4">
      <h1 className="text-center uppercase">Quản trị Thiết bị</h1>

      <div className="content-body mt-5">
        <p>
          Link truy cập:{" "}
          <Link
            target="blank"
            href={
              "https://docs.google.com/spreadsheets/d/1EaDvhYbHuwrkIXDIs96j460LOMGwbjiJJD8b6muCoPo/edit?usp=sharing"
            }
            className="text-[#cd2027]!"
          >
            [Nhấn vào đây]
          </Link>
        </p>

        <p>
          Mượn thiết bị: Nhằm hỗ trợ tối đa cho việc nghiên cứu và giảng dạy,
          ISCM xây dựng quy trình quản lý thiết bị chặt chẽ. Thành viên có thể
          dễ dàng đăng ký mượn và sử dụng các công cụ công nghệ, máy móc tại Lab
          hoặc Maker Space một cách nhanh chóng và có trách nhiệm.
        </p>
        <ul className="">
          <li className="list-item!">(1) Các quy định quản trị thiết bị, </li>
          <li className="list-item!">
            (2) Các thông tin về thiết bị hiện nay có tại ISCM,
          </li>
          <li className="list-item!">(3) Đăng ký mượn, trả thiết bị,</li>
          <li className="list-item!">
            (4) Theo dõi đề xuất mua, thanh toán, quản trị thiết bị.
          </li>
        </ul>
      </div>
    </div>
  );
}

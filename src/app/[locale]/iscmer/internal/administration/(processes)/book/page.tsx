import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="py-4">
      <h1 className="text-center uppercase">Quản trị sách</h1>

      <div className="content-body mt-5">
        <p>
          Link truy cập:{" "}
          <Link
            target="blank"
            href={
              "https://docs.google.com/spreadsheets/d/1BqVkgmMstfq1ZP7eLkdLN87PqeP5iiqPVTgQflOhGuk/edit?gid=746904472#gid=746904472"
            }
            className="text-[#cd2027]!"
          >
            [Nhấn vào đây]
          </Link>
        </p>

        <p>
          Thúc đẩy văn hóa chia sẻ tri thức (Knowledge Sharing) thông qua thư
          viện nội bộ. Quy trình mượn và chia sẻ sách giúp các thành viên tiếp
          cận dễ dàng với nguồn tài liệu chuyên ngành quý giá, đồng thời cùng
          nhau làm giàu thêm kho tàng kiến thức chung của &quot;đại gia đình&quot; ISCM.
        </p>
        <ul className="">
          <li className="list-item!">(1) Các đầu sách được quản trị</li>
          <li className="list-item!">(2) Form đăng ký mượn/share sách ISCM</li>
        </ul>
      </div>
    </div>
  );
}

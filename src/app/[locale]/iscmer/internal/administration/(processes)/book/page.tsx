import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="py-4">
      <h1 className="text-center uppercase">Quản lý và mượn sách</h1>

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
          Nhằm thúc đẩy văn hóa học tập liên tục, ISCM vận hành Thư viện sách
          nội bộ - nơi các thành viên dễ dàng tiếp cận nguồn tài liệu chuyên
          ngành quý giá và cùng đóng góp làm giàu kho tri thức chung của tập
          thể.
        </p>
        <p>Để tra cứu và sử dụng thư viện, vui lòng truy cập 2 mục sau:</p>
        <ul className="list-disc! pl-4">
          <li className="list-item!">
            Danh mục sách (Book Catalog): Nơi cập nhật và tra cứu toàn bộ các
            đầu sách đang được lưu trữ, quản lý tại ISCM.
          </li>
          <li className="list-item!">
            Đăng ký Mượn / Tặng sách (Borrow & Share Form): Biểu mẫu để bạn đăng
            ký mượn tài liệu hoặc đóng góp sách cá nhân vào thư viện chung.
          </li>
        </ul>
      </div>
    </div>
  );
}

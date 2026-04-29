import { getLocale } from "next-intl/server";
import Link from "next/link";
import React from "react";

export default async function page() {
  const locale = await getLocale();

  return (
    <div className="py-4">
      <h1 className="text-center uppercase">
        {locale === "en"
          ? "Book Management & Borrowing System"
          : "Quản lý và mượn sách"}
      </h1>

      <div className="content-body mt-5">
        <p>
          {locale === "en" ? "Access Link:" : "Link truy cập:"}{" "}
          <Link
            target="blank"
            href={
              "https://docs.google.com/spreadsheets/d/1BqVkgmMstfq1ZP7eLkdLN87PqeP5iiqPVTgQflOhGuk/edit?gid=746904472#gid=746904472"
            }
            className="text-[#cd2027]!"
          >
            {locale === "en" ? "[Click here]" : "[Nhấn vào đây]"}
          </Link>
        </p>

        {locale === "en" && (
          <>
            <p>
              To promote a continuous learning culture, ISCM operates an
              Internal Book Library, enabling members to easily access valuable
              specialized materials while also contributing to enriching the
              collective knowledge base.
            </p>

            <p>
              To explore and use the library, please refer to the following two
              sections:
            </p>

            <ul className="list-disc! pl-4">
              <li className="list-item!">
                Book Catalog: A section for browsing and tracking all books
                currently stored and managed at ISCM.
              </li>

              <li className="list-item!">
                Borrow & Share Form: A form for requesting to borrow materials
                or contributing personal books to the shared library.
              </li>
            </ul>
          </>
        )}
        {locale === "vi" && (
          <>
            <p>
              Nhằm thúc đẩy văn hóa học tập liên tục, ISCM vận hành Thư viện
              sách nội bộ - nơi các thành viên dễ dàng tiếp cận nguồn tài liệu
              chuyên ngành quý giá và cùng đóng góp làm giàu kho tri thức chung
              của tập thể.
            </p>
            <p>Để tra cứu và sử dụng thư viện, vui lòng truy cập 2 mục sau:</p>
            <ul className="list-disc! pl-4">
              <li className="list-item!">
                Danh mục sách (Book Catalog): Nơi cập nhật và tra cứu toàn bộ
                các đầu sách đang được lưu trữ, quản lý tại ISCM.
              </li>
              <li className="list-item!">
                Đăng ký Mượn / Tặng sách (Borrow & Share Form): Biểu mẫu để bạn
                đăng ký mượn tài liệu hoặc đóng góp sách cá nhân vào thư viện
                chung.
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

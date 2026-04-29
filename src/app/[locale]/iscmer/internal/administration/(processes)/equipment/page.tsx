import { getLocale } from "next-intl/server";
import Link from "next/link";
import React from "react";

export default async function page() {
  const locale = await getLocale();

  return (
    <div className="py-4">
      <h1 className="text-center uppercase">
        {locale === "en"
          ? "Equipment Management & Borrowing"
          : "Quản lý và mượn Thiết bị"}
      </h1>

      <div className="content-body mt-5">
        <p>
          {locale === "en" ? "Access Link:" : "Link truy cập:"}{" "}
          <Link
            target="blank"
            href={
              "https://docs.google.com/spreadsheets/d/1EaDvhYbHuwrkIXDIs96j460LOMGwbjiJJD8b6muCoPo/edit?usp=sharing"
            }
            className="text-[#cd2027]!"
          >
            {locale === "en" ? "[Click here]" : "[Nhấn vào đây]"}
          </Link>
        </p>

        {locale === "en" ? (
          <>
            <p>
              To support teaching and research activities, ISCM provides a
              shared technology equipment system. To ensure fast and responsible
              borrowing and usage, members are required to refer to and follow
              the four sections below:
            </p>

            <ul className="list-disc! pl-4">
              <li className="list-item!">
                Usage Regulations: Detailed rules for borrowing, returning, and
                managing shared assets.
              </li>

              <li className="list-item!">
                Equipment Catalog: Updated information and status of all
                machines and tools available at ISCM.
              </li>

              <li className="list-item!">
                Borrow & Return Registration: Access the form to request
                borrowing and returning equipment.
              </li>

              <li className="list-item!">
                Procurement & Payment: Track the progress of purchase proposals,
                payments, and equipment maintenance.
              </li>
            </ul>
          </>
        ) : (
          <>
            <p>
              Nhằm hỗ trợ tối đa cho hoạt động giảng dạy và nghiên cứu, ISCM
              cung cấp hệ thống thiết bị công nghệ tại ISCM. Để việc mượn và sử
              dụng diễn ra nhanh chóng, trách nhiệm, thành viên vui lòng tra cứu
              và thao tác theo 4 mục dưới đây:
            </p>
            <ul className="list-disc! pl-4">
              <li className="list-item!">
                Quy định sử dụng: Chi tiết các nguyên tắc mượn, trả và quản lý
                tài sản chung.
              </li>
              <li className="list-item!">
                Danh mục thiết bị: Cập nhật thông tin và tình trạng các máy móc,
                công cụ hiện có tại ISCM.
              </li>
              <li className="list-item!">
                Đăng ký Mượn - Trả: Truy cập biểu mẫu (form) để đăng ký mượn và
                hoàn trả thiết bị.
              </li>
              <li className="list-item!">
                Mua sắm & Thanh toán: Nơi theo dõi tiến độ các đề xuất mua mới,
                thanh toán và bảo trì thiết bị.
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

import { FileTextIcon } from "lucide-react";
import { getLocale } from "next-intl/server";
import Link from "next/link";
import React from "react";

export default async function page() {
  const locale = await getLocale();

  return (
    <div>
      <h1 className="text-center uppercase">
        {locale === "en"
          ? "DATA STORAGE AND ACCESS PERMISSION REGULATIONS"
          : "QUY ĐỊNH LƯU TRỮ VÀ PHÂN QUYỀN TRUY CẬP DỮ LIỆU"}
      </h1>

      <div className="content-body mt-5">
        <p>
          {locale === "en" ? "Access Link:" : "Link truy cập:"}{" "}
          <Link
            className="text-[#cd2027]!"
            target="_blank"
            href={
              "https://drive.google.com/file/d/1hb5X0-IJvnf6yvx8H6jH-Ps1F5b1A9OF/view?usp=sharing"
            }
          >
            {locale === "en" ? "[Click here]" : "[Nhấn vào đây]"}
          </Link>
        </p>

        {locale === "en" ? (
          <>
            <p>
              ISCM’s internal data system is structured in a systematic way to
              ensure security, optimize storage space, and enable efficient
              retrieval.
            </p>

            <ol className="list-decimal! pl-4">
              <li className="list-item!">
                Folder Structure
                <ul className="list-disc! pl-4">
                  <li className="list-item!">
                    The folder system is clearly organized by functional groups
                    (O&amp;F, Education, Research, Engagement, Partnership,
                    Communication) and by specific Projects/Events.
                  </li>
                  <li className="list-item!">
                    Requirement: Members must store documents in the correct
                    designated folders and avoid keeping scattered files outside
                    the system.
                  </li>
                </ul>
              </li>

              <li className="list-item!">
                Storage Guidelines
                <ul className="list-disc! pl-4">
                  <li className="list-item!">
                    All documents must follow a standardized naming convention
                    (e.g., [Date][Project Name][Document Title]).
                  </li>
                  <li className="list-item!">
                    Ensure draft files are cleaned up and only final or
                    officially updated versions are retained.
                  </li>
                </ul>
              </li>

              <li className="list-item!">
                Access Permission Regulations <br />
                Data is secured and granted based on the principle of “right
                person, right task”:
                <ul className="list-disc! pl-4">
                  <li className="list-item!">
                    Public Access (All Members): Regulations, templates, and
                    shared workflows are available for viewing/downloading by
                    all ISCM members.
                  </li>

                  <li className="list-item!">
                    Restricted Access: Sensitive data (finance, HR, unpublished
                    projects, etc.) is only accessible (view/edit) to
                    individuals or functional groups directly involved, with
                    approval from the Institute Director or Functional Heads.
                  </li>
                </ul>
              </li>
            </ol>
          </>
        ) : (
          <>
            <p>
              Hệ thống dữ liệu nội bộ của ISCM được tổ chức khoa học nhằm đảm
              bảo tính bảo mật, tối ưu không gian lưu trữ và dễ dàng tra cứu.
            </p>

            <ol className="list-decimal! pl-4">
              <li className="list-item!">
                Sơ đồ cấu trúc thư mục
                <ul className="list-disc! pl-4">
                  <li className="list-item!">
                    Hệ thống thư mục được phân chia rành mạch theo các nhóm chức
                    năng (O&F, Giáo dục, Nghiên cứu, Engagement, Partnership,
                    Communication) và theo từng Dự án/Sự kiện cụ thể.
                  </li>
                  <li className="list-item!">
                    Yêu cầu: Thành viên phải lưu trữ tài liệu vào đúng thư mục
                    chuyên trách, không để file rời rạc bên ngoài.
                  </li>
                </ul>
              </li>
              <li className="list-item!">
                Hướng dẫn lưu trữ
                <ul className="list-disc! pl-4">
                  <li className="list-item!">
                    Tất cả tài liệu phải tuân thủ quy tắc đặt tên file đồng bộ
                    (Ví dụ: [Ngày][Tên dự án][Tên tài liệu]).
                  </li>
                  <li className="list-item!">
                    Đảm bảo dọn dẹp các tệp nháp (drafts) không cần thiết và chỉ
                    lưu trữ các tệp đã hoàn chỉnh (final) hoặc đang cập nhật
                    chính thức.
                  </li>
                </ul>
              </li>
              <li className="list-item!">
                Quy định phân quyền truy cập <br /> Dữ liệu được bảo mật và phân
                quyền theo nguyên tắc &quot;đúng người, đúng việc&quot;:
                <ul className="list-disc! pl-4">
                  <li className="list-item!">
                    Truy cập chung (Public/All members): Các nội quy, biểu mẫu
                    (templates), quy trình dùng chung mở quyền Xem/Tải về cho
                    toàn bộ thành viên Viện.
                  </li>
                  <li className="list-item!">
                    Truy cập giới hạn (Restricted): Các dữ liệu mang tính bảo
                    mật (tài chính, nhân sự, dự án chưa công bố...) chỉ cấp
                    quyền Xem (View) hoặc Chỉnh sửa (Edit) cho những cá
                    nhân/nhóm chức năng trực tiếp tham gia, dưới sự phê duyệt
                    của Viện trưởng hoặc các Trưởng nhóm (Heads).
                  </li>
                </ul>
              </li>
            </ol>
          </>
        )}
      </div>
    </div>
  );
}

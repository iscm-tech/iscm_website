import { getLocale } from "next-intl/server";
import Link from "next/link";
import React from "react";

export default async function page() {
  const locale = await getLocale();
  return (
    <div className="py-4">
      {locale === "en" ? (
        <h1 className="text-center uppercase">
          OVERVIEW OF EVENT MANAGEMENT & ORGANIZATION <br />
          <span className="text-base">
            (Applicable to the 2026 Event Planning System)
          </span>
        </h1>
      ) : (
        <h1 className="text-center uppercase">
          TỔNG QUAN VỀ QUẢN LÝ VÀ TỔ CHỨC SỰ KIỆN <br />{" "}
          <span className="text-base">
            (Áp dụng cho hệ thống Kế hoạch sự kiện 2026)
          </span>
        </h1>
      )}

      <div className="content-body mt-5">
        <p>
          {locale === "en" ? "Access Link:" : "Link truy cập:"}{" "}
          <Link
            target="blank"
            href={
              "https://docs.google.com/spreadsheets/d/1heZR15BjNubKwrxgswnT401OG6emShMCeqzs6Dslr_k/edit?gid=487548954#gid=487548954"
            }
            className="text-[#cd2027]!"
          >
            {locale === "en" ? "[Click here]" : "[Nhấn vào đây]"}
          </Link>
        </p>

        {locale === "vi" && (
          <>
            <p>
              Thông tin trong này đưa ra định nghĩa, phạm vi và nguyên tắc vận
              hành chung cho toàn bộ sự kiện tại ISCM:
            </p>
            <ul className="list-disc! pl-4">
              <li className="list-item!">
                Quy trình đồng bộ: Mọi sự kiện đều được hệ thống hóa xuyên suốt
                từ khâu Lập kế hoạch (Planning), Thiết kế (Design) đến Truyền
                thông (Communication).
              </li>
              <li className="list-item!">
                Công cụ tập trung: Toàn bộ biểu mẫu (templates) và link đăng ký
                công việc đã được tích hợp sẵn vào quy trình, đảm bảo sự phối
                hợp nhất quán giữa các nhóm chức năng.
              </li>
              <li className="list-item!">
                Trách nhiệm thực thi: Người phụ trách (Host) bắt buộc tuân thủ
                chặt chẽ quy trình này và sử dụng đúng biểu mẫu được cung cấp
                nhằm tối ưu hóa vận hành và đảm bảo chất lượng sự kiện.
              </li>
            </ul>
          </>
        )}

        {locale === "en" && (
          <>
            <p>
              The information in this section defines the general principles,
              scope, and operational guidelines for all ISCM events:
            </p>

            <ul className="list-disc! pl-4">
              <li className="list-item!">
                Standardized Process: All events are systematized end-to-end,
                from Planning, Design, to Communication.
              </li>

              <li className="list-item!">
                Centralized Tools: All templates and task registration links are
                integrated into the workflow, ensuring consistent coordination
                across functional teams.
              </li>

              <li className="list-item!">
                Execution Responsibility: The Host must strictly comply with
                this process and use the provided templates to optimize
                operations and ensure event quality.
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

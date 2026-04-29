import { getLocale } from "next-intl/server";
import Link from "next/link";
import React from "react";

export default async function page() {
  const locale = await getLocale();
  return (
    <div>
      <h1 className="text-center uppercase">
        {locale === "en"
          ? "Meeting Regulations & Minutes Documentation"
          : "Quy chế họp và lưu trữ biên bản"}
      </h1>
      <div className="content-body mt-5">
        <p>
          {locale === "en" ? "Access Link:" : "Link truy cập:"}{" "}
          <Link
            href="https://docs.google.com/spreadsheets/d/1tMc-Iuul27ykrobGg2pjW1lH_b_NigwdGCbNTp4hxos/edit?usp=sharing"
            target="_blank"
            className="text-[#cd2027]!"
          >
            {locale === "en" ? "[Click here]" : "[Nhấn vào đây]"}
          </Link>
        </p>
        {locale === "vi" && (
          <div>
            <h3>I. Hệ thống các cuộc họp nội bộ</h3>
            <p>
              Nhằm đảm bảo luồng thông tin xuyên suốt, hệ thống họp tại ISCM
              được quy định theo 5 cấp độ:
            </p>

            <ul className="list-disc! pl-4 mb-4">
              <li className="list-item! text-justify">
                Họp Toàn Viện (All-hands): Viện trưởng họp cùng toàn bộ thành
                viên ISCM định kỳ 02 tháng/lần.
              </li>
              <li className="list-item! text-justify">
                Họp Ban điều hành (Heads):
                <ul className="list-disc! pl-4 mb-4">
                  <li className="list-item! text-justify">
                    Họp chung: Viện trưởng họp cùng toàn thể các Trưởng nhóm
                    chức năng định kỳ 02 tuần/lần.
                  </li>
                  <li className="list-item! text-justify">
                    Họp riêng (1-on-1): Viện trưởng họp riêng với từng Trưởng
                    nhóm chức năng định kỳ 01 tháng/lần.
                  </li>
                  <li className="list-item! text-justify">
                    Họp Báo cáo tiến độ (Review): Viện trưởng họp cùng Quản
                    lý/Điều phối viên của các Labs, Centers, Dự án và nhóm Gọi
                    vốn (Fundraising) định kỳ 01 tháng/lần.
                  </li>
                  <li className="list-item! text-justify">
                    Họp Triển khai (Teams/Projects): Nhóm chức năng và dự án họp
                    chủ động theo lịch do Head/Lead/ Manager/Coordinator sắp
                    xếp.
                  </li>
                  <li className="list-item! text-justify">
                    Họp Định hướng & Khai vấn nhân sự trẻ (Youth Mentoring):
                    Viện trưởng họp riêng với lực lượng Thực tập sinh (Interns),
                    Cộng tác viên và Chuyên viên trẻ (dưới 30 tuổi) định kỳ 03
                    tháng/lần. (Mục đích: Lắng nghe, truyền cảm hứng, gỡ rối và
                    phát triển ý tưởng mới).
                  </li>
                  <li className="list-item! text-justify">
                    Họp Đột xuất (Ad-hoc): Triệu tập theo yêu cầu của Viện
                    trưởng để xử lý vấn đề cấp bách.
                  </li>
                </ul>
              </li>
            </ul>

            <h3>II. Quy định lập và Lưu trữ biên bản họp (Meeting Minutes)</h3>
            <p>
              Yêu cầu bắt buộc: Tất cả các cuộc họp trên đều phải ghi nhận bằng
              Biên bản họp theo biểu mẫu thống nhất, lưu trữ đúng tên/cấu trúc
              ngay sau cuộc họp theo quy tắc phân luồng sau:
            </p>
            <ol className="list-decimal! pl-4 mb-4">
              <li className="list-item!">
                Đối với Họp Dự án / Sự kiện
                <ul className="list-disc! pl-4">
                  <li className="list-item!">
                    Lưu trữ: Lưu trực tiếp tại thư mục (folder) của dự án/sự
                    kiện đó.
                  </li>
                  <li className="list-item!">
                    Trách nhiệm: Trưởng ban tổ chức (Host) hoặc Điều phối viên
                    (Coordinator).
                  </li>
                </ul>
              </li>
              <li className="list-item!">
                Đối với Họp Vận hành & Chuyên môn chung
                <ul className="list-disc! pl-4">
                  <li className="list-item!">
                    Lưu trữ: Lưu tập trung tại hệ thống chung của ISCM theo các
                    nhóm thư mục đã phân loại:
                    <p>
                      - Họp toàn Viện (All-hands).
                      <br />
                      - Họp cấp Quản lý (Heads). <br />
                      - Họp Đối tác (Stakeholders). <br />
                      - Họp nội bộ Nhóm chức năng (Teams). <br />- Họp chuyên đề
                      dài hạn (ASIIN, Phát triển chương trình đào tạo...).
                    </p>
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        )}
        {locale === "en" && (
          <div>
            <h3>I. Internal Meeting System</h3>

            <p>
              To ensure a continuous flow of information, ISCM’s meeting system
              is structured into five levels:
            </p>

            <ul className="list-disc! pl-4 mb-4">
              <li className="list-item! text-justify">
                All-hands Meeting: The Institute Director meets all ISCM members
                every two months.
              </li>

              <li className="list-item! text-justify">
                Heads Meetings:
                <ul className="list-disc! pl-4 mb-4">
                  <li className="list-item! text-justify">
                    General Meeting: The Institute Director meets all Functional
                    Heads every two weeks.
                  </li>
                  <li className="list-item! text-justify">
                    1-on-1 Meetings: The Institute Director meets individually
                    with each Functional Head every month.
                  </li>
                  <li className="list-item! text-justify">
                    Progress Review Meetings: The Institute Director meets with
                    Managers/Coordinators of Labs, Centers, Projects, and
                    Fundraising teams every month.
                  </li>
                  <li className="list-item! text-justify">
                    Project/Team Execution Meetings: Functional groups and
                    project teams meet as needed, scheduled by
                    Heads/Leads/Managers/Coordinators.
                  </li>
                  <li className="list-item! text-justify">
                    Youth Mentoring & Orientation Meetings: The Institute
                    Director meets Interns, Contributors, and young
                    professionals (under 30) every three months to listen,
                    inspire, and support idea development.
                  </li>
                  <li className="list-item! text-justify">
                    Ad-hoc Meetings: Convened at the request of the Institute
                    Director to address urgent issues.
                  </li>
                </ul>
              </li>
            </ul>

            <h3>II. Meeting Minutes Documentation & Archiving Regulations</h3>

            <p>
              Mandatory requirement: All meetings listed above must be
              documented using a standardized Meeting Minutes template and
              stored immediately after each meeting according to the following
              classification rules:
            </p>

            <ol className="list-decimal! pl-4 mb-4">
              <li className="list-item!">
                Project / Event Meetings
                <ul className="list-disc! pl-4">
                  <li className="list-item!">
                    Storage: Saved directly in the corresponding project/event
                    folder.
                  </li>
                  <li className="list-item!">
                    Responsibility: Event Host or Coordinator.
                  </li>
                </ul>
              </li>

              <li className="list-item!">
                General Operations & Functional Meetings
                <ul className="list-disc! pl-4">
                  <li className="list-item!">
                    Storage: Centralized in ISCM’s shared system, categorized
                    into structured folders:
                    <p>
                      - All-hands Meetings. <br />
                      - Heads Meetings. <br />
                      - Stakeholder Meetings. <br />
                      - Functional Team Meetings. <br />- Long-term Specialized
                      Meetings (e.g., ASIIN, Curriculum Development, etc.).
                    </p>
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}

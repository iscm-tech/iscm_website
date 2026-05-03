import { LinkIcon, SquareArrowOutUpRight } from "lucide-react";
import { getLocale } from "next-intl/server";
import Link from "next/link";
import React from "react";

export default async function page() {
  const locale = await getLocale();

  return (
    <div>
      <h1 className="text-center uppercase">
        {locale === "en"
          ? "Welcome to ISCM - Onboarding Guide"
          : "hướng dẫn hội nhập dành cho thành viên mới"}
      </h1>
      <div className="content-body mt-5">
        {locale === "vi" ? (
          <p>
            Để nhanh chóng nắm bắt công việc và hòa nhập cùng tập thể, các thành
            viên mới vui lòng đọc kỹ và thực hiện theo 4 mục dưới đây:
          </p>
        ) : (
          <p>
            To quickly grasp the workflow and integrate with the team, new
            members are requested to read carefully and follow the 4 sections
            below:
          </p>
        )}

        <h2 className="text-[#cd2027]! flex items-center gap-2">
          {locale === "vi"
            ? "Cổng thông tin & Mạng nội bộ"
            : "ISCM Website & Intranet"}
        </h2>

        <ul className="list-disc! pl-4">
          {locale === "vi" ? (
            <>
              <li className="list-item!">
                Bước 1 - Tìm hiểu chung: Truy cập website chính thức của ISCM để
                nắm tổng quan về tầm nhìn, hoạt động và các dự án của Viện.
              </li>
              <li className="list-item!">
                Bước 2 - Gia nhập Mạng nội bộ (ISCMer): Truy cập mục ISCMer để
                điền form yêu cầu cấp quyền vào hệ thống làm việc nội bộ. <br />
                Quy định tài khoản: Giảng viên/Nhân viên Full-time và Sinh viên
                UEH bắt buộc dùng email @ueh.edu.vn. Các đối tượng khác đăng ký
                bằng 01 email cá nhân duy nhất.
              </li>
            </>
          ) : (
            <>
              <li className="list-item!">
                Step 1 – General Overview: Access the official ISCM website to
                understand the overall vision, activities, and projects of the
                Institute.
              </li>
              <li className="list-item!">
                Step 2 – Join the Internal Network (ISCMer): Access the ISCMer
                section to fill out the form requesting access to the internal
                work system.
                <br />
                Account Regulations: Full-time Lecturers/Staff and UEH students
                are required to use an @ueh.edu.vn email. Other members must
                register with a single, unique personal email.
              </li>
            </>
          )}
        </ul>

        {locale === "vi" ? (
          <p>
            <b>Lưu ý</b>: Hệ thống chỉ cấp quyền truy cập cho những nhân sự đã
            có tên chính thức trong danh sách nhân sự nội bộ (Nhóm 2).
          </p>
        ) : (
          <p>
            <b>Note</b>: The system only grants access to individuals whose
            names are officially on the Core Member list (Group 2).
          </p>
        )}

        <h2 className="text-[#cd2027]!">
          {locale === "vi"
            ? "Hệ thống thông tin & Quản lý công việc"
            : "ISCM Worklist 2026"}
        </h2>

        <p>
          {locale === "vi" ? (
            <>
              Để thuận tiện cho quá trình làm việc và tra cứu, toàn bộ hệ thống
              thông tin của ISCM được vận hành đồng bộ qua 2 nền tảng:
            </>
          ) : (
            <>
              To facilitate work and information effectively, the entire ISCM
              information system operates synchronously across two platforms:
            </>
          )}
        </p>

        {locale === "vi" ? (
          <ul className="list-disc! pl-4 mb-4">
            <li className="list-item!">
              <Link
                className="text-[#cd2027]! font-bold inline-flex items-center gap-2"
                href="https://iscm.ueh.edu.vn/iscmer"
                target="_blank"
              >
                Mạng nội bộ chính thức (ISCMer - Internal Website)
                <LinkIcon size={16} />
              </Link>
              : ISCMer là nơi hiển thị toàn bộ thông tin chung nhất của UEH và
              ISCM. Bất cứ khi nào bạn cần tra cứu các hướng dẫn, quy chế, quy
              định cho mọi hoạt động/chức năng của Viện, hoặc các cập nhật mới
              nhất, hãy truy cập vào hệ thống này.
            </li>
            <li className="list-item!">
              <Link
                className="text-[#cd2027]! font-bold inline-flex items-center gap-2"
                href="https://docs.google.com/spreadsheets/d/1iITXJ8_6N28KJMnoTOaPg7GvQFKqhSwp/edit?gid=439586388#gid=439586388"
                target="_blank"
              >
                Kho dữ liệu nền tảng (ISCM Worklist 2026 - Back-end){" "}
                <LinkIcon size={16} />
              </Link>
              : Đây là tệp cơ sở dữ liệu gốc (Master file) của Viện. Worklist
              đóng vai trò lưu trữ toàn bộ khung cấu trúc công việc và các quy
              định nêu trên. Tệp này đóng vai trò là hệ thống dự phòng (backup)
              vững chắc, đảm bảo mọi hoạt động tra cứu và vận hành của Viện vẫn
              diễn ra thông suốt trong trường hợp website ISCMer cần bảo trì
              hoặc gặp sự cố.
            </li>
          </ul>
        ) : (
          <ul className="list-disc! pl-4 mb-4">
            <li className="list-item!">
              <Link
                className="text-[#cd2027]! font-bold inline-flex items-center gap-2"
                href="https://iscm.ueh.edu.vn/iscmer"
                target="_blank"
              >
                Official Intranet (ISCMer - Internal Website)
                <LinkIcon size={16} />
              </Link>
              : This is the hub for general information from both UEH and ISCM.
              Access this system whenever you need to look up guidelines,
              regulations, policies, or the latest updates.
            </li>
            <li className="list-item!">
              <Link
                className="text-[#cd2027]! font-bold inline-flex items-center gap-2"
                href="https://docs.google.com/spreadsheets/d/1iITXJ8_6N28KJMnoTOaPg7GvQFKqhSwp/edit?gid=1950620498#gid=1950620498"
                target="_blank"
              >
                Core Database (ISCM Worklist 2026 - Back-end){" "}
                <LinkIcon size={16} />
              </Link>
              : This serves as the Institute&apos;s Master file. It stores the
              entire work structure and the regulations mentioned above. This
              file acts as a robust backup system, ensuring that operations and
              lookups continue smoothly even if the ISCMer website undergoes
              maintenance or encounters issues.
            </li>
          </ul>
        )}
        <p>
          {locale === "vi" ? (
            <>
              Bên cạnh đó, yêu cầu đọc kỹ các email được gửi từ UEH, UEH family
              để cập nhật các thông tin, quy định mới của UEH
            </>
          ) : (
            <>
              Additional Note: Please read all emails sent from UEH and the UEH
              &quot;family&quot; carefully to stay updated on new information
              and regulations.
            </>
          )}
        </p>

        <h2 className="text-[#cd2027]!">
          {locale === "vi" ? "Hệ thống phân loại nhân sự" : "ISCM Members"}
        </h2>

        <p>
          {locale === "vi" ? (
            <>
              Tùy vào tính chất công việc, nhân sự tại ISCM được phân loại thành
              4 nhóm chính:
            </>
          ) : (
            <>
              Depending on the nature of the work, ISCM personnel are classified
              into 4 main groups:
            </>
          )}
        </p>

        {locale === "vi" ? (
          <ul className="list-decimal! pl-4 mb-4">
            <li className="list-item!">
              Nhóm 1. Ban Cố vấn (Advisors): Các chuyên gia cấp cao hợp tác với
              ISCM thông qua Biên bản ghi nhớ (MOU).
            </li>
            <li className="list-item!">
              Nhóm 2. Nhân sự Nội bộ (Core Members):
              <ul className="list-disc! pl-4">
                <li className="list-item!">
                  Toàn thời gian (Full-time): Giảng viên, chuyên viên, CTV (Ký
                  hợp đồng với UEH).
                </li>
                <li className="list-item!">
                  Bán thời gian (Part-time): Giảng viên đồng cơ hữu, Giáo sư
                  thỉnh giảng (Ký hợp đồng với UEH).
                </li>
                <li className="list-item!">
                  Thực tập sinh (Interns): Hỗ trợ Admin hoặc làm dự án (Ký thỏa
                  thuận thực tập với ISCM).
                </li>
              </ul>
            </li>
            <li className="list-item!">
              Nhóm 3. Giảng viên Thỉnh giảng (Visiting Lecturers): Tham gia
              giảng dạy theo từng môn học được đặt hàng.
            </li>
            <li className="list-item!">
              Nhóm 4. Chuyên gia Glocal (Glocal Experts): Mạng lưới chuyên gia
              đối tác. Khi trúng thầu dự án chung, chuyên gia sẽ thỏa thuận hợp
              đồng chi tiết với ISCM về khối lượng công việc và thù lao.
            </li>
          </ul>
        ) : (
          <ul className="list-decimal! pl-4 mb-4">
            <li className="list-item!">
              Group 1. Advisors: Senior experts collaborating with ISCM through
              a Memorandum of Understanding (MOU).
            </li>
            <li className="list-item!">
              Group 2. Core Members:
              <ul className="list-disc! pl-4">
                <li className="list-item!">
                  Full-time: Lecturers, specialists and project officers
                  (Contracted with UEH).
                </li>
                <li className="list-item!">
                  Part-time: Joint-appointment lecturers and visiting professors
                  (Contracted with UEH).
                </li>
                <li className="list-item!">
                  Interns: Supporting administration or project tasks
                  (Internship agreement signed with ISCM).
                </li>
              </ul>
            </li>
            <li className="list-item!">
              Group 3. Visiting Lecturers: Participate in teaching specific
              commissioned courses.
            </li>
            <li className="list-item!">
              Group 4. Glocal Experts: A network of partner experts. Upon
              winning joint project bids, experts will negotiate detailed
              contracts with ISCM regarding workload and remuneration.
            </li>
          </ul>
        )}

        <h2 className="text-[#cd2027]!">
          {locale === "vi"
            ? "Các kênh liên lạc & Trao đổi"
            : "Communication Channels"}
        </h2>

        <p>
          {locale === "vi" ? (
            <>
              Thành viên mới sẽ được Viện trưởng, Trưởng nhóm thêm vào các Nhóm
              trao đổi tương ứng. Xin lưu ý mục đích sử dụng của từng kênh:
            </>
          ) : (
            <>
              New members will be added to the corresponding discussion groups
              by the Director or Team Leaders. Please note the specific purpose
              of each channel:
            </>
          )}
        </p>
        {locale === "vi" ? (
          <ul className="list-disc! pl-4 mb-4">
            <li className="list-item!">
              Zalo &quot;ISCM Member&quot;: Kênh thông báo công việc chính thức
              dành cho toàn bộ nhân sự làm việc Toàn thời gian & Bán thời gian
              (Nhóm 2).
            </li>
            <li className="list-item!">
              Zalo &quot;ISCM Tám&quot;: Kênh giao tiếp thân mật, gắn kết dành
              riêng cho các nhân sự người Việt Nam làm việc Toàn thời gian (Nhóm
              2)
            </li>
            <li className="list-item!">
              Facebook Group &quot;Sinh viên ISCM&quot;: Cộng đồng mở kết nối
              toàn bộ nhân sự Viện, sinh viên đang học và Cựu sinh viên
              (Alumni).
            </li>
          </ul>
        ) : (
          <ul className="list-disc! pl-4 mb-4">
            <li className="list-item!">
              Zalo &quot;ISCM Member&quot;: The official work announcement
              channel for all Full-time & Part-time personnel (Group 2).
            </li>
            <li className="list-item!">
              Zalo &quot;ISCM Tám&quot;: An informal communication and
              networking channel exclusively for Vietnamese Full-time personnel
              (Group 2).
            </li>
            <li className="list-item!">
              Facebook Group &quot;Sinh viên ISCM&quot;: An open community
              connecting all Institute staff, current students, and Alumni.
            </li>
          </ul>
        )}
        <p>
          {locale === "vi" ? (
            <>
              Nhóm làm việc chuyên môn (nhóm chức năng, Group theo Dự án/Sự
              kiện): Kênh thao tác công việc hàng ngày của từng team nhỏ. Lưu ý:
              Nhóm sẽ tự động giải tán sau khi dự án/sự kiện nghiệm thu kết
              thúc.
            </>
          ) : (
            <>
              Professional Work Groups (Functional groups, Project/Event-based
              groups): Channels for daily operations within small teams. Note:
              These groups will automatically disband after the project/event
              has been finalized and closed.
            </>
          )}
        </p>
      </div>
    </div>
  );
}

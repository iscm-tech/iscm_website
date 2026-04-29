import { Anchor } from "antd";
import { getLocale } from "next-intl/server";
import Link from "next/link";
import React from "react";

export default async function page() {
  const locale = await getLocale();

  return (
    <div className="py-4 container">
      <h1 className="text-center uppercase">
        {locale === "en"
          ? "Academic Training Timeline"
          : "Khung thời gian đào tạo"}
      </h1>

      <div className="row mt-5">
        {locale === "vi" && (
          <div className="content-body col-9">
            <p>
              Link truy cập:{" "}
              <Link
                href="https://daotao.ueh.edu.vn/category/tin-tuc/ke-hoach-dao-tao"
                target="_blank"
                className="text-[#cd2027]!"
              >
                [Nhấn vào đây]
              </Link>
            </p>

            <p className="text-justify">
              Khung thời gian đào tạo là kênh thông tin chính thức của Đại học
              Kinh tế Thành phố Hồ Chí Minh (UEH), được sử dụng để cập nhật các
              thông báo, lịch trình và kế hoạch học tập dành cho sinh viên và
              học viên trong từng giai đoạn đào tạo.
              <br />
              Hệ thống đóng vai trò quan trọng trong việc đảm bảo người học nắm
              bắt kịp thời các mốc thời gian và kế hoạch học tập theo quy định
              của Nhà trường.
            </p>

            <h4 id="content">Nội dung cung cấp</h4>
            <p>
              Cung cấp các câu hỏi thường gặp (FAQs) và hướng dẫn chi tiết liên
              quan đến:
            </p>
            <ul className="list-disc! pl-4 mb-4">
              <li className="list-item!">
                Kế hoạch đào tạo theo năm học và học kỳ
              </li>
              <li className="list-item!">Lịch đăng ký học phần</li>
              <li className="list-item!">Lịch học và lịch thi</li>
              <li className="list-item!">
                Các mốc thời gian học vụ quan trọng
              </li>
              <li className="list-item!">
                Thông báo điều chỉnh kế hoạch đào tạo (nếu có)
              </li>
            </ul>
            <p>
              Thông tin được cập nhật định kỳ và theo từng đợt, đảm bảo tính
              chính xác và đồng bộ với hệ thống quản lý đào tạo của UEH.
            </p>
            <h4 id="target_users">Đối tượng sử dụng</h4>
            <p>Hệ thống phục vụ cho:</p>
            <ul className="list-disc! pl-4 mb-4">
              <li className="list-item!">Sinh viên hệ đại học</li>
              <li className="list-item!">Học viên cao học</li>
              <li className="list-item!">Nghiên cứu sinh</li>
            </ul>

            <h4 id="goal">Giá trị sử dụng</h4>
            <p>Việc theo dõi Khung thời gian đào tạo giúp người học:</p>
            <ul className="list-disc! pl-4 mb-4">
              <li className="list-item!">
                Chủ động xây dựng kế hoạch học tập cá nhân
              </li>
              <li className="list-item!">
                Đảm bảo tuân thủ các mốc thời gian quan trọng
              </li>
              <li className="list-item!">
                Hạn chế sai sót trong đăng ký học phần và tham gia các hoạt động
                học vụ
              </li>
            </ul>
            <p>
              Khung thời gian đào tạo là nguồn thông tin học vụ quan trọng, hỗ
              trợ người học trong việc quản lý tiến độ học tập và đảm bảo quá
              trình đào tạo diễn ra đúng kế hoạch, hiệu quả và đồng bộ với quy
              định của UEH.
            </p>
          </div>
        )}
        {locale === "en" && (
          <div className="content-body col-9">
            <p>
              {locale === "en" ? "Access Link:" : "Link truy cập:"}{" "}
              <Link
                href="https://daotao.ueh.edu.vn/category/tin-tuc/ke-hoach-dao-tao"
                target="_blank"
                className="text-[#cd2027]!"
              >
                {locale === "en" ? "[Click here]" : "[Nhấn vào đây]"}
              </Link>
            </p>

            <p className="text-justify">
              The Academic Calendar is the official information channel of the
              University of Economics Ho Chi Minh City (UEH), used to provide
              updates on notices, schedules, and academic plans for students and
              trainees throughout each training phase.
              <br />
              The system plays a vital role in ensuring that learners promptly
              grasp key milestones and academic plans in accordance with
              university regulations.
            </p>

            <h4 id="content">Provided Content</h4>
            <p>The Academic Calendar includes essential information such as:</p>
            <ul className="list-disc! pl-4 mb-4">
              <li className="list-item!">Annual and Semester Academic Plans</li>
              <li className="list-item!">Course Registration Schedules</li>
              <li className="list-item!">Class and Examination Schedules</li>
              <li className="list-item!">Key Academic Milestones </li>
              <li className="list-item!">
                Notices on Adjustments to Training Plans (if any)
              </li>
            </ul>
            <p>
              Information is updated periodically and by session, ensuring
              accuracy and synchronization with UEH&apos;s training management
              system.
            </p>
            <h4 id="target_users">Target Users</h4>
            <p>The system is designed for:</p>
            <ul className="list-disc! pl-4 mb-4">
              <li className="list-item!">Undergraduate students</li>
              <li className="list-item!">Graduate students (Master’s)</li>
              <li className="list-item!">PhD candidates</li>
            </ul>

            <h4 id="goal">Key Benefits</h4>
            <p>Monitoring the Academic Calendar enables learners to:</p>
            <ul className="list-disc! pl-4 mb-4">
              <li className="list-item!">
                Proactively Build Personal Study Plans: Aligning personal goals
                with the university&apos;s schedule.
              </li>
              <li className="list-item!">
                Ensure Compliance: Staying on track with critical deadlines and
                academic requirements.
              </li>
              <li className="list-item!">
                Minimize Administrative Errors: Avoiding mistakes during course
                registration and participation in academic activities.
              </li>
            </ul>
            <p>
              The Academic Calendar is a crucial source of academic information,
              supporting learners in managing their study progress and ensuring
              that the training process remains on schedule, efficient, and
              consistent with UEH regulations.
            </p>
          </div>
        )}
        <div className="col-3">
          <div className="sticky top-15">
            <Anchor
              targetOffset={150}
              items={[
                {
                  key: "#content",
                  href: "#content",
                  title:
                    locale === "vi"
                      ? "Nội dung cung cấp"
                      : "Provided Information",
                },
                {
                  key: "#target_users",
                  href: "#target_users",
                  title: locale === "en" ? "Target Users" : "Đối tượng sử dụng",
                },
                {
                  key: "#goal",
                  href: "#goal",
                  title: locale === "en" ? "Key Benefits" : "Giá trị sử dụng",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

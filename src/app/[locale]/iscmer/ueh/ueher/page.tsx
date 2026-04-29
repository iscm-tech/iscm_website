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
          ? "UEHer – Management and Connectivity Platform for the UEH Community"
          : "UEHer – Nền tảng quản trị và kết nối dành cho cộng đồng UEH"}
      </h1>

      <div className="row mt-5">
        <div className="content-body col-9">
          <p>
            {locale === "en" ? "Access Link:" : "Link truy cập:"}{" "}
            <Link
              href="https://ueh.edu.vn/ueher"
              target="_blank"
              className="text-[#cd2027]!"
            >
              {locale === "en" ? "[Click here]" : "[Nhấn vào đây]"}
            </Link>
          </p>
          <p className="text-justify">
            {locale === "en" ? (
              <>
                UEHer is an integrated digital platform of the University of
                Economics Ho Chi Minh City (UEH), designed to support staff,
                faculty, and learners in information management, operational
                workflows, and connecting the UEH ecosystem in a synchronized
                and efficient manner.
                <br /> Through UEHer, users can quickly access systems, data,
                and utilities tailored for learning, teaching, research, and
                management activities.
              </>
            ) : (
              <>
                UEHer là nền tảng số tích hợp của Đại học Kinh tế Thành phố Hồ
                Chí Minh (UEH), được xây dựng nhằm hỗ trợ cán bộ, giảng viên và
                người học trong việc quản trị thông tin, vận hành công việc và
                kết nối hệ sinh thái UEH một cách đồng bộ, hiệu quả.
                <br />
                Thông qua UEHer, người dùng có thể truy cập nhanh chóng các hệ
                thống, dữ liệu và tiện ích phục vụ cho hoạt động học tập, giảng
                dạy, nghiên cứu và quản lý.
              </>
            )}
          </p>
          <h2>
            {locale === "en"
              ? "Functional Structure of UEHer"
              : "Cấu trúc chức năng của UEHer"}
          </h2>
          <p>
            {locale === "en"
              ? "The UEHer platform is structured into the following key functional groups:"
              : "Nền tảng UEHer được thiết kế theo các nhóm chức năng chính như sau:"}
          </p>
          <h4 id="personal_information">
            1. {locale === "vi" ? "Thông tin cá nhân" : "Personal Information"}
          </h4>
          <p>
            {locale === "en" ? (
              <>
                Provides tools for managing personal accounts and information,
                including:
              </>
            ) : (
              <>
                Cung cấp các thông tin và công cụ quản lý tài khoản cá nhân, bao
                gồm:
              </>
            )}
          </p>
          <ul className="list-disc! pl-4 mb-4">
            <li className="list-item!">
              {locale === "en" ? "Personal Profile" : "Thông tin cá nhân"}
            </li>
            <li className="list-item!">Email UEH</li>
            <li className="list-item!">
              {locale === "en" ? (
                <>
                  Password Management / Reset This ensures users maintain secure
                  and continuous access to the system.
                </>
              ) : (
                <>Cấp lại / quản lý mật khẩu</>
              )}
            </li>
          </ul>
          <p>
            {locale === "vi" ? (
              <>
                Nhóm chức năng này giúp người dùng đảm bảo việc truy cập và sử
                dụng hệ thống một cách liên tục và an toàn.
              </>
            ) : (
              <></>
            )}
          </p>
          <h4 id="ueh_information">
            2. {locale === "vi" ? "Thông tin UEH" : "UEH Information"}
          </h4>
          <p>
            {locale === "en" ? (
              <>
                A centralized hub for internal information and official
                administrative documents:
              </>
            ) : (
              <>
                Tổng hợp các thông tin nội bộ và văn bản quản trị chính thức của
                UEH, bao gồm:
              </>
            )}
          </p>
          <ul className="list-disc! pl-4 mb-4">
            {locale === "vi" && (
              <>
                <li className="list-item!">Quy định, quy chế</li>
                <li className="list-item!">Tổ chức nhân sự</li>
                <li className="list-item!">Đào tạo</li>
                <li className="list-item!">Thi đua – khen thưởng</li>
                <li className="list-item!">Chế độ, chính sách</li>
                <li className="list-item!">Tuyển dụng</li>
                <li className="list-item!">
                  Nghiên cứu khoa học & hợp tác quốc tế
                </li>
                <li className="list-item!">Tin tức và sự kiện</li>
              </>
            )}
            {locale === "en" && (
              <>
                <li className="list-item!">Regulations & Policies</li>
                <li className="list-item!">Personnel & Organization</li>
                <li className="list-item!">Training & Education</li>
                <li className="list-item!">Emulation & Commendation</li>
                <li className="list-item!">Benefits & Policies</li>
                <li className="list-item!">Recruitment</li>
                <li className="list-item!">
                  Scientific Research & International Cooperation
                </li>
                <li className="list-item!">News & Events</li>
              </>
            )}
          </ul>
          <p>
            {locale === "en" ? (
              <>
                This serves as the official source for looking up and updating
                activities across the university.
              </>
            ) : (
              <>
                Đây là nguồn thông tin chính thống phục vụ tra cứu và cập nhật
                các hoạt động trong toàn trường.
              </>
            )}
          </p>
          <h4 id="work_schedule">
            3. {locale === "en" ? "Schedule Management" : "Lịch làm việc"}
          </h4>
          <p>
            {locale === "en" ? (
              <>Supports the management and synchronization of schedules:</>
            ) : (
              <>Hỗ trợ quản lý và đồng bộ lịch làm việc, bao gồm:</>
            )}
          </p>
          <ul className="list-disc! pl-4 mb-4">
            {locale === "vi" && (
              <>
                <li className="list-item!">Lịch UEH</li>
                <li className="list-item!">Lịch cá nhân</li>
                <li className="list-item!">Đăng ký lịch tuần</li>
                <li className="list-item!">Đăng ký nghỉ phép</li>
              </>
            )}
            {locale === "en" && (
              <>
                <li className="list-item!">UEH Calendar</li>
                <li className="list-item!">Personal Calendar</li>
                <li className="list-item!">Weekly Schedule Registration</li>
                <li className="list-item!">Leave of Absence Requests</li>
              </>
            )}
          </ul>
          <p>
            {locale === "vi" ? (
              <>
                Chức năng này giúp nâng cao hiệu quả quản lý thời gian và phối
                hợp công việc giữa các cá nhân và đơn vị.
              </>
            ) : (
              <>
                This function enhances time management and coordination between
                individuals and departments.
              </>
            )}
          </p>
          <h4 id="work_management">
            4. {locale === "vi" ? "Quản lý công việc" : "Task Management"}
          </h4>
          <p>
            {locale === "vi"
              ? "Tích hợp các hệ thống phục vụ vận hành và quản trị nội bộ, bao gồm:"
              : "Integrates systems for internal operations and administration:"}
          </p>
          <ul className="list-disc! pl-4 mb-4">
            {locale === "vi" && (
              <>
                <li className="list-item!">
                  E-Office (đăng ký xe, các yêu cầu hành chính)
                </li>
                <li className="list-item!">
                  SmartOffice (xin ý kiến, trình ký văn bản)
                </li>
                <li className="list-item!">Quản lý công việc</li>
                <li className="list-item!">Đánh giá công việc</li>
                <li className="list-item!">Quản lý tài sản</li>
                <li className="list-item!">Bộ tiêu chuẩn đánh giá</li>
                <li className="list-item!">AI Lab</li>
                <li className="list-item!">Guest WiFi</li>
              </>
            )}
            {locale === "en" && (
              <>
                <li className="list-item!">
                  E-Office (Vehicle booking, administrative requests)
                </li>
                <li className="list-item!">
                  SmartOffice (Consultation requests, document signing)
                </li>
                <li className="list-item!">Task Management & Evaluation</li>
                <li className="list-item!">Asset Management</li>
                <li className="list-item!">Standard Evaluation Criteria</li>
                <li className="list-item!">AI Lab</li>
                <li className="list-item!">Guest WiFi</li>
              </>
            )}
          </ul>
          <p>
            {locale === "vi" ? (
              <>
                Nhóm chức năng này đóng vai trò cốt lõi trong việc số hóa quy
                trình làm việc và nâng cao hiệu suất vận hành.
              </>
            ) : (
              <>
                This group is the core of digitizing workflows and improving
                operational performance.
              </>
            )}
          </p>
          <h4 id="teaching&scientific_research">
            5.{" "}
            {locale === "vi"
              ? "Giảng dạy và nghiên cứu khoa học"
              : "Teaching and Scientific Research"}
          </h4>
          <p>
            {locale === "en" ? (
              <>Comprehensive support for academic and research activities:</>
            ) : (
              <>Hỗ trợ toàn diện hoạt động học thuật và nghiên cứu, bao gồm:</>
            )}
          </p>
          <ul className="list-disc! pl-4 mb-4">
            {locale === "vi" && (
              <>
                <li className="list-item!">Đăng ký giảng dạy</li>
                <li className="list-item!">Quản lý giảng dạy</li>
                <li className="list-item!">Quản lý nghiên cứu khoa học</li>
                <li className="list-item!">Cố vấn học tập</li>
                <li className="list-item!">Quản lý thực tập tốt nghiệp</li>
                <li className="list-item!">Quản lý luận văn Thạc sĩ</li>
                <li className="list-item!">Quản lý luận án Tiến sĩ</li>
              </>
            )}
            {locale === "en" && (
              <>
                <li className="list-item!">
                  Teaching Registration & Management
                </li>
                <li className="list-item!">Scientific Research Management</li>
                <li className="list-item!">Academic Advising</li>
                <li className="list-item!">Internship Management</li>
                <li className="list-item!">
                  Master’s Thesis & Doctoral Dissertation Management
                </li>
              </>
            )}
          </ul>
          <p>
            {locale === "en" ? (
              <>
                This is a vital functional group for faculty and academic units
                in professional management.
              </>
            ) : (
              <>
                Đây là nhóm chức năng quan trọng đối với giảng viên và các đơn
                vị học thuật trong việc quản lý chuyên môn.
              </>
            )}
          </p>
          <h4 id="utilities">
            6. {locale === "en" ? "Utilities" : "Tiện ích"}
          </h4>
          <p>
            {locale === "en" ? (
              <>
                Provides tools and services to assist the working and learning
                process:
              </>
            ) : (
              <>
                Cung cấp các công cụ và dịch vụ hỗ trợ trong quá trình làm việc
                và học tập, bao gồm:
              </>
            )}
          </p>
          <ul className="list-disc! pl-4 mb-4">
            {locale === "vi" && (
              <>
                <li className="list-item!">Danh bạ UEH</li>
                <li className="list-item!">UEH Smartlock</li>
                <li className="list-item!">Microsoft Teams</li>
                <li className="list-item!">Thư viện</li>
                <li className="list-item!">Công đoàn</li>
                <li className="list-item!">Quản lý tài chính</li>
                <li className="list-item!">Quản trị hệ thống</li>
                <li className="list-item!">Ký số</li>
              </>
            )}
            {locale === "en" && (
              <>
                <li className="list-item!">UEH Directory</li>
                <li className="list-item!">UEH Smartlock</li>
                <li className="list-item!">Microsoft Teams</li>
                <li className="list-item!">Library</li>
                <li className="list-item!">Trade Union Resources</li>
                <li className="list-item!">Financial</li>
                <li className="list-item!">System Administration</li>
                <li className="list-item!">Digital Signature</li>
              </>
            )}
          </ul>
          <p className="text-justify">
            {locale === "vi" ? (
              <>
                {" "}
                Nhóm tiện ích giúp nâng cao trải nghiệm người dùng và hỗ trợ các
                nhu cầu đa dạng trong hệ sinh thái UEH.
                <br />
                Với hệ thống chức năng toàn diện và tích hợp, UEHer không chỉ là
                công cụ quản trị mà còn là nền tảng kết nối, góp phần nâng cao
                hiệu quả hoạt động và thúc đẩy phát triển bền vững trong toàn bộ
                hệ sinh thái UEH.
              </>
            ) : (
              <>
                These utilities enhance the user experience and support diverse
                needs within the UEH ecosystem. <br />
                With its comprehensive and integrated functional system, UEHer
                is not only a management tool but also a connectivity platform,
                contributing to operational efficiency and sustainable
                development across the entire UEH ecosystem.
              </>
            )}
          </p>
        </div>
        <div className="col-3">
          <div className="sticky top-15">
            <Anchor
              targetOffset={150}
              items={[
                {
                  key: "#personal_information",
                  href: "#personal_information",
                  title:
                    locale === "vi"
                      ? "1. Thông tin cá nhân"
                      : "1. Personal Information",
                },
                {
                  key: "#ueh_information",
                  href: "#ueh_information",
                  title:
                    locale === "vi" ? "2. Thông tin UEH" : "2. UEH Information",
                },
                {
                  key: "#work_schedule",
                  href: "#work_schedule",
                  title:
                    locale === "vi"
                      ? "3. Lịch làm việc"
                      : "3. Schedule Management",
                },
                {
                  key: "#work_management",
                  href: "#work_management",
                  title:
                    locale === "vi"
                      ? "4. Quản lý công việc"
                      : "4. Task Management",
                },
                {
                  key: "#teaching&scientific_research",
                  href: "#teaching&scientific_research",
                  title:
                    locale === "vi"
                      ? "5. Giảng dạy và nghiên cứu khoa học"
                      : "5. Teaching and Scientific Research",
                },
                {
                  key: "#utilities",
                  href: "#utilities",
                  title: locale === "vi" ? "6. Tiện ích" : "6. Utilities",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

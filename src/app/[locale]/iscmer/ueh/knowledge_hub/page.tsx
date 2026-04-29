import { Anchor } from "antd";
import { getLocale } from "next-intl/server";
import Link from "next/link";
import React from "react";

export default async function page() {
  const locale = await getLocale();

  return (
    <div className="py-4 container">
      <h1 className="text-center uppercase">
        {locale === "en" ? "UEH Knowledge Hub" : "Kho tri thức UEH"}
      </h1>

      <div className="row mt-5">
        <div className="content-body col-9">
          <p>
            {locale === "en" ? "Access Link:" : "Link truy cập:"}{" "}
            <Link
              href="https://hotro.ueh.edu.vn"
              target="_blank"
              className="text-[#cd2027]!"
            >
              {locale === "en" ? "[Click here]" : "[Nhấn vào đây]"}
            </Link>
          </p>

          <p className="text-justify">
            {locale === "en" ? (
              <>
                The UEH Knowledge Hub is a centralized support platform designed
                to provide information, guidelines, and solutions for requests
                related to learning, teaching, and operational activities at the
                University of Economics Ho Chi Minh City (UEH).
                <br />
                The system serves as a digital knowledge center, helping
                students, faculty, and staff access information quickly,
                accurately, and consistently.
              </>
            ) : (
              <>
                Kho tri thức UEH là nền tảng hỗ trợ tập trung, được xây dựng
                nhằm cung cấp thông tin, hướng dẫn và giải đáp các yêu cầu liên
                quan đến hoạt động học tập, giảng dạy và vận hành tại Đại học
                Kinh tế Thành phố Hồ Chí Minh (UEH).
                <br />
                Hệ thống đóng vai trò như một trung tâm tri thức số, giúp người
                học, giảng viên và viên chức tiếp cận thông tin một cách nhanh
                chóng, chính xác và nhất quán.
              </>
            )}
          </p>

          <h2>
            {locale === "en"
              ? "Functions and Support Scope"
              : "Chức năng và phạm vi hỗ trợ"}
          </h2>
          <p>
            {locale === "en" ? (
              <>
                The UEH Knowledge Hub offers a diverse range of support content,
                including:
              </>
            ) : (
              <>
                Kho tri thức UEH cung cấp các nội dung hỗ trợ đa dạng, bao gồm:
              </>
            )}
          </p>
          <h4 id="faqs">
            1. {locale === "en" ? "Inquiry Resolution" : "Giải đáp thắc mắc"}
          </h4>
          <p>
            {locale === "en" ? (
              <>
                Provides Frequently Asked Questions (FAQs) and detailed
                instructions regarding:
              </>
            ) : (
              <>
                Cung cấp các câu hỏi thường gặp (FAQs) và hướng dẫn chi tiết
                liên quan đến:
              </>
            )}
          </p>
          <ul className="list-disc! pl-4 mb-4">
            {locale === "vi" && (
              <>
                <li className="list-item!">Học vụ và chương trình đào tạo</li>
                <li className="list-item!">Quy định, quy chế nội bộ</li>
                <li className="list-item!">Các dịch vụ và hệ thống của UEH</li>
              </>
            )}
            {locale === "en" && (
              <>
                <li className="list-item!">
                  Academic Affairs and Training Programs
                </li>
                <li className="list-item!">
                  Internal Regulations and Policies
                </li>
                <li className="list-item!">UEH Services and Systems</li>
              </>
            )}
          </ul>
          <p>
            {locale === "en" ? (
              <>
                Users can proactively search for information to resolve common
                issues without the need to submit direct requests.
              </>
            ) : (
              <>
                Người dùng có thể chủ động tra cứu để giải quyết các vấn đề phổ
                biến mà không cần gửi yêu cầu trực tiếp.
              </>
            )}
          </p>
          <h4 id="support_request_handling">
            2.{" "}
            {locale === "en"
              ? "Support Request Submission and Processing"
              : "Tiếp nhận và xử lý yêu cầu hỗ trợ"}
          </h4>
          <p>
            {locale === "en" ? (
              <>The system allows users to:</>
            ) : (
              <>Hệ thống cho phép người dùng:</>
            )}
          </p>
          <ul className="list-disc! pl-4 mb-4">
            {locale === "vi" && (
              <>
                <li className="list-item!">
                  Gửi yêu cầu hỗ trợ khi phát sinh vấn đề
                </li>
                <li className="list-item!">Theo dõi tiến trình xử lý</li>
                <li className="list-item!">
                  Nhận phản hồi từ các đơn vị phụ trách
                </li>
              </>
            )}
            {locale === "en" && (
              <>
                <li className="list-item!">Submit Support Requests</li>
                <li className="list-item!">Track Processing Progress</li>
                <li className="list-item!">Receive Feedback </li>
              </>
            )}
          </ul>
          <p>
            {locale === "en" ? (
              <>Requests may involve </>
            ) : (
              <>Các yêu cầu có thể liên quan đến:</>
            )}
          </p>
          <ul className="list-disc! pl-4 mb-4">
            {locale === "vi" && (
              <>
                <li className="list-item!">Sự cố hệ thống</li>
                <li className="list-item!">Vấn đề tài khoản</li>
                <li className="list-item!">Hỗ trợ dịch vụ nội bộ</li>
              </>
            )}
            {locale === "en" && (
              <>
                <li className="list-item!">System errors</li>
                <li className="list-item!">Account issues</li>
                <li className="list-item!">Internal service support</li>
              </>
            )}
          </ul>
          <h4 id="user_guide">
            3.{" "}
            {locale === "en"
              ? "Service Usage Guidelines"
              : "Hướng dẫn sử dụng dịch vụ"}
          </h4>
          <p>
            {locale === "en" ? (
              <>
                Provides detailed documentation for systems and services at UEH,
                helping users:
              </>
            ) : (
              <>
                Cung cấp tài liệu hướng dẫn chi tiết cho các hệ thống và dịch vụ
                tại UEH, giúp người dùng:
              </>
            )}
          </p>
          <ul className="list-disc! pl-4 mb-4">
            {locale === "vi" && (
              <>
                <li className="list-item!">Hiểu rõ quy trình thực hiện</li>
                <li className="list-item!">Sử dụng đúng chức năng</li>
                <li className="list-item!">
                  Giảm thiểu sai sót trong quá trình thao tác
                </li>
              </>
            )}
            {locale === "en" && (
              <>
                <li className="list-item!">Understand Standard Procedures</li>
                <li className="list-item!">Optimize Functionality</li>
                <li className="list-item!">Minimize Errors</li>
              </>
            )}
          </ul>
          <p>
            {locale === "en" ? (
              <>
                As a centralized platform for support and knowledge sharing, the
                UEH Knowledge Hub contributes to enhancing operational
                efficiency while ensuring that every member of the UEH ecosystem
                can access information and services conveniently, quickly, and
                accurately.
              </>
            ) : (
              <>
                Với vai trò là nền tảng hỗ trợ và chia sẻ tri thức tập trung,
                Kho tri thức UEH góp phần nâng cao hiệu quả vận hành, đồng thời
                đảm bảo mọi thành viên trong hệ sinh thái UEH đều có thể tiếp
                cận thông tin và dịch vụ một cách thuận tiện, nhanh chóng và
                chính xác.
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
                  key: "#faqs",
                  href: "#faqs",
                  title:
                    locale === "en"
                      ? "1. Inquiry Resolution"
                      : "1. Giải đáp thắc mắc",
                },
                {
                  key: "#support_request_handling",
                  href: "#support_request_handling",
                  title:
                    locale === "en"
                      ? "2. Support Request Submission and Processing"
                      : "2. Tiếp nhận và xử lý yêu cầu hỗ trợ",
                },
                {
                  key: "#user_guide",
                  href: "#user_guide",
                  title:
                    locale === "en"
                      ? "3. Service Usage Guidelines"
                      : "3. Hướng dẫn sử dụng dịch vụ",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

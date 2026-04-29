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
          ? "UEH Finance & Accounting System"
          : "Hệ thống Tài chính Kế toán UEH"}
      </h1>

      <div className="row mt-5">
        <div className="content-body col-9">
          <p>
            {locale === "en" ? "Access Link:" : "Link truy cập:"}{" "}
            <Link
              href="https://tckt.ueh.edu.vn"
              target="_blank"
              className="text-[#cd2027]!"
            >
              {locale === "en" ? "[Click here]" : "[Nhấn vào đây]"}
            </Link>
          </p>

          <p className="text-justify">
            {locale === "vi" ? (
              <>
                Hệ thống Tài chính Kế toán UEH là nền tảng số được phát triển
                nhằm hỗ trợ giảng viên và viên chức trong việc quản lý toàn diện
                các vấn đề tài chính liên quan đến cá nhân và đơn vị công tác.
                <br />
                Hệ thống hướng đến việc minh bạch hóa thông tin, chuẩn hóa quy
                trình và tối ưu hóa trải nghiệm người dùng, góp phần nâng cao
                hiệu quả quản trị tài chính trong toàn trường.
              </>
            ) : (
              <>
                The UEH Finance & Accounting System is a digital platform
                developed to support faculty and staff in comprehensively
                managing financial matters related to individuals and their
                respective departments.
                <br /> The system aims to enhance information transparency,
                standardize procedures, and optimize user experience,
                contributing to the overall efficiency of financial management
                within the university.
              </>
            )}
          </p>

          <h2>{locale === "vi" ? "Các chức năng chính" : "Key Functions"}</h2>
          <h4 id="personal_income_checking">
            1.{" "}
            {locale === "vi"
              ? "Kiểm tra thu nhập cá nhân"
              : "Personal Income Inquiry"}
          </h4>
          <p>
            {locale === "en" ? (
              <>
                The system allows faculty and staff to look up detailed
                information regarding their income, including:
              </>
            ) : (
              <>
                Hệ thống cho phép giảng viên và viên chức tra cứu chi tiết các
                khoản thu nhập, bao gồm:
              </>
            )}
          </p>
          <ul className="list-disc! pl-4 mb-4">
            {locale === "vi" && (
              <>
                <li className="list-item!">Bảng lương hàng tháng</li>
                <li className="list-item!">Các khoản phụ cấp</li>
                <li className="list-item!">Thù lao giảng dạy</li>
                <li className="list-item!">Thu nhập tăng thêm</li>
                <li className="list-item!">Các khoản thưởng theo từng kỳ</li>
              </>
            )}
            {locale === "en" && (
              <>
                <li className="list-item!">Monthly Payroll</li>
                <li className="list-item!">Allowances</li>
                <li className="list-item!">Teaching Remuneration</li>
                <li className="list-item!">Additional Income</li>
                <li className="list-item!">Periodic Bonuses</li>
              </>
            )}
          </ul>
          <p>
            {locale === "en" ? (
              <>
                Information is updated regularly, ensuring accuracy and
                transparency, and making it easy for users to monitor and
                reconcile their personal earnings.
              </>
            ) : (
              <>
                Thông tin được cập nhật định kỳ, đảm bảo tính chính xác, minh
                bạch và dễ dàng đối chiếu, hỗ trợ người dùng chủ động trong việc
                theo dõi thu nhập cá nhân.
              </>
            )}
          </p>
          <h4 id="personal_payments">
            2.{" "}
            {locale === "vi"
              ? "Thanh toán cá nhân"
              : "Personal Reimbursement & Payment"}
          </h4>
          <p>
            {locale === "en" ? (
              <>
                Users can submit online requests for payments and advance
                settlements for expenses incurred during work, such as:
              </>
            ) : (
              <>
                Người dùng có thể thực hiện các yêu cầu thanh toán và hoàn ứng
                trực tuyến đối với các chi phí phát sinh trong quá trình công
                tác, bao gồm:
              </>
            )}
          </p>
          <ul className="list-disc! pl-4 mb-4">
            {locale === "en" && (
              <>
                <li className="list-item!">
                  Business Trip Expenses (Per diem)
                </li>
                <li className="list-item!">Conference and Workshop Fees</li>
                <li className="list-item!">
                  Procurement for Teaching and Professional Tasks
                </li>
              </>
            )}
            {locale === "vi" && (
              <>
                <li className="list-item!">Công tác phí</li>
                <li className="list-item!">Chi phí hội nghị, hội thảo</li>
                <li className="list-item!">
                  Chi phí mua sắm phục vụ giảng dạy và công việc chuyên môn
                </li>
              </>
            )}
          </ul>
          <p>
            {locale === "vi"
              ? "Toàn bộ quy trình được thực hiện trên hệ thống, giúp:"
              : "By shifting the entire process to the digital system, UEH aims to:"}
          </p>
          <ul className="list-disc! pl-4 mb-4">
            {locale === "vi" && (
              <>
                <li className="list-item!">Giảm thiểu thủ tục hành chính</li>
                <li className="list-item!">Không cần nộp hồ sơ giấy</li>
                <li className="list-item!">
                  Không cần làm việc trực tiếp tại phòng kế toán
                </li>
              </>
            )}
            {locale === "en" && (
              <>
                <li className="list-item!">
                  Minimize Administrative Procedures: No need for physical
                  paperwork.
                </li>
                <li className="list-item!">
                  Direct Interaction Reduction: Eliminates the need to visit the
                  Accounting Department in person. This streamlines processing
                  times and increases convenience for all users.
                </li>
              </>
            )}
          </ul>
          <p>
            {locale === "vi" ? (
              <>
                Qua đó, nâng cao hiệu quả xử lý và tiết kiệm thời gian cho người
                sử dụng.
              </>
            ) : (
              <></>
            )}
          </p>
          <h4 id="organization_payments">
            3.{" "}
            {locale === "en"
              ? "Departmental Payment Management"
              : "Thanh toán cho đơn vị"}
          </h4>
          <p>
            {locale === "en" ? (
              <>The system supports faculties, departments, and centers in:</>
            ) : (
              <>Hệ thống hỗ trợ các khoa, phòng ban và trung tâm trong việc:</>
            )}
          </p>
          <ul className="list-disc! pl-4 mb-4">
            {locale === "vi" && (
              <>
                <li className="list-item!">
                  Gửi yêu cầu thanh toán cho các hoạt động của đơn vị
                </li>
                <li className="list-item!">Theo dõi tiến trình phê duyệt</li>
                <li className="list-item!">Kiểm tra trạng thái giải ngân</li>
              </>
            )}
            {locale === "en" && (
              <>
                <li className="list-item!">
                  Submitting Payment Requests: For departmental operations and
                  activities.
                </li>
                <li className="list-item!">
                  Tracking Approval Progress: Real-time monitoring of the
                  approval chain.
                </li>
                <li className="list-item!">
                  Checking Disbursement Status: Verifying when funds have been
                  released.
                </li>
              </>
            )}
          </ul>
          <p>
            {locale === "en" ? (
              <>The digitization of these workflows ensures:</>
            ) : (
              <>Việc số hóa toàn bộ quy trình giúp đảm bảo:</>
            )}
          </p>
          <ul className="list-disc! pl-4 mb-4">
            {locale === "vi" && (
              <>
                <li className="list-item!">
                  Tính minh bạch trong quản lý ngân sách
                </li>
                <li className="list-item!">
                  Khả năng theo dõi theo thời gian thực
                </li>
                <li className="list-item!">
                  Sự phối hợp hiệu quả giữa các đơn vị liên quan
                </li>
              </>
            )}
            {locale === "en" && (
              <>
                <li className="list-item!">
                  Budget Transparency: Clear oversight of departmental spending.
                </li>
                <li className="list-item!">
                  Real-time Tracking: Ability to monitor financial status at any
                  moment.
                </li>
                <li className="list-item!">
                  Effective Coordination: Seamless interaction between relevant
                  units and the accounting office.
                </li>
              </>
            )}
          </ul>
          <p>
            {locale === "en" ? (
              <>
                With its integrated functions and fully digitized workflows, the
                UEH Finance & Accounting System serves as an effective support
                tool for faculty, staff, and units, contributing to the
                operational quality and sustainable development of the
                University.
              </>
            ) : (
              <>
                Với các chức năng tích hợp và quy trình được số hóa toàn diện,
                Hệ thống Tài chính Kế toán UEH đóng vai trò là công cụ hỗ trợ
                hiệu quả cho giảng viên, viên chức và các đơn vị trong việc quản
                lý tài chính, góp phần nâng cao chất lượng vận hành và phát
                triển bền vững của Nhà trường.
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
                  key: "#personal_income_checking",
                  href: "#personal_income_checking",
                  title:
                    locale === "vi"
                      ? "1. Kiểm tra thu nhập cá nhân"
                      : "1. Personal Income Inquiry",
                },
                {
                  key: "#personal_payments",
                  href: "#personal_payments",
                  title:
                    locale === "vi"
                      ? "2. Thanh toán cá nhân"
                      : "2. Personal Reimbursement & Payment",
                },
                {
                  key: "#organization_payments",
                  href: "#organization_payments",
                  title:
                    locale === "en"
                      ? "3. Departmental Payment Management"
                      : "3. Thanh toán cho đơn vị",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

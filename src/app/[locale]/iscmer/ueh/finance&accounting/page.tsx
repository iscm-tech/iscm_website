import { Anchor } from "antd";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="py-4 container">
      <h1 className="text-center uppercase">Hệ thống Tài chính Kế toán UEH</h1>

      <div className="row mt-5">
        <div className="content-body col-9">
          <p>
            Link truy cập:{" "}
            <Link
              href="https://tckt.ueh.edu.vn"
              target="_blank"
              className="text-[#cd2027]!"
            >
              https://tckt.ueh.edu.vn
            </Link>
          </p>

          <p className="text-justify">
            Hệ thống Tài chính Kế toán UEH là nền tảng số được phát triển nhằm
            hỗ trợ giảng viên và viên chức trong việc quản lý toàn diện các vấn
            đề tài chính liên quan đến cá nhân và đơn vị công tác.
            <br />
            Hệ thống hướng đến việc minh bạch hóa thông tin, chuẩn hóa quy trình
            và tối ưu hóa trải nghiệm người dùng, góp phần nâng cao hiệu quả
            quản trị tài chính trong toàn trường.
          </p>

          <h2>Các chức năng chính</h2>
          <h4 id="personal_income_checking">1. Kiểm tra thu nhập cá nhân</h4>
          <p>
            Hệ thống cho phép giảng viên và viên chức tra cứu chi tiết các khoản
            thu nhập, bao gồm:
          </p>
          <ul className="list-disc! pl-4 mb-4">
            <li className="list-item!">Bảng lương hàng tháng</li>
            <li className="list-item!">Các khoản phụ cấp</li>
            <li className="list-item!">Thù lao giảng dạy</li>
            <li className="list-item!">Thu nhập tăng thêm</li>
            <li className="list-item!">Các khoản thưởng theo từng kỳ</li>
          </ul>
          <p>
            Thông tin được cập nhật định kỳ, đảm bảo tính chính xác, minh bạch
            và dễ dàng đối chiếu, hỗ trợ người dùng chủ động trong việc theo dõi
            thu nhập cá nhân.
          </p>
          <h4 id="personal_payments">2. Thanh toán cá nhân</h4>
          <p>
            Người dùng có thể thực hiện các yêu cầu thanh toán và hoàn ứng trực
            tuyến đối với các chi phí phát sinh trong quá trình công tác, bao
            gồm:
          </p>
          <ul className="list-disc! pl-4 mb-4">
            <li className="list-item!">Công tác phí</li>
            <li className="list-item!">Chi phí hội nghị, hội thảo</li>
            <li className="list-item!">
              Chi phí mua sắm phục vụ giảng dạy và công việc chuyên môn
            </li>
          </ul>
          <p>Toàn bộ quy trình được thực hiện trên hệ thống, giúp:</p>
          <ul className="list-disc! pl-4 mb-4">
            <li className="list-item!">Giảm thiểu thủ tục hành chính</li>
            <li className="list-item!">Không cần nộp hồ sơ giấy</li>
            <li className="list-item!">
              Không cần làm việc trực tiếp tại phòng kế toán
            </li>
          </ul>
          <p>
            Qua đó, nâng cao hiệu quả xử lý và tiết kiệm thời gian cho người sử
            dụng.
          </p>
          <h4 id="organization_payments">3. Thanh toán cho đơn vị</h4>
          <p>Hệ thống hỗ trợ các khoa, phòng ban và trung tâm trong việc:</p>
          <ul className="list-disc! pl-4 mb-4">
            <li className="list-item!">
              Gửi yêu cầu thanh toán cho các hoạt động của đơn vị
            </li>
            <li className="list-item!">Theo dõi tiến trình phê duyệt</li>
            <li className="list-item!">Kiểm tra trạng thái giải ngân</li>
          </ul>
          <p>Việc số hóa toàn bộ quy trình giúp đảm bảo:</p>
          <ul className="list-disc! pl-4 mb-4">
            <li className="list-item!">
              Tính minh bạch trong quản lý ngân sách
            </li>
            <li className="list-item!">
              Khả năng theo dõi theo thời gian thực
            </li>
            <li className="list-item!">
              Sự phối hợp hiệu quả giữa các đơn vị liên quan
            </li>
          </ul>
          <p>
            Với các chức năng tích hợp và quy trình được số hóa toàn diện, Hệ
            thống Tài chính Kế toán UEH đóng vai trò là công cụ hỗ trợ hiệu quả
            cho giảng viên, viên chức và các đơn vị trong việc quản lý tài
            chính, góp phần nâng cao chất lượng vận hành và phát triển bền vững
            của Nhà trường.
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
                  title: "1. Kiểm tra thu nhập cá nhân",
                },
                {
                  key: "#personal_payments",
                  href: "#personal_payments",
                  title: "2. Thanh toán cá nhân",
                },
                {
                  key: "#organization_payments",
                  href: "#organization_payments",
                  title: "3. Thanh toán cho đơn vị",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

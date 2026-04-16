import { barlow, ibm_plex_sans } from "@/app/fontDeclare";
import { Anchor, Collapse } from "antd";
import { AlignJustifyIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="py-4 container">
      <h1 className="text-center uppercase">
        UEHer – Nền tảng quản trị và kết nối dành cho cộng đồng UEH
      </h1>

      <div className="row mt-5">
        <div className="content-body col-9">
          <p>
            Link truy cập:{" "}
            <Link
              href="https://ueh.edu.vn/ueher"
              target="_blank"
              className="text-[#cd2027]!"
            >
              https://ueh.edu.vn/ueher
            </Link>
          </p>
          <p className="text-justify">
            UEHer là nền tảng số tích hợp của Đại học Kinh tế Thành phố Hồ Chí
            Minh (UEH), được xây dựng nhằm hỗ trợ cán bộ, giảng viên và người
            học trong việc quản trị thông tin, vận hành công việc và kết nối hệ
            sinh thái UEH một cách đồng bộ, hiệu quả.
            <br />
            Thông qua UEHer, người dùng có thể truy cập nhanh chóng các hệ
            thống, dữ liệu và tiện ích phục vụ cho hoạt động học tập, giảng dạy,
            nghiên cứu và quản lý.
          </p>
          <h2>Cấu trúc chức năng của UEHer</h2>
          <p>
            Nền tảng UEHer được thiết kế theo các nhóm chức năng chính như sau:
          </p>
          <h4 id="personal_information">1. Thông tin cá nhân</h4>
          <p>
            Cung cấp các thông tin và công cụ quản lý tài khoản cá nhân, bao
            gồm:
          </p>
          <ul className="list-disc! pl-4 mb-4">
            <li className="list-item!">Thông tin cá nhân</li>
            <li className="list-item!">Email UEH</li>
            <li className="list-item!">Cấp lại / quản lý mật khẩu</li>
          </ul>
          <p>
            Nhóm chức năng này giúp người dùng đảm bảo việc truy cập và sử dụng
            hệ thống một cách liên tục và an toàn.
          </p>
          <h4 id="ueh_information">2. Thông tin UEH</h4>
          <p>
            Tổng hợp các thông tin nội bộ và văn bản quản trị chính thức của
            UEH:
          </p>
          <ul className="list-disc! pl-4 mb-4">
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
          </ul>
          <p>
            Đây là nguồn thông tin chính thống phục vụ tra cứu và cập nhật các
            hoạt động trong toàn trường.
          </p>
          <h4 id="work_schedule">3. Lịch làm việc</h4>
          <p>Hỗ trợ quản lý và đồng bộ lịch làm việc:</p>
          <ul className="list-disc! pl-4 mb-4">
            <li className="list-item!">Lịch UEH</li>
            <li className="list-item!">Lịch cá nhân</li>
            <li className="list-item!">Đăng ký lịch tuần</li>
            <li className="list-item!">Đăng ký nghỉ phép</li>
          </ul>
          <p>
            Chức năng này giúp nâng cao hiệu quả quản lý thời gian và phối hợp
            công việc giữa các cá nhân và đơn vị.
          </p>
          <h4 id="work_management">4. Quản lý công việc</h4>
          <p>Tích hợp các hệ thống phục vụ vận hành và quản trị nội bộ:</p>
          <ul className="list-disc! pl-4 mb-4">
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
          </ul>
          <p>
            Nhóm chức năng này đóng vai trò cốt lõi trong việc số hóa quy trình
            làm việc và nâng cao hiệu suất vận hành.
          </p>
          <h4 id="teaching&scientific_research">
            5. Giảng dạy và nghiên cứu khoa học
          </h4>
          <p>Hỗ trợ toàn diện hoạt động học thuật và nghiên cứu:</p>
          <ul className="list-disc! pl-4 mb-4">
            <li className="list-item!">Đăng ký giảng dạy</li>
            <li className="list-item!">Quản lý giảng dạy</li>
            <li className="list-item!">Quản lý nghiên cứu khoa học</li>
            <li className="list-item!">Cố vấn học tập</li>
            <li className="list-item!">Quản lý thực tập tốt nghiệp</li>
            <li className="list-item!">Quản lý luận văn Thạc sĩ</li>
            <li className="list-item!">Quản lý luận án Tiến sĩ</li>
          </ul>
          <p>
            Đây là nhóm chức năng quan trọng đối với giảng viên và các đơn vị
            học thuật trong việc quản lý chuyên môn.
          </p>
          <h4 id="utilities">6. Tiện ích</h4>
          <p>
            Cung cấp các công cụ và dịch vụ hỗ trợ trong quá trình làm việc và
            học tập:
          </p>
          <ul className="list-disc! pl-4 mb-4">
            <li className="list-item!">Danh bạ UEH</li>
            <li className="list-item!">UEH Smartlock</li>
            <li className="list-item!">Microsoft Teams</li>
            <li className="list-item!">Thư viện</li>
            <li className="list-item!">Công đoàn</li>
            <li className="list-item!">Quản lý tài chính</li>
            <li className="list-item!">Quản trị hệ thống</li>
            <li className="list-item!">Ký số</li>
          </ul>
          <p className="text-justify">
            Nhóm tiện ích giúp nâng cao trải nghiệm người dùng và hỗ trợ các nhu
            cầu đa dạng trong hệ sinh thái UEH.
            <br />
            Với hệ thống chức năng toàn diện và tích hợp, UEHer không chỉ là
            công cụ quản trị mà còn là nền tảng kết nối, góp phần nâng cao hiệu
            quả hoạt động và thúc đẩy phát triển bền vững trong toàn bộ hệ sinh
            thái UEH.
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
                  title: "1. Thông tin cá nhân",
                },
                {
                  key: "#ueh_information",
                  href: "#ueh_information",
                  title: "2. Thông tin UEH",
                },
                {
                  key: "#work_schedule",
                  href: "#work_schedule",
                  title: "3. Lịch làm việc",
                },
                {
                  key: "#work_management",
                  href: "#work_management",
                  title: "4. Quản lý công việc",
                },
                {
                  key: "#teaching&scientific_research",
                  href: "#teaching&scientific_research",
                  title: "5. Giảng dạy và nghiên cứu khoa học",
                },
                {
                  key: "#utilities",
                  href: "#utilities",
                  title: "6. Tiện ích",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

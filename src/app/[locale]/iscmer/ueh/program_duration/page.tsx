import { Anchor } from "antd";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="py-4 container">
      <h1 className="text-center uppercase">Khung thời gian đào tạo</h1>

      <div className="row mt-5">
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
            thông báo, lịch trình và kế hoạch học tập dành cho sinh viên và học
            viên trong từng giai đoạn đào tạo.
            <br />
            Hệ thống đóng vai trò quan trọng trong việc đảm bảo người học nắm
            bắt kịp thời các mốc thời gian và kế hoạch học tập theo quy định của
            Nhà trường.
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
            <li className="list-item!">Các mốc thời gian học vụ quan trọng</li>
            <li className="list-item!">
              Thông báo điều chỉnh kế hoạch đào tạo (nếu có)
            </li>
          </ul>
          <p>
            Thông tin được cập nhật định kỳ và theo từng đợt, đảm bảo tính chính
            xác và đồng bộ với hệ thống quản lý đào tạo của UEH.
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
            Khung thời gian đào tạo là nguồn thông tin học vụ quan trọng, hỗ trợ
            người học trong việc quản lý tiến độ học tập và đảm bảo quá trình
            đào tạo diễn ra đúng kế hoạch, hiệu quả và đồng bộ với quy định của
            UEH.
          </p>
        </div>
        <div className="col-3">
          <div className="sticky top-15">
            <Anchor
              targetOffset={150}
              items={[
                {
                  key: "#content",
                  href: "#content",
                  title: "Nội dung cung cấp",
                },
                {
                  key: "#target_users",
                  href: "#target_users",
                  title: "Đối tượng sử dụng",
                },
                {
                  key: "#goal",
                  href: "#goal",
                  title: "Giá trị sử dụng",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

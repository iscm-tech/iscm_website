import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="py-4 container">
      <h1 className="text-center uppercase">Tra cứu chương trình đào tạo</h1>

      <div className="content-body mt-5">
        <p>
          Link truy cập:{" "}
          <Link
            href="https://student.ueh.edu.vn/Public/TraCuuNganh"
            target="_blank"
            className="text-[#cd2027]!"
          >
            https://student.ueh.edu.vn/Public/TraCuuNganh
          </Link>
        </p>

        <p className="text-justify">
          Tra cứu chương trình đào tạo là hệ thống tra cứu chính thức của Đại
          học Kinh tế Thành phố Hồ Chí Minh (UEH), được xây dựng nhằm cung cấp
          thông tin đầy đủ và chi tiết về các ngành học và chương trình đào tạo
          (CTĐT) của Nhà trường.
          <br />
          Hệ thống hỗ trợ sinh viên và người quan tâm dễ dàng tiếp cận thông tin
          học thuật một cách minh bạch, chính xác và cập nhật.
        </p>

        <h4>Nội dung cung cấp</h4>
        <p>
          Người dùng có thể tìm kiếm và xem các thông tin quan trọng liên quan
          đến từng ngành học và chương trình đào tạo, bao gồm:
        </p>
        <ul className="list-disc! pl-4 mb-4">
          <li className="list-item!">Tên ngành và mã ngành</li>
          <li className="list-item!">Mô tả chương trình đào tạo</li>
          <li className="list-item!">
            Cấu trúc chương trình và danh mục học phần
          </li>
          <li className="list-item!">Chuẩn đầu ra</li>
          <li className="list-item!">Thời gian đào tạo</li>
          <li className="list-item!">Các thông tin học thuật liên quan</li>
        </ul>
        <h4>Đối tượng sử dụng</h4>
        <p>Hệ thống phục vụ cho:</p>
        <ul className="list-disc! pl-4 mb-4">
          <li className="list-item!">Sinh viên đang theo học tại UEH</li>
          <li className="list-item!">Học viên và nghiên cứu sinh</li>
          <li className="list-item!">
            Thí sinh và người quan tâm đến các chương trình đào tạo của UEH
          </li>
        </ul>
        <h4>Giá trị sử dụng</h4>
        <p>Việc sử dụng hệ thống tra cứu giúp người dùng:</p>
        <ul className="list-disc! pl-4 mb-4">
          <li className="list-item!">
            Chủ động tìm hiểu và định hướng ngành học
          </li>
          <li className="list-item!">
            Nắm rõ lộ trình đào tạo và kế hoạch học tập
          </li>
          <li className="list-item!">
            Tiếp cận nguồn thông tin chính thống phục vụ cho học tập và nghiên
            cứu
          </li>
        </ul>
        <p>
          Hệ thống Tra cứu chương trình đào tạo là công cụ quan trọng trong việc
          cung cấp thông tin học thuật tại UEH, góp phần nâng cao tính minh
          bạch, hỗ trợ người học trong việc lập kế hoạch học tập và đưa ra các
          quyết định phù hợp với định hướng phát triển cá nhân.
        </p>
      </div>
    </div>
  );
}

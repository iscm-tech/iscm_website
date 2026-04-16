import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="py-4 container">
      <h1 className="text-center uppercase">Kho tri thức UEH</h1>

      <div className="content-body mt-5">
        <p>
          Link truy cập:{" "}
          <Link
            href="https://hotro.ueh.edu.vn"
            target="_blank"
            className="text-[#cd2027]!"
          >
            https://hotro.ueh.edu.vn
          </Link>
        </p>

        <p className="text-justify">
          Kho tri thức UEH là nền tảng hỗ trợ tập trung, được xây dựng nhằm cung
          cấp thông tin, hướng dẫn và giải đáp các yêu cầu liên quan đến hoạt
          động học tập, giảng dạy và vận hành tại Đại học Kinh tế Thành phố Hồ
          Chí Minh (UEH).
          <br />
          Hệ thống đóng vai trò như một trung tâm tri thức số, giúp người học,
          giảng viên và viên chức tiếp cận thông tin một cách nhanh chóng, chính
          xác và nhất quán.
        </p>

        <h2>Chức năng và phạm vi hỗ trợ</h2>
        <p>Kho tri thức UEH cung cấp các nội dung hỗ trợ đa dạng, bao gồm:</p>
        <h4>1. Giải đáp thắc mắc</h4>
        <p>
          Cung cấp các câu hỏi thường gặp (FAQs) và hướng dẫn chi tiết liên quan
          đến:
        </p>
        <ul className="list-disc! pl-4 mb-4">
          <li className="list-item!">Học vụ và chương trình đào tạo</li>
          <li className="list-item!">Quy định, quy chế nội bộ</li>
          <li className="list-item!">Các dịch vụ và hệ thống của UEH</li>
        </ul>
        <p>
          Người dùng có thể chủ động tra cứu để giải quyết các vấn đề phổ biến
          mà không cần gửi yêu cầu trực tiếp.
        </p>
        <h4>2. Tiếp nhận và xử lý yêu cầu hỗ trợ</h4>
        <p>Hệ thống cho phép người dùng:</p>
        <ul className="list-disc! pl-4 mb-4">
          <li className="list-item!">
            Gửi yêu cầu hỗ trợ khi phát sinh vấn đề
          </li>
          <li className="list-item!">Theo dõi tiến trình xử lý</li>
          <li className="list-item!">Nhận phản hồi từ các đơn vị phụ trách</li>
        </ul>
        <p>Các yêu cầu có thể liên quan đến:</p>
        <ul className="list-disc! pl-4 mb-4">
          <li className="list-item!">Sự cố hệ thống</li>
          <li className="list-item!">Vấn đề tài khoản</li>
          <li className="list-item!">Hỗ trợ dịch vụ nội bộ</li>
        </ul>
        <h4>3. Hướng dẫn sử dụng dịch vụ</h4>
        <p>
          Cung cấp tài liệu hướng dẫn chi tiết cho các hệ thống và dịch vụ tại
          UEH, giúp người dùng:
        </p>
        <ul className="list-disc! pl-4 mb-4">
          <li className="list-item!">Hiểu rõ quy trình thực hiện</li>
          <li className="list-item!">Sử dụng đúng chức năng</li>
          <li className="list-item!">
            Giảm thiểu sai sót trong quá trình thao tác
          </li>
        </ul>
        <p>
          Với vai trò là nền tảng hỗ trợ và chia sẻ tri thức tập trung, Kho tri
          thức UEH góp phần nâng cao hiệu quả vận hành, đồng thời đảm bảo mọi
          thành viên trong hệ sinh thái UEH đều có thể tiếp cận thông tin và
          dịch vụ một cách thuận tiện, nhanh chóng và chính xác.
        </p>
      </div>
    </div>
  );
}

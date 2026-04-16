import { barlow, ibm_plex_sans } from "@/app/fontDeclare";
import { Collapse } from "antd";
import { AlignJustifyIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="py-4 container">
      <h1 className="text-center uppercase">Hướng dẫn sử dụng Website UEH</h1>
      <Collapse
        ghost
        size="small"
        rootClassName="mt-3 -mx-2"
        items={[
          {
            key: "ueher",
            showArrow: false,
            label: (
              <div className="py-2 pl-8 text-white bg-[#CD2027] flex gap-6 items-center">
                <AlignJustifyIcon />
                <h3
                  className="uppercase text-white mb-0"
                  style={ibm_plex_sans.style}
                >
                  UEHer
                </h3>
              </div>
            ),
            children: (
              <div
                className="border-2 border-[#CE2027] p-3 -ml-1 -mr-0 text-base"
                style={barlow.style}
              >
                Đường dẫn truy cập:{" "}
                <Link
                  href="https://ueh.edu.vn/ueher"
                  target="_blank"
                  className="text-base text-[#cd2027] hover:underline"
                >
                  Link
                </Link>
                <ul className="list-outside" style={barlow.style}>
                  <li className="text-base list-item list-disc ml-4 mb-2">
                    Thông tin cá nhân (TT cá nhân, Email, Lấy mật khẩu)
                  </li>
                  <li className="text-base list-item list-disc ml-4 mb-2">
                    Thông tin UEH (Thông tin nội bộ - Quy định, quy chế: tổ chức
                    nhân sự, đào tào, thi đua khen thưởng, chế độ chính sách,
                    tuyển dụng, NCKH HTQT, Tin tức, sự kiện)
                  </li>
                  <li className="text-base list-item list-disc ml-4 mb-2">
                    Lịch làm việc (Lịch UEH, UEH cá nhân, Đăng ký lịch tuần,
                    đăng ký nghỉ phép)
                  </li>
                  <li className="text-base list-item list-disc ml-4 mb-2">
                    Quản lý công việc (E-office - đăng ký xe, SmartOffice - Xin
                    ý kiến, trình ký các loại văn bản, Quản lý công việc, Đánh
                    giá CV, Quản lý tài sản, Bộ tiêu chuẩn đánh giá, AILab.
                    Guest wifi)
                  </li>
                  <li className="text-base list-item list-disc ml-4 mb-2">
                    Giảng dạy - NCKH (Đăng ký giảng, Quản ký giảng dạy, Quản ý
                    khoa học, cố vấn học tập, quản lý thực tập tốt nghiệp, Quản
                    lý luận văn ths, Quản lý luận án tiến sỹ)
                  </li>
                  <li className="text-base list-item list-disc ml-4 mb-2">
                    Tiện ích (Danh bạ UEH, UEH smartlock, Ms Team, Thư viện,
                    Công đoàn, Quản lý tài chính, Quản trị hệ thống, Ký số)
                  </li>
                </ul>
              </div>
            ),
          },
          {
            key: "tckt",
            showArrow: false,
            label: (
              <div className="py-2 pl-8 text-white bg-[#CD2027] flex gap-6 items-center">
                <AlignJustifyIcon />
                <h3
                  className="uppercase text-white mb-0"
                  style={ibm_plex_sans.style}
                >
                  Tài chính kế toán
                </h3>
              </div>
            ),
            children: (
              <div
                className="border-2 border-[#CE2027] p-3 -ml-1 -mr-0 text-base"
                style={barlow.style}
              >
                Đường dẫn truy cập:{" "}
                <Link
                  href="https://tckt.ueh.edu.vn/"
                  target="_blank"
                  className="text-base text-[#cd2027] hover:underline"
                >
                  Link
                </Link>
                <p>
                  Hệ thống Tài chính Kế toán hỗ trợ giảng viên và viên chức UEH
                  quản lý toàn bộ các vấn đề tài chính liên quan đến cá nhân và
                  đơn vị công tác.
                </p>
                <ul className="list-outside" style={barlow.style}>
                  <li className="text-base list-item list-disc ml-4 mb-2">
                    Kiểm tra thu nhập cá nhân: <br /> Giảng viên và viên chức có
                    thể tra cứu chi tiết bảng lương hàng tháng, các khoản phụ
                    cấp, thù lao giảng dạy, thu nhập tăng thêm và các khoản
                    thưởng theo từng kỳ. Thông tin được cập nhật định kỳ, minh
                    bạch và dễ đối chiếu.
                  </li>
                  <li className="text-base list-item list-disc ml-4 mb-2">
                    Thanh toán cá nhân: <br /> Thực hiện các yêu cầu hoàn ứng
                    hoặc thanh toán chi phí phát sinh trong quá trình công tác
                    như: công tác phí, chi phí hội nghị – hội thảo, mua sắm văn
                    phòng phẩm phục vụ giảng dạy… Toàn bộ quy trình được thực
                    hiện trực tuyến, không cần nộp hồ sơ giấy hay đến trực tiếp
                    phòng kế toán.
                  </li>
                  <li className="text-base list-item list-disc ml-4 mb-2">
                    Thanh toán cho đơn vị: <br /> Các khoa, phòng ban, trung tâm
                    có thể gửi yêu cầu thanh toán cho các hoạt động của đơn vị,
                    theo dõi tiến trình phê duyệt và trạng thái giải ngân ngay
                    trên hệ thống.
                  </li>
                </ul>
              </div>
            ),
          },
          {
            key: "smartoffice",
            showArrow: false,
            label: (
              <div className="py-2 pl-8 text-white bg-[#CD2027] flex gap-6 items-center">
                <AlignJustifyIcon />
                <h3
                  className="uppercase text-white mb-0"
                  style={ibm_plex_sans.style}
                >
                  Smart Office
                </h3>
              </div>
            ),
            children: (
              <div
                className="border-2 border-[#CE2027] p-3 -ml-1 -mr-0 text-base"
                style={barlow.style}
              >
                Đường dẫn truy cập:{" "}
                <Link
                  href="https://smartoffice.ueh.edu.vn"
                  target="_blank"
                  className="text-base text-[#cd2027] hover:underline"
                >
                  Link
                </Link>
                <p>
                  Smart Office là nền tảng văn phòng số của UEH, giúp giảng viên
                  và viên chức xử lý toàn bộ công việc hành chính từ soạn thảo
                  đến trình ký.
                </p>
                <ul className="list-outside" style={barlow.style}>
                  <li className="text-base list-item list-disc ml-4 mb-2">
                    Xin ý kiến & trình ký văn bản nội bộ: <br /> Soạn thảo và
                    luân chuyển các văn bản lưu hành trong nội bộ UEH như thông
                    báo, tờ trình, biên bản họp, quyết định… Văn bản được chuyển
                    đúng quy trình phê duyệt đến từng cấp có thẩm quyền một cách
                    tự động.
                  </li>
                  <li className="text-base list-item list-disc ml-4 mb-2">
                    Xin ý kiến & trình ký văn bản ra ngoài: <br /> Xử lý các văn
                    bản gửi ra ngoài trường như công văn, hợp đồng hợp tác, thư
                    mời tham dự sự kiện… với chữ ký số hợp lệ, đảm bảo giá trị
                    pháp lý và rút ngắn thời gian xử lý đáng kể so với quy trình
                    giấy tờ truyền thống.
                  </li>
                  <li className="text-base list-item list-disc ml-4 mb-2">
                    Quản lý công việc & giao việc: <br /> Cán bộ quản lý có thể
                    tạo đầu việc, phân công nhiệm vụ cho từng thành viên trong
                    đơn vị, đặt thời hạn hoàn thành và theo dõi tiến độ thực
                    hiện theo thời gian thực trên một nền tảng duy nhất.
                  </li>
                </ul>
              </div>
            ),
          },
          {
            key: "eoffice",
            showArrow: false,
            label: (
              <div className="py-2 pl-8 text-white bg-[#CD2027] flex gap-6 items-center">
                <AlignJustifyIcon />
                <h3
                  className="uppercase text-white mb-0"
                  style={ibm_plex_sans.style}
                >
                  E-Office
                </h3>
              </div>
            ),
            children: (
              <div
                className="border-2 border-[#CE2027] p-3 -ml-1 -mr-0 text-base"
                style={barlow.style}
              >
                Đường dẫn truy cập:{" "}
                <Link
                  href="https://eoffice.ueh.edu.vn/"
                  target="_blank"
                  className="text-base text-[#cd2027] hover:underline"
                >
                  Link
                </Link>
                <p>
                  E-Office hỗ trợ giảng viên và viên chức đăng ký sử dụng phương
                  tiện di chuyển của trường phục vụ các hoạt động công tác một
                  cách thuận tiện và có hệ thống.
                </p>
                <ul className="list-outside" style={barlow.style}>
                  <li className="text-base list-item list-disc ml-4 mb-2">
                    Đăng ký xe của trường (Book xe UEH): <br /> Khi có nhu cầu
                    sử dụng xe trường để phục vụ công tác, đưa đón khách mời,
                    tham dự hội nghị hay tổ chức sự kiện, giảng viên/viên chức
                    có thể đặt xe trực tuyến ngay trên hệ thống. Quy trình bao
                    gồm: chọn ngày giờ khởi hành, điểm đón và điểm trả, ước tính
                    số lượng người, ghi rõ mục đích sử dụng, sau đó gửi yêu cầu
                    và chờ phê duyệt từ bộ phận phụ trách xe.
                  </li>
                  <li className="text-base list-item list-disc ml-4 mb-2">
                    Theo dõi trạng thái yêu cầu:
                    <br /> Sau khi đăng ký, người dùng có thể theo dõi trực tiếp
                    tình trạng xét duyệt (đang chờ / đã duyệt / từ chối) và xem
                    thông tin xe được xếp để chủ động sắp xếp kế hoạch di
                    chuyển.
                  </li>
                </ul>
              </div>
            ),
          },
          {
            key: "khotrithuc",
            showArrow: false,
            label: (
              <div className="py-2 pl-8 text-white bg-[#CD2027] flex gap-6 items-center">
                <AlignJustifyIcon />
                <h3
                  className="uppercase text-white mb-0"
                  style={ibm_plex_sans.style}
                >
                  Kho tri thức
                </h3>
              </div>
            ),
            children: (
              <div
                className="border-2 border-[#CE2027] p-3 -ml-1 -mr-0 text-base"
                style={barlow.style}
              >
                Đường dẫn truy cập:{" "}
                <Link
                  href="https://hotro.ueh.edu.vn/"
                  target="_blank"
                  className="text-base text-[#cd2027] hover:underline"
                >
                  Link
                </Link>
                <p>
                  Kho tri thức là cổng hỗ trợ chính thức của UEH dành cho giảng
                  viên và viên chức, cung cấp đầy đủ tài nguyên và kênh tiếp
                  nhận yêu cầu hỗ trợ trong môi trường làm việc tại trường.
                </p>
                <ul className="list-outside" style={barlow.style}>
                  <li className="text-base list-item list-disc ml-4 mb-2">
                    Giải đáp yêu cầu & thắc mắc: <br /> Giảng viên và viên chức
                    có thể gửi câu hỏi hoặc yêu cầu hỗ trợ liên quan đến học vụ,
                    hành chính, tài chính, công nghệ thông tin, chính sách nhân
                    sự và nhiều lĩnh vực khác trong hoạt động của UEH. Các yêu
                    cầu sẽ được tiếp nhận và phản hồi bởi bộ phận chuyên trách.
                  </li>
                  <li className="text-base list-item list-disc ml-4 mb-2">
                    Xử lý sự cố kỹ thuật:
                    <br /> Khi gặp lỗi đăng nhập hệ thống, trục trặc phần mềm
                    nội bộ hay các vấn đề kỹ thuật khác trong quá trình sử dụng
                    dịch vụ của trường, người dùng gửi yêu cầu qua Kho tri thức
                    để được hỗ trợ xử lý nhanh chóng và đúng quy trình.
                  </li>
                  <li className="text-base list-item list-disc ml-4 mb-2">
                    Tra cứu hướng dẫn tự phục vụ:
                    <br /> Hệ thống tổng hợp đầy đủ các tài liệu hướng dẫn sử
                    dụng dịch vụ, quy trình thủ tục hành chính và các câu hỏi
                    thường gặp giúp giảng viên và viên chức chủ động tra cứu và
                    tự xử lý nhiều vấn đề mà không cần liên hệ trực tiếp phòng
                    ban.
                  </li>
                </ul>
              </div>
            ),
          },
          {
            key: "dangkyphong",
            showArrow: false,
            label: (
              <div className="py-2 pl-8 text-white bg-[#CD2027] flex gap-6 items-center">
                <AlignJustifyIcon />
                <h3
                  className="uppercase text-white mb-0"
                  style={ibm_plex_sans.style}
                >
                  Đăng ký phòng học
                </h3>
              </div>
            ),
            children: (
              <div
                className="border-2 border-[#CE2027] p-3 -ml-1 -mr-0 text-base"
                style={barlow.style}
              >
                Đường dẫn truy cập:{" "}
                <Link
                  href="https://dangkyphong.ueh.edu.vn/"
                  target="_blank"
                  className="text-base text-[#cd2027] hover:underline"
                >
                  Link
                </Link>
                <p>
                  Hệ thống Đăng ký phòng học giúp giảng viên và các đơn vị chủ
                  động sắp xếp việc sử dụng cơ sở vật chất của trường một cách
                  hiệu quả, tránh trùng lịch và tối ưu hóa không gian.
                </p>
                <ul className="list-outside" style={barlow.style}>
                  <li className="text-base list-item list-disc ml-4 mb-2">
                    Đăng ký phòng học & không gian sử dụng: <br /> Giảng viên và
                    viên chức có thể tìm kiếm và đặt phòng học, hội trường,
                    phòng họp, phòng seminar… phù hợp với quy mô và tính chất
                    hoạt động: lớp học bù, buổi thảo luận nhóm, hội thảo chuyên
                    đề, hay các sự kiện của đơn vị.
                  </li>
                  <li className="text-base list-item list-disc ml-4 mb-2">
                    Tra cứu lịch sử sử dụng phòng:
                    <br /> Kiểm tra trạng thái còn trống hay đã có lịch của từng
                    phòng theo ngày và khung giờ cụ thể, từ đó lựa chọn thời
                    điểm phù hợp trước khi đặt để tránh xung đột lịch giữa các
                    đơn vị.
                  </li>
                  <li className="text-base list-item list-disc ml-4 mb-2">
                    Quản lý lịch đặt phòng:
                    <br />
                    Theo dõi danh sách các phòng đã đặt, chỉnh sửa thông tin
                    hoặc hủy đặt phòng khi có thay đổi kế hoạch giúp đảm bảo
                    nguồn lực cơ sở vật chất được phân bổ hợp lý và hiệu quả cho
                    toàn trường.
                  </li>
                </ul>
              </div>
            ),
          },
          {
            key: "tracuuchuongtrinhdaotao",
            showArrow: false,
            label: (
              <div className="py-2 pl-8 text-white bg-[#CD2027] flex gap-6 items-center">
                <AlignJustifyIcon />
                <h3
                  className="uppercase text-white mb-0"
                  style={ibm_plex_sans.style}
                >
                  Tra cứu chương trình đào tạo
                </h3>
              </div>
            ),
            children: (
              <div
                className="border-2 border-[#CE2027] p-3 -ml-1 -mr-0 text-base"
                style={barlow.style}
              >
                Đường dẫn truy cập:{" "}
                <Link
                  href="https://student.ueh.edu.vn/Public/TraCuuNganh"
                  target="_blank"
                  className="text-base text-[#cd2027] hover:underline"
                >
                  Link
                </Link>
                <p>
                  Đây là công cụ tra cứu chính thức của UEH giúp sinh viên và
                  người quan tâm xem thông tin chi tiết về ngành học và chương
                  trình đào tạo (CTĐT)
                </p>
              </div>
            ),
          },
          {
            key: "khungthoigiandaotao",
            showArrow: false,
            label: (
              <div className="py-2 pl-8 text-white bg-[#CD2027] flex gap-6 items-center">
                <AlignJustifyIcon />
                <h3
                  className="uppercase text-white mb-0"
                  style={ibm_plex_sans.style}
                >
                  Khung thời gian đào tạo
                </h3>
              </div>
            ),
            children: (
              <div
                className="border-2 border-[#CE2027] p-3 -ml-1 -mr-0 text-base"
                style={barlow.style}
              >
                Đường dẫn truy cập:{" "}
                <Link
                  href="https://daotao.ueh.edu.vn/category/tin-tuc/ke-hoach-dao-tao"
                  target="_blank"
                  className="text-base text-[#cd2027] hover:underline"
                >
                  Link
                </Link>
                <p>
                  Đây là chuyên mục “Kế hoạch đào tạo” của Ban Đào tạo UEH, dùng
                  để cập nhật toàn bộ các thông báo, lịch trình và kế hoạch học
                  tập chính thức dành cho sinh viên và học viên.
                </p>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}

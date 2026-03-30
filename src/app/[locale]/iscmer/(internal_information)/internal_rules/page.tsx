import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="pt-4">
      <h1 className="text-center uppercase">Nội quy làm việc</h1>
      <h1>⏰ Giờ làm việc:</h1>
      <table className="table">
        <thead>
          <th></th>
          <th>Buổi sáng</th>
          <th>Buổi chiều</th>
        </thead>
        <tbody>
          <tr>
            <td>Chuyên viên</td>
            <td>7:30 - 12:00</td>
            <td>13:00 - 16:30</td>
          </tr>
          <tr>
            <td>Giảng viên (ngày không có lịch giảng dạy)</td>
            <td>8:30 - 12:30</td>
            <td>13:30 - 17:30</td>
          </tr>
        </tbody>
      </table>
      <p className="text-justify">
        <strong>📌 Ghi chú: </strong>Các thành viên được yêu cầu phải tự note
        tình trạng làm việc của cá nhân khi không có mặt tại Viện (dù bất cứ lý
        do nào trừ lịch giảng dạy chính thức đối với giảng viên) trong sheet{" "}
        <Link
          href={
            "https://docs.google.com/spreadsheets/d/1EG6fWZM7fgZ7kLRg83fb4pURnkmGsvhYVEIChdFiZ0g/edit?gid=1416902686#gid=1416902686"
          }
          className="text-[#cd2027] font-bold underline"
          target="_blank"
        >
          Time keeper
        </Link>
        . Các lý do vắng phải được sự chấp thuận của Viện trưởng trước khi note
        vào file. Administration Head sẽ kiểm tra hàng ngày vào 8.30 sáng. Mọi
        trường hợp vắng mặt đều sẽ được note vào sheet với tình trạng
        &quot;absent without permission&quot;. Thành viên có quyền được thay
        đổi/cập nhật (nhưng không được để trống) trong ngày. Ngày hôm sau, trạng
        thái của hôm trước sẽ được khóa không thể điều chỉnh. Mọi ghi nhận trong
        sheet này đều sẽ được cân nhắc ảnh hưởng đến kết quả đánh giá OKRs cá
        nhân.
      </p>

      <h1>📃 Quy định làm việc:</h1>
      <ol className="list-decimal pl-4">
        {/* <li>Responsible Coordinator</li> */}
        <li>
          Trách nhiệm làm việc nhóm: Chia sẻ / chuyển giao thông tin đầy đủ,
          Trao đổi trực tiếp, rõ ràng, Tự quản lý cảm xúc cá nhân
        </li>
        <li>
          Làm việc chuyên nghiệp: Đúng giờ, Đảm bảo chất lượng công việc, Tôn
          trọng deadline
        </li>
        <li>
          Quy định trong họp/ăn uống ISCM: Không sử dụng điện thoại, Không làm
          việc cá nhân
        </li>
        <li>
          Bảo vệ tài sản: Bảo vệ tài sản của ISCM/UEH, Tiết kiệm điện, Giữ không
          gian sạch sẽ, gọn gàng
        </li>
        <li>Quan tâm lẫn nhau: Chăm sóc / bảo vệ các thành viên ISCM</li>
      </ol>
    </div>
  );
}

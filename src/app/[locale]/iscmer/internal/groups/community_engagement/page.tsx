import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="uppercase text-center">Nhóm Gắn kết cộng đồng</h1>

      <div className="content-body mt-5">
        <p>
          Link truy cập:{" "}
          <Link
            target="blank"
            href={
              "https://docs.google.com/spreadsheets/d/1Jc6XXmQ-ijV8qL1NX1eI8Gp8QCbDaij4wx9wjY8Nm-Q/edit?gid=551360222#gid=551360222"
            }
            className="text-[#cd2027]!"
          >
            [Nhấn vào đây]
          </Link>
        </p>

        <p>
          Giới thiệu: Nhóm Community Engagement phụ trách các hoạt động kết nối
          cộng đồng, tổ chức sự kiện và phát triển mạng lưới sinh viên.
        </p>
        <p>
          Mục tiêu: Tăng cường sự gắn kết, mở rộng cộng đồng và nâng cao trải
          nghiệm tham gia của sinh viên.
        </p>
        <p>
          Người truy cập: Các tài liệu được mở theo từng hoạt động/sự kiện, với
          quyền truy cập phân theo vai trò và phạm vi tham gia.
        </p>
      </div>
    </div>
  );
}

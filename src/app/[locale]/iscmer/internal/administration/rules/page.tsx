import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="text-center uppercase">Nội quy và quy định</h1>

      <div className="content-body mt-5">
        <p>
          Link truy cập:{" "}
          <Link
            className="text-[#cd2027]!"
            target="_blank"
            href={
              "https://docs.google.com/document/d/1_nmGNVzyng4MVxYCjsGIHsoeHZDhIGED/edit?usp=sharing&ouid=108537813011262227879&rtpof=true&sd=true"
            }
          >
            [Nhấn vào đây]
          </Link>
        </p>

        <p>
          Đây là nguồn tham chiếu chính thức về các chính sách, quy định của
          ISCM.
        </p>
        <p>
          Yêu cầu: Toàn bộ thành viên ISCM có trách nhiệm chủ động tra cứu và
          tuân thủ các quy định này. Việc nắm rõ nội quy giúp đảm bảo làm việc
          đúng quy trình, phối hợp nhịp nhàng giữa các bộ phận và hạn chế tối đa
          sai sót.
        </p>
      </div>
    </div>
  );
}

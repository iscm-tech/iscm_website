import { getLocale } from "next-intl/server";
import Link from "next/link";
import React from "react";

export default async function page() {
  const locale = await getLocale();
  return (
    <div>
      <h1 className="text-center uppercase">
        {locale === "en" ? "Rules and Regulations" : "Nội quy và quy định"}
      </h1>

      <div className="content-body mt-5">
        <p>
          {locale === "en" ? "Access Link:" : "Link truy cập:"}{" "}
          <Link
            className="text-[#cd2027]!"
            target="_blank"
            href={
              "https://docs.google.com/document/d/1_nmGNVzyng4MVxYCjsGIHsoeHZDhIGED/edit?usp=sharing&ouid=108537813011262227879&rtpof=true&sd=true"
            }
          >
            {locale === "en" ? "[Click here]" : "[Nhấn vào đây]"}
          </Link>
        </p>

        {locale === "vi" && (
          <>
            <p>
              Đây là nguồn tham chiếu chính thức về các chính sách, quy định của
              ISCM.
            </p>
            <p>
              Yêu cầu: Toàn bộ thành viên ISCM có trách nhiệm chủ động tra cứu
              và tuân thủ các quy định này. Việc nắm rõ nội quy giúp đảm bảo làm
              việc đúng quy trình, phối hợp nhịp nhàng giữa các bộ phận và hạn
              chế tối đa sai sót.
            </p>
          </>
        )}
        {locale === "en" && (
          <>
            <p>
              This is the official reference source for ISCM policies and
              regulations.
            </p>
            <p>
              Requirement: All ISCM members are responsible for proactively
              reviewing and complying with these regulations. A clear
              understanding of the rules ensures proper workflow execution,
              smooth coordination between departments, and minimizes operational
              errors.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

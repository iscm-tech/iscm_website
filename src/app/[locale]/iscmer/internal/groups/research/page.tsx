import { getLocale } from "next-intl/server";
import Link from "next/link";
import React from "react";

export default async function page() {
  const locale = await getLocale();

  return (
    <div>
      <h1 className="uppercase text-center">
        {locale === "en" ? "Research Team" : "Nhóm Nghiên cứu"}
      </h1>

      <div className="content-body mt-5">
        <p>
          {locale === "en" ? "Access Link:" : "Link truy cập:"}{" "}
          <Link
            target="blank"
            href={
              "https://docs.google.com/spreadsheets/d/1yuTGUS76TTQ2mV8psy5WbOuNIpdqY4hqtglwb9inN7k/edit?usp=sharing"
            }
            className="text-[#cd2027]!"
          >
            {locale === "en" ? "[Click here]" : "[Nhấn vào đây]"}
          </Link>
        </p>

        {locale === "en" ? (
          <>
            <p>
              The Research team conducts research activities, data collection,
              and analysis to support ISCM’s development direction and ongoing
              projects.
            </p>

            <p>
              Access mechanism: Permissions are granted based on the actual
              level of involvement in each research project.
            </p>

            <p>
              Secure scope: Intellectual Property (IP), including raw data and
              unpublished research results, is strictly restricted and only
              accessible to the author group or authorized personnel.
            </p>
          </>
        ) : (
          <>
            <p>
              Nhóm Research thực hiện các hoạt động nghiên cứu, thu thập và phân
              tích dữ liệu nhằm hỗ trợ định hướng phát triển và các dự án của
              ISCM.
            </p>
            <p>
              Cơ chế truy cập: Cấp quyền theo mức độ tham gia thực tế vào từng
              dự án nghiên cứu.
            </p>
            <p>
              Vùng bảo mật: Tài sản trí tuệ (IP) (Dữ liệu thô, kết quả nghiên
              cứu chưa công bố) bị giới hạn nghiêm ngặt, chỉ dành cho nhóm tác
              giả hoặc người có thẩm quyền.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

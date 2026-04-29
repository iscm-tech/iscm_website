import { getLocale } from "next-intl/server";
import Link from "next/link";
import React from "react";

export default async function page() {
  const locale = await getLocale();

  return (
    <div>
      <h1 className="uppercase text-center">
        {locale === "en"
          ? "Community Engagement Team"
          : "Nhóm Gắn kết cộng đồng"}
      </h1>

      <div className="content-body mt-5">
        <p>
          {locale === "en" ? "Access Link:" : "Link truy cập:"}{" "}
          <Link
            target="blank"
            href={
              "https://docs.google.com/spreadsheets/d/1Jc6XXmQ-ijV8qL1NX1eI8Gp8QCbDaij4wx9wjY8Nm-Q/edit?gid=551360222#gid=551360222"
            }
            className="text-[#cd2027]!"
          >
            {locale === "en" ? "[Click here]" : "[Nhấn vào đây]"}
          </Link>
        </p>

        {locale === "en" ? (
          <>
            <p>
              Introduction: The Community Engagement team is responsible for
              community connection activities, event organization, and
              developing the student network.
            </p>

            <p>
              Access policy: Flexible based on each campaign/extracurricular
              event. Members are granted access strictly according to the scope
              of tasks assigned within each project.
            </p>
          </>
        ) : (
          <>
            <p>
              Giới thiệu: Nhóm Community Engagement phụ trách các hoạt động kết
              nối cộng đồng, tổ chức sự kiện và phát triển mạng lưới sinh viên.
            </p>
            <p>
              Cơ chế truy cập: Linh hoạt theo từng chiến dịch/sự kiện ngoại
              khóa. Thành viên nhận quyền truy cập đúng với phạm vi công việc
              (task) được giao trong dự án đó.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

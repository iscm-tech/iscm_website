import envConfig from "@/config";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="py-4">
      <h1 className="text-center uppercase">Sơ đồ tổ chức</h1>

      <div className="content-body mt-5">
        <p className="text-justify">
          Bộ máy hoạt động của ISCM được vận hành bởi cấu trúc tinh gọn và
          chuyên nghiệp, dẫn dắt bởi Viện trưởng (Director), người định hướng
          tầm nhìn chiến lược chung.
          <br />
          <br />
          Dưới sự quản lý trực tiếp của Viện trưởng là 08 Trưởng bộ phận (Heads)
          phụ trách 8 lĩnh vực chuyên môn, đảm bảo sự kết nối chặt chẽ giữa các
          nguồn lực bao gồm: Vận hành & Tài chính (Operation & Finance), Học
          thuật (Academia), Nghiên cứu (Research), Quan hệ đối tác (Partnership)
          và Truyền thông (PR & Communication).
          <br />
          <br />
          Cuối cùng là đội ngũ Host và các Điều phối viên (Coordinators), những
          người trực tiếp hiện thực hóa từng dự án và sự kiện.
        </p>
        <figure className="w-full flex items-center justify-center mt-4">
          <Image
            src={"/images/about/company_organization.png"}
            alt="Company Organization"
            width={2400}
            height={1200}
            className="w-full object-contain"
            quality={100}
          />
        </figure>
      </div>

      {/* <div
        style={{
          backgroundImage:
            "url(/images/iscmer/organization_diagram/iscm_organization.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="w-full min-h-[50vh]"
      >
        <div>
          <Image src={`${envConfig.API_ENDPOINT}/`} />
        </div>
      </div> */}
    </div>
  );
}

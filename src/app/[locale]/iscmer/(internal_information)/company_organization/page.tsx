import envConfig from "@/config";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="py-4">
      <h1 className="text-center uppercase">Sơ đồ tổ chức</h1>
      {/* <figure className="w-full flex items-center justify-center mt-4">
        <Image
          src={"/images/about/company_organization.jpg"}
          alt="Company Organization"
          width={2400}
          height={1200}
          className="w-full object-contain"
          quality={100}
        />
      </figure> */}

      <div
        style={{
          backgroundImage:
            "url(/images/iscmer/organization_diagram/iscm_organization.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="w-full min-h-[50vh]"
      >
        <div>
          {/* <Image src={`${envConfig.API_ENDPOINT}/`} /> */}
        </div>
      </div>
    </div>
  );
}

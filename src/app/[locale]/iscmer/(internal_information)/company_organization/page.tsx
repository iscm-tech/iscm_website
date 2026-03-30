import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="py-4">
      <h1 className="text-center uppercase">Sơ đồ tổ chức</h1>
      <figure className="w-full flex items-center justify-center mt-4">
        <Image
          src={"/images/about/company_organization.jpg"}
          alt="Company Organization"
          width={800}
          height={600}
          className="w-full object-contain"
          quality={100}
        />
      </figure>
    </div>
  );
}

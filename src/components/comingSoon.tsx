import Image from "next/image";
import React from "react";

export default function ComingSoon() {
  return (
    <figure className="w-full flex items-center justify-center mt-4">
      <Image
        src={"/images/icons/coming-soon.png"}
        alt="Coming Soon"
        width={400}
        height={400}
      />
    </figure>
  );
}

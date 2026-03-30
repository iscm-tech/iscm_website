"use client";

import React, { useState } from "react";
import * as motion from "motion/react-client";
import { Image } from "antd";

export default function ProgramStructure({
  programList,
}: {
  programList: { years: string; image: string }[];
}) {
  const [programStructureImage, setProgramStructureImage] = useState<string>(
    programList.filter((item) =>
      item.years.includes(new Date().getFullYear().toString())
    )[0].image
  );

  return (
    <div className="mt-12">
      <ul className="flex flex-row-reverse">
        {programList.map((program) => (
          <li
            key={program.years}
            className={`flex-1 text-center text-xl font-bold text-[#3c3939] ${
              program.image === programStructureImage ? "text-[#cd2027]" : ""
            } py-2 px-4 transition-colors cursor-pointer duration-200 hover:bg-[#F0F0F0]`}
            onClick={() => {
              setProgramStructureImage(program.image);
            }}
          >
            {program.years}
          </li>
        ))}
      </ul>
      {programStructureImage && (
        <motion.figure
          key={programStructureImage}
          initial={{
            opacity: 0,
            filter: "blur(40px)",
          }}
          animate={{ opacity: 1, filter: "blur(0)" }}
          transition={{ duration: 0.1 }}
          className="w-full min-h-[300px] mt-3"
        >
          <Image
            src={programStructureImage}
            alt=""
            width="100%"
            className="w-full"
            preview={{
              closeIcon: <i className="hidden"></i>,
              maskClassName: "bg-transparent hover:cursor-zoom-in",
              mask: <div className="w-full h-full border-2 border-black"></div>,
            }}
          />
        </motion.figure>
      )}
    </div>
  );
}

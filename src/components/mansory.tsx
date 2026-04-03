"use client";

import React from "react";
import { Image as AntImage } from "antd";

export default function Mansory({ listItems }: { listItems: string[] }) {
  return (
    <AntImage.PreviewGroup
      styles={{
        popup: {
          mask: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
        },
      }}
    >
      <div className="mansory__container w-full mt-8">
        {listItems.map((item) => (
          <div
            className="box w-full mb-[10px] break-inside-avoid overflow-hidden"
            key={item}
          >
            <div className="flex justify-center w-full overflow-hidden">
              <AntImage className="w-full" src={item} alt={item} />
            </div>
          </div>
        ))}
      </div>
    </AntImage.PreviewGroup>
  );
}

"use client";

import Image from "next/image";

export default function Gallery({ gallery }: { gallery: string[] }) {
  return (
    <ul className="w-full h-[250px] lg:h-[500px] flex items-center gap-2">
      {gallery.map((image) => (
        <li
          key={image}
          className="w-[25%] h-[95%] transition-all duration-1000 overflow-hidden hover:w-[150%] rounded-md hover:h-full"
        >
          <Image
            src={image}
            width={400}
            height={500}
            alt={image}
            className="w-full h-full object-cover"
            quality={90}
          />
        </li>
      ))}
    </ul>
  );
}

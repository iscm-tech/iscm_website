"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";

interface ImageSize {
  width: number;
  height: number;
}

export default function Booklet({ booklet }: { booklet: string[] }) {
  const bookRef = useRef<HTMLDivElement>(null);
  const [imageSize, setImageSize] = useState<ImageSize | null>(null);

  useEffect(() => {
    const img = new window.Image();
    img.src = booklet[0];

    img.onload = () => {
      if (bookRef.current) {
        const parentWidth = bookRef.current.offsetWidth - 25;
        const displayWidth = parentWidth / 2;
        const displayHeight =
          (displayWidth * img.naturalHeight) / img.naturalWidth;

        // console.log({
        //   width: Math.round(displayWidth),
        //   height: Math.round(displayHeight),
        // });
        setImageSize({
          width: Math.round(displayWidth),
          height: Math.round(displayHeight),
        });
      }
    };
  }, [booklet, bookRef]);

  return (
    <div className="bg-black/70 p-2 w-full max-w-[75vw]" ref={bookRef}>
      {imageSize && (
        <div className="h-fit" style={{ width: `${imageSize.width * 2}px` }}>
          <HTMLFlipBook
            width={imageSize.width}
            height={imageSize.height}
            size="fixed"
            minWidth={315}
            maxWidth={650}
            minHeight={400}
            maxHeight={1533}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={false}
            className="flip-book"
            style={{}}
            startPage={0}
            drawShadow={true}
            flippingTime={500}
            usePortrait={false}
            startZIndex={1}
            autoSize={false}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={20}
            showPageCorners={true}
            disableFlipByClick={false}
          >
            {booklet.map((page, index) => (
              <div
                className="select-none page w-full h-full bg-white"
                key={page}
              >
                <Image
                  className="w-full h-full object-contain"
                  width={1000}
                  height={1000}
                  src={page}
                  alt={`page_${index}`}
                  quality={100}
                />
              </div>
            ))}
          </HTMLFlipBook>
        </div>
      )}
    </div>
  );
}

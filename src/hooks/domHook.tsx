"use client";

import Image from "next/image";
import parse, { HTMLReactParserOptions } from "html-react-parser";
import { DomUtils, parseDocument } from "htmlparser2";

export const useDOMParser = (htmlString: string, safe: boolean = false) => {
  const options: HTMLReactParserOptions = {
    replace(node) {
      if (node.type === "tag") {
        // Prevent meta refresh
        if (
          safe &&
          node.name === "meta" &&
          (node.attribs?.["http-equiv"] || "").toLowerCase() === "refresh"
        ) {
          console.warn("Meta redirect bị chặn:", node.attribs);
          return <></>;
        }

        // Render images with Next.js Image component
        if (node.name === "img") {
          const src = node.attribs?.src || "";
          // If src is empty, skip rendering the image
          if (!src) return <></>;

          return (
            <Image
              style={{ objectFit: "contain" }}
              src={src}
              className="img-fluid w-80"
              quality={90}
              alt={node.attribs?.alt || "thumbnail"}
              width={1120}
              height={400}
            />
          );
        }
      }

      return undefined; // Keep default behavior for other nodes
    },
  };

  return parse(htmlString || "", options);
};

export const getInnerText = (htmlString: string) => {
  const doc = parseDocument(htmlString);
  return DomUtils.textContent(doc);
};

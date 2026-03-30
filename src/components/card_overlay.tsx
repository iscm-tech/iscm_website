"use client";

import Link from "next/link";
import Image from "next/image";
import { useDOMParser } from "@/hooks/domHook";
import styled from "styled-components";

const CardOverlayStyled = styled(Link)`
  .card_overlay {
    position: relative;
    overflow: hidden;

    .text_overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: transparent;
      transition: all 0.3s;

      p {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        visibility: hidden;
        opacity: 0;
        transform: translateY(10px);
        transition: all 0.3s;
        color: white;
      }
    }

    &:hover .text_overlay {
      background-color: rgba(0, 0, 0, 0.7);

      p {
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
        transition: all 0.3s;
      }
    }
  }
`;

export default function CardOverlay({
  id,
  thumb,
  title,
  basePath,
  query,
  overlayTitleStyle,
}: {
  id?: string;
  thumb: string;
  title: string;
  basePath: string;
  query?: { [key: string]: string };
  overlayTitleStyle?: React.CSSProperties;
}) {
  return (
    <CardOverlayStyled
      href={{
        pathname: id ? `${basePath}/${id}` : basePath,
        query:
          query &&
          Object.keys(query)
            ?.map((value) => `${value}=${query[value]}`)
            .join("&"),
      }}
      className="block w-full h-[250px] shadow-lg"
    >
      <div className="w-full h-full cursor-pointer card_overlay shadow-md">
        <Image
          width={500}
          height={500}
          alt="background"
          src={thumb}
          className="w-full h-full object-cover"
          quality={90}
        />
        <div className="text_overlay flex items-center justify-center">
          <p
            className="text-xl mb-0 text-center !w-[80%]"
            style={{ ...overlayTitleStyle }}
          >
            {useDOMParser(title)}
          </p>
        </div>
      </div>
    </CardOverlayStyled>
  );
}

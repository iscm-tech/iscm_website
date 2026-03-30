"use client";

import { MemberCardType } from "@/schemaValidations/member.schema";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

const TeachersStyled = styled.div`
  @keyframes scrollRight {
    to {
      right: -250px;
    }
  }

  .logo-container .wrapper {
    margin-top: 1.8rem;
    width: 90%;
    margin-inline: auto;
    position: relative;
    overflow: hidden;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1) 20%,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 0)
    );
  }

  .logo-container .itemRight {
    border-radius: 6px;
    position: absolute;
    animation-timing-function: linear;
    animation-duration: 120s;
    animation-iteration-count: infinite;
    will-change: right;
  }
`;

export default function Teachers({
  instructors,
}: {
  instructors: MemberCardType[];
}) {
  return (
    <TeachersStyled className="h-[200px] overflow-hidden">
      <div className="logo-container h-full">
        <div className="wrapper h-full">
          {instructors.map((people, idx) => (
            <div
              key={people.id}
              className="flex flex-col items-center flex-shrink-0 object-contain itemRight w-[250px] h-full"
              style={{
                animationDelay: `calc(120s / ${instructors.length} * (${
                  instructors.length
                } - ${idx + 1}) * -1)`,
                right: `max(calc(250px * ${instructors.length}), 100%)`,
                animationName: "scrollRight",
              }}
            >
              <figure className="h-[60%] w-auto aspect-square rounded-full overflow-hidden">
                <Image
                  src={people.image}
                  alt={people.name}
                  width={250}
                  height={250}
                  className="w-full h-full object-cover object-top"
                />
              </figure>
              <p className="whitespace-nowrap text-center font-semibold text-xl mb-0">
                {people.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </TeachersStyled>
  );
}

"use client";

import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const ComponentStyled = styled.ul`
  display: flex;
  flex-direction: column;

  & > li {
    margin-bottom: 14px;
    position: relative;
    transition: filter 0.2s;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      // display: none;
      width: 100%;
      height: 100%;
      z-index: 2;
      // opacity: 0;
      background: #fff;
      // visibility: hidden;
    }

    svg {
      transition: transform 0.2s ease;
      transform: translateY(2px) rotate(-45deg);
    }

    a {
      padding: 10px 6px;
      position: relative;
      z-index: 9;
      border-bottom: 1px solid #dcd9d1;

      h4 {
        font-size: 16px;
      }
    }

    & {
      a {
        transform: translateX(-2px) translateY(-2px);
        background: #ce2027;
        border-color: #ce2027;
        color: #fff;
        transition: none !important;

        h4 {
          color: #fff;
          transition: none;
        }
      }

      &::before {
        display: block;
        visibility: visible;
        opacity: 1;
        background: black;
        transform: translate(2px, 2px);
      }
    }

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export default function InternalLinks() {
  const i18n = useTranslations();

  return (
    <ComponentStyled className="w-full">
      <li className="w-full">
        <Link href="/iscm_life" className="w-full flex justify-between">
          <h4 className="mb-0">{i18n("iscm_life")}</h4>
          <FontAwesomeIcon icon={faArrowRightLong} width={24} />
        </Link>
      </li>
      <li className="w-full">
        <Link href="/student_life" className="w-full flex justify-between">
          <h4 className="mb-0">{i18n("student_life")}</h4>
          <FontAwesomeIcon icon={faArrowRightLong} width={24} />
        </Link>
      </li>
      <li className="w-full">
        <Link href="/expert_insight" className="w-full flex justify-between">
          <h4 className="mb-0">{i18n("expert_insight")}</h4>
          <FontAwesomeIcon icon={faArrowRightLong} width={24} />
        </Link>
      </li>
      <li className="w-full">
        <Link href="/open_admission" className="w-full flex justify-between">
          <h4 className="mb-0">{i18n("open_admission")}</h4>
          <FontAwesomeIcon icon={faArrowRightLong} width={24} />
        </Link>
      </li>
    </ComponentStyled>
  );
}

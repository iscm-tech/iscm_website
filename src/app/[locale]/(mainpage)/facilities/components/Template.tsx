"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";

const TemplateStyled = styled.div`
  line-height: 0;
  -webkit-column-count: 5; /* split it into 5 columns */
  -webkit-column-gap: 5px; /* give it a 5px gap between columns */
  -moz-column-count: 5;
  -moz-column-gap: 5px;
  column-count: 5;
  column-gap: 5px;

  img {
    display: block;
    width: 100% !important;
    height: auto !important;
    margin-bottom: 5px; /* to match column gap */
    margin-left: auto;
    margin-right: auto;
    transition: filter 2s;
    filter: grayscale(100%);
  }

  @media (max-width: 1200px) {
    -moz-column-count: 4;
    -webkit-column-count: 4;
    column-count: 4;
  }
  @media (max-width: 1000px) {
    -moz-column-count: 3;
    -webkit-column-count: 3;
    column-count: 3;
  }

  @media (max-width: 800px) {
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
  }

  @media (max-width: 400px) {
    -moz-column-count: 1;
    -webkit-column-count: 1;
    column-count: 1;
  }

  img:hover {
    filter: none;
  }
`;

export default function Template() {
  return (
    <TemplateStyled id="gallery">
      <Image
        width={500}
        height={500}
        alt=""
        quality={100}
        src="https://iscm-api.ueh.edu.vn/public/static/images/studiolab/3dP.jpg"
      />
      <Image
        width={500}
        height={500}
        alt=""
        quality={100}
        src="https://iscm-api.ueh.edu.vn/public/static/images/studiolab/book.jpg"
      />
      <Image
        width={500}
        height={500}
        alt=""
        quality={100}
        src="https://iscm-api.ueh.edu.vn/public/static/images/studiolab/lego.jpg"
      />
      <Image
        width={500}
        height={500}
        alt=""
        quality={100}
        src="https://iscm-api.ueh.edu.vn/public/static/images/studiolab/StudioLab1.jpg"
      />
      <Image
        width={500}
        height={500}
        alt=""
        quality={100}
        src="https://iscm-api.ueh.edu.vn/public/static/images/studiolab/USIM.jpg"
      />
      <Image
        width={500}
        height={500}
        alt=""
        quality={100}
        src="https://iscm-api.ueh.edu.vn/public/static/images/studiolab/VR1.jpg"
      />
      <Image
        width={500}
        height={500}
        alt=""
        quality={100}
        src="https://iscm-api.ueh.edu.vn/public/static/images/studiolab/3dp2.jpg"
      />
      <Image
        width={500}
        height={500}
        alt=""
        quality={100}
        src="https://iscm-api.ueh.edu.vn/public/static/images/studiolab/3dP.jpg"
      />
    </TemplateStyled>
  );
}

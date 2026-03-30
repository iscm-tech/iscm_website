"use client";

import styled from "styled-components";

const HomepageStyled = styled.div`
  .logo-container .wrapper {
    margin-top: 1.8rem;
    width: 90%;
    margin-inline: auto;
    height: 50px;
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

  .logo-container .itemLeft,
  .logo-container .itemRight {
    border-radius: 6px;
    position: absolute;
    animation-timing-function: linear;
    animation-duration: 120s;
    animation-iteration-count: infinite;
    filter: grayscale(2);
    transition: filter 0.2s ease-in-out;
  }

  .logo-container:hover .itemLeft,
  .logo-container:hover .itemRight {
    animation-play-state: paused;
  }

  .itemLeft:hover,
  .itemRight:hover {
    filter: none;
  }

  .header-section .video-banner__overlay {
    background-color: rgba(0, 0, 0, 0.65);
    animation: fadeToTransparent 2s linear forwards;
    animation-delay: 6s;
  }
`;

export default function HomePage({ children }: { children: React.ReactNode }) {
  return <HomepageStyled>{children}</HomepageStyled>;
}

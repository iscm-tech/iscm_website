"use client";

import { useInView } from "motion/react";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const NumberFlowStyled = styled.div`
  .counter {
    position: relative;
    display: flex;
    overflow: hidden;
    align-items: center;
    height: 3.125rem;
    font-size: 3.125rem;
    color: #333;
    margin: 0 1.25rem 0.625rem;
  }
  .counter > span {
    z-index: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    transition: -webkit-transform 2s ease;
    transition: transform 2s ease;
    transition: transform 2s ease, -webkit-transform 2s ease;
    -webkit-transform: translateY(0);
    transform: translateY(0);
    line-height: 1;
  }
  .counter > span span {
    flex: 0 0 100%;
    height: 100%;
  }
`;

export default function NumberFlow({ value }: { value: string }) {
  const number = useRef(null);
  const isNumberInView = useInView(number);

  // const animate = (ele: Element) => {
  //   // pattern used to seperate input number from html into an array of numbers and non numbers. EX $65.3M -> ["$65.3M", "$", "65", ".", "3", "M"]
  //   const patt = /(\D+)?(\d+)(\D+)?(\d+)?(\D+)?/;
  //   const time = 2500;
  //   const match = patt.exec(ele.textContent);
  //   let result = match && [...match];
  //   if (!result) return;
  //   let fresh = true;

  //   // Remove first full match from result array (we dont need the full match, just the individual match groups).
  //   result.shift();
  //   // Remove undefined values from result array where they didnt have a match in one of the optional regex groups
  //   result = result.filter((res) => res != null);

  //   while (ele.firstChild) {
  //     ele.removeChild(ele.firstChild);
  //   }

  //   for (const res of result) {
  //     if (isNaN(Number(res))) {
  //       ele.insertAdjacentHTML("beforeend", `<span>${res}</span>`);
  //     } else {
  //       for (let i = 0; i < res.length; i++) {
  //         ele.insertAdjacentHTML(
  //           "beforeend",
  //           `<span data-value="${res[i]}">
  // 					<span>&ndash;</span>
  // 					${Array(parseInt(res[i]) + 1)
  //             .join("0")
  //             .split("0")
  //             .map(
  //               (x, j) => `
  // 						<span>${j}</span>
  // 					`
  //             )
  //             .join("")}
  // 				</span>`
  //         );
  //       }
  //     }
  //   }

  //   const ticks = [...ele.querySelectorAll<HTMLElement>("span[data-value]")];

  //   const top = ele.getBoundingClientRect().top;
  //   const offset = (window.innerHeight * 3) / 4;

  //   setTimeout(() => {
  //     fresh = false;
  //   }, time);

  //   if (top < offset) {
  //     setTimeout(
  //       () => {
  //         for (const tick of ticks) {
  //           const dist = parseInt(tick.getAttribute("data-value") ?? "0") + 1;
  //           tick.style.transform = `translateY(-${dist * 100}%)`;
  //         }
  //       },
  //       fresh ? time : 0
  //     );
  //   }
  // };

  // useEffect(() => {
  //   if (number.current && isNumberInView) animate(number.current);
  // }, [isNumberInView]);

  return (
    <NumberFlowStyled className="counter" ref={number}>
      {value}
    </NumberFlowStyled>
  );
}

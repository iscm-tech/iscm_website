"use client";

import { useEffect } from "react";
import styled from "styled-components";
import $ from "jquery";
import { useLocale } from "next-intl";
import Link from "next/link";

const ErrorStyled = styled.div`
  --P_color1: #c2146d;
  --P_color2: #760d50;
  --P_color3: #4d0e45;
  --P_color4: #320c3b;
  --P_color5: #280c3d;
  --P_color6: #1e0d37;

  min-height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-family: "vazir", sans-serif;
  background: var(--P_color6);
  overflow: hidden !important;

  * {
    color: rgba(255, 255, 255, 0.8);
  }

  .texts {
    z-index: 5;
    padding: 0.8rem;
    margin: 0.3rem;
  }

  .Square404 {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
  }

  .Square {
    width: 20vw;
    height: 20vw;
    position: absolute;
    border-radius: 1.2rem;
    background: var(--P_color1);
    box-shadow: var(--P_color2) 0 0 5px 30px, var(--P_color3) 0 0 10px 60px,
      var(--P_color4) 0 0 15px 90px, var(--P_color5) 0 0 20px 120px,
      var(--P_color6) 0 0 25px 150px;
    transform: rotateZ(-21deg);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  .Square h1 {
    font-size: 10vw;
    color: var(--P_color6);
    transform: translateZ(90px);
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
    user-select: none;
  }

  .btn:hover {
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }

  .btn {
    cursor: pointer;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    border: #f8f9fa 1px solid;
    padding: 0.375rem 0.75rem;
    margin: 0.375rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    color: #f8f9fa;
    transition: all 0.5s ease-in-out;
    user-select: none;
  }

  #search_box {
    width: 60%;
    border-radius: 10px;
    box-shadow: none;
    padding: 0.7rem 0.8rem;
    margin: 10px 0;
    background-color: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.5);
    color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    body {
      flex-direction: column;
      justify-content: space-evenly;
    }
    .Square404 {
      width: 100%;
    }
    .Square {
      width: 150px;
      height: 150px;
    }
    .Square h1 {
      font-size: 70px;
    }
    .texts {
      width: 100%;
    }
  }
`;

export default function NotFound() {
  const locale = useLocale();

  useEffect(() => {
    const container1 = $("#Square")[0];

    window.onmousemove = (e) => {
      const x = -e.x / 90,
        y = -e.y / 90;

      container1.style.right = x + "px";
      container1.style.bottom = y + "px";
    };

    window.addEventListener("deviceorientation", function (e) {
      container1.style.right = (e.gamma || 0) / 3 + "px";
      container1.style.bottom = (e.beta || 0) / 3 + "px";
    });
  }, []);

  return (
    <ErrorStyled className="!flex-col lg:!flex-row h-[calc(100vh)]">
      <div className="Square404 top-1/2 lg:top-auto" id="Square">
        <div className="Square !rotate-0 lg:!rotate-[-21deg] top-1/2 -translate-y-1/2">
          <h1>404</h1>
        </div>
      </div>

      <div className="texts">
        <h4 className="!text-center lg:!text-left text-2xl">
          {locale === "en"
            ? "Oops! page not found"
            : "Oops! Không tìm thấy trang"}
        </h4>
        <p className="!text-center lg:!text-left">
          {locale === "en" ? (
            <>
              The page you are looking for does not exist. Go back to the
              homepage
            </>
          ) : (
            <>
              Trang bạn đang tìm kiếm hiện không tồn tại. Khám phá thêm nhiều
              nội dung khác ở trang chủ nhé!
            </>
          )}
        </p>
        <div className="flex w-full justify-center lg:justify-start">
          <Link href="/" className="btn">
            {locale === "en" ? "Back to Home" : "Trở về trang chủ"}
          </Link>
        </div>
        {/* <label htmlFor="search_box"></label>
        <input
          type="search"
          name="search"
          id="search_box"
          placeholder="Search"
        /> */}
      </div>
    </ErrorStyled>
  );
}

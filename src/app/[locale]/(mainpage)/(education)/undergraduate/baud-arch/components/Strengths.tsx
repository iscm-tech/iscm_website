import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { barlow, ibm_plex_sans } from "@/app/fontDeclare";
import { useLocale } from "next-intl";

import strengthsEn from "../data/strengthsEn.json";
import strengthsVi from "../data/strengthsVi.json";

gsap.registerPlugin(ScrollTrigger);

export default function Strengths() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  const locale = useLocale();

  const strengths = locale === "en" ? strengthsEn : strengthsVi;

  return (
    <section className="career-section" ref={sectionRef}>
      <div className="wrapper" ref={viewportRef}>
        <h2
          className="uppercase mt-28 text-black font-bold w-full mb-9"
          style={ibm_plex_sans.style}
        >
          {locale === "en"
            ? "Strengths of the Program"
            : "Thế mạnh chương trình"}
        </h2>

        <div className="card__wrapper row">
          {strengths.map((strength, idx) => (
            <div
              key={strength.title}
              ref={(el) => {
                if (el) itemsRef.current[idx] = el;
              }}
              className={`col-12 col-lg-6 mb-2 card__item overflow-hidden relative h-full justify-between p-8 bg-white`}
            >
              <h5
                style={{
                  WebkitTextStroke: "#cd2027",
                  WebkitTextStrokeWidth: "2.5px",
                  ...barlow.style,
                }}
                className={`text-5xl! font-bold! text-transparent!`}
              >
                0{idx + 1}
              </h5>
              <h4 className={`text-black text-lg mb-0`}>{strength.title}</h4>
              <div className="flex-1 py-3">
                <p className={`text-base text-black text-justify`}>
                  {strength.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

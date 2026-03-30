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

  // useLayoutEffect(() => {
  //   if (!sectionRef.current || !viewportRef.current) return;

  //   const ctx = gsap.context(() => {
  //     const items = itemsRef.current.filter(Boolean);
  //     const viewport = viewportRef.current!;
  //     if (!items.length) return;

  //     let deltas: number[] = [];
  //     let setters: ((v: number) => void)[] = [];

  //     const measure = () => {
  //       gsap.set(items, { x: 0 });

  //       const vpRect = viewport.getBoundingClientRect();
  //       const vpWidth = vpRect.width;

  //       const firstItemRect = items[0].getBoundingClientRect();
  //       const itemWidth = firstItemRect.width;

  //       const spacing = (vpWidth - itemWidth) / (items.length - 1);

  //       deltas = items.map((el, i) => {
  //         const r = el.getBoundingClientRect();
  //         const currentLeft = r.left - vpRect.left;

  //         const targetLeft = spacing * i;

  //         return targetLeft - currentLeft;
  //       });

  //       setters = items.map(
  //         (el) => gsap.quickSetter(el, "x", "px") as (v: number) => void,
  //       );
  //     };

  //     measure();

  //     const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
  //     const delayStep = 0.08;
  //     const activeSpan = 0.55;

  //     const st = ScrollTrigger.create({
  //       trigger: sectionRef.current!,
  //       start: "top top",
  //       end: "bottom 70%", // độ dài scroll (bạn chỉnh theo cảm giác)
  //       scrub: true,
  //       invalidateOnRefresh: true,
  //       onRefresh: measure,
  //       onUpdate: (self) => {
  //         const p = self.progress;

  //         for (let i = 0; i < items.length; i++) {
  //           const pi = clamp01((p - delayStep * i) / activeSpan);
  //           const eased = gsap.parseEase("power2.out")(pi);
  //           setters[i](deltas[i] * eased);
  //         }
  //       },
  //     });

  //     // responsive: khi resize thì refresh lại
  //     const onResize = () => ScrollTrigger.refresh();
  //     window.addEventListener("resize", onResize);

  //     return () => {
  //       window.removeEventListener("resize", onResize);
  //       st.kill();
  //     };
  //   }, sectionRef);

  //   return () => ctx.revert();
  // }, []);

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
                className={`text-7xl font-bold text-transparent`}
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

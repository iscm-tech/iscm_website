"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import Script from "next/script";
import { useEffect } from "react";

export default function Page() {
  const i18n = useTranslations();
  const locale = useLocale();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/move-system/hub3d.js";
    script.async = true;

    document.body.appendChild(script);
    console.log("alsdkjfalskjdf");

    return () => {
      document.body.removeChild(script);
      window.__HUB3D__?.destroy();
    };
  }, []);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
        strategy="beforeInteractive"
      />

      {/* <!-- ========================= Hero (3D city) ========================= --> */}
      <section className="hero">
        <div id="hub3d"></div>

        {/* <!-- Centre text overlay --> */}
        <div className="hero-content">
          <div className="eyebrow" data-i18n="hero.eyebrow">
            {i18n("move-system.hero.eyebrow")}
          </div>
          <h1 className="hero-title" data-i18n="hero.title">
            {locale === "en" ? (
              <>
                MOVE <em>System</em>
              </>
            ) : (
              <>
                Hệ thống <em>MOVE</em>
              </>
            )}
          </h1>
          <p className="hero-sub" data-i18n="hero.sub">
            {i18n("move-system.hero.sub")}
          </p>
        </div>

        <div className="hero-hint">{i18n("move-system.hero.hint")} </div>
      </section>
      {/* <!-- ========================= About ========================= --> */}
      <section id="about">
        <div className="container">
          {/* <!-- Slide 2 design: two-column layout --> */}
          <div className="about-two-col">
            {/* <!-- Left column --> */}
            <div
              className="about-col-left"
              style={{ paddingRight: "3rem", paddingTop: ".5rem" }}
            >
              <div
                className="eyebrow"
                data-i18n="about.eyebrow"
                style={{ marginBottom: "1rem" }}
              >
                {i18n("move-system.about.eyebrow")}
              </div>
              <h2
                data-i18n="about.title"
                style={{
                  fontSize: "clamp(1.9rem, 4vw, 2.8rem)",
                  lineHeight: 1.15,
                  margin: "0 0 .6rem",
                  color: "var(--burgundy)",
                }}
              >
                {i18n("move-system.about.title")}
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--muted)",
                  margin: "0 0 2rem",
                  letterSpacing: ".02em",
                }}
              >
                Mobility-oriented, Operations,
                <br />
                Visualization &amp; Environment System
              </p>
              <p
                data-i18n="about.body3"
                style={{
                  fontSize: ".95rem",
                  color: "var(--ink-soft)",
                  lineHeight: 1.75,
                  borderLeft: "2px solid var(--burgundy)",
                  paddingLeft: "1.2rem",
                }}
              >
                {i18n("move-system.about.body3")}
              </p>
            </div>
            {/* <!-- Divider --> */}
            <div
              className="about-divider"
              style={{
                background: "rgba(122, 31, 46, .15)",
                alignSelf: "stretch",
              }}
            ></div>
            {/* <!-- Right column --> */}
            <div
              className="about-col-right"
              style={{
                paddingLeft: "3rem",
              }}
            >
              <p
                data-i18n="about.body1"
                style={{
                  fontSize: ".97rem",
                  color: "var(--ink-soft)",
                  lineHeight: 1.78,
                  marginBottom: "1.4rem",
                }}
              >
                {i18n("move-system.about.body1")}
              </p>
              <p
                data-i18n="about.body2"
                style={{
                  fontSize: ".97rem",
                  color: "var(--ink-soft)",
                  lineHeight: 1.78,
                }}
              >
                {i18n("move-system.about.body2")}
              </p>
            </div>
          </div>

          {/* <!-- Arch diagram — actual image, full width, big --> */}
          <div
            style={{
              margin: "0 -2rem",
              position: "relative",
            }}
          >
            <img
              src="/images/center&lab/move-system/Structure_5Apr.jpg"
              alt="MOVE System architecture — four integrated laboratories within the Urban System"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                minHeight: "420px",
                objectFit: "contain",
                background: "#f8f6f3",
              }}
            />
          </div>

          {/* <!-- Caption --> */}
          <p
            style={{
              textAlign: "center",
              color: "var(--muted, #6E6760)",
              fontSize: ".82rem",
              marginTop: "1rem",
              letterSpacing: ".04em",
            }}
          >
            Four integrated laboratories &nbsp;·&nbsp; ISCM &nbsp;·&nbsp;
            University of Economics Ho Chi Minh City
          </p>
        </div>
      </section>
      {/* <!-- ========================= Structure / Labs ========================= --> */}
      <section
        id="structure"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(122,31,46,0.03))",
        }}
      >
        <div className="container">
          <div className="section-head">
            <div className="eyebrow" data-i18n="structure.eyebrow">
              {i18n("move-system.structure.eyebrow")}
            </div>
            <h2 data-i18n="structure.title">
              {i18n("move-system.structure.title")}
            </h2>
            <p data-i18n="structure.sub">{i18n("move-system.structure.sub")}</p>
          </div>
          <div className="grid-4">
            <Link className="lab-card" href="/move-system/labs/see">
              <div className="num">LAB · 01 / SEE</div>
              <h3 data-i18n="lab.see.name">
                {i18n("move-system.lab.see.name")}
              </h3>
              <p>
                Road safety research for Vietnamese road users — using
                gamification, immersive VR, eye-tracking, and machine learning
                to build hazard perception, safe behaviours, and evidence-based
                policy insights.
              </p>
              <span className="arrow">→</span>
            </Link>
            <Link className="lab-card" href="/move-system/labs/smart">
              <div className="num">LAB · 02 / SML</div>
              <h3 data-i18n="lab.smart.name">
                {i18n("move-system.lab.smart.name")}
              </h3>
              <p>
                Intelligent transport and sustainable urban mobility —
                integrating TOD planning, MaaS, smart traffic operations, and
                last-mile EV micro-mobility through AI-driven simulation and
                real-world pilots.
              </p>
              <span className="arrow">→</span>
            </Link>
            <Link className="lab-card" href="/move-system/labs/rail">
              <div className="num">LAB · 03 / RAIL</div>
              <h3 data-i18n="lab.rail.name">
                {i18n("move-system.lab.rail.name")}
              </h3>
              <p>
                Rail systems capacity-building through simulation testbeds —
                rolling stock mock-ups, signalling simulators, PTC/CBTC modules,
                and SCADA systems for modern rail operations and maintenance.
              </p>
              <span className="arrow">→</span>
            </Link>
            <Link className="lab-card" href="/move-system/labs/ctrlab">
              <div className="num">LAB · 04 / CTR</div>
              <h3 data-i18n="lab.ctr.name">
                {i18n("move-system.lab.ctr.name")}
              </h3>
              <p>
                Carbon transition science — quantifying and controlling
                emissions through air quality modelling, urban digital twin, and
                energy efficiency analytics toward net-zero urban mobility in
                Vietnam.
              </p>
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
      {/* <!-- ========================= People ========================= --> */}
      <section id="people">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow" data-i18n="people.eyebrow">
              {i18n("move-system.people.eyebrow")}
            </div>
            <h2 data-i18n="people.title">{i18n("move-system.people.title")}</h2>
            <p data-i18n="people.sub">{i18n("move-system.people.sub")}</p>
          </div>
          <div className="grid-3">
            <div className="person-card">
              <div
                className="person-avatar"
                style={{
                  overflow: "hidden",
                  padding: 0,
                }}
              >
                <img
                  src="/images/center&lab/move-system/slide44_img2.png"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                  }}
                  alt="Tu Anh Trinh"
                />
              </div>
              <div className="role">Director of ISCM</div>
              <h4>Assoc. Prof. Tu Anh Trinh</h4>
              <div className="email">trinhtuanh@ueh.edu.vn</div>
              <p className="person-note">
                MOVE System lead · Potential partners
              </p>
            </div>
            <div className="person-card">
              <div
                className="person-avatar"
                style={{
                  overflow: "hidden",
                  padding: 0,
                }}
              >
                <img
                  src="/images/center&lab/move-system/slide44_img11.png"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                  }}
                  alt="Phan Le Truong An"
                />
              </div>
              <div className="role">Senior Researcher</div>
              <h4>Phan Le Truong An, PhD Candidate</h4>
              <div className="email">anlpt@ueh.edu.vn</div>
              <p className="person-note">SEE Living Lab · Researcher</p>
            </div>
            <div className="person-card">
              <div
                className="person-avatar"
                style={{
                  overflow: "hidden",
                  padding: 0,
                }}
              >
                <img
                  src="/images/center&lab/move-system/slide44_img10.png"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                  }}
                  alt="Vo Dao Chi"
                />
              </div>
              <div className="role">Lecturer</div>
              <h4>Vo Dao Chi, PhD</h4>
              <div className="email">chivd@ueh.edu.vn</div>
              <p className="person-note">
                Smart Mobility Lab · MaaS and CE-M Program
              </p>
            </div>
            <div className="person-card">
              <div
                className="person-avatar"
                style={{
                  overflow: "hidden",
                  padding: 0,
                }}
              >
                <img
                  src="/images/center&lab/move-system/slide44_img7.png"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                  }}
                  alt="Pham Nguyen Hoai"
                />
              </div>
              <div className="role">Director of BMOM</div>
              <h4>Pham Nguyen Hoai, PhD</h4>
              <div className="email">hoaipm@ueh.edu.vn</div>
              <p className="person-note">
                CE-Rail@UEH · Rail-city smart corridor
              </p>
            </div>
            <div className="person-card">
              <div
                className="person-avatar"
                style={{
                  overflow: "hidden",
                  padding: 0,
                }}
              >
                <img
                  src="/images/center&lab/move-system/slide44_img29.png"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                  }}
                  alt="Quang Tran Vuong"
                />
              </div>
              <div className="role">Lecturer</div>
              <h4>Quang Tran Vuong, PhD</h4>
              <div className="email">quangvt@ueh.edu.vn</div>
              <p className="person-note">
                CtrLab · Lecturer in Environment Science and Engineering
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ========================= Funding ========================= --> */}
      <section
        id="funding"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(122,31,46,0.03))",
        }}
      >
        <div className="container">
          <div className="section-head">
            <div className="eyebrow" data-i18n="funding.eyebrow">
              {i18n("move-system.funding.eyebrow")}
            </div>
            <h2 data-i18n="funding.title">
              {i18n("move-system.funding.title")}
            </h2>
            <p data-i18n="funding.lead">{i18n("move-system.funding.lead")}</p>
          </div>

          <div className="funding-map" aria-label="MOVE System funding map">
            <div className="funding-card funding-card--intl">
              <div className="funding-card__top">
                <span className="funding-icon">01</span>
                <span
                  className="funding-scale"
                  data-i18n="funding.scale.global"
                >
                  {i18n("move-system.funding.scale_global")}
                </span>
              </div>
              <h3 data-i18n="funding.intl">
                {i18n("move-system.funding.intl")}
              </h3>
              <p data-i18n="funding.intl.desc">
                {i18n("move-system.funding.intl_desc")}
              </p>
              <div
                className="funding-tags"
                aria-label="International funding sources"
              >
                <span>FWO</span>
                <span>KOICA</span>
                <span>JICA</span>
                <span>DFG</span>
              </div>
            </div>

            <div className="funding-card funding-card--national">
              <div className="funding-card__top">
                <span className="funding-icon">02</span>
                <span className="funding-scale" data-i18n="funding.scale.vn">
                  {i18n("move-system.funding.scale_vn")}
                </span>
              </div>
              <h3 data-i18n="funding.national">
                {i18n("move-system.funding.national")}
              </h3>
              <p data-i18n="funding.national.desc">
                {i18n("move-system.funding.national_desc")}
              </p>
              <div
                className="funding-tags"
                aria-label="National funding sources"
              >
                <span>NAFOSTED</span>
                <span data-i18n="funding.ministry">
                  {i18n("move-system.funding.ministry")}
                </span>
                <span data-i18n="funding.department">
                  {i18n("move-system.funding.department")}
                </span>
                <span>UEH</span>
              </div>
            </div>

            <div className="funding-card funding-card--private">
              <div className="funding-card__top">
                <span className="funding-icon">03</span>
                <span
                  className="funding-scale"
                  data-i18n="funding.scale.market"
                >
                  {i18n("move-system.funding.scale_market")}
                </span>
              </div>
              <h3 data-i18n="funding.private">
                {i18n("move-system.funding.private")}
              </h3>
              <p data-i18n="funding.private.desc">
                {i18n("move-system.funding.private_desc")}
              </p>
              <div
                className="funding-tags"
                aria-label="Private funding sources"
              >
                <span>VinIF</span>
                <span data-i18n="funding.corporate">
                  {i18n("move-system.funding.corporate")}
                </span>
                <span data-i18n="funding.industry">
                  {i18n("move-system.funding.industry")}
                </span>
              </div>
            </div>
          </div>

          <div
            className="funding-flow"
            aria-label="Funding implementation flow"
          >
            <div className="funding-flow__item">
              <span>1</span>
              <strong data-i18n="funding.flow1">
                {i18n("move-system.funding.flow1")}
              </strong>
            </div>
            <div className="funding-flow__item">
              <span>2</span>
              <strong data-i18n="funding.flow2">
                {i18n("move-system.funding.flow2")}
              </strong>
            </div>
            <div className="funding-flow__item">
              <span>3</span>
              <strong data-i18n="funding.flow3">
                {i18n("move-system.funding.flow3")}
              </strong>
            </div>
            <div className="funding-flow__item">
              <span>4</span>
              <strong data-i18n="funding.flow4">
                {i18n("move-system.funding.flow4")}
              </strong>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ========================= Tech & Tools ========================= --> */}
      <section id="tech">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow" data-i18n="tech.eyebrow">
              {i18n("move-system.tech.eyebrow")}
            </div>
            <h2 data-i18n="tech.title">{i18n("move-system.tech.title")}</h2>
            <p
              style={{
                color: "var(--ink-soft)",
                fontSize: "1.05rem",
                margin: 0,
              }}
            >
              The platform combines simulation, AI, immersive interfaces, and
              sensing hardware for MOVE&apos;s four applied research labs.
            </p>
          </div>

          <div
            className="tech-bento"
            aria-label="MOVE technology and tools from the research deck"
          >
            {/* <!-- 01 ABM — hero, spans both rows on the left --> */}
            <article className="tech-tile tech-tile--abm">
              <div className="tech-tile-media">
                <img
                  src="/images/center&lab/move-system/tech/image47.gif"
                  alt="Agent-based Model simulation"
                />
              </div>
              <div className="tech-tile-overlay">
                <span className="tech-index">01</span>
                <h3>Agent-based Model</h3>
                <p>
                  Urban and mobility behaviour simulation for testing service
                  adoption, interaction effects, and policy scenarios before
                  field deployment.
                </p>
                <div className="tech-tools">
                  <span>NetLogo / ABM</span>
                  <span>Scenario logic</span>
                  <span>Behaviour rules</span>
                </div>
              </div>
            </article>

            {/* <!-- 02 ML / AI — top right --> */}
            <article className="tech-tile tech-tile--ai">
              <div className="tech-tile-media">
                <img
                  src="/images/center&lab/move-system/tech/image48.jpg"
                  alt="Machine Learning AI and Big Data"
                />
              </div>
              <div className="tech-tile-overlay">
                <span className="tech-index">02</span>
                <h3>Machine Learning, AI – Big Data</h3>
                <p>
                  Data-driven prediction, classification, and insight generation
                  across safety, mobility demand, and rail operations.
                </p>
                <div className="tech-tools">
                  <span>Machine learning</span>
                  <span>AI analytics</span>
                  <span>Big data</span>
                </div>
              </div>
            </article>

            {/* <!-- 04 AR/VR — bottom right --> */}
            <article className="tech-tile tech-tile--immersive">
              <div className="tech-tile-media">
                <img
                  src="/images/center&lab/move-system/tech/image31.png"
                  alt="AR VR and Hologram training environment"
                />
              </div>
              <div className="tech-tile-overlay">
                <span className="tech-index">04</span>
                <h3>AR, VR and Hologram</h3>
                <p>
                  Immersive training and interactive simulation for hazard
                  perception, driver response, smart corridor testing, and
                  professional capacity building.
                </p>
                <div className="tech-tools">
                  <span>Unity / Unreal</span>
                  <span>Eye-tracking</span>
                  <span>VISSIM / AIMSUN</span>
                  <span>360 camera</span>
                </div>
              </div>
            </article>

            {/* <!-- 03 Digital Twin — full width, image mosaic + text panel --> */}
            <article className="tech-tile tech-tile--twin">
              <div className="tech-tile-images">
                <img
                  src="/images/center&lab/move-system/tech/image27.png"
                  alt="Digital Twin hologram table model"
                />
                <img
                  src="/images/center&lab/move-system/tech/image28.png"
                  alt="Digital Twin interactive platform"
                />
                <img
                  src="/images/center&lab/move-system/tech/image29.png"
                  alt="Hologram demonstration"
                />
              </div>
              <div className="tech-tile-twin-copy">
                <span className="tech-index">03</span>
                <h3>Digital Twin, Hologram</h3>
                <p>
                  Shared spatial models for explaining network operations,
                  street experiments, environmental risk, and infrastructure
                  decisions in a more tangible format.
                </p>
                <div className="tech-tools">
                  <span>Digital twin</span>
                  <span>Hologram</span>
                  <span>Spatial visualisation</span>
                </div>
              </div>
            </article>
          </div>

          <div className="tech-facilities">
            <div>
              <span>VR/AR Systems &amp; Interactive Simulation</span>
              <strong>
                Unity/Unreal · Eyetracking · VISSIM/AIMSUN · Camera 360
              </strong>
            </div>
            <div>
              <span>Traffic Data Sensors &amp; Simulation</span>
              <strong>
                AI traffic camera · GoPro · GPS trackers · Analysis sensors ·
                Traffic simulation model
              </strong>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

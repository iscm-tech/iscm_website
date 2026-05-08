"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect } from "react";

export default function View() {
  const i18n = useTranslations();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/move-system/ctrlab.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="ctrlab">
      {/* <!-- ========================= Lab Hero ========================= --> */}
      <section
        className="lab-hero"
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="letters" aria-hidden="true">
          CTR
        </div>
        <div className="container">
          <Link className="back-link" href="/move-system" data-i18n="ctr.back">
            {i18n("move-system.ctr.back")}
          </Link>
          <div className="eyebrow">LAB · 04 / CTR — CARBON TRANSITION</div>
          <h1 data-i18n="ctr.h1">{i18n("move-system.ctr.h1")}</h1>
          <p className="lead" data-i18n="ctr.lead">
            {i18n("move-system.ctr.lead")}
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: ".4rem",
              marginTop: "1rem",
            }}
          >
            <span className="pill dark">Net-Zero</span>
            <span className="pill">Digital Twin</span>
            <span className="pill">WRF-CMAQ</span>
            <span className="pill">Emission Profiling</span>
            <span className="pill">Green Policy</span>
            <span className="pill">System Optimization</span>
          </div>
        </div>
      </section>

      {/* <!-- ========================= Lab identity / Full Intro ========================= --> */}
      <section
        style={{
          background: "linear-gradient(135deg, #1A3A2A 0%, #0D2118 100%)",
          color: "#F5F2EE",
          padding: "4rem 0",
        }}
      >
        <div className="container">
          {/* <!-- Mission block --> */}
          <div
            style={{
              maxWidth: "820px",
              margin: "0 auto 2.5rem",
              textAlign: "center",
            }}
          >
            <div
              className="eyebrow"
              style={{
                color: "rgba(245,242,238,.55)",
                letterSpacing: ".18em",
              }}
            >
              ENVIRONMENTAL RESEARCH LAB · CTRLAB · ISCM · UEH
            </div>
            <h2
              style={{
                color: "#F5F2EE",
                fontSize: "clamp(1.55rem, 3.5vw, 2.2rem)",
                margin: ".6rem 0 1.2rem",
                lineHeight: 1.25,
              }}
            >
              Monitoring and Managing Vietnam&apos;s Urban Environment
            </h2>
            <p
              style={{
                color: "rgba(245,242,238,.82)",
                fontSize: "1.05rem",
                lineHeight: 1.75,
                margin: "0 0 1rem",
              }}
            >
              CtrLab is an{" "}
              <strong
                style={{
                  color: "#F5F2EE",
                }}
              >
                environmental research lab
              </strong>{" "}
              that integrates atmospheric science, climate systems, and energy
              transition to understand, measure, and manage the environmental
              pressures on Vietnam&apos;s rapidly urbanising cities. The lab
              develops scientific tools and policy evidence across air quality,
              climate adaptation, and low-carbon energy — treating the urban
              environment as an interconnected system.
            </p>
            <p
              style={{
                color: "rgba(245,242,238,.72)",
                fontSize: ".97rem",
                lineHeight: 1.72,
                margin: "0 0 1.5rem",
              }}
            >
              From mapping PM2.5 pollution across Ho Chi Minh City with WRF-CMAQ
              atmospheric modelling, to building urban digital twins that
              simulate heat islands and flooding scenarios, to analysing
              Vietnam&apos;s energy decoupling trajectory — CtrLab bridges
              environmental science with actionable urban policy.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: ".45rem",
              }}
            >
              <span
                style={{
                  background: "rgba(111,207,151,.15)",
                  color: "#6fcf97",
                  border: "1px solid rgba(111,207,151,.3)",
                  padding: "4px 11px",
                  borderRadius: "4px",
                  fontSize: ".75rem",
                  fontWeight: 600,
                  letterSpacing: ".08em",
                }}
              >
                Air Quality Monitoring
              </span>
              <span
                style={{
                  background: "rgba(111,207,151,.15)",
                  color: "#6fcf97",
                  border: "1px solid rgba(111,207,151,.3)",
                  padding: "4px 11px",
                  borderRadius: "4px",
                  fontSize: ".75rem",
                  fontWeight: 600,
                  letterSpacing: ".08em",
                }}
              >
                PM2.5 · WRF-CMAQ
              </span>
              <span
                style={{
                  background: "rgba(111,207,151,.15)",
                  color: "#6fcf97",
                  border: "1px solid rgba(111,207,151,.3)",
                  padding: "4px 11px",
                  borderRadius: "4px",
                  fontSize: ".75rem",
                  fontWeight: 600,
                  letterSpacing: ".08em",
                }}
              >
                Urban Heat Island
              </span>
              <span
                style={{
                  background: "rgba(111,207,151,.15)",
                  color: "#6fcf97",
                  border: "1px solid rgba(111,207,151,.3)",
                  padding: "4px 11px",
                  borderRadius: "4px",
                  fontSize: ".75rem",
                  fontWeight: 600,
                  letterSpacing: ".08em",
                }}
              >
                Climate Adaptation
              </span>
              <span
                style={{
                  background: "rgba(111,207,151,.15)",
                  color: "#6fcf97",
                  border: "1px solid rgba(111,207,151,.3)",
                  padding: "4px 11px",
                  borderRadius: "4px",
                  fontSize: ".75rem",
                  fontWeight: 600,
                  letterSpacing: ".08em",
                }}
              >
                Energy Transition
              </span>
              <span
                style={{
                  background: "rgba(111,207,151,.15)",
                  color: "#6fcf97",
                  border: "1px solid rgba(111,207,151,.3)",
                  padding: "4px 11px",
                  borderRadius: "4px",
                  fontSize: ".75rem",
                  fontWeight: 600,
                  letterSpacing: ".08em",
                }}
              >
                Net-Zero Pathways
              </span>
            </div>
          </div>

          {/* <!-- Environmental Systems SVG Visualization --> */}
          <div
            style={{
              background: "rgba(0,0,0,.70)",
              border: "1px solid rgba(111,207,151,.22)",
              borderRadius: "12px",
              padding: "1.8rem 1.4rem",
              marginBottom: "3rem",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                fontSize: ".68rem",
                fontWeight: 700,
                letterSpacing: ".18em",
                color: "rgba(245,242,238,.4)",
                textAlign: "center",
                marginBottom: "1.2rem",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              ENVIRONMENTAL MONITORING SYSTEM · CTRLAB RESEARCH FRAMEWORK
            </div>
            <div
              className="research-framework"
              aria-label="CtrLab research framework"
              style={{
                display: "none",
              }}
            >
              <div className="rf-streams">
                <article
                  className="rf-stream"
                  style={
                    {
                      "--rf-color": "#7ab8e8",
                    } as React.CSSProperties
                  }
                >
                  <div className="rf-stream-head">
                    <h3>WRF-CMAQ Modelling</h3>
                    <span className="rf-code">01</span>
                  </div>
                  <p>
                    Meteorological fields, pollutant dispersion, emission
                    inventory integration, and satellite validation.
                  </p>
                </article>
                <article
                  className="rf-stream"
                  style={
                    {
                      "--rf-color": "#f2c94c",
                    } as React.CSSProperties
                  }
                >
                  <div className="rf-stream-head">
                    <h3>Air Quality</h3>
                    <span className="rf-code">02</span>
                  </div>
                  <p>
                    PM2.5 and NOx concentration mapping, health exposure risk
                    assessment, and HCMC urban monitoring.
                  </p>
                </article>
                <article
                  className="rf-stream"
                  style={
                    {
                      "--rf-color": "#eb8f6f",
                    } as React.CSSProperties
                  }
                >
                  <div className="rf-stream-head">
                    <h3>Climate Adaptation</h3>
                    <span className="rf-code">03</span>
                  </div>
                  <p>
                    Urban digital twin, heat and flooding scenarios, and
                    transport-pollution-temperature coupling.
                  </p>
                </article>
                <article
                  className="rf-stream"
                  style={
                    {
                      "--rf-color": "#6fcf97",
                    } as React.CSSProperties
                  }
                >
                  <div className="rf-stream-head">
                    <h3>Energy Transition</h3>
                    <span className="rf-code">04</span>
                  </div>
                  <p>
                    Renewables, electricity efficiency, energy intensity turning
                    points, and net-zero urban pathways.
                  </p>
                </article>
              </div>
              <aside
                className="rf-platform"
                style={
                  {
                    "--rf-color": "#6fcf97",
                  } as React.CSSProperties
                }
              >
                <h3>CtrLab Platform</h3>
                <p>
                  Environmental monitoring and modelling for scenario
                  simulation, policy evidence, urban digital twins, and risk
                  assessment.
                </p>
                <div className="rf-output-grid">
                  <div
                    className="rf-output"
                    style={
                      {
                        "--rf-color": "#7ab8e8",
                      } as React.CSSProperties
                    }
                  >
                    <strong>Risk Maps</strong>
                    <p>PM2.5 exposure</p>
                  </div>
                  <div
                    className="rf-output"
                    style={
                      {
                        "--rf-color": "#f2c94c",
                      } as React.CSSProperties
                    }
                  >
                    <strong>Digital Twin</strong>
                    <p>urban scenarios</p>
                  </div>
                  <div
                    className="rf-output"
                    style={
                      {
                        "--rf-color": "#6fcf97",
                      } as React.CSSProperties
                    }
                  >
                    <strong>Green Policy</strong>
                    <p>net-zero tools</p>
                  </div>
                </div>
              </aside>
            </div>
            <div className="rf-note">
              Environmental intelligence for Vietnam&apos;s urban future
            </div>
            <svg
              viewBox="0 0 860 300"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="envAtmGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="rgba(111,168,220,0.15)" />
                  <stop offset="100%" stop-color="rgba(111,168,220,0.03)" />
                </linearGradient>
                <linearGradient id="envAqGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="rgba(242,201,76,0.14)" />
                  <stop offset="100%" stop-color="rgba(242,201,76,0.03)" />
                </linearGradient>
                <linearGradient id="envUrbGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="rgba(235,100,80,0.13)" />
                  <stop offset="100%" stop-color="rgba(235,100,80,0.02)" />
                </linearGradient>
                <linearGradient id="envEnGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="rgba(111,207,151,0.14)" />
                  <stop offset="100%" stop-color="rgba(111,207,151,0.03)" />
                </linearGradient>
              </defs>

              {/* <!-- ── LAYER 1: Atmosphere / WRF-CMAQ ── --> */}
              <rect
                x="16"
                y="14"
                width="528"
                height="58"
                rx="6"
                fill="url(#envAtmGrad)"
                stroke="rgba(111,168,220,0.28)"
                stroke-width="1"
              />
              {/* <!-- WRF grid dots --> */}
              <circle cx="55" cy="43" r="3" fill="rgba(111,168,220,0.55)" />
              <circle cx="80" cy="36" r="2.2" fill="rgba(111,168,220,0.4)" />
              <circle cx="108" cy="48" r="3.5" fill="rgba(111,168,220,0.6)" />
              <circle cx="136" cy="34" r="2" fill="rgba(111,168,220,0.35)" />
              <circle cx="72" cy="56" r="2" fill="rgba(111,168,220,0.38)" />
              <circle cx="160" cy="50" r="2.8" fill="rgba(111,168,220,0.45)" />
              <circle cx="190" cy="38" r="2" fill="rgba(111,168,220,0.3)" />
              <text
                x="216"
                y="36"
                fill="#7ab8e8"
                font-size="8.5"
                font-weight="700"
                letter-spacing="1.8"
                font-family="monospace"
              >
                WRF-CMAQ ATMOSPHERIC MODELLING
              </text>
              <text x="216" y="54" fill="rgba(245,242,238,0.45)" font-size="8">
                Meteorological fields · Pollutant dispersion · Emission
                inventory integration · Satellite validation
              </text>
              <text
                x="20"
                y="65"
                fill="rgba(111,168,220,0.5)"
                font-size="7.5"
                font-style="italic"
                font-family="monospace"
              >
                Atmosphere
              </text>

              {/* <!-- ── LAYER 2: Air Quality / PM2.5 ── --> */}
              <rect
                x="16"
                y="80"
                width="528"
                height="56"
                rx="6"
                fill="url(#envAqGrad)"
                stroke="rgba(242,201,76,0.28)"
                stroke-width="1"
              />
              {/* <!-- haze cloud ellipses --> */}
              <ellipse
                cx="62"
                cy="108"
                rx="24"
                ry="11"
                fill="rgba(242,201,76,0.13)"
              />
              <ellipse
                cx="95"
                cy="102"
                rx="19"
                ry="9"
                fill="rgba(242,201,76,0.10)"
              />
              <ellipse
                cx="130"
                cy="112"
                rx="27"
                ry="11"
                fill="rgba(242,201,76,0.11)"
              />
              <ellipse
                cx="175"
                cy="104"
                rx="16"
                ry="8"
                fill="rgba(242,201,76,0.09)"
              />
              {/* <!-- PM2.5 dot particles --> */}
              <circle cx="55" cy="96" r="1.5" fill="rgba(242,201,76,0.55)" />
              <circle cx="78" cy="100" r="1.2" fill="rgba(242,201,76,0.45)" />
              <circle cx="105" cy="92" r="1" fill="rgba(242,201,76,0.5)" />
              <circle cx="140" cy="98" r="1.5" fill="rgba(242,201,76,0.4)" />
              <text
                x="216"
                y="98"
                fill="#f2c94c"
                font-size="8.5"
                font-weight="700"
                letter-spacing="1.8"
                font-family="monospace"
              >
                AIR QUALITY · PM2.5 / NOx CONCENTRATION
              </text>
              <text x="216" y="116" fill="rgba(245,242,238,0.45)" font-size="8">
                Spatial distribution mapping · Health exposure risk assessment ·
                HCMC urban monitoring network
              </text>
              <text
                x="20"
                y="128"
                fill="rgba(242,201,76,0.5)"
                font-size="7.5"
                font-style="italic"
                font-family="monospace"
              >
                Air Quality
              </text>

              {/* <!-- ── LAYER 3: Urban Heat / Climate Adaptation ── --> */}
              <rect
                x="16"
                y="144"
                width="528"
                height="56"
                rx="6"
                fill="url(#envUrbGrad)"
                stroke="rgba(235,100,80,0.22)"
                stroke-width="1"
              />
              {/* <!-- Building silhouettes --> */}
              <rect
                x="38"
                y="170"
                width="13"
                height="26"
                fill="rgba(235,100,80,0.22)"
                rx="1"
              />
              <rect
                x="56"
                y="162"
                width="19"
                height="34"
                fill="rgba(235,100,80,0.27)"
                rx="1"
              />
              <rect
                x="80"
                y="172"
                width="11"
                height="24"
                fill="rgba(235,100,80,0.2)"
                rx="1"
              />
              <rect
                x="97"
                y="158"
                width="15"
                height="38"
                fill="rgba(235,100,80,0.24)"
                rx="1"
              />
              <rect
                x="118"
                y="166"
                width="13"
                height="30"
                fill="rgba(235,100,80,0.22)"
                rx="1"
              />
              <rect
                x="137"
                y="174"
                width="10"
                height="22"
                fill="rgba(235,100,80,0.18)"
                rx="1"
              />
              {/* <!-- heat wave arcs --> */}
              <path
                d="M 42 166 Q 48 160 54 166 Q 60 160 66 166"
                stroke="rgba(235,100,80,0.45)"
                stroke-width="1"
                fill="none"
              />
              <path
                d="M 82 156 Q 88 150 94 156 Q 100 150 106 156"
                stroke="rgba(235,100,80,0.38)"
                stroke-width="1"
                fill="none"
              />
              <path
                d="M 120 161 Q 126 155 132 161"
                stroke="rgba(235,100,80,0.35)"
                stroke-width="1"
                fill="none"
              />
              <text
                x="216"
                y="162"
                fill="#eb8f6f"
                font-size="8.5"
                font-weight="700"
                letter-spacing="1.8"
                font-family="monospace"
              >
                CLIMATE ADAPTATION · URBAN HEAT ISLAND
              </text>
              <text x="216" y="180" fill="rgba(245,242,238,0.45)" font-size="8">
                Urban digital twin · Heat &amp; flooding scenario modelling ·
                Transport–pollution–temperature coupling
              </text>
              <text
                x="20"
                y="192"
                fill="rgba(235,100,80,0.5)"
                font-size="7.5"
                font-style="italic"
                font-family="monospace"
              >
                Climate
              </text>

              {/* <!-- ── LAYER 4: Energy Transition ── --> */}
              <rect
                x="16"
                y="208"
                width="528"
                height="56"
                rx="6"
                fill="url(#envEnGrad)"
                stroke="rgba(111,207,151,0.28)"
                stroke-width="1"
              />
              {/* <!-- Solar panels --> */}
              <rect
                x="38"
                y="226"
                width="22"
                height="13"
                rx="1"
                fill="rgba(111,207,151,0.22)"
                stroke="rgba(111,207,151,0.4)"
                stroke-width="0.5"
              />
              <line
                x1="49"
                y1="226"
                x2="49"
                y2="239"
                stroke="rgba(111,207,151,0.3)"
                stroke-width="0.5"
              />
              <line
                x1="38"
                y1="232"
                x2="60"
                y2="232"
                stroke="rgba(111,207,151,0.3)"
                stroke-width="0.5"
              />
              <rect
                x="68"
                y="228"
                width="22"
                height="13"
                rx="1"
                fill="rgba(111,207,151,0.22)"
                stroke="rgba(111,207,151,0.4)"
                stroke-width="0.5"
              />
              <line
                x1="79"
                y1="228"
                x2="79"
                y2="241"
                stroke="rgba(111,207,151,0.3)"
                stroke-width="0.5"
              />
              <line
                x1="68"
                y1="234"
                x2="90"
                y2="234"
                stroke="rgba(111,207,151,0.3)"
                stroke-width="0.5"
              />
              {/* <!-- Wind turbine --> */}
              <line
                x1="120"
                y1="222"
                x2="120"
                y2="258"
                stroke="rgba(111,207,151,0.45)"
                stroke-width="1.2"
              />
              <ellipse
                cx="120"
                cy="224"
                rx="9"
                ry="3.5"
                fill="rgba(111,207,151,0.2)"
                stroke="rgba(111,207,151,0.38)"
                stroke-width="0.5"
              />
              <line
                x1="130"
                y1="230"
                x2="120"
                y2="224"
                stroke="rgba(111,207,151,0.35)"
                stroke-width="0.5"
              />
              <line
                x1="110"
                y1="230"
                x2="120"
                y2="224"
                stroke="rgba(111,207,151,0.35)"
                stroke-width="0.5"
              />
              {/* <!-- Power line --> */}
              <line
                x1="148"
                y1="228"
                x2="180"
                y2="228"
                stroke="rgba(111,207,151,0.3)"
                stroke-width="1.2"
              />
              <line
                x1="152"
                y1="225"
                x2="152"
                y2="235"
                stroke="rgba(111,207,151,0.25)"
                stroke-width="1"
              />
              <line
                x1="172"
                y1="225"
                x2="172"
                y2="235"
                stroke="rgba(111,207,151,0.25)"
                stroke-width="1"
              />
              <text
                x="216"
                y="228"
                fill="#6fcf97"
                font-size="8.5"
                font-weight="700"
                letter-spacing="1.8"
                font-family="monospace"
              >
                ENERGY TRANSITION · DECARBONISATION
              </text>
              <text x="216" y="246" fill="rgba(245,242,238,0.45)" font-size="8">
                Renewables &amp; electricity efficiency · Energy intensity
                turning points · Net-zero urban pathways
              </text>
              <text
                x="20"
                y="256"
                fill="rgba(111,207,151,0.5)"
                font-size="7.5"
                font-style="italic"
                font-family="monospace"
              >
                Energy
              </text>

              {/* <!-- ── Convergence arrows → CtrLab Platform ── --> */}
              <line
                x1="546"
                y1="43"
                x2="588"
                y2="148"
                stroke="rgba(111,168,220,0.42)"
                stroke-width="1.3"
                stroke-dasharray="4,3"
              />
              <line
                x1="546"
                y1="108"
                x2="588"
                y2="153"
                stroke="rgba(242,201,76,0.42)"
                stroke-width="1.3"
                stroke-dasharray="4,3"
              />
              <line
                x1="546"
                y1="172"
                x2="588"
                y2="160"
                stroke="rgba(235,100,80,0.38)"
                stroke-width="1.3"
                stroke-dasharray="4,3"
              />
              <line
                x1="546"
                y1="236"
                x2="588"
                y2="168"
                stroke="rgba(111,207,151,0.42)"
                stroke-width="1.3"
                stroke-dasharray="4,3"
              />
              {/* <!-- Arrowheads --> */}
              <polygon
                points="588,148 582,143 582,153"
                fill="rgba(111,168,220,0.4)"
              />
              <polygon
                points="588,153 582,148 582,158"
                fill="rgba(242,201,76,0.4)"
              />
              <polygon
                points="588,160 582,155 582,165"
                fill="rgba(235,100,80,0.35)"
              />
              <polygon
                points="588,168 582,163 582,173"
                fill="rgba(111,207,151,0.4)"
              />

              {/* <!-- ── CtrLab Central Platform ── --> */}
              <rect
                x="590"
                y="118"
                width="256"
                height="90"
                rx="10"
                fill="rgba(111,207,151,0.10)"
                stroke="rgba(111,207,151,0.38)"
                stroke-width="1.5"
              />
              <text
                x="718"
                y="143"
                text-anchor="middle"
                fill="#6fcf97"
                font-size="9.5"
                font-weight="700"
                letter-spacing="1.8"
                font-family="monospace"
              >
                CTRLAB PLATFORM
              </text>
              <line
                x1="608"
                y1="150"
                x2="830"
                y2="150"
                stroke="rgba(111,207,151,0.2)"
                stroke-width="0.8"
              />
              <text
                x="718"
                y="164"
                text-anchor="middle"
                fill="rgba(245,242,238,0.72)"
                font-size="8.5"
              >
                Environmental Monitoring &amp; Modelling
              </text>
              <text
                x="718"
                y="178"
                text-anchor="middle"
                fill="rgba(245,242,238,0.58)"
                font-size="8"
              >
                Scenario Simulation · Policy Evidence
              </text>
              <text
                x="718"
                y="196"
                text-anchor="middle"
                fill="rgba(245,242,238,0.45)"
                font-size="7.5"
              >
                Urban Digital Twin · Risk Assessment
              </text>

              {/* <!-- ── Output boxes ── --> */}
              {/* <!-- Risk Maps --> */}
              <rect
                x="594"
                y="222"
                width="76"
                height="60"
                rx="6"
                fill="rgba(111,168,220,0.1)"
                stroke="rgba(111,168,220,0.28)"
                stroke-width="1"
              />
              <text
                x="632"
                y="242"
                text-anchor="middle"
                fill="#7ab8e8"
                font-size="8"
                font-weight="700"
                letter-spacing="1"
                font-family="monospace"
              >
                RISK MAPS
              </text>
              <text
                x="632"
                y="256"
                text-anchor="middle"
                fill="rgba(245,242,238,0.5)"
                font-size="7.5"
              >
                PM2.5 exposure
              </text>
              <text
                x="632"
                y="268"
                text-anchor="middle"
                fill="rgba(245,242,238,0.5)"
                font-size="7.5"
              >
                spatial models
              </text>
              {/* <!-- Digital Twin --> */}
              <rect
                x="678"
                y="222"
                width="76"
                height="60"
                rx="6"
                fill="rgba(242,201,76,0.1)"
                stroke="rgba(242,201,76,0.25)"
                stroke-width="1"
              />
              <text
                x="716"
                y="242"
                text-anchor="middle"
                fill="#f2c94c"
                font-size="8"
                font-weight="700"
                letter-spacing="1"
                font-family="monospace"
              >
                DIGITAL
              </text>
              <text
                x="716"
                y="254"
                text-anchor="middle"
                fill="#f2c94c"
                font-size="8"
                font-weight="700"
                letter-spacing="1"
                font-family="monospace"
              >
                TWIN
              </text>
              <text
                x="716"
                y="268"
                text-anchor="middle"
                fill="rgba(245,242,238,0.5)"
                font-size="7.5"
              >
                urban scenarios
              </text>
              {/* <!-- Green Policy --> */}
              <rect
                x="762"
                y="222"
                width="80"
                height="60"
                rx="6"
                fill="rgba(111,207,151,0.1)"
                stroke="rgba(111,207,151,0.25)"
                stroke-width="1"
              />
              <text
                x="802"
                y="240"
                text-anchor="middle"
                fill="#6fcf97"
                font-size="8"
                font-weight="700"
                letter-spacing="1"
                font-family="monospace"
              >
                GREEN
              </text>
              <text
                x="802"
                y="252"
                text-anchor="middle"
                fill="#6fcf97"
                font-size="8"
                font-weight="700"
                letter-spacing="1"
                font-family="monospace"
              >
                POLICY
              </text>
              <text
                x="802"
                y="266"
                text-anchor="middle"
                fill="rgba(245,242,238,0.5)"
                font-size="7.5"
              >
                net-zero tools
              </text>

              {/* <!-- Output arrows from platform --> */}
              <line
                x1="660"
                y1="208"
                x2="632"
                y2="222"
                stroke="rgba(111,168,220,0.35)"
                stroke-width="1"
                stroke-dasharray="2,2"
              />
              <line
                x1="718"
                y1="208"
                x2="716"
                y2="222"
                stroke="rgba(242,201,76,0.35)"
                stroke-width="1"
                stroke-dasharray="2,2"
              />
              <line
                x1="775"
                y1="208"
                x2="800"
                y2="222"
                stroke="rgba(111,207,151,0.35)"
                stroke-width="1"
                stroke-dasharray="2,2"
              />

              {/* <!-- Bottom label --> */}
              <text
                x="430"
                y="293"
                text-anchor="middle"
                fill="rgba(245,242,238,0.22)"
                font-size="7.5"
                letter-spacing="1.5"
                font-family="monospace"
              >
                ENVIRONMENTAL INTELLIGENCE FOR VIETNAM&apos;S URBAN FUTURE
              </text>
            </svg>
          </div>

          {/* <!-- Three research pillars --> */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
              marginBottom: "3rem",
            }}
          >
            <div
              style={{
                background: "rgba(111,168,220,.07)",
                border: "1px solid rgba(111,168,220,.22)",
                borderRadius: "10px",
                padding: "1.6rem 1.4rem",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "rgba(111,168,220,.2)",
                  color: "#7ab8e8",
                  fontSize: ".68rem",
                  fontWeight: 700,
                  letterSpacing: ".14em",
                  padding: "3px 9px",
                  borderRadius: "3px",
                  marginBottom: ".8rem",
                }}
              >
                AIR QUALITY
              </div>
              <h3
                style={{
                  color: "#F5F2EE",
                  margin: "0 0 .6rem",
                  fontSize: "1.05rem",
                }}
              >
                PM2.5 Spatial Modelling
              </h3>
              <p
                style={{
                  color: "rgba(245,242,238,.72)",
                  fontSize: ".88rem",
                  lineHeight: 1.65,
                  margin: "0 0 .8rem",
                }}
              >
                Mapping PM2.5 concentration and resident exposure risk across Ho
                Chi Minh City using WRF-CMAQ atmospheric simulation and emission
                inventory data from vehicles, industry, and biomass burning.
              </p>
              <ul
                className="list-disc! pl-4"
                style={{
                  margin: 0,
                  paddingLeft: "1.1rem",
                  color: "rgba(245,242,238,.55)",
                  fontSize: ".82rem",
                }}
              >
                <li
                  className="list-item! text-[rgba(245,242,238,.55)]!"
                  style={{
                    marginBottom: ".3rem",
                  }}
                >
                  Spatial distribution of PM2.5 in HCMC
                </li>
                <li
                  className="list-item! text-[rgba(245,242,238,.55)]!"
                  style={{
                    marginBottom: ".3rem",
                  }}
                >
                  Urban morphology &amp; pollution interaction
                </li>
                <li
                  className="list-item! text-[rgba(245,242,238,.55)]!"
                  style={{
                    marginBottom: ".3rem",
                  }}
                >
                  Exposure risk &amp; health-impact mapping
                </li>
                <li className="list-item! text-[rgba(245,242,238,.55)]!">
                  Emission inventory · WRF-CMAQ modelling
                </li>
              </ul>
            </div>

            <div
              style={{
                background: "rgba(242,201,76,.06)",
                border: "1px solid rgba(242,201,76,.2)",
                borderRadius: "10px",
                padding: "1.6rem 1.4rem",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "rgba(242,201,76,.18)",
                  color: "#f2c94c",
                  fontSize: ".68rem",
                  fontWeight: 700,
                  letterSpacing: ".14em",
                  padding: "3px 9px",
                  borderRadius: "3px",
                  marginBottom: ".8rem",
                }}
              >
                CLIMATE ADAPTATION
              </div>
              <h3
                style={{
                  color: "#F5F2EE",
                  margin: "0 0 .6rem",
                  fontSize: "1.05rem",
                }}
              >
                Urban Digital Twin
              </h3>
              <p
                style={{
                  color: "rgba(245,242,238,.72)",
                  fontSize: ".88rem",
                  lineHeight: 1.65,
                  margin: "0 0 .8rem",
                }}
              >
                Integrating transportation flow, pollution emission, and urban
                heat into a unified city-scale digital twin for scenario
                simulation — supporting planning against heat islands, flooding,
                and extreme weather events.
              </p>
              <ul
                className="list-disc! pl-4"
                style={{
                  margin: 0,
                  paddingLeft: "1.1rem",
                  color: "rgba(245,242,238,.55)",
                  fontSize: ".82rem",
                }}
              >
                <li
                  className="list-item! text-[rgba(245,242,238,.55)]!"
                  style={{
                    marginBottom: ".3rem",
                  }}
                >
                  Traffic flow &amp; pollution emission coupling
                </li>
                <li
                  className="list-item! text-[rgba(245,242,238,.55)]!"
                  style={{
                    marginBottom: ".3rem",
                  }}
                >
                  Urban heat island &amp; ambient temperature
                </li>
                <li
                  className="list-item! text-[rgba(245,242,238,.55)]!"
                  style={{
                    marginBottom: ".3rem",
                  }}
                >
                  Flooding &amp; climate risk scenarios
                </li>
                <li className="list-item! text-[rgba(245,242,238,.55)]!">
                  Scenario simulation · digital twin platform
                </li>
              </ul>
            </div>

            <div
              style={{
                background: "rgba(111,207,151,.06)",
                border: "1px solid rgba(111,207,151,.2)",
                borderRadius: "10px",
                padding: "1.6rem 1.4rem",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "rgba(111,207,151,.18)",
                  color: "#6fcf97",
                  fontSize: ".68rem",
                  fontWeight: 700,
                  letterSpacing: ".14em",
                  padding: "3px 9px",
                  borderRadius: "3px",
                  marginBottom: ".8rem",
                }}
              >
                ENERGY TRANSITION
              </div>
              <h3
                style={{
                  color: "#F5F2EE",
                  margin: "0 0 .6rem",
                  fontSize: "1.05rem",
                }}
              >
                Decarbonisation Pathways
              </h3>
              <p
                style={{
                  color: "rgba(245,242,238,.72)",
                  fontSize: ".88rem",
                  lineHeight: 1.65,
                  margin: "0 0 .8rem",
                }}
              >
                Long-term analysis of electricity consumption efficiency in
                Vietnam, the role of renewables in decoupling energy from
                economic growth, and the structural drivers of energy intensity
                turning points since 1990.
              </p>
              <ul
                className="list-disc! pl-4"
                style={{
                  margin: 0,
                  paddingLeft: "1.1rem",
                  color: "rgba(245,242,238,.55)",
                  fontSize: ".82rem",
                }}
              >
                <li
                  className="list-item! text-[rgba(245,242,238,.55)]!"
                  style={{
                    marginBottom: ".3rem",
                  }}
                >
                  Electricity efficiency &amp; intensity trends
                </li>
                <li
                  className="list-item! text-[rgba(245,242,238,.55)]!"
                  style={{
                    marginBottom: ".3rem",
                  }}
                >
                  Renewables &amp; energy-growth decoupling
                </li>
                <li
                  className="list-item! text-[rgba(245,242,238,.55)]!"
                  style={{
                    marginBottom: ".3rem",
                  }}
                >
                  Energy intensity turning points
                </li>
                <li className="list-item! text-[rgba(245,242,238,.55)]!">
                  Net-zero urban mobility pathways
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- Expected outcomes row --> */}
          <div
            style={{
              background: "rgba(255,255,255,.05)",
              border: "1px solid rgba(255,255,255,.1)",
              borderRadius: "10px",
              padding: "1.8rem 2rem",
              marginBottom: "3rem",
            }}
          >
            <div
              className="eyebrow"
              style={{
                color: "rgba(245,242,238,.5)",
                marginBottom: "1rem",
              }}
            >
              EXPECTED OUTCOMES
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "1rem",
              }}
            >
              <div>
                <div
                  style={{
                    color: "#6fcf97",
                    fontWeight: 700,
                    fontSize: ".85rem",
                    marginBottom: ".3rem",
                  }}
                >
                  Scientific Outputs
                </div>
                <p
                  style={{
                    color: "rgba(245,242,238,.68)",
                    fontSize: ".84rem",
                    margin: 0,
                    lineHeight: 1.55,
                  }}
                >
                  ISI/Scopus publications, conference papers, new environmental
                  methods &amp; models
                </p>
              </div>
              <div>
                <div
                  style={{
                    color: "#6fcf97",
                    fontWeight: 700,
                    fontSize: ".85rem",
                    marginBottom: ".3rem",
                  }}
                >
                  Technical Outputs
                </div>
                <p
                  style={{
                    color: "rgba(245,242,238,.68)",
                    fontSize: ".84rem",
                    margin: 0,
                    lineHeight: 1.55,
                  }}
                >
                  PM2.5 risk maps, urban digital twin platform, climate scenario
                  &amp; risk-assessment tools
                </p>
              </div>
              <div>
                <div
                  style={{
                    color: "#6fcf97",
                    fontWeight: 700,
                    fontSize: ".85rem",
                    marginBottom: ".3rem",
                  }}
                >
                  Human Capacity
                </div>
                <p
                  style={{
                    color: "rgba(245,242,238,.68)",
                    fontSize: ".84rem",
                    margin: 0,
                    lineHeight: 1.55,
                  }}
                >
                  Trained MSc/PhD researchers in environmental science,
                  established international collaborations
                </p>
              </div>
              <div>
                <div
                  style={{
                    color: "#6fcf97",
                    fontWeight: 700,
                    fontSize: ".85rem",
                    marginBottom: ".3rem",
                  }}
                >
                  Policy Impact
                </div>
                <p
                  style={{
                    color: "rgba(245,242,238,.68)",
                    fontSize: ".84rem",
                    margin: 0,
                    lineHeight: 1.55,
                  }}
                >
                  Green policy recommendations, net-zero decision-support tools,
                  improved environmental governance
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Lab lead strip --> */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              flexWrap: "wrap",
              borderTop: "1px solid rgba(255,255,255,.12)",
              paddingTop: "2rem",
            }}
          >
            <img
              src="/images/center&lab/move-system/slide48_img2.png"
              alt="Quang Tran Vuong"
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "top center",
                border: "3px solid rgba(111,207,151,.4)",
                flexShrink: 0,
              }}
            />
            <div>
              <div
                className="eyebrow"
                style={{
                  color: "rgba(245,242,238,.5)",
                  marginBottom: ".3rem",
                }}
              >
                LAB LEAD
              </div>
              <div
                style={{
                  color: "#F5F2EE",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                }}
              >
                Quang Tran Vuong, PhD
              </div>
              <div
                style={{
                  color: "rgba(245,242,238,.6)",
                  fontSize: ".88rem",
                  margin: ".15rem 0 .5rem",
                }}
              >
                Environmental &amp; Climate Science · ISCM–UEH
              </div>
              <div
                style={{
                  color: "rgba(245,242,238,.5)",
                  fontSize: ".82rem",
                }}
              >
                <span
                  style={{
                    marginRight: "1.2rem",
                  }}
                >
                  An Le — PhD Candidate (Systems Modelling)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ========================= Three tracks ========================= --> */}
      <section
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(122,31,46,0.03))",
        }}
      >
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">DEVELOPING TRACKS</div>
            <h2>Three interlocking research tracks</h2>
          </div>
          <div className="grid-3">
            <div className="track-card">
              <span className="tag">AIR</span>
              <h3 data-i18n="ctr.track.air">
                {i18n("move-system.ctr.track_air")}
              </h3>
              <p data-i18n="ctr.track.air.body">
                {i18n("move-system.ctr.track_air_body")}
              </p>
              <ul>
                <li>Spatial distribution of PM2.5 in HCMC</li>
                <li>Interaction of urban morphology &amp; air pollution</li>
                <li>Exposure risk &amp; health impact mapping</li>
                <li>WRF-CMAQ simulation, emission inventory, risk models</li>
              </ul>
            </div>
            <div className="track-card">
              <span className="tag">CLIMATE</span>
              <h3 data-i18n="ctr.track.climate">
                {i18n("move-system.ctr.track_climate")}
              </h3>
              <p data-i18n="ctr.track.climate.body">
                {i18n("move-system.ctr.track_climate_body")}
              </p>
              <ul>
                <li>Transportation: traffic flow, density</li>
                <li>Pollution: PM2.5, NOx emissions</li>
                <li>Urban heat: ambient temperature</li>
                <li>Scenario simulation &amp; digital twin platform</li>
              </ul>
            </div>
            <div className="track-card">
              <span className="tag">ENERGY</span>
              <h3 data-i18n="ctr.track.energy">
                {i18n("move-system.ctr.track_energy")}
              </h3>
              <p data-i18n="ctr.track.energy.body">
                {i18n("move-system.ctr.track_energy_body")}
              </p>
              <ul>
                <li>Evolution of electricity consumption since 1990</li>
                <li>Role of renewables in decoupling energy &amp; growth</li>
                <li>Turning points in electricity intensity</li>
                <li>Drivers of energy-efficiency by growth component</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ========================= Interactive demo ========================= --> */}
      <section>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">INTERACTIVE DEMO</div>
            <h2 data-i18n="ctr.demo.title">
              {i18n("move-system.ctr.demo_title")}
            </h2>
            <p data-i18n="ctr.demo.sub">{i18n("move-system.ctr.demo_sub")}</p>
          </div>
          <div className="demo-wrap">
            <div className="ctrl-canvas-wrap">
              <canvas id="ctrCanvas" width="1200" height="480"></canvas>
              <div className="ctrl-legend">
                <div>
                  <span className="k" id="legendTitle">
                    PM2.5 µg/m³
                  </span>
                </div>
                <div className="bar" id="legendBar"></div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: ".66rem",
                    opacity: 0.7,
                  }}
                >
                  <span id="legMin">0</span>
                  <span id="legMax">150</span>
                </div>
                <div
                  style={{
                    marginTop: "8px",
                  }}
                >
                  <span
                    className="dot"
                    style={{
                      background: "#eb5757",
                    }}
                  ></span>
                  Hotspot
                  <span
                    className="dot"
                    style={{
                      background: "#f2c94c",
                      marginLeft: "10px",
                    }}
                  ></span>
                  Warning
                  <span
                    className="dot"
                    style={{
                      background: "#6fcf97",
                      marginLeft: "10px",
                    }}
                  ></span>
                  Safe
                </div>
              </div>
              <div className="ctrl-readout">
                <div className="k">MONTH</div>
                <div className="v" id="roMonth">
                  Jan 2026
                </div>
                <div
                  className="k"
                  style={{
                    marginTop: "6px",
                  }}
                >
                  HCMC AVG
                </div>
                <div className="v" id="roAvg">
                  —
                </div>
                <div
                  className="k"
                  style={{
                    marginTop: "6px",
                  }}
                >
                  EXPOSURE RISK
                </div>
                <div className="v" id="roRisk">
                  —
                </div>
                <div
                  className="k"
                  style={{
                    marginTop: "6px",
                  }}
                >
                  HOTSPOTS
                </div>
                <div className="v" id="roHot">
                  —
                </div>
              </div>
            </div>

            <div className="time-slider-wrap">
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: ".76rem",
                  color: "var(--muted)",
                  letterSpacing: ".08em",
                }}
              >
                TIME
              </span>
              <input type="range" id="ctrTime" min="0" max="11" value="0" />
              <button className="btn" id="ctrPlay">
                ▶ Play
              </button>
            </div>
            <div className="layer-toggles">
              <button className="btn on" data-layer="air">
                Air Quality · PM2.5
              </button>
              <button className="btn" data-layer="heat">
                Urban Heat
              </button>
              <button className="btn" data-layer="energy">
                Energy Load
              </button>
            </div>
            <div
              className="demo-status"
              id="ctrStatus"
              style={{
                marginTop: ".8rem",
              }}
            >
              Ready · drag the time slider or press Play
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ========================= Net-Zero Carbon Pathway ========================= --> */}
      <section
        style={{
          background: "linear-gradient(180deg, #081510 0%, #0D2118 100%)",
          padding: "4.5rem 0",
        }}
      >
        <div className="container">
          <div
            className="section-head"
            style={{
              marginBottom: "2rem",
            }}
          >
            <div
              className="eyebrow"
              style={{
                color: "rgba(111,207,151,0.6)",
              }}
            >
              NET-ZERO PATHWAY
            </div>
            <h2
              style={{
                color: "#F5F2EE",
              }}
            >
              Vietnam Urban Carbon — Route to Net-Zero 2050
            </h2>
            <p
              style={{
                color: "rgba(245,242,238,0.6)",
                fontSize: "1.02rem",
              }}
            >
              Three emission scenarios for Vietnam&apos;s urban mobility sector.
              Select a scenario to explore the intervention milestones and
              carbon budget implications modelled by CtrLab.
            </p>
          </div>

          {/* <!-- Canvas --> */}
          <div
            style={{
              position: "relative",
              border: "1px solid rgba(111,207,151,0.2)",
              borderRadius: "6px",
              overflow: "hidden",
              background: "#081310",
            }}
          >
            <canvas
              id="nzCanvas"
              width="1100"
              height="480"
              style={{
                width: "100%",
                display: "block",
              }}
              aria-label="Net-zero carbon pathway chart"
            ></canvas>
          </div>

          {/* <!-- Scenario buttons --> */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: ".75rem",
              alignItems: "center",
              marginTop: "1.1rem",
            }}
          >
            <button
              className="nz-btn nz-active"
              data-scenario="bau"
              style={
                {
                  "--c": "#E05050",
                } as React.CSSProperties
              }
            >
              ● Baseline (BAU)
            </button>
            <button
              className="nz-btn"
              data-scenario="policy"
              style={
                {
                  "--c": "#E0C040",
                } as React.CSSProperties
              }
            >
              ● Current Policy
            </button>
            <button
              className="nz-btn"
              data-scenario="nz"
              style={
                {
                  "--c": "#50DC78",
                } as React.CSSProperties
              }
            >
              ● Net-Zero Path (CtrLab)
            </button>
            <div style={{ flex: 1 }}></div>
            <div
              id="nzBudget"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: ".78rem",
                color: "rgba(111,207,151,0.8)",
                padding: "5px 12px",
                border: "1px solid rgba(111,207,151,0.25)",
                background: "rgba(111,207,151,0.06)",
              }}
            >
              CARBON BUDGET REMAINING: —
            </div>
          </div>

          {/* <!-- Detail panel --> */}
          <div
            id="nzInfo"
            style={{
              marginTop: "1rem",
              background: "rgba(245,242,238,0.04)",
              border: "1px solid rgba(111,207,151,0.18)",
              padding: "1rem 1.3rem",
              fontSize: ".88rem",
              color: "rgba(245,242,238,0.72)",
              lineHeight: "1.65",
              minHeight: "56px",
            }}
          >
            <span
              style={{
                color: "rgba(111,207,151,0.5)",
                fontFamily: "var(--font-mono)",
                fontSize: ".75rem",
              }}
            >
              SELECT A SCENARIO ABOVE
            </span>{" "}
            — click a button to explore emission trajectories, key intervention
            milestones, and residual carbon budget under each pathway.
          </div>
        </div>
      </section>

      {/* <!-- ========================= Roadmap ========================= --> */}
      <section
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(122,31,46,0.03))",
        }}
      >
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">STRATEGIC ROADMAP</div>
            <h2>From datasets to policy impact</h2>
            <p>
              CtrLab is building toward a regional reference lab — integrating
              datasets, scenarios, and decision-support tools over three phases.
            </p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="yr">2026 — 2027 · PHASE 1</div>
              <h4>Foundation &amp; Data Integration</h4>
              <p>
                Building datasets, publishing baseline studies, securing
                national grants. Collaboration with VAST for WRF-CMAQ simulation
                and SUTD survey data checks.
              </p>
            </div>
            <div className="timeline-item">
              <div className="yr">2027 — 2028 · PHASE 2</div>
              <h4>Digital Twin Platform</h4>
              <p>
                Integrating datasets, developing different scenarios,
                collaborating and applying for international grants (Khanh Hoa
                Province &amp; beyond).
              </p>
            </div>
            <div className="timeline-item">
              <div className="yr">2028 — 2030 · PHASE 3</div>
              <h4>Control &amp; Policy Impact</h4>
              <p>
                Translating results into decision-support tools, providing
                policy recommendations, delivering cross-cutting value: air
                quality + energy + climate; research ⇒ tools ⇒ policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ========================= Publications ========================= --> */}
      <section>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow" data-i18n="common.publications">
              {i18n("move-system.common.publications")}
            </div>
            <h2>Selected publications</h2>
          </div>
          <div className="feature-row">
            <div className="idx">2026</div>
            <div>
              <h4>
                Investigation on long-range atmospheric transport of five-year
                fine particulate matter in Hanoi and Ho Chi Minh City
              </h4>
              <p>
                QT Vuong, PQ Thang, LV Linh — The 12th Better Air Quality
                Conference, March 11–13, 2026, Bangkok, Thailand.
              </p>
            </div>
          </div>
          <div className="feature-row">
            <div className="idx">2024</div>
            <div>
              <h4>
                HoloGaussian Digital Twin: Reconstructing 3D Scenes with
                Gaussian Splatting for Tabletop Hologram Visualization of Real
                Environments
              </h4>
              <p>
                Do, T. L. P., Choi, J., Le, V. Q., Gentet, P., Hwang, L., &amp;
                Lee, S. — Remote Sensing, 16(23), 4591. doi:10.3390/rs16234591
              </p>
            </div>
          </div>
          <div className="feature-row">
            <div className="idx">2024</div>
            <div>
              <h4>
                ArtTech Fusion: Hướng tiếp cận mới để phát triển quận 3 thành đô
                thị thông minh đáng sống
              </h4>
              <p>
                Trịnh T.A., Trần T.Q.M., Lê Q.V., &amp; Phạm N.H. — Kỷ yếu hội
                thảo Quận 3, Trung tâm nghiên cứu kiến trúc, Sở quy hoạch kiến
                trúc TP.HCM.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ========================= Stakeholders ========================= --> */}
      <section
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(122,31,46,0.03))",
        }}
      >
        <div className="container">
          <div className="section-head">
            <div className="eyebrow" data-i18n="common.stakeholders">
              {i18n("move-system.common.stakeholders")}
            </div>
            <h2>Who CtrLab serves</h2>
          </div>
          <div className="grid-3">
            <div>
              <h3 data-i18n="common.students">
                {i18n("move-system.common.students")}
              </h3>
              <ul
                className="muted"
                style={{
                  paddingLeft: "1.1rem",
                  fontSize: ".92rem",
                }}
              >
                <li>
                  Hands-on experience with real datasets (air quality, energy,
                  climate, mobility)
                </li>
                <li>
                  Training in advanced methods: modelling / simulation, AI / ML,
                  digital twin
                </li>
                <li>
                  Participation in science-based, applied, policy-relevant
                  research projects
                </li>
                <li>
                  Opportunities for thesis, publications, and international
                  collaborations
                </li>
                <li>
                  Career pathways in environmental analytics, smart cities, and
                  sustainability
                </li>
              </ul>
            </div>
            <div>
              <h3 data-i18n="common.universities">
                {i18n("move-system.common.universities")}
              </h3>
              <ul
                className="muted"
                style={{
                  paddingLeft: "1.1rem",
                  fontSize: ".92rem",
                }}
              >
                <li>Access to integrated datasets</li>
                <li>Collaboration on interdisciplinary research projects</li>
                <li>
                  Co-development of models and tools (prediction, risk
                  assessment, digital twin)
                </li>
                <li>
                  Joint publications in ISI / Scopus journals and conferences
                </li>
              </ul>
            </div>
            <div>
              <h3 data-i18n="common.industry">
                {i18n("move-system.common.industry")}
              </h3>
              <ul
                className="muted"
                style={{
                  paddingLeft: "1.1rem",
                  fontSize: ".92rem",
                }}
              >
                <li>Evidence-based decision support tools</li>
                <li>
                  Access to digital twin platform for urban / environmental
                  management
                </li>
                <li>
                  Data-driven insights for net-zero strategies &amp; emission
                  reduction
                </li>
                <li>
                  Pilot testing of technologies and interventions in real-world
                  settings
                </li>
                <li>
                  Long-term collaboration in policy design, implementation, and
                  evaluation
                </li>
              </ul>
            </div>
          </div>

          <div className="xcut-strip">
            <h3>Cross-cutting value of CtrLab</h3>
            <p className="text-[#f5f2ee]!">
              Integrated approach: Air Quality + Energy + Climate. End-to-end
              pipeline: research ⇒ tools ⇒ policy.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- ========================= People ========================= --> */}
      <section>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">TEAM</div>
            <h2>People</h2>
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
              <div className="role">
                Lead · Lecturer, Environment Science &amp; Eng.
              </div>
              <h4>Quang Tran Vuong, PhD</h4>
              <div className="email">quangvt@ueh.edu.vn</div>
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
                  src="/images/center&lab/move-system/Tan Trung.jpg"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                  }}
                  alt="Trung Tan Nguyen"
                />
              </div>
              <div className="role">Researcher</div>
              <h4>Trung Tan Nguyen, PhD</h4>
              <div className="email">—</div>
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
                  src="/images/center&lab/move-system/Quang Vu Bach.png"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                  }}
                  alt="Quang Vu Bach"
                />
              </div>
              <div className="role">Researcher</div>
              <h4>Quang Vu Bach, PhD</h4>
              <div className="email">—</div>
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
              <div className="role">PhD Candidate</div>
              <h4>An Le</h4>
              <div className="email">anlpt@ueh.edu.vn</div>
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
                  src="/images/center&lab/move-system/MS SANDHYA.jpg"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                  }}
                  alt="Sandhya Rao"
                />
              </div>
              <div className="role">MArch</div>
              <h4>Sandhya Rao</h4>
              <div className="email">—</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

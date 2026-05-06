"use client";

import { useEffect, useLayoutEffect } from "react";
import DashBoard from "./phd-dashboard/dashboard";
import Script from "next/script";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function View() {
  const i18n = useTranslations();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/move-system/see.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="see">
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
        strategy="beforeInteractive"
      />

      <section className="lab-hero">
        <div className="letters" aria-hidden="true">
          SEE
        </div>
        <div className="container">
          <Link className="back-link" href="/move-system" data-i18n="see.back">
            {i18n("move-system.see.back")}
          </Link>
          <div className="eyebrow">LAB · 01 / SEE</div>
          <h1 data-i18n="see.h1"> {i18n("move-system.see.h1")}</h1>
          <p className="lead" data-i18n="see.lead">
            {i18n("move-system.see.lead")}
          </p>
        </div>
      </section>

      {/* <!-- ========================= SEE LAB INTRODUCTION ========================= --> */}
      <section
        style={{
          background: "linear-gradient(135deg, #7A1F2E 0%, #4E121C 100%)",
          color: "#F5F2EE",
          padding: "4.5rem 0",
        }}
      >
        <div className="container">
          {/* <!-- A. Mission headline — Road Safety as core --> */}
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto 3.5rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: ".68rem",
                letterSpacing: ".22em",
                color: "rgba(245,242,238,.5)",
                marginBottom: ".6rem",
                textTransform: "uppercase",
              }}
            >
              ROAD SAFETY RESEARCH LAB · ISCM · UEH
            </div>
            <h2
              style={{
                color: "#F5F2EE",
                margin: "0 0 1rem",
                fontSize: "clamp(1.7rem, 4vw, 2.5rem)",
                lineHeight: 1.2,
              }}
            >
              Strengthening Road Safety
              <br />
              for Road Users in Vietnam
            </h2>
            <p
              style={{
                fontSize: "1.06rem",
                lineHeight: 1.78,
                color: "rgba(245,242,238,.87)",
                margin: "0 0 1.2rem",
              }}
            >
              SEE Living Lab is a pioneering platform dedicated to road safety —
              using gamification, immersive VR, eye-tracking, and machine
              learning to help road users identify hazards, build safe
              behaviours, and create lifelong responsible habits. As one of the
              first specialised road safety research labs in Vietnam, the lab
              generates actionable, evidence-based insights that directly
              support policymakers in designing effective interventions.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: ".5rem",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  padding: "5px 14px",
                  borderRadius: "999px",
                  border: "1px solid rgba(245,242,238,.3)",
                  fontSize: ".75rem",
                  letterSpacing: ".08em",
                  color: "rgba(245,242,238,.85)",
                }}
              >
                Road Safety Behaviours
              </span>
              <span
                style={{
                  padding: "5px 14px",
                  borderRadius: "999px",
                  border: "1px solid rgba(245,242,238,.3)",
                  fontSize: ".75rem",
                  letterSpacing: ".08em",
                  color: "rgba(245,242,238,.85)",
                }}
              >
                Hazard Perception
              </span>
              <span
                style={{
                  padding: "5px 14px",
                  borderRadius: "999px",
                  border: "1px solid rgba(245,242,238,.3)",
                  fontSize: ".75rem",
                  letterSpacing: ".08em",
                  color: "rgba(245,242,238,.85)",
                }}
              >
                VR Simulation
              </span>
              <span
                style={{
                  padding: "5px 14px",
                  borderRadius: "999px",
                  border: "1px solid rgba(245,242,238,.3)",
                  fontSize: ".75rem",
                  letterSpacing: ".08em",
                  color: "rgba(245,242,238,.85)",
                }}
              >
                Gamified E-Learning
              </span>
              <span
                style={{
                  padding: "5px 14px",
                  borderRadius: "999px",
                  border: "1px solid rgba(245,242,238,.3)",
                  fontSize: ".75rem",
                  letterSpacing: ".08em",
                  color: "rgba(245,242,238,.85)",
                }}
              >
                Safe-Route Mapping
              </span>
              <span
                style={{
                  padding: "5px 14px",
                  borderRadius: "999px",
                  border: "1px solid rgba(245,242,238,.3)",
                  fontSize: ".75rem",
                  letterSpacing: ".08em",
                  color: "rgba(245,242,238,.85)",
                }}
              >
                Evidence-based Policy
              </span>
            </div>
          </div>

          {/* <!-- B. 3D Road Safety Visualization --> */}
          <div
            style={{
              marginBottom: "3.5rem",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: ".65rem",
                letterSpacing: ".22em",
                color: "rgba(245,242,238,.4)",
                marginBottom: "1rem",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              Eye-Tracking · Hazard Perception · VR Simulation — Drag to Orbit ·
              Click Risk Vehicles
            </div>
            <div
              style={{
                position: "relative",
                border: "1px solid rgba(184,146,100,0.2)",
                borderRadius: "8px",
                overflow: "hidden",
                background: "#080610",
              }}
            >
              <canvas
                id="see3dCanvas"
                style={{
                  width: "100%",
                  height: "480px",
                  display: "block",
                  cursor: "grab",
                }}
              ></canvas>
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "12px",
                  fontFamily: "var(--font-mono)",
                  fontSize: ".65rem",
                  color: "rgba(184,146,100,0.7)",
                  letterSpacing: ".1em",
                }}
              >
                SEE LIVING LAB · VR HAZARD PERCEPTION SIMULATOR
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  fontFamily: "var(--font-mono)",
                  fontSize: ".65rem",
                  color: "rgba(245,242,238,0.5)",
                }}
              >
                <div>
                  <span
                    style={{
                      display: "inline-block",
                      width: "10px",
                      height: "10px",
                      background: "#FFFFFF",
                      borderRadius: "50%",
                      opacity: 0.7,
                      marginRight: "5px",
                      verticalAlign: "middle",
                    }}
                  ></span>
                  Eye-tracking Gaze
                </div>
                <div>
                  <span
                    style={{
                      display: "inline-block",
                      width: "10px",
                      height: "4px",
                      background: "#E04040",
                      marginRight: "5px",
                      verticalAlign: "middle",
                      borderRadius: "2px",
                    }}
                  ></span>
                  High-Risk Vehicle
                </div>
                <div>
                  <span
                    style={{
                      display: "inline-block",
                      width: "10px",
                      height: "4px",
                      background: "#B89264",
                      marginRight: "5px",
                      verticalAlign: "middle",
                      borderRadius: "2px",
                    }}
                  ></span>
                  Normal Traffic
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "12px",
                  fontFamily: "var(--font-mono)",
                  fontSize: ".62rem",
                  color: "rgba(184,146,100,0.45)",
                  letterSpacing: ".08em",
                }}
              >
                R2S · ROAD TO SAFETY PROGRAMME
              </div>
            </div>
            <div
              id="see3dInfo"
              style={{
                marginTop: ".8rem",
                background: "rgba(245,242,238,0.05)",
                border: "1px solid rgba(184,146,100,0.2)",
                padding: ".9rem 1.2rem",
                color: "rgba(245,242,238,0.65)",
                minHeight: "52px",
                borderRadius: "4px",
                fontFamily: "var(--font-mono)",
                fontSize: ".75rem",
                letterSpacing: ".05em",
              }}
            >
              <span
                style={{
                  color: "rgba(184,146,100,0.5)",
                }}
              >
                CLICK A HIGH-RISK VEHICLE
              </span>{" "}
              (with white gaze particles &amp; pulsing ring) to see the
              eye-tracking hazard analysis from SEE Lab research. Drag to orbit.
            </div>
            {/* <!-- Stats row --> */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1px",
                background: "rgba(184,146,100,.12)",
                marginTop: "1rem",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background: "rgba(245,242,238,.04)",
                  padding: ".9rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: 300,
                    color: "#B89264",
                    lineHeight: 1,
                  }}
                >
                  15+
                </div>
                <div
                  style={{
                    fontSize: ".65rem",
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    color: "rgba(245,242,238,.45)",
                    marginTop: ".2rem",
                  }}
                >
                  Publications
                </div>
              </div>
              <div
                style={{
                  background: "rgba(245,242,238,.04)",
                  padding: ".9rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: 300,
                    color: "#B89264",
                    lineHeight: 1,
                  }}
                >
                  5+
                </div>
                <div
                  style={{
                    fontSize: ".65rem",
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    color: "rgba(245,242,238,.45)",
                    marginTop: ".2rem",
                  }}
                >
                  Countries
                </div>
              </div>
              <div
                style={{
                  background: "rgba(245,242,238,.04)",
                  padding: ".9rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: 300,
                    color: "#B89264",
                    lineHeight: 1,
                  }}
                >
                  SDG 4
                </div>
                <div
                  style={{
                    fontSize: ".65rem",
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    color: "rgba(245,242,238,.45)",
                    marginTop: ".2rem",
                  }}
                >
                  + SDG 11
                </div>
              </div>
            </div>
          </div>

          {/* <!-- C. Key stats strip --> */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "1px",
              background: "rgba(184,146,100,.15)",
              border: "1px solid rgba(184,146,100,.15)",
              borderRadius: "4px",
              overflow: "hidden",
              marginBottom: 0,
            }}
          >
            <div
              style={{
                background: "rgba(245,242,238,.05)",
                padding: "1.2rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 300,
                  color: "#B89264",
                  lineHeight: 1,
                }}
              >
                4
              </div>
              <div
                style={{
                  fontSize: ".68rem",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "rgba(245,242,238,.55)",
                  marginTop: ".3rem",
                }}
              >
                Research Packages
              </div>
            </div>
            <div
              style={{
                background: "rgba(245,242,238,.05)",
                padding: "1.2rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 300,
                  color: "#B89264",
                  lineHeight: 1,
                }}
              >
                15+
              </div>
              <div
                style={{
                  fontSize: ".68rem",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "rgba(245,242,238,.55)",
                  marginTop: ".3rem",
                }}
              >
                Publications
              </div>
            </div>
            <div
              style={{
                background: "rgba(245,242,238,.05)",
                padding: "1.2rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 300,
                  color: "#B89264",
                  lineHeight: 1,
                }}
              >
                5+
              </div>
              <div
                style={{
                  fontSize: ".68rem",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "rgba(245,242,238,.55)",
                  marginTop: ".3rem",
                }}
              >
                Countries
              </div>
            </div>
            <div
              style={{
                background: "rgba(245,242,238,.05)",
                padding: "1.2rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 300,
                  color: "#B89264",
                  lineHeight: 1,
                }}
              >
                &lt;18
              </div>
              <div
                style={{
                  fontSize: ".68rem",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "rgba(245,242,238,.55)",
                  marginTop: ".3rem",
                }}
              >
                Target Learners
              </div>
            </div>
            <div
              style={{
                background: "rgba(245,242,238,.05)",
                padding: "1.2rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 300,
                  color: "#B89264",
                  lineHeight: 1,
                }}
              >
                VR
              </div>
              <div
                style={{
                  fontSize: ".68rem",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "rgba(245,242,238,.55)",
                  marginTop: ".3rem",
                }}
              >
                + Eye-Tracking
              </div>
            </div>
            <div
              style={{
                background: "rgba(245,242,238,.05)",
                padding: "1.2rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 300,
                  color: "#B89264",
                  lineHeight: 1,
                }}
              >
                2026
              </div>
              <div
                style={{
                  fontSize: ".68rem",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "rgba(245,242,238,.55)",
                  marginTop: ".3rem",
                }}
              >
                Roadmap Start
              </div>
            </div>
          </div>

          {/* <!-- R2S Research Framework --> */}
          <div
            style={{
              background: "rgba(0,0,0,.70)",
              border: "1px solid rgba(184,146,100,.22)",
              borderRadius: "12px",
              padding: "1.8rem 1.4rem",
              marginTop: "2.5rem",
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
              R2S ROAD SAFETY · SEE LAB RESEARCH FRAMEWORK
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
                <linearGradient id="seeS1" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="rgba(224,80,112,0.16)" />
                  <stop offset="100%" stop-color="rgba(224,80,112,0.03)" />
                </linearGradient>
                <linearGradient id="seeS2" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="rgba(242,160,64,0.15)" />
                  <stop offset="100%" stop-color="rgba(242,160,64,0.03)" />
                </linearGradient>
                <linearGradient id="seeS3" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="rgba(96,144,208,0.15)" />
                  <stop offset="100%" stop-color="rgba(96,144,208,0.03)" />
                </linearGradient>
                <linearGradient id="seeS4" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="rgba(96,184,128,0.14)" />
                  <stop offset="100%" stop-color="rgba(96,184,128,0.03)" />
                </linearGradient>
              </defs>
              {/* <!-- SENSE --> */}
              <rect
                x="16"
                y="14"
                width="528"
                height="58"
                rx="6"
                fill="url(#seeS1)"
                stroke="rgba(224,80,112,0.28)"
                stroke-width="1"
              />
              <rect
                x="36"
                y="31"
                width="32"
                height="22"
                rx="5"
                fill="rgba(224,80,112,0.18)"
                stroke="rgba(224,80,112,0.40)"
                stroke-width="0.8"
              />
              <rect
                x="47"
                y="37"
                width="4"
                height="10"
                rx="1"
                fill="rgba(224,80,112,0.55)"
              />
              <rect
                x="43"
                y="41"
                width="12"
                height="4"
                rx="1"
                fill="rgba(224,80,112,0.55)"
              />
              <circle cx="64" cy="38" r="2.2" fill="rgba(224,80,112,0.6)" />
              <circle cx="64" cy="45" r="2.2" fill="rgba(224,80,112,0.45)" />
              <polygon
                points="88,25 90.5,32 98,32 92,37 94.5,44 88,39 81.5,44 84,37 78,32 85.5,32"
                fill="rgba(224,80,112,0.40)"
              />
              <rect
                x="104"
                y="30"
                width="36"
                height="10"
                rx="2"
                fill="rgba(224,80,112,0.1)"
                stroke="rgba(224,80,112,0.22)"
                stroke-width="0.6"
              />
              <rect
                x="106"
                y="32"
                width="22"
                height="2.5"
                rx="1"
                fill="rgba(224,80,112,0.5)"
              />
              <rect
                x="104"
                y="44"
                width="36"
                height="10"
                rx="2"
                fill="rgba(224,80,112,0.1)"
                stroke="rgba(224,80,112,0.22)"
                stroke-width="0.6"
              />
              <rect
                x="106"
                y="46"
                width="16"
                height="2.5"
                rx="1"
                fill="rgba(224,80,112,0.4)"
              />
              <rect
                x="150"
                y="28"
                width="10"
                height="16"
                rx="1"
                fill="rgba(224,80,112,0.18)"
                stroke="rgba(224,80,112,0.3)"
                stroke-width="0.6"
              />
              <rect
                x="163"
                y="30"
                width="10"
                height="16"
                rx="1"
                fill="rgba(224,80,112,0.14)"
                stroke="rgba(224,80,112,0.25)"
                stroke-width="0.6"
              />
              <rect
                x="176"
                y="26"
                width="12"
                height="18"
                rx="1"
                fill="rgba(224,80,112,0.20)"
                stroke="rgba(224,80,112,0.35)"
                stroke-width="0.6"
              />
              <text
                x="216"
                y="36"
                fill="#e05070"
                font-size="8.5"
                font-weight="700"
                letter-spacing="1.8"
                font-family="monospace"
              >
                SENSE · PKG 01 — GAMIFICATION &amp; E-LEARNING
              </text>
              <text x="216" y="54" fill="rgba(245,242,238,0.45)" font-size="8">
                Traffic rule gamification · Knowledge scoring · Peer learning ·
                Adolescent behaviour change
              </text>
              <text
                x="20"
                y="65"
                fill="rgba(224,80,112,0.50)"
                font-size="7.5"
                font-style="italic"
                font-family="monospace"
              >
                Sense
              </text>
              {/* <!-- ENGAGE --> */}
              <rect
                x="16"
                y="80"
                width="528"
                height="56"
                rx="6"
                fill="url(#seeS2)"
                stroke="rgba(242,160,64,0.28)"
                stroke-width="1"
              />
              <rect
                x="36"
                y="94"
                width="48"
                height="28"
                rx="8"
                fill="rgba(242,160,64,0.15)"
                stroke="rgba(242,160,64,0.45)"
                stroke-width="1"
              />
              <ellipse
                cx="52"
                cy="108"
                rx="8"
                ry="8"
                fill="rgba(242,160,64,0.12)"
                stroke="rgba(242,160,64,0.3)"
                stroke-width="0.7"
              />
              <ellipse
                cx="68"
                cy="108"
                rx="8"
                ry="8"
                fill="rgba(242,160,64,0.12)"
                stroke="rgba(242,160,64,0.3)"
                stroke-width="0.7"
              />
              <path
                d="M 100 102 Q 115 95 130 102"
                stroke="rgba(242,160,64,0.55)"
                stroke-width="1.2"
                fill="none"
              />
              <circle
                cx="115"
                cy="98"
                r="3.5"
                fill="rgba(242,160,64,0.25)"
                stroke="rgba(242,160,64,0.5)"
                stroke-width="0.8"
              />
              <circle cx="148" cy="102" r="4" fill="rgba(242,160,64,0.35)" />
              <circle cx="160" cy="110" r="5.5" fill="rgba(242,160,64,0.25)" />
              <circle cx="174" cy="104" r="3" fill="rgba(242,160,64,0.30)" />
              <text
                x="216"
                y="98"
                fill="#f2a040"
                font-size="8.5"
                font-weight="700"
                letter-spacing="1.8"
                font-family="monospace"
              >
                ENGAGE · PKG 02 — VR SIMULATION &amp; EYE-TRACKING
              </text>
              <text x="216" y="116" fill="rgba(245,242,238,0.45)" font-size="8">
                Immersive hazard scenarios · Gaze fixation analysis · Pupil
                dilation metrics · Driver response training
              </text>
              <text
                x="20"
                y="128"
                fill="rgba(242,160,64,0.50)"
                font-size="7.5"
                font-style="italic"
                font-family="monospace"
              >
                Engage
              </text>
              {/* <!-- EVOLVE --> */}
              <rect
                x="16"
                y="144"
                width="528"
                height="56"
                rx="6"
                fill="url(#seeS3)"
                stroke="rgba(96,144,208,0.25)"
                stroke-width="1"
              />
              <rect
                x="30"
                y="154"
                width="160"
                height="38"
                rx="3"
                fill="rgba(96,144,208,0.08)"
                stroke="rgba(96,144,208,0.18)"
                stroke-width="0.6"
              />
              <line
                x1="58"
                y1="154"
                x2="58"
                y2="192"
                stroke="rgba(96,144,208,0.15)"
                stroke-width="0.5"
              />
              <line
                x1="86"
                y1="154"
                x2="86"
                y2="192"
                stroke="rgba(96,144,208,0.15)"
                stroke-width="0.5"
              />
              <line
                x1="114"
                y1="154"
                x2="114"
                y2="192"
                stroke="rgba(96,144,208,0.15)"
                stroke-width="0.5"
              />
              <line
                x1="30"
                y1="165"
                x2="190"
                y2="165"
                stroke="rgba(96,144,208,0.12)"
                stroke-width="0.5"
              />
              <line
                x1="30"
                y1="178"
                x2="190"
                y2="178"
                stroke="rgba(96,144,208,0.12)"
                stroke-width="0.5"
              />
              <circle cx="60" cy="162" r="4" fill="rgba(224,80,112,0.55)" />
              <line
                x1="60"
                y1="166"
                x2="60"
                y2="172"
                stroke="rgba(224,80,112,0.45)"
                stroke-width="1"
              />
              <circle cx="95" cy="170" r="3" fill="rgba(242,160,64,0.55)" />
              <circle cx="128" cy="159" r="4.5" fill="rgba(96,144,208,0.60)" />
              <line
                x1="128"
                y1="163.5"
                x2="128"
                y2="170"
                stroke="rgba(96,144,208,0.45)"
                stroke-width="1"
              />
              <circle cx="158" cy="175" r="3" fill="rgba(96,184,128,0.55)" />
              <ellipse
                cx="90"
                cy="167"
                rx="28"
                ry="12"
                fill="rgba(96,144,208,0.06)"
                stroke="rgba(96,144,208,0.22)"
                stroke-dasharray="3,2"
                stroke-width="0.8"
              />
              <text
                x="216"
                y="162"
                fill="#6090d0"
                font-size="8.5"
                font-weight="700"
                letter-spacing="1.8"
                font-family="monospace"
              >
                EVOLVE · PKG 03 — GIS &amp; SPATIAL ANALYTICS
              </text>
              <text x="216" y="180" fill="rgba(245,242,238,0.45)" font-size="8">
                Safe-route mapping · Crash cluster analysis · ML hazard
                classification · Location-aware behaviour data
              </text>
              <text
                x="20"
                y="192"
                fill="rgba(96,144,208,0.50)"
                font-size="7.5"
                font-style="italic"
                font-family="monospace"
              >
                Evolve
              </text>
              {/* <!-- EXTENSION --> */}
              <rect
                x="16"
                y="208"
                width="528"
                height="56"
                rx="6"
                fill="url(#seeS4)"
                stroke="rgba(96,184,128,0.28)"
                stroke-width="1"
              />
              <circle
                cx="50"
                cy="228"
                r="7"
                fill="rgba(96,184,128,0.20)"
                stroke="rgba(96,184,128,0.40)"
                stroke-width="0.8"
              />
              <circle cx="50" cy="220" r="4" fill="rgba(96,184,128,0.30)" />
              <circle
                cx="72"
                cy="232"
                r="7"
                fill="rgba(96,184,128,0.18)"
                stroke="rgba(96,184,128,0.35)"
                stroke-width="0.8"
              />
              <circle cx="72" cy="224" r="4" fill="rgba(96,184,128,0.25)" />
              <circle
                cx="94"
                cy="228"
                r="7"
                fill="rgba(96,184,128,0.20)"
                stroke="rgba(96,184,128,0.38)"
                stroke-width="0.8"
              />
              <circle cx="94" cy="220" r="4" fill="rgba(96,184,128,0.28)" />
              <line
                x1="57"
                y1="228"
                x2="65"
                y2="228"
                stroke="rgba(96,184,128,0.35)"
                stroke-width="0.8"
                stroke-dasharray="2,1.5"
              />
              <line
                x1="79"
                y1="228"
                x2="87"
                y2="228"
                stroke="rgba(96,184,128,0.35)"
                stroke-width="0.8"
                stroke-dasharray="2,1.5"
              />
              <rect
                x="112"
                y="224"
                width="26"
                height="20"
                rx="1"
                fill="rgba(96,184,128,0.12)"
                stroke="rgba(96,184,128,0.30)"
                stroke-width="0.6"
              />
              <polygon
                points="112,224 125,216 138,224"
                fill="rgba(96,184,128,0.20)"
              />
              <rect
                x="148"
                y="224"
                width="22"
                height="18"
                rx="2"
                fill="rgba(96,184,128,0.15)"
                stroke="rgba(96,184,128,0.32)"
                stroke-width="0.6"
              />
              <line
                x1="151"
                y1="229"
                x2="167"
                y2="229"
                stroke="rgba(96,184,128,0.4)"
                stroke-width="0.8"
              />
              <line
                x1="151"
                y1="234"
                x2="167"
                y2="234"
                stroke="rgba(96,184,128,0.3)"
                stroke-width="0.7"
              />
              <text
                x="216"
                y="228"
                fill="#60b880"
                font-size="8.5"
                font-weight="700"
                letter-spacing="1.8"
                font-family="monospace"
              >
                EXTENSION · PKG 04 — ASEAN SCALE &amp; POLICY TRANSFER
              </text>
              <text x="216" y="246" fill="rgba(245,242,238,0.45)" font-size="8">
                School programme deployment · Family engagement · SPSM framework
                · Cross-border safety evidence
              </text>
              <text
                x="20"
                y="256"
                fill="rgba(96,184,128,0.50)"
                font-size="7.5"
                font-style="italic"
                font-family="monospace"
              >
                Extension
              </text>
              {/* <!-- Arrows --> */}
              <line
                x1="546"
                y1="43"
                x2="588"
                y2="148"
                stroke="rgba(224,80,112,0.42)"
                stroke-width="1.3"
                stroke-dasharray="4,3"
              />
              <line
                x1="546"
                y1="108"
                x2="588"
                y2="153"
                stroke="rgba(242,160,64,0.42)"
                stroke-width="1.3"
                stroke-dasharray="4,3"
              />
              <line
                x1="546"
                y1="172"
                x2="588"
                y2="160"
                stroke="rgba(96,144,208,0.38)"
                stroke-width="1.3"
                stroke-dasharray="4,3"
              />
              <line
                x1="546"
                y1="236"
                x2="588"
                y2="168"
                stroke="rgba(96,184,128,0.42)"
                stroke-width="1.3"
                stroke-dasharray="4,3"
              />
              <polygon
                points="588,148 582,143 582,153"
                fill="rgba(224,80,112,0.40)"
              />
              <polygon
                points="588,153 582,148 582,158"
                fill="rgba(242,160,64,0.40)"
              />
              <polygon
                points="588,160 582,155 582,165"
                fill="rgba(96,144,208,0.35)"
              />
              <polygon
                points="588,168 582,163 582,173"
                fill="rgba(96,184,128,0.40)"
              />
              {/* <!-- Platform --> */}
              <rect
                x="590"
                y="118"
                width="256"
                height="90"
                rx="10"
                fill="rgba(184,146,100,0.10)"
                stroke="rgba(184,146,100,0.38)"
                stroke-width="1.5"
              />
              <text
                x="718"
                y="143"
                text-anchor="middle"
                fill="#B89264"
                font-size="9.5"
                font-weight="700"
                letter-spacing="1.8"
                font-family="monospace"
              >
                SEE PLATFORM
              </text>
              <line
                x1="608"
                y1="150"
                x2="830"
                y2="150"
                stroke="rgba(184,146,100,0.2)"
                stroke-width="0.8"
              />
              <text
                x="718"
                y="164"
                text-anchor="middle"
                fill="rgba(245,242,238,0.72)"
                font-size="8.5"
              >
                Behavioural Research &amp; Safety Training
              </text>
              <text
                x="718"
                y="178"
                text-anchor="middle"
                fill="rgba(245,242,238,0.58)"
                font-size="8"
              >
                Field Deployment · Impact Measurement
              </text>
              <text
                x="718"
                y="196"
                text-anchor="middle"
                fill="rgba(245,242,238,0.45)"
                font-size="7.5"
              >
                Evidence-based Curriculum Design
              </text>
              {/* <!-- Outputs --> */}
              <rect
                x="594"
                y="222"
                width="76"
                height="60"
                rx="6"
                fill="rgba(224,80,112,0.10)"
                stroke="rgba(224,80,112,0.28)"
                stroke-width="1"
              />
              <text
                x="632"
                y="242"
                text-anchor="middle"
                fill="#e05070"
                font-size="8"
                font-weight="700"
                letter-spacing="1"
                font-family="monospace"
              >
                VR TOOLS
              </text>
              <text
                x="632"
                y="256"
                text-anchor="middle"
                fill="rgba(245,242,238,0.5)"
                font-size="7.5"
              >
                immersive training
              </text>
              <text
                x="632"
                y="268"
                text-anchor="middle"
                fill="rgba(245,242,238,0.5)"
                font-size="7.5"
              >
                hazard scenarios
              </text>
              <rect
                x="678"
                y="222"
                width="76"
                height="60"
                rx="6"
                fill="rgba(96,144,208,0.10)"
                stroke="rgba(96,144,208,0.25)"
                stroke-width="1"
              />
              <text
                x="716"
                y="242"
                text-anchor="middle"
                fill="#6090d0"
                font-size="8"
                font-weight="700"
                letter-spacing="1"
                font-family="monospace"
              >
                RISK MAPS
              </text>
              <text
                x="716"
                y="256"
                text-anchor="middle"
                fill="rgba(245,242,238,0.5)"
                font-size="7.5"
              >
                safe-route data
              </text>
              <text
                x="716"
                y="268"
                text-anchor="middle"
                fill="rgba(245,242,238,0.5)"
                font-size="7.5"
              >
                spatial analytics
              </text>
              <rect
                x="762"
                y="222"
                width="80"
                height="60"
                rx="6"
                fill="rgba(96,184,128,0.10)"
                stroke="rgba(96,184,128,0.25)"
                stroke-width="1"
              />
              <text
                x="802"
                y="240"
                text-anchor="middle"
                fill="#60b880"
                font-size="8"
                font-weight="700"
                letter-spacing="1"
                font-family="monospace"
              >
                POLICY
              </text>
              <text
                x="802"
                y="252"
                text-anchor="middle"
                fill="#60b880"
                font-size="8"
                font-weight="700"
                letter-spacing="1"
                font-family="monospace"
              >
                BRIEF
              </text>
              <text
                x="802"
                y="266"
                text-anchor="middle"
                fill="rgba(245,242,238,0.5)"
                font-size="7.5"
              >
                SDG 4 · SDG 11
              </text>
              <line
                x1="660"
                y1="208"
                x2="632"
                y2="222"
                stroke="rgba(224,80,112,0.35)"
                stroke-width="1"
                stroke-dasharray="2,2"
              />
              <line
                x1="718"
                y1="208"
                x2="716"
                y2="222"
                stroke="rgba(96,144,208,0.35)"
                stroke-width="1"
                stroke-dasharray="2,2"
              />
              <line
                x1="775"
                y1="208"
                x2="800"
                y2="222"
                stroke="rgba(96,184,128,0.35)"
                stroke-width="1"
                stroke-dasharray="2,2"
              />
              <text
                x="430"
                y="293"
                text-anchor="middle"
                fill="rgba(245,242,238,0.22)"
                font-size="7.5"
                letter-spacing="1.5"
                font-family="monospace"
              >
                ROAD SAFETY INTELLIGENCE FOR VIETNAM&apos;S YOUTH AND COMMUNITIES
              </text>
            </svg>
          </div>

          {/* <!-- Lab lead strip --> */}
          <div
            className="mt-[32px]!"
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
              src="/images/center&lab/move-system/slide44_img11.png"
              alt="Quang Tran Vuong"
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "top center",
                border: "3px solid rgba(184, 146, 100, .4)",
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
                Phan Le Truong An, PhD Candidate
              </div>
              <div
                style={{
                  color: "rgba(245,242,238,.6)",
                  fontSize: ".88rem",
                  margin: ".15rem 0 .5rem",
                }}
              >
                SEE Living Lab · ISCM–UEH
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
                  Senior Researcher
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ========================= Four Packages ========================= --> */}
      <section>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">FOUR PACKAGES</div>
            <h2>From classroom knowledge to street-ready behaviour</h2>
            <p>
              Each package layers onto the last: learners sense the risks,
              engage in immersive practice, evolve their skills through spatial
              feedback, and extend the model across cities and partner nations.
            </p>
          </div>

          <div className="grid-2">
            <div className="pkg-card">
              <div className="pkg-num">PACKAGE 1 · SENSE</div>
              <h3 data-i18n="see.p1.name">{i18n("move-system.see.p1_name")}</h3>
              <div className="type" data-i18n="see.p1.type">
                {i18n("move-system.see.p1_type")}
              </div>
              <p data-i18n="see.p1.body">{i18n("move-system.see.p1_body")}</p>
            </div>

            <div className="pkg-card">
              <div className="pkg-num">PACKAGE 2 · ENGAGE</div>
              <h3 data-i18n="see.p2.name">{i18n("move-system.see.p2_name")}</h3>
              <div className="type" data-i18n="see.p2.type">
                {i18n("move-system.see.p2_type")}
              </div>
              <p data-i18n="see.p2.body">{i18n("move-system.see.p2_body")}</p>
            </div>

            <div className="pkg-card">
              <div className="pkg-num">PACKAGE 3 · EVOLVE</div>
              <h3 data-i18n="see.p3.name">{i18n("move-system.see.p3_name")}</h3>
              <div className="type" data-i18n="see.p3.type">
                {i18n("move-system.see.p3_type")}
              </div>
              <p data-i18n="see.p3.body">{i18n("move-system.see.p3_body")}</p>
            </div>

            <div className="pkg-card">
              <div className="pkg-num">PACKAGE 4 · EXTENSION</div>
              <h3 data-i18n="see.p4.name">{i18n("move-system.see.p4_name")}</h3>
              <div className="type" data-i18n="see.p4.type">
                {i18n("move-system.see.p4_type")}
              </div>
              <p data-i18n="see.p4.body">{i18n("move-system.see.p4_body")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ========================= R2S Roadmap Image ========================= --> */}
      <section
        style={{
          padding: "3rem 0 0",
        }}
      >
        <div className="container">
          <div
            className="section-head"
            style={{
              marginBottom: "1.5rem",
            }}
          >
            <div className="eyebrow">RESEARCH ROADMAP · 2026–2030</div>
            <h2>Four Work Packages — Sense, Engage, Evolve, Extended</h2>
            <p>
              The LELP platform is built across four sequenced work packages,
              each translating behavioural observation into evidence and
              technology, culminating in a cross-city living lab by 2030.
            </p>
          </div>
          <div
            className="roadmap-board"
            aria-label="R2S roadmap — four packages: Sense 2026-2027, Engage 2027-2028, Evolve 2028, Extended 2029-2030"
          >
            <div className="roadmap-track">
              <article className="roadmap-phase">
                <div className="roadmap-year">2026 — 2027</div>
                <span className="roadmap-tag">Package 1 · Sense</span>
                <h3>R2S Education</h3>
                <p>
                  Gamified e-learning, baseline surveys, school pilots, and
                  first measurement of students&apos; traffic-safety knowledge
                  and behaviours.
                </p>
              </article>
              <article className="roadmap-phase">
                <div className="roadmap-year">2027 — 2028</div>
                <span className="roadmap-tag">Package 2 · Engage</span>
                <h3>R2S VR Cycling</h3>
                <p>
                  Hybrid VR simulator for hazard perception, scanning,
                  signalling, and safe route practice in realistic urban traffic
                  scenarios.
                </p>
              </article>
              <article className="roadmap-phase">
                <div className="roadmap-year">2028</div>
                <span className="roadmap-tag">Package 3 · Evolve</span>
                <h3>R2S Map</h3>
                <p>
                  Spatial analytics connecting school catchments, crash
                  clusters, walkability audits, and LELP location data for
                  route-level insight.
                </p>
              </article>
              <article className="roadmap-phase">
                <div className="roadmap-year">2029 — 2030</div>
                <span className="roadmap-tag">Package 4 · Extended</span>
                <h3>Problem-Solution Mapping</h3>
                <p>
                  Cross-city living lab expansion across Vietnam and partner
                  contexts, turning local evidence into comparable policy
                  guidance.
                </p>
              </article>
            </div>
            <div className="roadmap-deliverables">
              <div className="roadmap-output">
                <strong>Learning</strong> Student modules, quizzes,
                certificates, and school-based implementation evidence.
              </div>
              <div className="roadmap-output">
                <strong>Behaviour</strong> VR performance, hazard response,
                eye-tracking, and transfer-to-road indicators.
              </div>
              <div className="roadmap-output">
                <strong>Spatial Data</strong> Dashboard layers for risks, school
                zones, safe routes, and behavioural hotspots.
              </div>
              <div className="roadmap-output">
                <strong>Policy</strong> Replicable intervention toolkit for
                cities, agencies, schools, and regional partners.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ========================= Interactive Platform Structure ========================= --> */}
      <section
        style={{
          background:
            "linear-gradient(180deg, rgba(122,31,46,0.03), transparent)",
        }}
      >
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">ARCHITECTURE · SLIDE 6</div>
            <h2>Structure of the Interactive Platform</h2>
            <p>
              The SEE Living Lab is built on a unified, scalable architecture
              that connects four front-end platforms through a shared data
              backbone — enabling consistent measurement, cross-package
              comparison, and evidence-based reporting.
            </p>
          </div>

          <div className="platform-arch">
            {/* <!-- FRONT END LAYER --> */}
            <div
              className="arch-layer"
              style={{
                background: "rgba(245,242,238,.55)",
                borderBottom: "1px solid rgba(122,31,46,.1)",
              }}
            >
              <div className="arch-layer-label">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <rect
                    x="1"
                    y="1"
                    width="10"
                    height="10"
                    rx="2"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                  <rect
                    x="3"
                    y="4"
                    width="6"
                    height="1"
                    rx=".5"
                    fill="currentColor"
                  />
                  <rect
                    x="3"
                    y="6.5"
                    width="4"
                    height="1"
                    rx=".5"
                    fill="currentColor"
                  />
                </svg>
                Front End — Four R2S Platforms
              </div>
              <div className="arch-packages">
                <div className="arch-pkg">
                  <div className="arch-pkg-num">PKG 1 · SENSE</div>
                  <div className="arch-pkg-name">R2S Education</div>
                  <div className="arch-pkg-sub">
                    Gamified e-learning for traffic knowledge &amp; skills
                  </div>
                </div>
                <div className="arch-pkg">
                  <div className="arch-pkg-num">PKG 2 · ENGAGE</div>
                  <div className="arch-pkg-name">R2S VR Cycling</div>
                  <div className="arch-pkg-sub">
                    Hybrid VR simulator for hazard perception
                  </div>
                </div>
                <div className="arch-pkg">
                  <div className="arch-pkg-num">PKG 3 · EVOLVE</div>
                  <div className="arch-pkg-name">R2S Map</div>
                  <div className="arch-pkg-sub">
                    Spatial analytics &amp; safe-route mapping
                  </div>
                </div>
                <div className="arch-pkg">
                  <div className="arch-pkg-num">PKG 4 · EXTENSION</div>
                  <div className="arch-pkg-name">SPSM</div>
                  <div className="arch-pkg-sub">
                    Spatial Problem–Solution Mapping for cross-city scale
                  </div>
                </div>
              </div>
              <div className="arch-local-inputs">
                <div className="arch-input-chip">
                  Local input
                  <br />
                  <strong
                    style={{
                      color: "var(--burgundy)",
                      fontSize: ".72rem",
                    }}
                  >
                    PKG 1 data
                  </strong>
                </div>
                <div className="arch-input-chip">
                  Local input
                  <br />
                  <strong
                    style={{
                      color: "var(--burgundy)",
                      fontSize: ".72rem",
                    }}
                  >
                    PKG 2 data
                  </strong>
                </div>
                <div className="arch-input-chip">
                  Local input
                  <br />
                  <strong
                    style={{
                      color: "var(--burgundy)",
                      fontSize: ".72rem",
                    }}
                  >
                    PKG 3 data
                  </strong>
                </div>
                <div className="arch-input-chip">
                  Local input
                  <br />
                  <strong
                    style={{
                      color: "var(--burgundy)",
                      fontSize: ".72rem",
                    }}
                  >
                    PKG 4 data
                  </strong>
                </div>
              </div>
            </div>

            {/* <!-- ARROW --> */}
            <div
              className="arch-arrow-row"
              style={{
                background: "rgba(122,31,46,.04)",
                borderBottom: "1px solid rgba(122,31,46,.08)",
                padding: ".5rem 1.6rem",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M9 3v12M9 15l-4-4M9 15l4-4"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span
                style={{
                  fontSize: ".78rem",
                  color: "var(--muted)",
                  letterSpacing: ".06em",
                }}
              >
                Data flow to Back End
              </span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M9 3v12M9 15l-4-4M9 15l4-4"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            {/* <!-- BACK END LAYER --> */}
            <div
              className="arch-layer"
              style={{
                background: "rgba(255,255,255,.5)",
                borderBottom: "1px solid rgba(122,31,46,.1)",
              }}
            >
              <div className="arch-layer-label">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle
                    cx="6"
                    cy="6"
                    r="5"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                  <path
                    d="M4 6h4M6 4v4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
                Back End — Data Pipeline
              </div>
              <div className="arch-pipeline">
                <div className="arch-pipeline-step">
                  <strong>Collection</strong>
                  Learner interactions, sensor streams, survey responses
                </div>
                <div className="arch-pipeline-step">
                  <strong>Storage</strong>
                  Centralised, structured data repository
                </div>
                <div className="arch-pipeline-step">
                  <strong>Cleaning</strong>
                  Deduplication, normalisation, quality checks
                </div>
                <div className="arch-pipeline-step">
                  <strong>Analysis</strong>
                  Statistical models, spatial analytics, ML inference
                </div>
              </div>
            </div>

            {/* <!-- VISUALIZATION LAYER --> */}
            <div
              className="arch-layer"
              style={{
                background: "rgba(122,31,46,.04)",
              }}
            >
              <div className="arch-layer-label">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <rect
                    x="1"
                    y="7"
                    width="2"
                    height="4"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="5"
                    y="4"
                    width="2"
                    height="7"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="9"
                    y="1"
                    width="2"
                    height="10"
                    rx="1"
                    fill="currentColor"
                  />
                </svg>
                Output — Visualization &amp; Reporting
              </div>
              <div className="arch-viz">
                <div className="arch-viz-dot"></div>
                Visualization Dashboard — Evidence-based insights for educators,
                planners &amp; policymakers
                <div
                  className="arch-viz-dot"
                  style={{
                    animationDelay: ".7s",
                  }}
                ></div>
              </div>
              <div
                style={{
                  marginTop: ".8rem",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: ".4rem",
                }}
              >
                <span className="arch-badge">Easy to scale up</span>
                <span className="arch-badge">Interactive platforms</span>
                <span className="arch-badge">Measurement of effectiveness</span>
                <span className="arch-badge">Cross-package comparison</span>
              </div>
            </div>
          </div>
          {/*<!-- /platform-arch --> */}
        </div>
      </section>

      {/* <!-- ========================= Theoretical Framework (LELP) ========================= --> */}
      <section>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">THEORY · SLIDE 7</div>
            <h2>Theoretical Framework — LELP</h2>
            <p>
              The SEE Living Lab is grounded in a{" "}
              <strong>
                Location-based Experiential Learning Platform (LELP)
              </strong>{" "}
              — a conceptual model that situates learners within their real
              mobility environment and tracks how education shapes behaviour at
              each stage of development.
            </p>
          </div>

          {/* <!-- LELP Banner --> */}
          <div className="lelp-banner">
            <div className="lb-abbr">LELP</div>
            <div>
              <div className="lb-full">
                Location-based Experiential Learning Platform
              </div>
              <div className="lb-desc">
                A theory-driven framework connecting where children travel, how
                they travel, and how evidence-based education — with or without
                innovative learning — shapes their safety behaviour over time.
                LELP links spatial context, vehicle type, and developmental
                stage to targeted educational interventions.
              </div>
            </div>
          </div>

          <div className="theory-grid">
            {/* <!-- Target Population --> */}
            <div className="theory-card">
              <h4>Target Population</h4>
              <p>
                Learners under 18 years old who travel to and from school
                independently — as active road users across multiple vehicle
                types and travel modes.
              </p>
              <div className="vehicle-grid">
                <div className="vehicle-block">
                  <div className="vb-label">Individual Drivers</div>
                  <ul>
                    <li>Motorcycles</li>
                    <li>Bicycles</li>
                    <li>Car (with licence)</li>
                    <li>Ride-hailing riders</li>
                  </ul>
                </div>
                <div className="vehicle-block">
                  <div className="vb-label">As Passenger / Active</div>
                  <ul>
                    <li>Walking</li>
                    <li>Bicycle passenger</li>
                    <li>Car passenger</li>
                    <li>Ride-hailing passenger</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <!-- Learning Pathways --> */}
            <div className="theory-card">
              <h4>Two Learning Pathways</h4>
              <p>
                LELP distinguishes learners who access innovative educational
                interventions from those who do not — allowing the lab to
                measure the <em>causal effect</em> of the R2S packages on
                real-world behaviour change.
              </p>
              <ul>
                <li>
                  <strong>With Education &amp; Innovative Learning</strong> —
                  learners who engage with the R2S Education, VR Cycling, and
                  Map platforms, receiving structured, gamified, and
                  spatially-anchored instruction.
                </li>
                <li>
                  <strong>Without Education / Innovative Learning</strong> —
                  control condition learners, enabling quasi-experimental
                  comparison and effect-size estimation.
                </li>
              </ul>
              <p
                style={{
                  marginTop: ".8rem",
                }}
              >
                Both pathways are tracked through the LELP platform&apos;s
                location-aware data layer, linking behavioural outcomes to real
                routes, intersections, and risk zones.
              </p>
            </div>
          </div>

          {/* <!-- Timeline phases from Slide 7 --> */}
          <h4
            style={{
              color: "var(--burgundy)",
              margin: "2rem 0 .5rem",
              fontSize: ".95rem",
              letterSpacing: ".04em",
            }}
          >
            Implementation Phases
          </h4>
          <div className="timeline-phases">
            <div className="phase-card">
              <div className="ph-yr">2026 — 2027</div>
              <h5>Package 1: Sense</h5>
              <p>
                Deploy R2S Education gamified platform. Baseline surveys of
                learner knowledge, attitudes and travel behaviour across partner
                schools in Ho Chi Minh City.
              </p>
            </div>
            <div className="phase-card">
              <div className="ph-yr">2027 — 2028</div>
              <h5>Package 2: Engage</h5>
              <p>
                Build and pilot the R2S VR Cycling hybrid simulator. Measure
                transfer from virtual hazard-perception practice to real-world
                scanning behaviour.
              </p>
            </div>
            <div className="phase-card">
              <div className="ph-yr">2028</div>
              <h5>Package 3: Evolve</h5>
              <p>
                Launch R2S Map spatial analytics dashboard. Link crash data,
                school catchments and LELP location data to generate route-level
                safety insights.
              </p>
            </div>
            <div className="phase-card">
              <div className="ph-yr">2029 — 2030</div>
              <h5>Package 4: Extended</h5>
              <p>
                Scale the LELP model to additional cities and partner nations
                (India, Nepal, ASEAN) via the Spatial Problem–Solution Mapping
                framework.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ========================= Interactive Demo ========================= --> */}
      <section
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(122,31,46,0.03))",
        }}
      >
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">INTERACTIVE · TRY IT</div>
            <h2 data-i18n="see.demo.title">
              {i18n("move-system.see.demo_title")}
            </h2>
            <p data-i18n="see.demo.sub">{i18n("move-system.see.demo_sub")}</p>
          </div>

          <div className="demo-wrap">
            <canvas
              id="hazardCanvas"
              className="demo-canvas"
              width="1100"
              height="440"
            ></canvas>
            <div className="demo-overlay" id="demoOverlay">
              <div>
                <h4 id="overlayTitle">Time&apos;s up</h4>
                <p id="overlayBody">
                  You found 0/6 hazards. Keep practicing with R2S Education.
                </p>
                <button className="btn" id="overlayBtn">
                  Play again
                </button>
              </div>
            </div>
            <div className="demo-controls">
              <button className="btn primary" id="startBtn">
                Start
              </button>
              <button className="btn" id="resetBtn">
                Reset
              </button>
              <div className="demo-status" id="statusText">
                Time: 20s · Score: 0/6
              </div>
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
            <h2>Peer-reviewed work — complete list</h2>
            <p>
              All SEE Lab-affiliated publications drawn from the MOVE System
              research portfolio, spanning gamified e-learning, behavioural
              science, spatial analytics, and cross-national road-safety
              education.
            </p>
          </div>

          <div>
            {/* <!-- 2023 --> */}
            <div className="pub-row">
              <div className="year">2023</div>
              <div className="cite">
                Le, H. N., Cuenen, A., Trinh, T. A., Janssens, D., Wets, G.,
                &amp; Brijs, K. Implementation of a gamified e-learning platform
                focusing on traffic knowledge and skills among Vietnamese
                adolescents.
                <span className="venue">
                  BUILT — International Journal of Building, Urban, Interior and
                  Landscape Technology, 21.
                </span>
                <a
                  href="https://doi.org/10.56261/built.v21.248560"
                  target="_blank"
                  style={{
                    color: "var(--burgundy)",
                    fontSize: ".8rem",
                  }}
                >
                  doi:10.56261/built.v21.248560
                </a>
              </div>
            </div>

            <div className="pub-row">
              <div className="year">2023</div>
              <div className="cite">
                Le, H. N., Trinh, T. A., Cuenen, A., Janssens, D., Wets, G.,
                &amp; Brijs, K. Identification of beliefs determining wrong lane
                riding intentions among Vietnamese adolescent two-wheeled
                riders: An Expectancy–Value approach.
                <span className="venue">
                  Journal of Safety Research, 85, 348–360.
                </span>
                <a
                  href="https://doi.org/10.1016/j.jsr.2023.04.002"
                  target="_blank"
                  style={{
                    color: "var(--burgundy)",
                    fontSize: ".8rem",
                  }}
                >
                  doi:10.1016/j.jsr.2023.04.002
                </a>
              </div>
            </div>

            <div className="pub-row">
              <div className="year">2023</div>
              <div className="cite">
                Pham, H. N., Cuenen, A., Trinh, T. A., Wets, G., &amp; Janssens,
                D. A Study of Students&apos; Perceptions toward the Use of
                Gamification in Traffic Safety Education in Ho Chi Minh City,
                Vietnam.
                <span className="venue">
                  BUILT — International Journal of Building, Urban, Interior and
                  Landscape Technology, 21(1), 19–34.
                </span>
                <a
                  href="https://doi.org/10.56261/built.v21.248671"
                  target="_blank"
                  style={{
                    color: "var(--burgundy)",
                    fontSize: ".8rem",
                  }}
                >
                  doi:10.56261/built.v21.248671
                </a>
              </div>
            </div>

            <div className="pub-row">
              <div className="year">2023</div>
              <div className="cite">
                Anh, T. T., Hoài, P. N., &amp; Anh, T. T. Tư duy thiết kế trong
                giáo dục an toàn giao thông cho học sinh trung học phổ thông tại
                Thành phố Hồ Chí Minh [Design thinking in traffic safety
                education for high school students in Ho Chi Minh City].
                <span className="venue">
                  Tạp Chí Khoa Học Đại Học Mở Thành Phố Hồ Chí Minh — Khoa Học
                  Xã Hội, 18(2), 45–62.
                </span>
                <a
                  href="http://dx.doi.org/10.46223/HCMCOUJS.soci.vi.18.2.3011.2023"
                  target="_blank"
                  style={{
                    color: "var(--burgundy)",
                    fontSize: ".8rem",
                  }}
                >
                  doi:10.46223/HCMCOUJS.soci.vi.18.2.3011.2023
                </a>
              </div>
            </div>

            {/* <!-- 2024 --> */}
            <div className="pub-row">
              <div className="year">2024</div>
              <div className="cite">
                Le, H. N., Trinh, T. A., Cuenen, A., Janssens, D., Wets, G.,
                &amp; Brijs, K. An Expectancy–Value approach to investigate
                socio-cognitive determinants of speeding among adolescent
                powered two-wheeled riders in Vietnam.
                <span className="venue">
                  International Journal of Injury Control and Safety Promotion,
                  31(1), 61–71.
                </span>
                <a
                  href="https://doi.org/10.1080/17457300.2023.2258851"
                  target="_blank"
                  style={{
                    color: "var(--burgundy)",
                    fontSize: ".8rem",
                  }}
                >
                  doi:10.1080/17457300.2023.2258851
                </a>
              </div>
            </div>

            <div className="pub-row">
              <div className="year">2024</div>
              <div className="cite">
                Borakanavar, M. I., Babu, S., Pham, H. N., Navandar, Y. V.,
                &amp; Krishnamurthy, K. Analysis of Road Safety Behaviour of
                School Children for Active Transport Modes: A Case Study of
                India.
                <span className="venue">
                  Journal of the Eastern Asia Society for Transportation
                  Studies, 15, 3055–3074.
                </span>
                <a
                  href="https://doi.org/10.11175/easts.15.3055"
                  target="_blank"
                  style={{
                    color: "var(--burgundy)",
                    fontSize: ".8rem",
                  }}
                >
                  doi:10.11175/easts.15.3055
                </a>
              </div>
            </div>

            <div className="pub-row">
              <div className="year">2024</div>
              <div className="cite">
                Borakanavar, M. I., Babu, S., Pham, H. N., Navandar, Y. V.,
                &amp; Krishnamurthy, K. Empirical Analysis of Road Safety
                Behaviours of School-going Children Using Structural Equation
                Modelling: A Perspective from India.
                <span className="venue">
                  European Transport — Trasporti Europei.
                </span>
                <a
                  href="https://doi.org/10.48295/ET.2024.96.2"
                  target="_blank"
                  style={{
                    color: "var(--burgundy)",
                    fontSize: ".8rem",
                  }}
                >
                  doi:10.48295/ET.2024.96.2
                </a>
              </div>
            </div>

            {/* <!-- 2025 --> */}
            <div className="pub-row">
              <div className="year">2025</div>
              <div className="cite">
                Le, H. N., Cuenen, A., Trinh, T. A., Janssens, D., Wets, G.,
                Khattak, M. W., &amp; Brijs, K. Investigating the predictors of
                adolescent learners&apos; continuance intention to engage with a
                gamified e-learning platform about traffic safety in Vietnam.
                <span className="venue">
                  Transportation Research Part F: Traffic Psychology and
                  Behaviour, 109, 1229–1245.
                </span>
                <a
                  href="https://doi.org/10.1016/j.trf.2025.01.032"
                  target="_blank"
                  style={{
                    color: "var(--burgundy)",
                    fontSize: ".8rem",
                  }}
                >
                  doi:10.1016/j.trf.2025.01.032
                </a>
              </div>
            </div>

            <div className="pub-row">
              <div className="year">2025</div>
              <div className="cite">
                Pham, N. H., Trinh, T. A., Cuenen, A., Janssens, D., &amp; Wets,
                G. Achieving a first detailed understanding of risky (motor)
                cycling behavior among Vietnamese adolescents: Findings from
                video elicitation focus groups.
                <span className="venue">
                  Journal of Transport &amp; Health, 44, 102129.
                </span>
                <a
                  href="https://doi.org/10.1016/j.jth.2025.102129"
                  target="_blank"
                  style={{
                    color: "var(--burgundy)",
                    fontSize: ".8rem",
                  }}
                >
                  doi:10.1016/j.jth.2025.102129
                </a>
              </div>
            </div>

            <div className="pub-row">
              <div className="year">2025</div>
              <div className="cite">
                Hoai Pham, N., Trinh, T. A., Navandar, Y. V., Cuenen, A., Wets,
                G., &amp; Janssens, D. Traffic Safety Education From a Lifelong
                Learning Perspective: Policy Recommendations for Vietnam, India
                and Nepal.
                <span className="venue">Children &amp; Society.</span>
                <a
                  href="https://doi.org/10.1111/chso.13000"
                  target="_blank"
                  style={{
                    color: "var(--burgundy)",
                    fontSize: ".8rem",
                  }}
                >
                  doi:10.1111/chso.13000
                </a>
              </div>
            </div>

            <div className="pub-row">
              <div className="year">2025</div>
              <div className="cite">
                Le, T. H. A., Trinh, T. A., Neven, A., Janssens, D., &amp;
                Truong, Q. N. Child-friendly walkability for well-being in Ho
                Chi Minh City, Vietnam: an integrated approach from objective
                and subjective perspectives.
                <span className="venue">Cities &amp; Health, 1–20.</span>
                <a
                  href="https://doi.org/10.1080/23748834.2025.2520113"
                  target="_blank"
                  style={{
                    color: "var(--burgundy)",
                    fontSize: ".8rem",
                  }}
                >
                  doi:10.1080/23748834.2025.2520113
                </a>
              </div>
            </div>

            <div className="pub-row">
              <div className="year">2025</div>
              <div className="cite">
                Pham, N. H., Le, P. T., &amp; Trinh, T. A. An Exploratory Study
                on Barriers to Walking among Pedestrians in Ho Chi Minh City,
                Vietnam: Findings from Photo-Elicitation Focus Group
                Discussions.
                <span className="venue">
                  Journal of the Eastern Asia Society for Transportation
                  Studies, 16, PP4149.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ========================= Stakeholders & Benefits ========================= --> */}
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
            <h2>Who benefits, and how</h2>
            <p>
              SEE is designed as a shared infrastructure — every actor in the
              street ecosystem gets something measurable back.
            </p>
          </div>

          <div className="impact-map">
            <div className="impact-hub">
              <div className="hub-kicker">SEE Living Lab</div>
              <h3>Shared Road Safety Infrastructure</h3>
              <p>
                One platform connects learning, behavioural evidence, spatial
                analytics, and policy action for the school-zone ecosystem.
              </p>
              <div className="impact-metric">
                <span>Learn</span>
                <span>Measure</span>
                <span>Act</span>
              </div>
            </div>

            <article className="impact-card schools">
              <div className="impact-card-head">
                <div>
                  <h3>Schools</h3>
                </div>
                <span className="impact-code">SC</span>
              </div>
              <div className="impact-role">Implementation sites</div>
              <ul>
                <li>Higher quality extracurricular activities</li>
                <li>Flexible technology-supported safety education</li>
                <li>Track students&apos; travel behaviour over time</li>
                <li>Long-term research cooperation and certificates</li>
              </ul>
            </article>

            <article className="impact-card students">
              <div className="impact-card-head">
                <div>
                  <h3>Students</h3>
                </div>
                <span className="impact-code">ST</span>
              </div>
              <div className="impact-role">Road users</div>
              <ul>
                <li>Stronger traffic-rule knowledge</li>
                <li>Practice with VR and hazard perception tools</li>
                <li>Long-term safety awareness</li>
                <li>Reduced personal crash risk</li>
              </ul>
            </article>

            <article className="impact-card parents">
              <div className="impact-card-head">
                <div>
                  <h3>Parents</h3>
                </div>
                <span className="impact-code">PA</span>
              </div>
              <div className="impact-role">Home support</div>
              <ul>
                <li>Monitor learning progress from home</li>
                <li>Understand road-risk exposure around school routes</li>
                <li>Support safer daily mobility habits</li>
              </ul>
            </article>

            <article className="impact-card authorities">
              <div className="impact-card-head">
                <div>
                  <h3>Authorities</h3>
                </div>
                <span className="impact-code">AU</span>
              </div>
              <div className="impact-role">Policy actors</div>
              <ul>
                <li>Evidence-based policy design</li>
                <li>School-zone risk and hotspot intelligence</li>
                <li>Improved public health outcomes</li>
                <li>Reduced social and economic crash burden</li>
              </ul>
            </article>

            <article className="impact-card business">
              <div className="impact-card-head">
                <div>
                  <h3>Business / NGOs</h3>
                </div>
                <span className="impact-code">NG</span>
              </div>
              <div className="impact-role">Scaling partners</div>
              <ul>
                <li>Corporate social responsibility positioning</li>
                <li>Commercialization and revenue-sharing potential</li>
                <li>Support for regional replication and outreach</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* <!-- ========================= Timeline ========================= --> */}
      <section>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow" data-i18n="common.timeline">
              {i18n("move-system.common.timeline")}
            </div>
            <h2>Roadmap 2026 — 2030</h2>
            <p>
              Sequential rollout of the four R2S packages, with each stage
              informing the next.
            </p>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="yr">2026 — 2027</div>
              <h4>Package 1 · R2S Education (Sense)</h4>
              <p>
                Deploy the gamified e-learning platform across partner schools
                in Ho Chi Minh City; baseline behavioural surveys.
              </p>
            </div>
            <div className="timeline-item">
              <div className="yr">2027 — 2028</div>
              <h4>Package 2 · R2S VR Cycling (Engage)</h4>
              <p>
                Build and pilot the hybrid VR cycling simulator; measure
                transfer from virtual practice to real-world scanning behaviour.
              </p>
            </div>
            <div className="timeline-item">
              <div className="yr">2028</div>
              <h4>Package 3 · R2S Map (Evolve)</h4>
              <p>
                Launch the spatial analytics dashboard linking crash data,
                school catchments and walkability audits for public use.
              </p>
            </div>
            <div className="timeline-item">
              <div className="yr">2029 — 2030</div>
              <h4>Package 4 · Spatial Problem–Solution Mapping (Extension)</h4>
              <p>
                Scale the model to additional Vietnamese cities and partner
                nations (India, Nepal, ASEAN) via the problem–solution mapping
                framework.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ========================= PhD Research Platform ========================= --> */}
      <section
        style={{
          background:
            "linear-gradient(180deg, rgba(122,31,46,0.04), transparent)",
        }}
      >
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">RESEARCHER PLATFORM · LELP</div>
            <h2>PhD Research Platform — LELP Dashboard</h2>
            <p>
              The LELP (Learning and Engagement for Life and Pedestrian safety)
              platform is the doctoral research output of{" "}
              <strong>Phan Le Truong An (An Le)</strong>, PhD Candidate at ISCM,
              UEH — directly powering the data-driven backbone of the SEE Living
              Lab.
            </p>
          </div>

          {/* <!-- Researcher intro --> */}
          <div className="phd-intro">
            <div className="phd-researcher-card">
              <div
                className="phd-avatar"
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
              <h4>Phan Le Truong An</h4>
              <div className="phd-role">PhD Candidate · Senior Researcher</div>
              <div className="phd-inst">
                ISCM, University of Economics
                <br />
                Ho Chi Minh City (UEH)
              </div>
              <div>
                <span className="phd-tag">Traffic Safety Education</span>
                <span className="phd-tag">Behavioural Science</span>
                <span className="phd-tag">Gamification</span>
                <span className="phd-tag">VR &amp; Spatial Analytics</span>
                <span className="phd-tag">LELP Platform</span>
              </div>
              <div
                style={{
                  marginTop: ".9rem",
                }}
              >
                <a
                  href="mailto:anlpt@ueh.edu.vn"
                  style={{
                    color: "var(--burgundy)",
                    fontSize: ".8rem",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  anlpt@ueh.edu.vn
                </a>
              </div>
            </div>

            <div className="phd-info">
              <h4>About the LELP Research</h4>
              <p>
                The LELP (Location-based Experiential Learning Platform) is An
                Le&apos;s doctoral research project at UEH ISCM. It bridges two
                critical gaps in Vietnamese road-safety education: the absence
                of technology-enhanced, evidence-based learning environments for
                young road users, and the lack of spatially-grounded behavioural
                outcome data linking educational interventions to real
                street-level safety.
              </p>
              <p>
                LELP integrates the four SEE Lab packages — gamified e-learning
                (R2S Education), immersive VR practice (R2S VR Cycling),
                GIS-based analytics (R2S Map), and cross-city scaling (SPSM) —
                into a unified platform that tracks learner trajectories from
                classroom instruction through to measurable on-road behaviour
                change. The dashboard below visualises research progress,
                participant data, and outcomes in real time.
              </p>

              <div className="phd-pillars">
                <div className="phd-pillar">
                  <strong>Learning</strong>
                  <span>
                    Evidence-based, gamified, multi-modal educational content
                    for adolescents
                  </span>
                </div>
                <div className="phd-pillar">
                  <strong>Engagement</strong>
                  <span>
                    VR, location-based, and interactive tools driving sustained
                    participation
                  </span>
                </div>
                <div className="phd-pillar">
                  <strong>Life &amp; Pedestrian Safety</strong>
                  <span>
                    Long-term behavioural outcomes measured through spatial and
                    survey data
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /phd-intro --> */}

          {/* <!-- Dashboard embed --> */}
          <div className="phd-iframe-wrap">
            <div className="phd-iframe-header">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span>
                LELP Research Dashboard — PhD Platform · An Le · ISCM UEH
              </span>
            </div>
            <DashBoard />
          </div>
        </div>
      </section>
    </div>
  );
}

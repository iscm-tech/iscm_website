"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Script from "next/script";
import { useEffect } from "react";

export default function View() {
  const i18n = useTranslations();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/move-system/smart.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="smart">
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
        strategy="beforeInteractive"
      />
      <section className="lab-hero lab-hero--sml">
        <div className="lab-hero__bg" aria-hidden="true">
          SML
        </div>
        <div className="lab-hero__inner">
          <Link
            className="back-link"
            href="/move-system"
            data-i18n="smart.back"
          >
            {i18n("move-system.smart.back")}
          </Link>
          <div className="eyebrow">LAB · 02 / SML</div>
          <h1 data-i18n="smart.h1">{i18n("move-system.smart.h1")}</h1>
          <p className="lead" data-i18n="smart.lead">
            {i18n("move-system.smart.lead")}
          </p>
          <div className="hero-tags" aria-label="focus areas">
            <span className="tag">MaaS</span>
            <span className="tag">Adaptive Signals</span>
            <span className="tag">Micro-mobility</span>
            <span className="tag">CE-M Program</span>
            <span className="tag">Low-Carbon Campus</span>
          </div>
        </div>
      </section>

      {/* <!-- ====================================================== SML INTRODUCTION --> */}
      <section
        style={{
          background: "linear-gradient(135deg,#7A1F2E 0%,#4E121C 100%)",
          color: "#F5F2EE",
          padding: "4.5rem 0",
        }}
      >
        <div
          style={{
            maxWidth: "var(--max-w)",
            margin: "0 auto",
            padding: "0 clamp(1rem,4vw,3rem)",
          }}
        >
          {/* <!-- A. Mission headline --> */}
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
              INTELLIGENT URBAN MOBILITY · ISCM · UEH
            </div>
            <h2
              style={{
                color: "#F5F2EE",
                margin: "0 0 1rem",
                fontSize: "clamp(1.7rem,4vw,2.5rem)",
                lineHeight: 1.2,
              }}
            >
              Transit-Oriented Development
              <br />
              &amp; Smart Mobility Operations
            </h2>
            <p
              style={{
                fontSize: "1.06rem",
                lineHeight: 1.78,
                color: "rgba(245,242,238,.87)",
                margin: "0 0 1.2rem",
              }}
            >
              Smart Mobility Lab advances intelligent transportation systems and
              sustainable urban mobility through three integrated research
              tracks: TOD-driven urban structure research, smart mobility &amp;
              traffic operations management, and last-mile micro-mobility
              systems. Through the Campus EV Micro-Mobility (CE-M) Program,
              solutions are tested in real-world conditions and scaled across
              Vietnamese cities.
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
                  borderRadius: 9999,
                  border: "1px solid rgba(245,242,238,.3)",
                  fontSize: ".75rem",
                  letterSpacing: ".08em",
                  color: "rgba(245,242,238,.85)",
                }}
              >
                Transit-Oriented Development
              </span>
              <span
                style={{
                  padding: "5px 14px",
                  borderRadius: 9999,
                  border: "1px solid rgba(245,242,238,.3)",
                  fontSize: ".75rem",
                  letterSpacing: ".08em",
                  color: "rgba(245,242,238,.85)",
                }}
              >
                MaaS &amp; Smart Routing
              </span>
              <span
                style={{
                  padding: "5px 14px",
                  borderRadius: 9999,
                  border: "1px solid rgba(245,242,238,.3)",
                  fontSize: ".75rem",
                  letterSpacing: ".08em",
                  color: "rgba(245,242,238,.85)",
                }}
              >
                Traffic Operations
              </span>
              <span
                style={{
                  padding: "5px 14px",
                  borderRadius: 9999,
                  border: "1px solid rgba(245,242,238,.3)",
                  fontSize: ".75rem",
                  letterSpacing: ".08em",
                  color: "rgba(245,242,238,.85)",
                }}
              >
                Last-Mile Micro-mobility
              </span>
              <span
                style={{
                  padding: "5px 14px",
                  borderRadius: 9999,
                  border: "1px solid rgba(245,242,238,.3)",
                  fontSize: ".75rem",
                  letterSpacing: ".08em",
                  color: "rgba(245,242,238,.85)",
                }}
              >
                CE-M Program
              </span>
            </div>
          </div>

          {/* <!-- B. 3D TOD City Visualization --> */}
          <div
            style={{
              marginBottom: "3rem",
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
              Smart Traffic Operations Center — Adaptive Signals · Live Flow ·
              TOD Corridors — Click Intersections
            </div>
            <div
              style={{
                position: "relative",
                border: "1px solid rgba(184,146,100,0.2)",
                borderRadius: "8px",
                overflow: "hidden",
                background: "#060810",
              }}
            >
              <canvas
                id="sml3dCanvas"
                style={{
                  width: "100%",
                  height: "500px",
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
                SML · SMART TRAFFIC OPERATIONS CENTER
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  fontFamily: "var(--font-mono)",
                  fontSize: ".63rem",
                  color: "rgba(245,242,238,0.5)",
                }}
              >
                <div>
                  <span
                    style={{
                      display: "inline-block",
                      width: "10px",
                      height: "10px",
                      background: "#50DC78",
                      borderRadius: "50%",
                      marginRight: "5px",
                      verticalAlign: "middle",
                    }}
                  ></span>
                  Signal Green
                </div>
                <div>
                  <span
                    style={{
                      display: "inline-block",
                      width: "10px",
                      height: "10px",
                      background: "#E05050",
                      borderRadius: "50%",
                      marginRight: "5px",
                      verticalAlign: "middle",
                    }}
                  ></span>
                  Signal Red
                </div>
                <div>
                  <span
                    style={{
                      display: "inline-block",
                      width: "4px",
                      height: "10px",
                      background: "#B89264",
                      marginRight: "5px",
                      verticalAlign: "middle",
                      borderRadius: "2px",
                    }}
                  ></span>
                  BRT Corridor
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
                TOD · MaaS · ADAPTIVE SIGNAL CONTROL
              </div>
            </div>
            <div
              id="sml3dInfo"
              style={{
                marginTop: ".8rem",
                background: "rgba(245,242,238,0.05)",
                border: "1px solid rgba(184,146,100,0.2)",
                padding: ".9rem 1.2rem",
                fontFamily: "var(--font-mono)",
                fontSize: ".75rem",
                color: "rgba(245,242,238,0.65)",
                minHeight: "48px",
                borderRadius: "4px",
                letterSpacing: ".04em",
              }}
            >
              <span
                style={{
                  color: "rgba(184,146,100,0.5)",
                }}
              >
                CLICK AN INTERSECTION NODE
              </span>{" "}
              to see adaptive signal data, throughput metrics, and TOD planning
              parameters. Drag to orbit.
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))",
              gap: "1rem",
              marginBottom: 0,
            }}
          >
            <div
              style={{
                background: "rgba(245,242,238,.07)",
                border: "1px solid rgba(245,242,238,.12)",
                padding: "1.3rem 1.2rem",
              }}
            >
              <div
                style={{
                  fontSize: "1.4rem",
                  marginBottom: ".6rem",
                }}
              >
                🏙️
              </div>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: ".95rem",
                  color: "#F5F2EE",
                  marginBottom: ".4rem",
                }}
              >
                Transit-Oriented Development
              </div>
              <div
                style={{
                  fontSize: ".82rem",
                  color: "rgba(245,242,238,.65)",
                  lineHeight: 1.65,
                  marginBottom: ".7rem",
                }}
              >
                Researching urban development models around major transit
                stations — optimising land use density, mixed-use zoning, and
                public transport connectivity for sustainable city growth in
                HCMC.
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: ".64rem",
                  letterSpacing: ".1em",
                  color: "#B89264",
                  borderTop: "1px solid rgba(184,146,100,.2)",
                  paddingTop: ".5rem",
                }}
              >
                GIS · Open Data · Urban Structure Simulation
              </div>
            </div>

            <div
              style={{
                background: "rgba(245,242,238,.07)",
                border: "1px solid rgba(245,242,238,.12)",
                padding: "1.3rem 1.2rem",
              }}
            >
              <div
                style={{
                  fontSize: "1.4rem",
                  marginBottom: ".6rem",
                }}
              >
                🚦
              </div>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: ".95rem",
                  color: "#F5F2EE",
                  marginBottom: ".4rem",
                }}
              >
                Smart Traffic Operations
              </div>
              <div
                style={{
                  fontSize: ".82rem",
                  color: "rgba(245,242,238,.65)",
                  lineHeight: 1.65,
                  marginBottom: ".7rem",
                }}
              >
                Adaptive Signal Control for mixed two-wheeler traffic;
                AI-powered demand forecasting and route optimisation; MaaS
                platform integrating bus, rail and shared mobility with
                real-time scheduling and integrated payment.
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: ".64rem",
                  letterSpacing: ".1em",
                  color: "#B89264",
                  borderTop: "1px solid rgba(184,146,100,.2)",
                  paddingTop: ".5rem",
                }}
              >
                VISSIM · AIMSUN · AI Forecasting
              </div>
            </div>

            <div
              style={{
                background: "rgba(245,242,238,.07)",
                border: "1px solid rgba(245,242,238,.12)",
                padding: "1.3rem 1.2rem",
              }}
            >
              <div
                style={{
                  fontSize: "1.4rem",
                  marginBottom: ".6rem",
                }}
              >
                🛵
              </div>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: ".95rem",
                  color: "#F5F2EE",
                  marginBottom: ".4rem",
                }}
              >
                Last-Mile &amp; Micro-mobility
              </div>
              <div
                style={{
                  fontSize: ".82rem",
                  color: "rgba(245,242,238,.65)",
                  lineHeight: 1.65,
                  marginBottom: ".7rem",
                }}
              >
                Designing and testing shared micro-mobility systems — e-bikes,
                scooters — for first- and last-mile urban connectivity. Hub and
                stop planning with GPS data and vehicle safety analytics.
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: ".64rem",
                  letterSpacing: ".1em",
                  color: "#B89264",
                  borderTop: "1px solid rgba(184,146,100,.2)",
                  paddingTop: ".5rem",
                }}
              >
                GPS Trackers · Field Pilots · CE-M Program
              </div>
            </div>

            <div
              style={{
                background: "rgba(245,242,238,.07)",
                border: "1px solid rgba(245,242,238,.12)",
                padding: "1.3rem 1.2rem",
              }}
            >
              <div
                style={{
                  fontSize: "1.4rem",
                  marginBottom: ".6rem",
                }}
              >
                ⚡
              </div>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: ".95rem",
                  color: "#F5F2EE",
                  marginBottom: ".4rem",
                }}
              >
                CE-M Program — Campus Living Lab
              </div>
              <div
                style={{
                  fontSize: ".82rem",
                  color: "rgba(245,242,238,.65)",
                  lineHeight: 1.65,
                  marginBottom: ".7rem",
                }}
              >
                Campus Electric Micro-Mobility: e-motorbikes and e-shuttle buses
                in a geofenced UEH network. Smart booking platform, SYM/Honda
                partnerships, and campus-first incentive policies forming a
                full-scale testbed.
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: ".64rem",
                  letterSpacing: ".1em",
                  color: "#B89264",
                  borderTop: "1px solid rgba(184,146,100,.2)",
                  paddingTop: ".5rem",
                }}
              >
                Real-World Testbed · Policy Package
              </div>
            </div>
          </div>

          {/* <!-- Smart Mobility Research Framework --> */}
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
              SMART MOBILITY SYSTEM · SML RESEARCH FRAMEWORK
            </div>
            <div
              className="research-framework"
              aria-label="Smart Mobility Lab research framework"
              style={{
                display: "none",
              }}
            >
              <div className="rf-streams">
                <article
                  className="rf-stream"
                  style={
                    {
                      "--rf-color": "#6090d0",
                    } as React.CSSProperties
                  }
                >
                  <div className="rf-stream-head">
                    <h3>TOD Planning</h3>
                    <span className="rf-code">01</span>
                  </div>
                  <p>
                    Transit node density, mixed-use zoning, HCMC corridor
                    analysis, and GIS-based urban structure modelling.
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
                    <h3>Traffic Operations</h3>
                    <span className="rf-code">02</span>
                  </div>
                  <p>
                    Mixed-flow signal optimisation, VISSIM/AIMSUN simulation, AI
                    demand forecasting, and real-time control.
                  </p>
                </article>
                <article
                  className="rf-stream"
                  style={
                    {
                      "--rf-color": "#e05070",
                    } as React.CSSProperties
                  }
                >
                  <div className="rf-stream-head">
                    <h3>MaaS Integration</h3>
                    <span className="rf-code">03</span>
                  </div>
                  <p>
                    Bus, rail, and micro-mobility routing with smart-card
                    payment, real-time scheduling, and trip planning.
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
                    <h3>CE-M Micro-Mobility</h3>
                    <span className="rf-code">04</span>
                  </div>
                  <p>
                    E-motorbike fleet, UEH geofenced testbed, smart booking, SYM
                    partnership, and incentive policy design.
                  </p>
                </article>
              </div>
              <aside
                className="rf-platform"
                style={
                  {
                    "--rf-color": "#c4697a",
                  } as React.CSSProperties
                }
              >
                <h3>SML Platform</h3>
                <p>
                  Smart Mobility and Urban Analytics for simulation, field
                  testing, and data-driven urban policy.
                </p>
                <div className="rf-output-grid">
                  <div
                    className="rf-output"
                    style={
                      {
                        "--rf-color": "#f2c94c",
                      } as React.CSSProperties
                    }
                  >
                    <strong>Signal</strong>
                    <p>adaptive control</p>
                  </div>
                  <div
                    className="rf-output"
                    style={
                      {
                        "--rf-color": "#e05070",
                      } as React.CSSProperties
                    }
                  >
                    <strong>MaaS</strong>
                    <p>trip planning</p>
                  </div>
                  <div
                    className="rf-output"
                    style={
                      {
                        "--rf-color": "#6090d0",
                      } as React.CSSProperties
                    }
                  >
                    <strong>TOD</strong>
                    <p>urban policy</p>
                  </div>
                </div>
              </aside>
            </div>
            <div className="rf-note">
              Smart mobility intelligence for Vietnam&apos;s urban future
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
                <linearGradient id="smlS1" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="rgba(96,144,208,0.16)" />
                  <stop offset="100%" stop-color="rgba(96,144,208,0.03)" />
                </linearGradient>
                <linearGradient id="smlS2" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="rgba(242,201,76,0.15)" />
                  <stop offset="100%" stop-color="rgba(242,201,76,0.03)" />
                </linearGradient>
                <linearGradient id="smlS3" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="rgba(224,80,112,0.14)" />
                  <stop offset="100%" stop-color="rgba(224,80,112,0.03)" />
                </linearGradient>
                <linearGradient id="smlS4" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="rgba(111,207,151,0.14)" />
                  <stop offset="100%" stop-color="rgba(111,207,151,0.03)" />
                </linearGradient>
              </defs>
              {/* <!-- TOD PLANNING --> */}
              <rect
                x="16"
                y="14"
                width="528"
                height="58"
                rx="6"
                fill="url(#smlS1)"
                stroke="rgba(96,144,208,0.28)"
                stroke-width="1"
              />
              <rect
                x="38"
                y="42"
                width="12"
                height="22"
                fill="rgba(96,144,208,0.22)"
                rx="1"
              />
              <rect
                x="53"
                y="32"
                width="16"
                height="32"
                fill="rgba(96,144,208,0.28)"
                rx="1"
              />
              <rect
                x="72"
                y="40"
                width="12"
                height="24"
                fill="rgba(96,144,208,0.20)"
                rx="1"
              />
              <rect
                x="87"
                y="28"
                width="14"
                height="36"
                fill="rgba(96,144,208,0.25)"
                rx="1"
              />
              <rect
                x="104"
                y="36"
                width="12"
                height="28"
                fill="rgba(96,144,208,0.22)"
                rx="1"
              />
              <rect
                x="119"
                y="44"
                width="10"
                height="20"
                fill="rgba(96,144,208,0.18)"
                rx="1"
              />
              <line
                x1="30"
                y1="63"
                x2="200"
                y2="63"
                stroke="rgba(96,144,208,0.55)"
                stroke-width="2"
              />
              <circle cx="50" cy="63" r="3.5" fill="rgba(96,144,208,0.9)" />
              <circle cx="90" cy="63" r="3.5" fill="rgba(96,144,208,0.9)" />
              <circle cx="140" cy="63" r="3.5" fill="rgba(96,144,208,0.7)" />
              <circle cx="180" cy="63" r="3.5" fill="rgba(96,144,208,0.6)" />
              <circle
                cx="80"
                cy="45"
                r="20"
                fill="none"
                stroke="rgba(96,144,208,0.16)"
                stroke-dasharray="3,2"
                stroke-width="1"
              />
              <circle
                cx="80"
                cy="45"
                r="11"
                fill="none"
                stroke="rgba(96,144,208,0.22)"
                stroke-dasharray="3,2"
                stroke-width="0.8"
              />
              <text
                x="216"
                y="36"
                fill="#6090d0"
                font-size="8.5"
                font-weight="700"
                letter-spacing="1.8"
                font-family="monospace"
              >
                TOD PLANNING · URBAN STRUCTURE RESEARCH
              </text>
              <text x="216" y="54" fill="rgba(245,242,238,0.45)" font-size="8">
                Transit node density · Mixed-use zoning · HCMC corridor analysis
                · GIS-based urban structure modelling
              </text>
              <text
                x="20"
                y="65"
                fill="rgba(96,144,208,0.50)"
                font-size="7.5"
                font-style="italic"
                font-family="monospace"
              >
                TOD
              </text>
              {/* <!-- TRAFFIC OPERATIONS --> */}
              <rect
                x="16"
                y="80"
                width="528"
                height="56"
                rx="6"
                fill="url(#smlS2)"
                stroke="rgba(242,201,76,0.28)"
                stroke-width="1"
              />
              <rect
                x="40"
                y="86"
                width="24"
                height="44"
                rx="4"
                fill="rgba(242,201,76,0.15)"
                stroke="rgba(242,201,76,0.4)"
                stroke-width="0.8"
              />
              <circle cx="52" cy="97" r="6" fill="rgba(224,60,60,0.6)" />
              <circle cx="52" cy="108" r="6" fill="rgba(242,201,76,0.7)" />
              <circle cx="52" cy="119" r="6" fill="rgba(60,180,60,0.6)" />
              <line
                x1="80"
                y1="100"
                x2="120"
                y2="100"
                stroke="rgba(242,201,76,0.55)"
                stroke-width="1.5"
              />
              <polygon
                points="120,97 128,100 120,103"
                fill="rgba(242,201,76,0.55)"
              />
              <line
                x1="80"
                y1="110"
                x2="112"
                y2="110"
                stroke="rgba(242,201,76,0.40)"
                stroke-width="1.2"
              />
              <polygon
                points="112,107.5 120,110 112,112.5"
                fill="rgba(242,201,76,0.4)"
              />
              <path
                d="M 138 112 Q 146 104 154 112 Q 162 120 170 112 Q 178 104 186 112"
                stroke="rgba(242,201,76,0.50)"
                stroke-width="1.2"
                fill="none"
              />
              <text
                x="216"
                y="98"
                fill="#f2c94c"
                font-size="8.5"
                font-weight="700"
                letter-spacing="1.8"
                font-family="monospace"
              >
                TRAFFIC OPERATIONS · ADAPTIVE SIGNAL CONTROL
              </text>
              <text x="216" y="116" fill="rgba(245,242,238,0.45)" font-size="8">
                Mixed-flow signal optimisation · VISSIM/AIMSUN simulation · AI
                demand forecasting · Real-time control
              </text>
              <text
                x="20"
                y="128"
                fill="rgba(242,201,76,0.50)"
                font-size="7.5"
                font-style="italic"
                font-family="monospace"
              >
                Operations
              </text>
              {/* <!-- MaaS INTEGRATION --> */}
              <rect
                x="16"
                y="144"
                width="528"
                height="56"
                rx="6"
                fill="url(#smlS3)"
                stroke="rgba(224,80,112,0.22)"
                stroke-width="1"
              />
              <rect
                x="38"
                y="156"
                width="24"
                height="16"
                rx="2"
                fill="rgba(224,80,112,0.18)"
                stroke="rgba(224,80,112,0.38)"
                stroke-width="0.7"
              />
              <circle cx="43" cy="174" r="3.5" fill="rgba(224,80,112,0.45)" />
              <circle cx="57" cy="174" r="3.5" fill="rgba(224,80,112,0.45)" />
              <rect
                x="40"
                y="158"
                width="20"
                height="6"
                rx="1"
                fill="rgba(224,80,112,0.3)"
              />
              <rect
                x="78"
                y="154"
                width="28"
                height="20"
                rx="3"
                fill="rgba(224,80,112,0.15)"
                stroke="rgba(224,80,112,0.30)"
                stroke-width="0.7"
              />
              <circle cx="84" cy="177" r="3.5" fill="rgba(224,80,112,0.40)" />
              <circle cx="100" cy="177" r="3.5" fill="rgba(224,80,112,0.40)" />
              <line
                x1="78"
                y1="165"
                x2="106"
                y2="165"
                stroke="rgba(224,80,112,0.25)"
                stroke-width="0.6"
              />
              <circle
                cx="124"
                cy="166"
                r="7"
                fill="none"
                stroke="rgba(224,80,112,0.45)"
                stroke-width="1.2"
              />
              <circle
                cx="142"
                cy="166"
                r="7"
                fill="none"
                stroke="rgba(224,80,112,0.45)"
                stroke-width="1.2"
              />
              <line
                x1="124"
                y1="166"
                x2="133"
                y2="157"
                stroke="rgba(224,80,112,0.5)"
                stroke-width="1"
              />
              <line
                x1="133"
                y1="157"
                x2="142"
                y2="166"
                stroke="rgba(224,80,112,0.5)"
                stroke-width="1"
              />
              <line
                x1="62"
                y1="164"
                x2="78"
                y2="164"
                stroke="rgba(224,80,112,0.40)"
                stroke-width="1"
                stroke-dasharray="2,1.5"
              />
              <line
                x1="106"
                y1="165"
                x2="117"
                y2="165"
                stroke="rgba(224,80,112,0.40)"
                stroke-width="1"
                stroke-dasharray="2,1.5"
              />
              <rect
                x="157"
                y="154"
                width="16"
                height="26"
                rx="3"
                fill="rgba(224,80,112,0.12)"
                stroke="rgba(224,80,112,0.30)"
                stroke-width="0.6"
              />
              <line
                x1="160"
                y1="160"
                x2="170"
                y2="160"
                stroke="rgba(224,80,112,0.35)"
                stroke-width="0.8"
              />
              <line
                x1="160"
                y1="165"
                x2="170"
                y2="165"
                stroke="rgba(224,80,112,0.28)"
                stroke-width="0.7"
              />
              <circle cx="163" cy="172" r="2.5" fill="rgba(224,80,112,0.45)" />
              <text
                x="216"
                y="162"
                fill="#e05070"
                font-size="8.5"
                font-weight="700"
                letter-spacing="1.8"
                font-family="monospace"
              >
                MaaS INTEGRATION · MULTI-MODAL ROUTING
              </text>
              <text x="216" y="180" fill="rgba(245,242,238,0.45)" font-size="8">
                Integrated bus · rail · micro-mobility routing · Smart card
                payment · Real-time scheduling · Trip planning
              </text>
              <text
                x="20"
                y="192"
                fill="rgba(224,80,112,0.50)"
                font-size="7.5"
                font-style="italic"
                font-family="monospace"
              >
                MaaS
              </text>
              {/* <!-- CE-M MICRO-MOBILITY --> */}
              <rect
                x="16"
                y="208"
                width="528"
                height="56"
                rx="6"
                fill="url(#smlS4)"
                stroke="rgba(111,207,151,0.28)"
                stroke-width="1"
              />
              <ellipse
                cx="55"
                cy="246"
                rx="10"
                ry="10"
                fill="none"
                stroke="rgba(111,207,151,0.50)"
                stroke-width="1.5"
              />
              <ellipse
                cx="100"
                cy="246"
                rx="10"
                ry="10"
                fill="none"
                stroke="rgba(111,207,151,0.50)"
                stroke-width="1.5"
              />
              <rect
                x="58"
                y="228"
                width="38"
                height="12"
                rx="4"
                fill="rgba(111,207,151,0.18)"
                stroke="rgba(111,207,151,0.38)"
                stroke-width="0.8"
              />
              <line
                x1="65"
                y1="228"
                x2="55"
                y2="236"
                stroke="rgba(111,207,151,0.45)"
                stroke-width="1"
              />
              <line
                x1="90"
                y1="228"
                x2="100"
                y2="236"
                stroke="rgba(111,207,151,0.45)"
                stroke-width="1"
              />
              <polygon
                points="122,222 116,236 124,236 118,252 132,234 122,234 128,222"
                fill="rgba(111,207,151,0.50)"
              />
              <rect
                x="145"
                y="220"
                width="45"
                height="38"
                rx="5"
                fill="rgba(111,207,151,0.08)"
                stroke="rgba(111,207,151,0.28)"
                stroke-dasharray="4,2"
                stroke-width="1.2"
              />
              <text
                x="167"
                y="236"
                text-anchor="middle"
                fill="rgba(111,207,151,0.55)"
                font-size="7"
                font-family="monospace"
              >
                UEH
              </text>
              <text
                x="167"
                y="247"
                text-anchor="middle"
                fill="rgba(111,207,151,0.40)"
                font-size="6.5"
              >
                CAMPUS
              </text>
              <text
                x="216"
                y="228"
                fill="#6fcf97"
                font-size="8.5"
                font-weight="700"
                letter-spacing="1.8"
                font-family="monospace"
              >
                LAST-MILE MICRO-MOBILITY · CE-M CAMPUS PROGRAM
              </text>
              <text x="216" y="246" fill="rgba(245,242,238,0.45)" font-size="8">
                E-motorbike fleet · UEH geofenced testbed · Smart booking · SYM
                partnership · Incentive policy design
              </text>
              <text
                x="20"
                y="256"
                fill="rgba(111,207,151,0.50)"
                font-size="7.5"
                font-style="italic"
                font-family="monospace"
              >
                CE-M
              </text>
              {/* <!-- Arrows --> */}
              <line
                x1="546"
                y1="43"
                x2="588"
                y2="148"
                stroke="rgba(96,144,208,0.42)"
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
                stroke="rgba(224,80,112,0.38)"
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
              <polygon
                points="588,148 582,143 582,153"
                fill="rgba(96,144,208,0.40)"
              />
              <polygon
                points="588,153 582,148 582,158"
                fill="rgba(242,201,76,0.40)"
              />
              <polygon
                points="588,160 582,155 582,165"
                fill="rgba(224,80,112,0.35)"
              />
              <polygon
                points="588,168 582,163 582,173"
                fill="rgba(111,207,151,0.40)"
              />
              {/* <!-- SML Platform --> */}
              <rect
                x="590"
                y="118"
                width="256"
                height="90"
                rx="10"
                fill="rgba(122,31,46,0.15)"
                stroke="rgba(163,53,74,0.42)"
                stroke-width="1.5"
              />
              <text
                x="718"
                y="143"
                text-anchor="middle"
                fill="#C4697A"
                font-size="9.5"
                font-weight="700"
                letter-spacing="1.8"
                font-family="monospace"
              >
                SML PLATFORM
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
                Smart Mobility &amp; Urban Analytics
              </text>
              <text
                x="718"
                y="178"
                text-anchor="middle"
                fill="rgba(245,242,238,0.58)"
                font-size="8"
              >
                Simulation · Field Testing · Data Platform
              </text>
              <text
                x="718"
                y="196"
                text-anchor="middle"
                fill="rgba(245,242,238,0.45)"
                font-size="7.5"
              >
                TOD Policy · MaaS Integration · CE-M Living Lab
              </text>
              {/* <!-- Outputs --> */}
              <rect
                x="594"
                y="222"
                width="76"
                height="60"
                rx="6"
                fill="rgba(242,201,76,0.10)"
                stroke="rgba(242,201,76,0.28)"
                stroke-width="1"
              />
              <text
                x="632"
                y="242"
                text-anchor="middle"
                fill="#f2c94c"
                font-size="8"
                font-weight="700"
                letter-spacing="1"
                font-family="monospace"
              >
                SIGNAL
              </text>
              <text
                x="632"
                y="254"
                text-anchor="middle"
                fill="#f2c94c"
                font-size="8"
                font-weight="700"
                letter-spacing="1"
                font-family="monospace"
              >
                CONTROL
              </text>
              <text
                x="632"
                y="268"
                text-anchor="middle"
                fill="rgba(245,242,238,0.5)"
                font-size="7.5"
              >
                adaptive systems
              </text>
              <rect
                x="678"
                y="222"
                width="76"
                height="60"
                rx="6"
                fill="rgba(224,80,112,0.10)"
                stroke="rgba(224,80,112,0.25)"
                stroke-width="1"
              />
              <text
                x="716"
                y="242"
                text-anchor="middle"
                fill="#e05070"
                font-size="8"
                font-weight="700"
                letter-spacing="1"
                font-family="monospace"
              >
                MaaS APP
              </text>
              <text
                x="716"
                y="256"
                text-anchor="middle"
                fill="rgba(245,242,238,0.5)"
                font-size="7.5"
              >
                multi-modal
              </text>
              <text
                x="716"
                y="268"
                text-anchor="middle"
                fill="rgba(245,242,238,0.5)"
                font-size="7.5"
              >
                trip planning
              </text>
              <rect
                x="762"
                y="222"
                width="80"
                height="60"
                rx="6"
                fill="rgba(96,144,208,0.10)"
                stroke="rgba(96,144,208,0.25)"
                stroke-width="1"
              />
              <text
                x="802"
                y="240"
                text-anchor="middle"
                fill="#6090d0"
                font-size="8"
                font-weight="700"
                letter-spacing="1"
                font-family="monospace"
              >
                TOD
              </text>
              <text
                x="802"
                y="252"
                text-anchor="middle"
                fill="#6090d0"
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
                urban planning
              </text>
              <line
                x1="660"
                y1="208"
                x2="632"
                y2="222"
                stroke="rgba(242,201,76,0.35)"
                stroke-width="1"
                stroke-dasharray="2,2"
              />
              <line
                x1="718"
                y1="208"
                x2="716"
                y2="222"
                stroke="rgba(224,80,112,0.35)"
                stroke-width="1"
                stroke-dasharray="2,2"
              />
              <line
                x1="775"
                y1="208"
                x2="800"
                y2="222"
                stroke="rgba(96,144,208,0.35)"
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
                SMART MOBILITY INTELLIGENCE FOR VIETNAM&apos;S URBAN FUTURE
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
              src="/images/center&lab/move-system/slide44_img10.png"
              alt="Vo Dao Chi"
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
                Vo Dao Chi, PhD
              </div>
              <div
                style={{
                  color: "rgba(245,242,238,.6)",
                  fontSize: ".88rem",
                  margin: ".15rem 0 .5rem",
                }}
              >
                Smart Mobility · ISCM–UEH
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
                  MaaS and CE-M Program
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ====================================================== TOD INTERACTIVE SIM --> */}
      <section
        className="section"
        id="tod-sim"
        style={{
          background:
            "linear-gradient(180deg,rgba(122,31,46,0.04),transparent)",
        }}
      >
        <div className="section-head">
          <p className="eyebrow">TOD · INTERACTIVE SIMULATION</p>
          <h2>Transit-Oriented Development City Model</h2>
          <p className="section-sub">
            An interactive simulation of how smart mobility layers — TOD zoning,
            traffic signals, EV micro-mobility, and real-time data — integrate
            around a transit hub. Click elements to explore.
          </p>
        </div>

        <div
          style={{
            position: "relative",
          }}
        >
          <canvas
            id="todCanvas"
            width="1000"
            height="480"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              background: "#F8F6F3",
              border: "1px solid rgba(122,31,46,.12)",
              borderRadius: "8px",
              cursor: "crosshair",
            }}
          ></canvas>

          {/* <!-- Legend --> */}
          <div
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              background: "rgba(245,242,238,.94)",
              padding: "10px 14px",
              border: "1px solid rgba(122,31,46,.15)",
              fontSize: ".76rem",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              borderRadius: "4px",
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: ".65rem",
                letterSpacing: ".12em",
                color: "#7A1F2E",
                marginBottom: "3px",
              }}
            >
              LAYERS
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
              }}
            >
              <span
                style={{
                  width: "12px",
                  height: "12px",
                  background: "#7A1F2E",
                  borderRadius: "50%",
                  display: "inline-block",
                }}
              ></span>
              Transit Hub
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
              }}
            >
              <span
                style={{
                  width: "12px",
                  height: "12px",
                  background: "#4a7c59",
                  borderRadius: "50%",
                  display: "inline-block",
                }}
              ></span>
              EV Stations
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
              }}
            >
              <span
                style={{
                  width: "12px",
                  height: "12px",
                  background: "#2b6896",
                  borderRadius: "50%",
                  display: "inline-block",
                }}
              ></span>
              Smart Signals
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
              }}
            >
              <span
                style={{
                  width: "12px",
                  height: "12px",
                  background: "#B89264",
                  borderRadius: "2px",
                  display: "inline-block",
                }}
              ></span>
              Mixed-use Zone
            </div>
          </div>

          {/* <!-- Info panel --> */}
          <div
            id="todInfo"
            style={{
              position: "absolute",
              bottom: "12px",
              left: "12px",
              right: "12px",
              background: "rgba(245,242,238,.96)",
              padding: ".9rem 1.2rem",
              border: "1px solid rgba(122,31,46,.18)",
              borderRadius: "4px",
              fontSize: ".84rem",
              display: "none",
              maxWidth: "420px",
            }}
          >
            <strong
              id="todInfoTitle"
              style={{
                color: "#7A1F2E",
                display: "block",
                marginBottom: ".3rem",
              }}
            ></strong>
            <span
              id="todInfoBody"
              style={{
                color: "#5A4A42",
                lineHeight: 1.6,
              }}
            ></span>
          </div>
        </div>
      </section>
      {/* <!-- ====================================================== THEMES --> */}
      <section className="section" id="themes">
        <div className="section-head">
          <p className="eyebrow">01 · RESEARCH THEMES</p>
          <h2>Three research themes</h2>
          <p className="section-sub">
            SML is organised around three interlocking streams — together they
            connect travellers, vehicles, and infrastructure into a single
            learning system.
          </p>
        </div>

        <div className="grid-3">
          <article className="card theme-card">
            <div className="card-num">T1</div>
            <h3 data-i18n="smart.t1">{i18n("move-system.smart.t1")}</h3>
            <p data-i18n="smart.t1.body">{i18n("move-system.smart.t1_body")}</p>
            <ul className="bullets">
              <li>
                <strong>Real-Time Transportation</strong> — live feeds,
                multi-modal routing and ETA.
              </li>
              <li>
                <strong>Optimization Platform</strong> — matching demand and
                supply across operators.
              </li>
              <li>
                <strong>Integrated Payment &amp; Transparency</strong> — one
                account, auditable fare logic.
              </li>
            </ul>
          </article>

          <article className="card theme-card">
            <div className="card-num">T2</div>
            <h3 data-i18n="smart.t2">{i18n("move-system.smart.t2")}</h3>
            <p data-i18n="smart.t2.body">{i18n("move-system.smart.t2_body")}</p>
            <ul className="bullets">
              <li>
                <strong>Adaptive Signal Control</strong> —
                reinforcement-learning signals for mixed traffic.
              </li>
              <li>
                <strong>AI Forecast Demand &amp; Route Optimization</strong> —
                spatio-temporal models for OD flows.
              </li>
            </ul>
          </article>

          <article className="card theme-card">
            <div className="card-num">T3</div>
            <h3 data-i18n="smart.t3">{i18n("move-system.smart.t3")}</h3>
            <p data-i18n="smart.t3.body">{i18n("move-system.smart.t3_body")}</p>
            <ul className="bullets">
              <li>
                <strong>Micro-mobility Hub / Stops Planning</strong> — siting,
                sizing and charging logic.
              </li>
              <li>
                <strong>Data Efficiency &amp; Small Vehicle Safety</strong> —
                trip analytics &amp; crash avoidance.
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* <!-- ====================================================== CE-M PROGRAM --> */}
      <section className="section section-alt" id="cem">
        <div className="section-head">
          <p className="eyebrow">02 · FLAGSHIP PROGRAM</p>
          <h2 data-i18n="smart.cem.title">
            {i18n("move-system.smart.cem_title")}
          </h2>
        </div>

        <div className="grid-2 cem-grid">
          <div className="cem-intro">
            <p data-i18n="smart.cem.body">
              {i18n("move-system.smart.cem_body")}
            </p>
            <p>
              The program is structured as a three-pillar architecture, each
              pillar jointly owned by researchers, operators, and the university
              — so that technical choices, commercial viability, and policy
              legitimacy move in lock-step.
            </p>
            <div className="cem-stats">
              <div className="stat">
                <div className="stat-num">2</div>
                <div className="stat-label">Vehicle classes</div>
              </div>
              <div className="stat">
                <div className="stat-num">5+</div>
                <div className="stat-label">Hubs planned</div>
              </div>
              <div className="stat">
                <div className="stat-num">100%</div>
                <div className="stat-label">Electric fleet</div>
              </div>
            </div>
          </div>

          <div className="cem-pillars">
            <div className="pillar">
              <div className="pillar-tag">Pillar 01</div>
              <h4>Smart &amp; Interactive Platform</h4>
              <ul className="bullets">
                <li>
                  <strong>Interactive usage</strong> — student ID login,
                  booking, payment, reporting.
                </li>
                <li>
                  <strong>Integrated network</strong> — e-motorbike and
                  e-shuttle bus on one app.
                </li>
              </ul>
            </div>
            <div className="pillar">
              <div className="pillar-tag">Pillar 02</div>
              <h4>Private-Sector Cooperation</h4>
              <ul className="bullets">
                <li>
                  Engage potential enterprises (SYM, Honda) for vehicle supply.
                </li>
                <li>
                  Identify an operating partner to run day-to-day fleet service.
                </li>
                <li>Engage charging / battery and insurance partners.</li>
              </ul>
            </div>
            <div className="pillar">
              <div className="pillar-tag">Pillar 03</div>
              <h4>Policy Package</h4>
              <ul className="bullets">
                <li>
                  Campus-first incentives — ride credits, priority access for
                  students and staff.
                </li>
                <li>
                  Operating rules — speed limits, geofenced zones, parking,
                  safety compliance.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ====================================================== DEMO: MaaS ROUTE PLANNER --> */}
      <section className="section" id="demo">
        <div className="section-head">
          <p className="eyebrow">03 · INTERACTIVE DEMO</p>
          <h2 data-i18n="smart.demo.title">
            {i18n("move-system.smart.demo_title")}
          </h2>
          <p className="section-sub" data-i18n="smart.demo.sub">
            {i18n("move-system.smart.demo_sub")}
          </p>
        </div>

        <div className="demo-wrap">
          <canvas
            className="demo-canvas"
            id="maas-canvas"
            width="1200"
            height="480"
            aria-label="MaaS route planner canvas"
          ></canvas>

          <div className="demo-overlay-legend" aria-hidden="true">
            <div className="legend-row">
              <span className="dot dot-stop"></span> E-shuttle stop
            </div>
            <div className="legend-row">
              <span className="dot dot-bike"></span> E-motorbike
            </div>
            <div className="legend-row">
              <span className="dot dot-origin"></span> Origin
            </div>
            <div className="legend-row">
              <span className="dot dot-dest"></span> Destination
            </div>
            <div className="legend-row">
              <span className="swatch swatch-fence"></span> CE-M geofence
            </div>
          </div>

          <div className="demo-controls">
            <label className="control">
              <span>Mode</span>
              <select id="maas-mode">
                <option value="fastest">Fastest</option>
                <option value="greenest">Greenest</option>
                <option value="cheapest">Cheapest</option>
              </select>
            </label>

            <button type="button" id="maas-reset" className="btn btn-ghost">
              Reset
            </button>

            <div className="status-pill" id="maas-status" aria-live="polite">
              Distance: 2.4&nbsp;km &middot; 12&nbsp;min &middot; 0.2&nbsp;kg
              CO&#8322;
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ====================================================== TIMELINE --> */}
      <section className="section section-alt" id="timeline">
        <div className="section-head">
          <p className="eyebrow">04 · ROADMAP</p>
          <h2 data-i18n="common.timeline">
            {i18n("move-system.common.timeline")}
          </h2>
          <p className="section-sub">
            A staged rollout from foundational platform to regional positioning.
          </p>
        </div>

        <ol className="timeline">
          <li className="tl-item">
            <div className="tl-dot"></div>
            <div className="tl-year">2026 &ndash; 2027</div>
            <h4>Phase 1 — Foundation</h4>
            <p>
              Stand up the CE-M pilot: first e-shuttle route, booking and
              payment MVP, baseline OD surveys, and the first adaptive-signal
              experiments on a single UEH corridor.
            </p>
          </li>
          <li className="tl-item">
            <div className="tl-dot"></div>
            <div className="tl-year">2028 &ndash; 2029</div>
            <h4>Phase 2 — Integration</h4>
            <p>
              Integrate e-motorbike sharing, extend the geofenced network across
              UEH campuses, and wire up operator partners. Launch the MaaS Route
              Planner as a public tool and publish first impact papers.
            </p>
          </li>
          <li className="tl-item">
            <div className="tl-dot"></div>
            <div className="tl-year">2030</div>
            <h4>Phase 3 — Positioning &amp; Scaling</h4>
            <p>
              Position SML as a regional reference on campus-scale low-carbon
              mobility: transfer the CE-M playbook to partner universities and
              municipal districts across Southeast Asia.
            </p>
          </li>
        </ol>
      </section>

      {/* <!-- ====================================================== PROJECTS --> */}
      <section className="section" id="projects">
        <div className="section-head">
          <p className="eyebrow">05 · PROJECTS</p>
          <h2 data-i18n="common.projects">
            {i18n("move-system.common.projects")}
          </h2>
          <p className="section-sub">
            Ongoing and recent work underpinning SML&apos;s programmatic agenda.
          </p>
        </div>

        <div className="grid-3">
          <article className="card project-card">
            <div className="proj-head">
              <span className="proj-code">GTALK</span>
              <span className="proj-year">2022 – 2023</span>
            </div>
            <h4>Gender and Transport Assemblage of Learning and Knowledge</h4>
            <p>
              A multi-country program building a shared evidence base and
              curriculum on gender-responsive transport planning, co-designed
              with practitioners in Ho Chi Minh City and partner cities.
            </p>
            <div className="proj-tags">
              <span className="tag">Gender &amp; Transport</span>
              <span className="tag">Capacity Building</span>
            </div>
          </article>

          <article className="card project-card">
            <div className="proj-head">
              <span className="proj-code">ADAS</span>
              <span className="proj-year">2021 – 2023</span>
            </div>
            <h4>Advanced Driver Assistance Systems</h4>
            <p>
              Comparative acceptance and behaviour study of ADAS technologies in
              Vietnam and Belgium — driver trust, use patterns, and policy
              implications for mixed-traffic emerging markets.
            </p>
            <div className="proj-tags">
              <span className="tag">ADAS</span>
              <span className="tag">Behavioural Safety</span>
            </div>
          </article>

          <article className="card project-card">
            <div className="proj-head">
              <span className="proj-code">Walkability</span>
              <span className="proj-year">2023 – 2024</span>
            </div>
            <h4>
              Developing an Intersectional Equity Framework to Support
              Walkability Transitions
            </h4>
            <p>
              An intersectional framework for walkability audits — combining
              street audits, interviews, and equity metrics to guide low-carbon
              street transitions in Southeast Asian cities.
            </p>
            <div className="proj-tags">
              <span className="tag">Walkability</span>
              <span className="tag">Equity</span>
            </div>
          </article>
        </div>
      </section>

      {/* <!-- ====================================================== FACILITIES --> */}
      <section className="section section-alt" id="facilities">
        <div className="section-head">
          <p className="eyebrow">06 · FACILITIES</p>
          <h2>Facilities &amp; Instruments</h2>
          <p className="section-sub">
            SML pairs an immersive simulation suite with a field-grade sensing
            stack — so ideas can move from virtual prototype to instrumented
            pilot without leaving the lab.
          </p>
        </div>

        <div className="grid-2">
          <div className="card facility-card">
            <h4>VR/AR Systems &amp; Interactive Simulation</h4>
            <p>
              A mixed-reality environment for traffic scenario testing, driver
              behaviour experiments, and participatory co-design of street
              futures.
            </p>
            <div className="pill-row">
              <span className="pill">Unity / Unreal</span>
              <span className="pill">Eye-tracking</span>
              <span className="pill">VISSIM / AIMSUN</span>
              <span className="pill">Camera 360</span>
            </div>
          </div>

          <div className="card facility-card">
            <h4>Traffic Data Sensors &amp; Simulation</h4>
            <p>
              Field-deployable sensing stack and calibration bench for
              mixed-traffic studies — from two-wheeler safety to
              intersection-level flow analysis.
            </p>
            <div className="pill-row">
              <span className="pill">AI Traffic Camera</span>
              <span className="pill">GoPro</span>
              <span className="pill">2 Physical bicycles + Virtual Env</span>
              <span className="pill">GPS Trackers</span>
              <span className="pill">Analysis Sensors</span>
              <span className="pill">Traffic Simulation Model</span>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ====================================================== METRICS --> */}
      <section className="section" id="metrics">
        <div className="section-head">
          <p className="eyebrow">07 · METRICS</p>
          <h2>Ambition in numbers</h2>
          <p className="section-sub">
            Targets tracked across the 2027 / 2029 / 2030 milestones.
          </p>
        </div>

        <div className="stat-table">
          <div className="stat-row stat-row--head">
            <div className="stat-cell stat-cell--label">Indicator</div>
            <div className="stat-cell">2027</div>
            <div className="stat-cell">2029</div>
            <div className="stat-cell">2030</div>
          </div>

          <div className="stat-row">
            <div className="stat-cell stat-cell--label">Active projects</div>
            <div className="stat-cell">
              <span className="stat-num">2</span>
            </div>
            <div className="stat-cell">
              <span className="stat-num">5</span>
            </div>
            <div className="stat-cell">
              <span className="stat-num">7</span>
            </div>
          </div>

          <div className="stat-row">
            <div className="stat-cell stat-cell--label">
              Papers published <em>(cumulative)</em>
            </div>
            <div className="stat-cell">
              <span className="stat-num">3</span>
            </div>
            <div className="stat-cell">
              <span className="stat-num">5</span>
            </div>
            <div className="stat-cell">
              <span className="stat-num">15</span>
            </div>
          </div>

          <div className="stat-row">
            <div className="stat-cell stat-cell--label">Policy reports</div>
            <div className="stat-cell">
              <span className="stat-num">4</span>
            </div>
            <div className="stat-cell">
              <span className="stat-num">10</span>
            </div>
            <div className="stat-cell">
              <span className="stat-num">15</span>
            </div>
          </div>

          <div className="stat-row">
            <div className="stat-cell stat-cell--label">Policies adopted</div>
            <div className="stat-cell">
              <span className="stat-num">1</span>
            </div>
            <div className="stat-cell">
              <span className="stat-num">3</span>
            </div>
            <div className="stat-cell">
              <span className="stat-num">5</span>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ====================================================== PUBLICATIONS --> */}
      <section className="section section-alt" id="publications">
        <div className="section-head">
          <p className="eyebrow">08 · PUBLICATIONS</p>
          <h2 data-i18n="common.publications">
            {i18n("move-system.common.publications")}
          </h2>
          <p className="section-sub">
            Selected peer-reviewed outputs and policy reports.
          </p>
        </div>

        <ol className="pub-list">
          <li className="pub-item">
            <div className="pub-year">2022</div>
            <div className="pub-body">
              <p className="pub-authors">
                Trinh, T. A., Pham, N. H., &amp; Mateo-Babiano, I.
              </p>
              <p className="pub-title">
                GTALK Report Series: Safer Cities in Asia — Ho Chi Minh City,
                Vietnam.
              </p>
              <p className="pub-venue">
                Gender and Transport Assemblage of Learning and Knowledge,
                Report Series.
              </p>
            </div>
          </li>
          <li className="pub-item">
            <div className="pub-year">2024</div>
            <div className="pub-body">
              <p className="pub-authors">Trinh, T. A., &amp; Pham, H. N.</p>
              <p className="pub-title">
                Public Transport Policy through a Gender Lens in the
                Post-Pandemic World.
              </p>
              <p className="pub-venue">
                Journal of the Eastern Asia Society for Transportation Studies,
                15, 659–675.
              </p>
            </div>
          </li>
          <li className="pub-item">
            <div className="pub-year">2024</div>
            <div className="pub-body">
              <p className="pub-authors">
                Khattak, M. W., Brijs, K., Tran, T. M., Trinh, T. A., et al.
              </p>
              <p className="pub-title">
                Acceptance towards Advanced Driver Assistance Systems (ADAS).
              </p>
              <p className="pub-venue">
                Transportation Research Part F, 105, 284–305.
              </p>
            </div>
          </li>
          <li className="pub-item">
            <div className="pub-year">2024</div>
            <div className="pub-body">
              <p className="pub-authors">
                Brijs, K., Vu, A. T., Trinh, T. A., et al.
              </p>
              <p className="pub-title">
                A Comparative Study of Factors Influencing ADAS Acceptance in
                Belgium and Vietnam.
              </p>
              <p className="pub-venue">Safety, 10(4), 93.</p>
            </div>
          </li>
        </ol>
      </section>

      {/* <!-- ====================================================== STAKEHOLDERS --> */}
      <section className="section" id="stakeholders">
        <div className="section-head">
          <p className="eyebrow">09 · STAKEHOLDERS</p>
          <h2 data-i18n="common.stakeholders">
            {i18n("move-system.common.stakeholders")}
          </h2>
          <p className="section-sub">
            Who SML works with — and what each of them gains.
          </p>
        </div>

        <div className="grid-4 stake-grid">
          <div className="card stake-card">
            <div className="stake-icon" aria-hidden="true">
              S
            </div>
            <h4 data-i18n="common.students">
              {i18n("move-system.common.students")}
            </h4>
            <ul className="bullets">
              <li>Safe, affordable on-campus mobility.</li>
              <li>Paid research internships &amp; theses.</li>
              <li>Hands-on training in data &amp; design.</li>
            </ul>
          </div>

          <div className="card stake-card">
            <div className="stake-icon" aria-hidden="true">
              U
            </div>
            <h4 data-i18n="common.universities">
              {i18n("move-system.common.universities")}
            </h4>
            <ul className="bullets">
              <li>Living-lab infrastructure on campus.</li>
              <li>Shared curriculum &amp; exchange.</li>
              <li>Joint publications and grants.</li>
            </ul>
          </div>

          <div className="card stake-card">
            <div className="stake-icon" aria-hidden="true">
              G
            </div>
            <h4 data-i18n="common.gov">{i18n("move-system.common.gov")}</h4>
            <ul className="bullets">
              <li>Evidence for mobility &amp; climate policy.</li>
              <li>Replicable campus-first playbook.</li>
              <li>Capacity-building for officials.</li>
            </ul>
          </div>

          <div className="card stake-card">
            <div className="stake-icon" aria-hidden="true">
              I
            </div>
            <h4 data-i18n="common.industry">
              {i18n("move-system.common.industry")}
            </h4>
            <ul className="bullets">
              <li>Real-world pilot environment.</li>
              <li>Data-driven product iteration.</li>
              <li>Pathway to public-sector contracts.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

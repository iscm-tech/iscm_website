"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Script from "next/script";
import { useEffect } from "react";

export default function View() {
  const i18n = useTranslations();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/move-system/rail.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      window.__RAIL3D_CLEANUP__?.();
    };
  }, []);

  return (
    <div id="rail">
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
        strategy="beforeInteractive"
      />
      {/* <!-- ========== HERO ========== --> */}
      <header className="lab-hero lab-hero--rail">
        <div className="container lab-hero-inner">
          <div className="lab-hero-bg" aria-hidden="true">
            RAIL
          </div>

          <Link href="/move-system" className="back-link" data-i18n="rail.back">
            {i18n("move-system.rail.back")}
          </Link>

          <div className="eyebrow">LAB · 03 / RAIL</div>
          <h1 className="lab-title" data-i18n="rail.h1">
            {i18n("move-system.rail.h1")}
          </h1>
          <p className="lead" data-i18n="rail.lead">
            {i18n("move-system.rail.lead")}
          </p>

          <div className="flex flex-wrap gap-[.4rem] mt-[1rem]">
            <span className="pill">Rail Systems Lab</span>
            <span className="pill">Smart Corridor Living Lab</span>
            <span className="pill">TOD &amp; Green Finance</span>
            <span className="pill">PPP / PPPP</span>
          </div>
        </div>
      </header>

      {/* <!-- ========== CE-RAIL INTRODUCTION ========== --> */}
      <section
        style={{
          background: "linear-gradient(135deg, #4e121c 0%, #2a0810 100%)",
          color: "#f5f2ee",
          padding: "4.5rem 0",
        }}
      >
        <div className="container">
          {/* <!-- A. Mission headline — Rail Management focus --> */}
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
                fontSize: "0.68rem",
                letterSpacing: "0.22em",
                color: "rgba(245, 242, 238, 0.5)",
                marginBottom: "0.6rem",
                textTransform: "uppercase",
              }}
            >
              RAIL MANAGEMENT CENTRE · CE-RAIL@UEH · ISCM · UEH
            </div>
            <h2
              style={{
                color: "#f5f2ee",
                margin: "0 0 1rem",
                fontSize: "clamp(1.7rem, 4vw, 2.5rem)",
                lineHeight: 1.2,
              }}
            >
              Building Capacity in Modern
              <br />
              Rail Systems Management
            </h2>
            <p
              style={{
                fontSize: "1.06rem",
                lineHeight: 1.78,
                color: "rgba(245, 242, 238, 0.87)",
                margin: "0 0 1.2rem",
              }}
            >
              CE-Rail@UEH is a dedicated railway laboratory focused on
              operations management, maintenance, signalling systems, and safety
              certification for modern urban rail. Through small-scale
              simulation testbeds — rolling stock mock-ups, PTC/CBTC trainers,
              and SCADA sandboxes — and a real-world Rail-City Smart Corridor
              Living Lab, the centre delivers practical training, professional
              certification, and strategic consulting for Vietnam&apos;s growing
              rail network.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  padding: "5px 14px",
                  borderRadius: "999px",
                  border: "1px solid rgba(245, 242, 238, 0.3)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                  color: "rgba(245, 242, 238, 0.82)",
                }}
              >
                Rail Operations
              </span>
              <span
                style={{
                  padding: "5px 14px",
                  borderRadius: "999px",
                  border: "1px solid rgba(245, 242, 238, 0.3)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                  color: "rgba(245, 242, 238, 0.82)",
                }}
              >
                Maintenance Management
              </span>
              <span
                style={{
                  padding: "5px 14px",
                  borderRadius: "999px",
                  border: "1px solid rgba(245, 242, 238, 0.3)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                  color: "rgba(245, 242, 238, 0.82)",
                }}
              >
                CBTC / PTC Signalling
              </span>
              <span
                style={{
                  padding: "5px 14px",
                  borderRadius: "999px",
                  border: "1px solid rgba(245, 242, 238, 0.3)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                  color: "rgba(245, 242, 238, 0.82)",
                }}
              >
                SCADA Systems
              </span>
              <span
                style={{
                  padding: "5px 14px",
                  borderRadius: "999px",
                  border: "1px solid rgba(245, 242, 238, 0.3)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                  color: "rgba(245, 242, 238, 0.82)",
                }}
              >
                Safety Certification
              </span>
              <span
                style={{
                  padding: "5px 14px",
                  borderRadius: "999px",
                  border: "1px solid rgba(245, 242, 238, 0.3)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                  color: "rgba(245, 242, 238, 0.82)",
                }}
              >
                TOD Consulting
              </span>
            </div>
          </div>

          {/* <!-- B. 3D Rail Operations Simulation --> */}
          <div style={{ marginBottom: "3rem" }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.22em",
                color: "rgba(245, 242, 238, 0.4)",
                marginBottom: "1rem",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              CBTC Rail Yard Simulation — Block Sections · Interlocking · Train
              Protection — Click Trains &amp; Signals
            </div>
            <div
              style={{
                position: "relative",
                border: "1px solid rgba(184, 146, 100, 0.22)",
                borderRadius: "6px",
                overflow: "hidden",
                background: "#050408",
              }}
            >
              <canvas
                id="rail3dCanvas"
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
                  fontSize: "0.65rem",
                  color: "rgba(184, 146, 100, 0.7)",
                  letterSpacing: "0.1em",
                }}
              >
                CE-RAIL@UEH · CBTC RAIL YARD SIMULATOR
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
                  fontSize: "0.63rem",
                  color: "rgba(245, 242, 238, 0.5)",
                }}
              >
                <div>
                  <span
                    style={{
                      display: "inline-block",
                      width: "14px",
                      height: "5px",
                      background: "#50dc78",
                      marginRight: "5px",
                      verticalAlign: "middle",
                      borderRadius: "1px",
                    }}
                  ></span>
                  Block CLEAR
                </div>
                <div>
                  <span
                    style={{
                      display: "inline-block",
                      width: "14px",
                      height: "5px",
                      background: "#e8c020",
                      marginRight: "5px",
                      verticalAlign: "middle",
                      borderRadius: "1px",
                    }}
                  ></span>
                  Block CAUTION
                </div>
                <div>
                  <span
                    style={{
                      display: "inline-block",
                      width: "14px",
                      height: "5px",
                      background: "#e04040",
                      marginRight: "5px",
                      verticalAlign: "middle",
                      borderRadius: "1px",
                    }}
                  ></span>
                  Block OCCUPIED
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "12px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.62rem",
                  color: "rgba(184, 146, 100, 0.45)",
                  letterSpacing: "0.08em",
                }}
              >
                CBTC · PTC · SCADA · ATP · ATO
              </div>
            </div>
            <div
              id="rail3dInfo"
              style={{
                marginTop: "0.8rem",
                background: "rgba(245, 242, 238, 0.04)",
                border: "1px solid rgba(184, 146, 100, 0.18)",
                padding: "0.9rem 1.2rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "rgba(245, 242, 238, 0.65)",
                minHeight: "48px",
                borderRadius: "4px",
                letterSpacing: "0.04em",
              }}
            >
              <span
                style={{
                  color: "rgba(184, 146, 100, 0.5)",
                }}
              >
                CLICK A TRAIN OR SIGNAL
              </span>
              to inspect block authority, ATP status, and real-time train
              management data. Drag to orbit.
            </div>
          </div>

          {/* <!-- C. Two components grid --> */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.2rem",
              marginBottom: "2.5rem",
            }}
          >
            <div
              style={{
                background: "rgba(245, 242, 238, 0.06)",
                border: "1px solid rgba(245, 242, 238, 0.1)",
                padding: "1.5rem 1.4rem",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.62rem",
                  letterSpacing: "0.16em",
                  color: "#b89264",
                  marginBottom: "0.6rem",
                  textTransform: "uppercase",
                }}
              >
                Component 01 · Rail Systems Lab
              </div>
              <h3
                style={{
                  color: "#f5f2ee",
                  margin: "0 0 0.7rem",
                  fontSize: "1.05rem",
                }}
              >
                Small-Scale Simulation Testbed
              </h3>
              <p
                style={{
                  fontSize: "0.86rem",
                  color: "rgba(245, 242, 238, 0.72)",
                  lineHeight: 1.65,
                  margin: "0 0 0.8rem",
                }}
              >
                A practical simulation environment housing rolling stock
                mock-ups, CBTC/PTC signalling trainers, and SCADA sandbox
                systems for operations management training. Delivers
                scenario-based certification for railway technicians and
                students in a safe, repeatable environment.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "rgba(245, 242, 238, 0.62)",
                    paddingLeft: "0.8rem",
                    borderLeft: "2px solid rgba(184, 146, 100, 0.4)",
                  }}
                >
                  Rolling stock mock-up &amp; signalling simulator
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "rgba(245, 242, 238, 0.62)",
                    paddingLeft: "0.8rem",
                    borderLeft: "2px solid rgba(184, 146, 100, 0.4)",
                  }}
                >
                  PTC / CBTC training modules
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "rgba(245, 242, 238, 0.62)",
                    paddingLeft: "0.8rem",
                    borderLeft: "2px solid rgba(184, 146, 100, 0.4)",
                  }}
                >
                  SCADA sandbox &amp; operations certification
                </div>
              </div>
            </div>

            <div
              style={{
                background: "rgba(245, 242, 238, 0.06)",
                border: "1px solid rgba(245, 242, 238, 0.1)",
                padding: "1.5rem 1.4rem",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.62rem",
                  letterSpacing: "0.16em",
                  color: "#b89264",
                  marginBottom: "0.6rem",
                  textTransform: "uppercase",
                }}
              >
                Component 02 · Rail-City Smart Corridor Living Lab
              </div>
              <h3
                style={{
                  color: "#f5f2ee",
                  margin: "0 0 0.7rem",
                  fontSize: "1.05rem",
                }}
              >
                Real-World Urban Rail Testbed
              </h3>
              <p
                style={{
                  fontSize: "0.86rem",
                  color: "rgba(245, 242, 238, 0.72)",
                  lineHeight: 1.65,
                  margin: "0 0 0.8rem",
                }}
              >
                A real urban rail corridor used for site visits, field training,
                and applied research. Focuses on passenger flow management, TOD
                planning, last-mile multimodal integration, and PPP/Green
                Finance structuring — inspired by Tokyo Metro collaborative
                research programmes.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "rgba(245, 242, 238, 0.62)",
                    paddingLeft: "0.8rem",
                    borderLeft: "2px solid rgba(184, 146, 100, 0.4)",
                  }}
                >
                  Passenger flow experimentation &amp; optimisation
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "rgba(245, 242, 238, 0.62)",
                    paddingLeft: "0.8rem",
                    borderLeft: "2px solid rgba(184, 146, 100, 0.4)",
                  }}
                >
                  TOD prototype &amp; land-value capture strategy
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "rgba(245, 242, 238, 0.62)",
                    paddingLeft: "0.8rem",
                    borderLeft: "2px solid rgba(184, 146, 100, 0.4)",
                  }}
                >
                  PPP / Green Finance structuring for rail + TOD
                </div>
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
              marginTop: "2rem",
            }}
          >
            <img
              src="/images/center&lab/move-system/slide47_img12.png"
              alt="Pham Nguyen Hoai"
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "top center",
                border: "3px solid rgba(184,146,100,.4)",
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
                Pham Nguyen Hoai, PhD
              </div>
              <div
                style={{
                  color: "rgba(245,242,238,.6)",
                  fontSize: ".88rem",
                  margin: ".15rem 0 .5rem",
                }}
              >
                CE-Rail@UEH · ISCM–UEH
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
                  Nguyen Duc Thanh Binh, M.Sc · An Le, PhD Candidate
                </span>
              </div>
            </div>
          </div>

          {/* <!-- CE-Rail Research Framework --> */}
          <div
            style={{
              background: "rgba(0, 0, 0, 0.7)",
              border: "1px solid rgba(184, 146, 100, 0.22)",
              borderRadius: "12px",
              padding: "1.8rem 1.4rem",
              marginTop: "2.5rem",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                color: "rgba(245, 242, 238, 0.4)",
                textAlign: "center",
                marginBottom: "1.2rem",
                fontFamily: '"JetBrains Mono", monospace',
              }}
            >
              RAIL SYSTEMS · CE-RAIL@UEH RESEARCH FRAMEWORK
            </div>
            <div
              className="research-framework"
              aria-label="CE-Rail research framework"
              style={{ display: "none" }}
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
                    <h3>CBTC Simulation</h3>
                    <span className="rf-code">01</span>
                  </div>
                  <p>
                    Block section management, ATP/ATO logic, train position
                    tracking, and headway optimisation.
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
                    <h3>Train Operations</h3>
                    <span className="rf-code">02</span>
                  </div>
                  <p>
                    Dwell-time optimisation, regenerative braking energy, driver
                    advisory systems, and incident management.
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
                    <h3>Rail-City Corridor</h3>
                    <span className="rf-code">03</span>
                  </div>
                  <p>
                    TOD station catchments, bus-rail interchange, urban rail
                    demand modelling, and smart corridor design.
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
                    <h3>Capacity Building</h3>
                    <span className="rf-code">04</span>
                  </div>
                  <p>
                    Rail engineer certification, train-driver simulation,
                    regional knowledge transfer, and industry curriculum.
                  </p>
                </article>
              </div>
              <aside
                className="rf-platform"
                style={
                  {
                    "--rf-color": "#7ab8e8",
                  } as React.CSSProperties
                }
              >
                <h3>CE-Rail Platform</h3>
                <p>
                  Rail systems research and training for simulation,
                  certification, policy evidence, and smart-corridor planning.
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
                    <strong>Train Sim</strong>
                    <p>CBTC testbed</p>
                  </div>
                  <div
                    className="rf-output"
                    style={
                      {
                        "--rf-color": "#f2c94c",
                      } as React.CSSProperties
                    }
                  >
                    <strong>Cert</strong>
                    <p>rail engineers</p>
                  </div>
                  <div
                    className="rf-output"
                    style={
                      {
                        "--rf-color": "#6fcf97",
                      } as React.CSSProperties
                    }
                  >
                    <strong>Urban Rail</strong>
                    <p>policy guidance</p>
                  </div>
                </div>
              </aside>
            </div>
            <div className="rf-note">
              Rail systems intelligence for Vietnam&apos;s urban transit future
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
                <linearGradient id="railS1" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(122,184,232,0.16)" />
                  <stop offset="100%" stopColor="rgba(122,184,232,0.03)" />
                </linearGradient>
                <linearGradient id="railS2" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(242,201,76,0.15)" />
                  <stop offset="100%" stopColor="rgba(242,201,76,0.03)" />
                </linearGradient>
                <linearGradient id="railS3" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(235,143,111,0.14)" />
                  <stop offset="100%" stopColor="rgba(235,143,111,0.03)" />
                </linearGradient>
                <linearGradient id="railS4" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(111,207,151,0.14)" />
                  <stop offset="100%" stopColor="rgba(111,207,151,0.03)" />
                </linearGradient>
              </defs>
              {/* <!-- CBTC SIMULATION --> */}
              <rect
                x="16"
                y="14"
                width="528"
                height="58"
                rx="6"
                fill="url(#railS1)"
                stroke="rgba(122,184,232,0.28)"
                strokeWidth="1"
              />
              {/* <!-- Track rails + colored block sections --> */}
              <line
                x1="30"
                y1="50"
                x2="195"
                y2="50"
                stroke="rgba(122,184,232,0.55)"
                strokeWidth="2"
              />
              <line
                x1="30"
                y1="58"
                x2="195"
                y2="58"
                stroke="rgba(122,184,232,0.55)"
                strokeWidth="2"
              />
              {/* <!-- sleepers --> */}
              <line
                x1="35"
                y1="47"
                x2="35"
                y2="61"
                stroke="rgba(122,184,232,0.30)"
                strokeWidth="1"
              />
              <line
                x1="47"
                y1="47"
                x2="47"
                y2="61"
                stroke="rgba(122,184,232,0.30)"
                strokeWidth="1"
              />
              <line
                x1="59"
                y1="47"
                x2="59"
                y2="61"
                stroke="rgba(122,184,232,0.30)"
                strokeWidth="1"
              />
              <line
                x1="71"
                y1="47"
                x2="71"
                y2="61"
                stroke="rgba(122,184,232,0.30)"
                strokeWidth="1"
              />
              <line
                x1="83"
                y1="47"
                x2="83"
                y2="61"
                stroke="rgba(122,184,232,0.30)"
                strokeWidth="1"
              />
              <line
                x1="95"
                y1="47"
                x2="95"
                y2="61"
                stroke="rgba(122,184,232,0.30)"
                strokeWidth="1"
              />
              <line
                x1="107"
                y1="47"
                x2="107"
                y2="61"
                stroke="rgba(122,184,232,0.30)"
                strokeWidth="1"
              />
              <line
                x1="119"
                y1="47"
                x2="119"
                y2="61"
                stroke="rgba(122,184,232,0.30)"
                strokeWidth="1"
              />
              <line
                x1="131"
                y1="47"
                x2="131"
                y2="61"
                stroke="rgba(122,184,232,0.30)"
                strokeWidth="1"
              />
              <line
                x1="143"
                y1="47"
                x2="143"
                y2="61"
                stroke="rgba(122,184,232,0.30)"
                strokeWidth="1"
              />
              <line
                x1="155"
                y1="47"
                x2="155"
                y2="61"
                stroke="rgba(122,184,232,0.30)"
                strokeWidth="1"
              />
              <line
                x1="167"
                y1="47"
                x2="167"
                y2="61"
                stroke="rgba(122,184,232,0.30)"
                strokeWidth="1"
              />
              {/* <!-- Colored block sections --> */}
              <rect
                x="36"
                y="44"
                width="34"
                height="16"
                rx="1"
                fill="rgba(60,200,60,0.30)"
                stroke="rgba(60,200,60,0.5)"
                strokeWidth="0.6"
              />
              <rect
                x="72"
                y="44"
                width="34"
                height="16"
                rx="1"
                fill="rgba(242,201,76,0.35)"
                stroke="rgba(242,201,76,0.55)"
                strokeWidth="0.6"
              />
              <rect
                x="108"
                y="44"
                width="34"
                height="16"
                rx="1"
                fill="rgba(224,60,60,0.30)"
                stroke="rgba(224,60,60,0.5)"
                strokeWidth="0.6"
              />
              <rect
                x="144"
                y="44"
                width="34"
                height="16"
                rx="1"
                fill="rgba(60,200,60,0.25)"
                stroke="rgba(60,200,60,0.4)"
                strokeWidth="0.6"
              />
              {/* <!-- signal lights --> */}
              <circle
                cx="176"
                cy="30"
                r="5"
                fill="rgba(60,200,60,0.6)"
                stroke="rgba(122,184,232,0.3)"
                strokeWidth="0.6"
              />
              <line
                x1="176"
                y1="35"
                x2="176"
                y2="44"
                stroke="rgba(122,184,232,0.35)"
                strokeWidth="0.8"
              />
              <text
                x="216"
                y="36"
                fill="#7ab8e8"
                fontSize="8.5"
                fontWeight="700"
                letterSpacing="1.8"
                fontFamily="monospace"
              >
                CBTC SIMULATION · MOVING BLOCK TRAIN CONTROL
              </text>
              <text x="216" y="54" fill="rgba(245,242,238,0.45)" fontSize="8">
                Block section management · ATP/ATO logic · Train position
                tracking · Headway optimisation
              </text>
              <text
                x="20"
                y="65"
                fill="rgba(122,184,232,0.50)"
                fontSize="7.5"
                fontStyle="italic"
                fontFamily="monospace"
              >
                CBTC
              </text>
              {/* <!-- TRAIN OPERATIONS --> */}
              <rect
                x="16"
                y="80"
                width="528"
                height="56"
                rx="6"
                fill="url(#railS2)"
                stroke="rgba(242,201,76,0.28)"
                strokeWidth="1"
              />
              {/* <!-- Train silhouette (3 cars) --> */}
              <rect
                x="32"
                y="98"
                width="30"
                height="18"
                rx="2"
                fill="rgba(242,201,76,0.22)"
                stroke="rgba(242,201,76,0.45)"
                strokeWidth="0.8"
              />
              <rect
                x="64"
                y="100"
                width="28"
                height="16"
                rx="2"
                fill="rgba(242,201,76,0.18)"
                stroke="rgba(242,201,76,0.38)"
                strokeWidth="0.7"
              />
              <rect
                x="94"
                y="100"
                width="28"
                height="16"
                rx="2"
                fill="rgba(242,201,76,0.18)"
                stroke="rgba(242,201,76,0.38)"
                strokeWidth="0.7"
              />
              {/* <!-- windows on train --> */}
              <rect
                x="36"
                y="101"
                width="22"
                height="7"
                rx="1"
                fill="rgba(242,201,76,0.30)"
              />
              <rect
                x="68"
                y="103"
                width="20"
                height="5"
                rx="1"
                fill="rgba(242,201,76,0.25)"
              />
              <rect
                x="98"
                y="103"
                width="20"
                height="5"
                rx="1"
                fill="rgba(242,201,76,0.25)"
              />
              {/* <!-- pantograph --> */}
              <line
                x1="47"
                y1="98"
                x2="44"
                y2="90"
                stroke="rgba(242,201,76,0.50)"
                strokeWidth="0.8"
              />
              <line
                x1="44"
                y1="90"
                x2="122"
                y2="90"
                stroke="rgba(242,201,76,0.50)"
                strokeWidth="1"
              />
              {/* <!-- bogies --> */}
              <circle cx="42" cy="118" r="3.5" fill="rgba(242,201,76,0.40)" />
              <circle cx="57" cy="118" r="3.5" fill="rgba(242,201,76,0.40)" />
              <circle cx="71" cy="118" r="3.5" fill="rgba(242,201,76,0.35)" />
              <circle cx="86" cy="118" r="3.5" fill="rgba(242,201,76,0.35)" />
              {/* <!-- timetable grid --> */}
              <rect
                x="140"
                y="88"
                width="52"
                height="36"
                rx="2"
                fill="rgba(242,201,76,0.08)"
                stroke="rgba(242,201,76,0.22)"
                strokeWidth="0.6"
              />
              <line
                x1="140"
                y1="97"
                x2="192"
                y2="97"
                stroke="rgba(242,201,76,0.18)"
                strokeWidth="0.5"
              />
              <line
                x1="140"
                y1="106"
                x2="192"
                y2="106"
                stroke="rgba(242,201,76,0.18)"
                strokeWidth="0.5"
              />
              <line
                x1="140"
                y1="115"
                x2="192"
                y2="115"
                stroke="rgba(242,201,76,0.18)"
                strokeWidth="0.5"
              />
              <line
                x1="160"
                y1="88"
                x2="160"
                y2="124"
                stroke="rgba(242,201,76,0.15)"
                strokeWidth="0.5"
              />
              <line
                x1="178"
                y1="88"
                x2="178"
                y2="124"
                stroke="rgba(242,201,76,0.15)"
                strokeWidth="0.5"
              />
              <text
                x="216"
                y="98"
                fill="#f2c94c"
                fontSize="8.5"
                fontWeight="700"
                letterSpacing="1.8"
                fontFamily="monospace"
              >
                TRAIN OPERATIONS · TIMETABLING &amp; ENERGY
              </text>
              <text x="216" y="116" fill="rgba(245,242,238,0.45)" fontSize="8">
                Dwell time optimisation · Regenerative braking energy · Driver
                advisory system · Incident management
              </text>
              <text
                x="20"
                y="128"
                fill="rgba(242,201,76,0.50)"
                fontSize="7.5"
                fontStyle="italic"
                fontFamily="monospace"
              >
                Operations
              </text>
              {/* <!-- RAIL-CITY CORRIDOR --> */}
              <rect
                x="16"
                y="144"
                width="528"
                height="56"
                rx="6"
                fill="url(#railS3)"
                stroke="rgba(235,143,111,0.22)"
                strokeWidth="1"
              />
              {/* <!-- City skyline + rail connection --> */}
              <rect
                x="32"
                y="162"
                width="10"
                height="28"
                fill="rgba(235,143,111,0.22)"
                rx="1"
              />
              <rect
                x="46"
                y="155"
                width="14"
                height="35"
                fill="rgba(235,143,111,0.27)"
                rx="1"
              />
              <rect
                x="64"
                y="164"
                width="10"
                height="26"
                fill="rgba(235,143,111,0.20)"
                rx="1"
              />
              <rect
                x="78"
                y="152"
                width="13"
                height="38"
                fill="rgba(235,143,111,0.24)"
                rx="1"
              />
              <rect
                x="95"
                y="160"
                width="11"
                height="30"
                fill="rgba(235,143,111,0.22)"
                rx="1"
              />
              {/* <!-- station marker --> */}
              <circle
                cx="58"
                cy="194"
                r="5"
                fill="rgba(235,143,111,0.45)"
                stroke="rgba(235,143,111,0.65)"
                strokeWidth="1"
              />
              <circle
                cx="100"
                cy="194"
                r="5"
                fill="rgba(235,143,111,0.45)"
                stroke="rgba(235,143,111,0.65)"
                strokeWidth="1"
              />
              {/* <!-- transit rail line through city --> */}
              <line
                x1="30"
                y1="194"
                x2="195"
                y2="194"
                stroke="rgba(235,143,111,0.60)"
                strokeWidth="2.2"
              />
              {/* <!-- intermodal connections --> */}
              <line
                x1="58"
                y1="189"
                x2="58"
                y2="172"
                stroke="rgba(235,143,111,0.38)"
                strokeWidth="0.8"
                strokeDasharray="2,1.5"
              />
              <line
                x1="100"
                y1="189"
                x2="100"
                y2="172"
                stroke="rgba(235,143,111,0.38)"
                strokeWidth="0.8"
                strokeDasharray="2,1.5"
              />
              {/* <!-- bus connection nodes --> */}
              <rect
                x="138"
                y="186"
                width="16"
                height="10"
                rx="1"
                fill="rgba(235,143,111,0.20)"
                stroke="rgba(235,143,111,0.38)"
                strokeWidth="0.6"
              />
              <line
                x1="154"
                y1="191"
                x2="170"
                y2="191"
                stroke="rgba(235,143,111,0.30)"
                strokeWidth="0.8"
                strokeDasharray="2,1.5"
              />
              <rect
                x="170"
                y="186"
                width="18"
                height="10"
                rx="1"
                fill="rgba(235,143,111,0.18)"
                stroke="rgba(235,143,111,0.30)"
                strokeWidth="0.6"
              />
              <text
                x="216"
                y="162"
                fill="#eb8f6f"
                fontSize="8.5"
                fontWeight="700"
                letterSpacing="1.8"
                fontFamily="monospace"
              >
                RAIL-CITY CORRIDOR · INTERMODAL CONNECTIVITY
              </text>
              <text x="216" y="180" fill="rgba(245,242,238,0.45)" fontSize="8">
                TOD station catchment · Bus-rail interchange · Urban rail demand
                modelling · Smart corridor design
              </text>
              <text
                x="20"
                y="192"
                fill="rgba(235,143,111,0.50)"
                fontSize="7.5"
                fontStyle="italic"
                fontFamily="monospace"
              >
                Corridor
              </text>
              {/* <!-- CAPACITY BUILDING --> */}
              <rect
                x="16"
                y="208"
                width="528"
                height="56"
                rx="6"
                fill="url(#railS4)"
                stroke="rgba(111,207,151,0.28)"
                strokeWidth="1"
              />
              {/* <!-- Graduation cap --> */}
              <rect
                x="38"
                y="230"
                width="26"
                height="14"
                rx="1"
                fill="rgba(111,207,151,0.18)"
                stroke="rgba(111,207,151,0.38)"
                strokeWidth="0.8"
              />
              <polygon
                points="26,228 51,220 76,228 51,232"
                fill="rgba(111,207,151,0.30)"
              />
              <line
                x1="76"
                y1="228"
                x2="76"
                y2="240"
                stroke="rgba(111,207,151,0.45)"
                strokeWidth="1.2"
              />
              <circle cx="76" cy="242" r="3" fill="rgba(111,207,151,0.50)" />
              {/* <!-- certification document --> */}
              <rect
                x="92"
                y="222"
                width="28"
                height="34"
                rx="2"
                fill="rgba(111,207,151,0.12)"
                stroke="rgba(111,207,151,0.30)"
                strokeWidth="0.6"
              />
              <line
                x1="96"
                y1="228"
                x2="116"
                y2="228"
                stroke="rgba(111,207,151,0.40)"
                strokeWidth="0.8"
              />
              <line
                x1="96"
                y1="234"
                x2="116"
                y2="234"
                stroke="rgba(111,207,151,0.30)"
                strokeWidth="0.7"
              />
              <line
                x1="96"
                y1="240"
                x2="108"
                y2="240"
                stroke="rgba(111,207,151,0.25)"
                strokeWidth="0.6"
              />
              <polygon
                points="104,248 108,244 112,248"
                fill="rgba(111,207,151,0.40)"
              />
              {/* <!-- people / trainees --> */}
              <circle
                cx="140"
                cy="226"
                r="5"
                fill="rgba(111,207,151,0.25)"
                stroke="rgba(111,207,151,0.40)"
                strokeWidth="0.7"
              />
              <rect
                x="135"
                y="231"
                width="10"
                height="8"
                rx="2"
                fill="rgba(111,207,151,0.18)"
                stroke="rgba(111,207,151,0.30)"
                strokeWidth="0.5"
              />
              <circle
                cx="158"
                cy="226"
                r="5"
                fill="rgba(111,207,151,0.22)"
                stroke="rgba(111,207,151,0.38)"
                strokeWidth="0.7"
              />
              <rect
                x="153"
                y="231"
                width="10"
                height="8"
                rx="2"
                fill="rgba(111,207,151,0.15)"
                stroke="rgba(111,207,151,0.28)"
                strokeWidth="0.5"
              />
              <line
                x1="145"
                y1="227"
                x2="153"
                y2="227"
                stroke="rgba(111,207,151,0.25)"
                strokeWidth="0.6"
                strokeDasharray="1.5,1"
              />
              <text
                x="216"
                y="228"
                fill="#6fcf97"
                fontSize="8.5"
                fontWeight="700"
                letterSpacing="1.8"
                fontFamily="monospace"
              >
                CAPACITY BUILDING · PROFESSIONAL TRAINING
              </text>
              <text x="216" y="246" fill="rgba(245,242,238,0.45)" fontSize="8">
                Rail engineer certification · Train driver simulation · Regional
                knowledge transfer · Industry curriculum
              </text>
              <text
                x="20"
                y="256"
                fill="rgba(111,207,151,0.50)"
                fontSize="7.5"
                fontStyle="italic"
                fontFamily="monospace"
              >
                Training
              </text>
              {/* <!-- Arrows --> */}
              <line
                x1="546"
                y1="43"
                x2="588"
                y2="148"
                stroke="rgba(122,184,232,0.42)"
                strokeWidth="1.3"
                strokeDasharray="4,3"
              />
              <line
                x1="546"
                y1="108"
                x2="588"
                y2="153"
                stroke="rgba(242,201,76,0.42)"
                strokeWidth="1.3"
                strokeDasharray="4,3"
              />
              <line
                x1="546"
                y1="172"
                x2="588"
                y2="160"
                stroke="rgba(235,143,111,0.38)"
                strokeWidth="1.3"
                strokeDasharray="4,3"
              />
              <line
                x1="546"
                y1="236"
                x2="588"
                y2="168"
                stroke="rgba(111,207,151,0.42)"
                strokeWidth="1.3"
                strokeDasharray="4,3"
              />
              <polygon
                points="588,148 582,143 582,153"
                fill="rgba(122,184,232,0.40)"
              />
              <polygon
                points="588,153 582,148 582,158"
                fill="rgba(242,201,76,0.40)"
              />
              <polygon
                points="588,160 582,155 582,165"
                fill="rgba(235,143,111,0.35)"
              />
              <polygon
                points="588,168 582,163 582,173"
                fill="rgba(111,207,151,0.40)"
              />
              {/* <!-- CE-Rail Platform --> */}
              <rect
                x="590"
                y="118"
                width="256"
                height="90"
                rx="10"
                fill="rgba(78,18,28,0.25)"
                stroke="rgba(122,184,232,0.35)"
                strokeWidth="1.5"
              />
              <text
                x="718"
                y="143"
                textAnchor="middle"
                fill="#7ab8e8"
                fontSize="9.5"
                fontWeight="700"
                letterSpacing="1.8"
                fontFamily="monospace"
              >
                CE-RAIL PLATFORM
              </text>
              <line
                x1="608"
                y1="150"
                x2="830"
                y2="150"
                stroke="rgba(122,184,232,0.2)"
                strokeWidth="0.8"
              />
              <text
                x="718"
                y="164"
                textAnchor="middle"
                fill="rgba(245,242,238,0.72)"
                fontSize="8.5"
              >
                Rail Systems Research &amp; Training
              </text>
              <text
                x="718"
                y="178"
                textAnchor="middle"
                fill="rgba(245,242,238,0.58)"
                fontSize="8"
              >
                Simulation · Certification · Policy Evidence
              </text>
              <text
                x="718"
                y="196"
                textAnchor="middle"
                fill="rgba(245,242,238,0.45)"
                fontSize="7.5"
              >
                Urban Rail · CBTC · Smart Corridor
              </text>
              {/* <!-- Outputs --> */}
              <rect
                x="594"
                y="222"
                width="76"
                height="60"
                rx="6"
                fill="rgba(122,184,232,0.10)"
                stroke="rgba(122,184,232,0.28)"
                strokeWidth="1"
              />
              <text
                x="632"
                y="242"
                textAnchor="middle"
                fill="#7ab8e8"
                fontSize="8"
                fontWeight="700"
                letterSpacing="1"
                fontFamily="monospace"
              >
                TRAIN
              </text>
              <text
                x="632"
                y="254"
                textAnchor="middle"
                fill="#7ab8e8"
                fontSize="8"
                fontWeight="700"
                letterSpacing="1"
                fontFamily="monospace"
              >
                SIM
              </text>
              <text
                x="632"
                y="268"
                textAnchor="middle"
                fill="rgba(245,242,238,0.5)"
                fontSize="7.5"
              >
                CBTC testbed
              </text>
              <rect
                x="678"
                y="222"
                width="76"
                height="60"
                rx="6"
                fill="rgba(242,201,76,0.10)"
                stroke="rgba(242,201,76,0.25)"
                strokeWidth="1"
              />
              <text
                x="716"
                y="242"
                textAnchor="middle"
                fill="#f2c94c"
                fontSize="8"
                fontWeight="700"
                letterSpacing="1"
                fontFamily="monospace"
              >
                CERT
              </text>
              <text
                x="716"
                y="256"
                textAnchor="middle"
                fill="rgba(245,242,238,0.5)"
                fontSize="7.5"
              >
                rail engineer
              </text>
              <text
                x="716"
                y="268"
                textAnchor="middle"
                fill="rgba(245,242,238,0.5)"
                fontSize="7.5"
              >
                certification
              </text>
              <rect
                x="762"
                y="222"
                width="80"
                height="60"
                rx="6"
                fill="rgba(111,207,151,0.10)"
                stroke="rgba(111,207,151,0.25)"
                strokeWidth="1"
              />
              <text
                x="802"
                y="240"
                textAnchor="middle"
                fill="#6fcf97"
                fontSize="8"
                fontWeight="700"
                letterSpacing="1"
                fontFamily="monospace"
              >
                URBAN
              </text>
              <text
                x="802"
                y="252"
                textAnchor="middle"
                fill="#6fcf97"
                fontSize="8"
                fontWeight="700"
                letterSpacing="1"
                fontFamily="monospace"
              >
                RAIL
              </text>
              <text
                x="802"
                y="266"
                textAnchor="middle"
                fill="rgba(245,242,238,0.5)"
                fontSize="7.5"
              >
                policy guidance
              </text>
              <line
                x1="660"
                y1="208"
                x2="632"
                y2="222"
                stroke="rgba(122,184,232,0.35)"
                strokeWidth="1"
                strokeDasharray="2,2"
              />
              <line
                x1="718"
                y1="208"
                x2="716"
                y2="222"
                stroke="rgba(242,201,76,0.35)"
                strokeWidth="1"
                strokeDasharray="2,2"
              />
              <line
                x1="775"
                y1="208"
                x2="800"
                y2="222"
                stroke="rgba(111,207,151,0.35)"
                strokeWidth="1"
                strokeDasharray="2,2"
              />
              <text
                x="430"
                y="293"
                textAnchor="middle"
                fill="rgba(245,242,238,0.22)"
                fontSize="7.5"
                letterSpacing="1.5"
                fontFamily="monospace"
              >
                RAIL SYSTEMS INTELLIGENCE FOR VIETNAM&apos;S URBAN TRANSIT
                FUTURE
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* <!-- ========== STRUCTURE (two halves) ========== --> */}
      <section className="section" id="structure">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">STRUCTURE · 02</span>
            <h2>Two complementary platforms under one roof</h2>
            <p className="section-sub">
              CE-Rail@UEH is organised around a training &amp; simulation hub
              and a city-scale living lab. Together they connect the classroom,
              the laboratory bench, and the operating corridor.
            </p>
          </div>

          <div className="grid-2">
            <article className="lab-card">
              <div className="lab-card-index">01</div>
              <h3 data-i18n="rail.s1"> {i18n("move-system.rail.s1")}</h3>
              <p data-i18n="rail.s1.body">{i18n("move-system.rail.s1_body")}</p>
              <ul className="lab-card-list">
                <li>
                  Rolling-stock mock-up for driving &amp; maintenance drills
                </li>
                <li>Signalling &amp; interlocking simulator</li>
                <li>PTC / CBTC training devices</li>
                <li>SCADA supervisory-control sandbox</li>
              </ul>
            </article>

            <article className="lab-card">
              <div className="lab-card-index">02</div>
              <h3 data-i18n="rail.s2"> {i18n("move-system.rail.s2")}</h3>
              <p data-i18n="rail.s2.body">{i18n("move-system.rail.s2_body")}</p>
              <ul className="lab-card-list">
                <li>TOD station-area prototypes</li>
                <li>Passenger-flow experimentation &amp; optimisation</li>
                <li>Last-mile &amp; micro-mobility integration</li>
                <li>Shared digital twin for operators and authorities</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* <!-- ========== STRATEGIC CONSULTING SCOPE ========== --> */}
      <section className="section" id="consulting">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">SCOPE · 03</span>
            <h2>Strategic consulting &amp; research scope</h2>
            <p className="section-sub">
              CE-Rail@UEH advises ministries, cities, operators, and financiers
              on the full life-cycle of urban and high-speed rail — from
              workforce strategy to green-finance structuring.
            </p>
          </div>

          <div className="grid-2">
            <article className="lab-card">
              <div className="lab-card-index">A</div>
              <h3>Strategic Consulting and Development Projects</h3>
              <ul className="lab-card-list">
                <li>Strategy for Building the Railway Workforce</li>
                <li>Integrated Urban Rail &amp; City Development Advisory</li>
                <li>Operations &amp; Safety Management for Urban Rail</li>
                <li>Smart Mobility Data &amp; Digital Twin</li>
                <li>Green Finance &amp; Lifecycle Costing</li>
                <li>
                  Human Factors, Accessibility &amp; Inclusive Station Design
                </li>
              </ul>
            </article>

            <article className="lab-card">
              <div className="lab-card-index">B</div>
              <h3>
                Research &amp; Consulting on Urban Development, Finance &amp;
                Sustainability
              </h3>
              <ul className="lab-card-list">
                <li>Social-Economic &amp; Environmental Impact Assessment</li>
                <li>Multimodal Integration &amp; Last-Mile Connectivity</li>
                <li>Transit-Oriented Development (TOD) Models</li>
                <li>PPP / PPPP Models &amp; Green Finance Structuring</li>
                <li>Urban Mobility &amp; Land Value Capture</li>
                <li>Resilience &amp; Climate Adaptation</li>
                <li>Smart Mobility Analytics &amp; Forecasting</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* <!-- ========== EQUIPMENT (Rail Systems Lab) ========== --> */}
      <section className="section section--tinted" id="equipment">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">EQUIPMENT · 04</span>
            <h2>Rail Systems Lab — core platforms</h2>
            <p className="section-sub">
              A compact, modular equipment stack that covers vehicle, control,
              supervision, and operations under one teaching facility.
            </p>
          </div>

          <div className="grid-4">
            <article className="feature-row">
              <div className="feature-index">01</div>
              <h4>Rolling stock mock-up</h4>
              <p>
                A full-scale driving cabin and carriage section used for train
                simulation, driver training, and maintenance drills — from
                braking profiles to door-cycle diagnostics.
              </p>
            </article>

            <article className="feature-row">
              <div className="feature-index">02</div>
              <h4>Signalling simulator</h4>
              <p>
                Interlocking logic, route-setting, and track-circuit behaviour
                reproduced in software, so students can run realistic scenarios
                including degraded-mode operation and recovery.
              </p>
            </article>

            <article className="feature-row">
              <div className="feature-index">03</div>
              <h4>PTC / CBTC training devices</h4>
              <p>
                Basic Positive Train Control and Communications-Based Train
                Control training kits for learning movement authority, automatic
                train protection, and on-board–wayside communication.
              </p>
            </article>

            <article className="feature-row">
              <div className="feature-index">04</div>
              <h4>SCADA supervisory sandbox</h4>
              <p>
                A supervisory control and data acquisition sandbox covering
                power, tunnel ventilation, and station systems — connected to
                the signalling simulator for integrated operations exercises.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* <!-- ========== INTERACTIVE DEMO ========== --> */}
      <section className="section" id="demo">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">DEMO · 05</span>
            <h2 data-i18n="rail.demo.title">
              {i18n("move-system.rail.demo_title")}
            </h2>
            <p className="section-sub" data-i18n="rail.demo.sub">
              {i18n("move-system.rail.demo_sub")}
            </p>
          </div>

          <div className="demo-wrap">
            <canvas
              id="rail-canvas"
              width="1200"
              height="480"
              aria-label="Rail-City Smart Corridor explorer"
            ></canvas>

            <div className="demo-controls">
              <label className="demo-slider">
                <span className="demo-slider-label">Corridor position</span>
                <input
                  type="range"
                  id="rail-pos"
                  min="0"
                  max="100"
                  step="1"
                  // value="50"
                />
              </label>

              <div className="demo-toggles">
                <button
                  type="button"
                  className="btn btn-toggle is-active"
                  data-layer="stations"
                >
                  Stations
                </button>
                <button
                  type="button"
                  className="btn btn-toggle is-active"
                  data-layer="tod"
                >
                  TOD Density
                </button>
                <button
                  type="button"
                  className="btn btn-toggle"
                  data-layer="lastmile"
                >
                  Last-Mile
                </button>
                <button
                  type="button"
                  className="btn btn-toggle"
                  data-layer="flow"
                >
                  Passenger Flow
                </button>
              </div>

              <div className="demo-status" id="rail-status">
                CURRENT: Tech Park · TOD 65% · Daily Flow 24k
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ========== RAIL OPS SIMULATION ========== --> */}
      <section
        className="section"
        id="rail-ops-sim"
        style={{
          background: "linear-gradient(180deg, #0f0a0e 0%, #1a0a0f 100%)",
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
            <span
              className="eyebrow"
              style={{
                color: "rgba(184, 146, 100, 0.7)",
              }}
            >
              SIMULATION · 05B
            </span>
            <h2
              style={{
                color: "#f5f2ee",
              }}
            >
              Rail Operations Control — Interactive SCADA Demo
            </h2>
            <p
              className="section-sub"
              style={{
                color: "rgba(245, 242, 238, 0.6)",
              }}
            >
              A live rail management simulation showing CBTC signalling, train
              movement authority, and SCADA supervision. Click a train to
              inspect its status; use the controls to adjust speed or inject a
              fault scenario.
            </p>
          </div>

          {/* <!-- Canvas --> */}
          <div
            style={{
              position: "relative",
              border: "1px solid rgba(184, 146, 100, 0.22)",
              borderRadius: "4px",
              overflow: "hidden",
              background: "#0a0408",
            }}
          >
            <canvas
              id="scadaCanvas"
              width="1100"
              height="500"
              style={{
                width: "100%",
                display: "block",
              }}
              aria-label="Rail operations SCADA simulation"
            ></canvas>
          </div>

          {/* <!-- Controls row --> */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              alignItems: "center",
              marginTop: "1.2rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                flex: 1,
                minWidth: "220px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.14em",
                  color: "rgba(184, 146, 100, 0.7)",
                  whiteSpace: "nowrap",
                  textTransform: "uppercase",
                }}
              >
                Sim Speed
              </span>
              <input
                type="range"
                id="scadaSpeed"
                min="0.3"
                max="3"
                step="0.1"
                // value="1"
                style={{
                  flex: 1,
                  accentColor: "#7a1f2e",
                }}
              />
              <span
                id="scadaSpeedVal"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "#b89264",
                  minWidth: "30px",
                }}
              >
                1.0×
              </span>
            </div>
            <button
              id="scadaFault"
              type="button"
              style={{
                padding: "6px 16px",
                border: "1px solid rgba(200, 60, 60, 0.6)",
                color: "#e06060",
                background: "rgba(200, 60, 60, 0.08)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              ⚠ INJECT FAULT
            </button>
            <button
              id="scadaReset"
              type="button"
              style={{
                padding: "6px 16px",
                border: "1px solid rgba(184, 146, 100, 0.4)",
                color: "#b89264",
                background: "rgba(184, 146, 100, 0.06)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              ↺ RESET
            </button>
            <div
              id="scadaMode"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                color: "rgba(80, 220, 120, 0.85)",
                padding: "4px 12px",
                border: "1px solid rgba(80, 220, 120, 0.3)",
                background: "rgba(80, 220, 120, 0.06)",
              }}
            >
              ● CBTC NORMAL
            </div>
          </div>

          {/* <!-- Info panel --> */}
          <div
            id="scadaInfo"
            style={{
              marginTop: "1rem",
              background: "rgba(245, 242, 238, 0.04)",
              border: "1px solid rgba(184, 146, 100, 0.18)",
              padding: "1rem 1.2rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              color: "rgba(245, 242, 238, 0.7)",
              minHeight: "52px",
            }}
          >
            <span
              style={{
                color: "rgba(184, 146, 100, 0.5)",
              }}
            >
              SELECT A TRAIN
            </span>{" "}
            — click any train on the canvas to inspect its CBTC status, movement
            authority, speed profile, and headway.
          </div>
        </div>
      </section>

      {/* <!-- ========== TIMELINE ========== --> */}
      <section className="section section--tinted" id="timeline">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" data-i18n="common.timeline">
              {i18n("move-system.common.timeline")}
            </span>
            <h2>Roadmap — from foundation to regional centre of excellence</h2>
          </div>

          <ol className="timeline">
            <li className="timeline-item">
              <div className="timeline-phase">Phase 1</div>
              <div className="timeline-range">2025 — 2027</div>
              <h4>Foundation Building</h4>
              <p>
                Stand up the Rail Systems Lab, establish the first international
                MoUs, launch the undergraduate programme, and deliver the first
                ministerial-level policy advisory projects.
              </p>
            </li>
            <li className="timeline-item">
              <div className="timeline-phase">Phase 2</div>
              <div className="timeline-range">2028 — 2032</div>
              <h4>Expansion and Enhancement</h4>
              <p>
                Open the Rail-City Smart Corridor Living Lab, introduce
                master&apos;s programmes and international joint programmes, and
                scale the consulting portfolio across TOD, green finance, and
                digital twin.
              </p>
            </li>
            <li className="timeline-item">
              <div className="timeline-phase">Phase 3</div>
              <div className="timeline-range">2033 — 2035</div>
              <h4>Scaling Up</h4>
              <p>
                Train tens of thousands of students and professionals, deliver
                large-scale consultancy for national rail programmes, and anchor
                multi-country research collaborations.
              </p>
            </li>
            <li className="timeline-item timeline-item--vision">
              <div className="timeline-phase">Vision</div>
              <div className="timeline-range">to 2045</div>
              <h4>Regional Centre of Excellence</h4>
              <p>
                CE-Rail@UEH becomes a recognised regional hub for urban and
                high-speed rail research, education, and policy — serving
                Vietnam and partner countries across Southeast Asia.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* <!-- ========== LIVING LAB FOCUS AREAS ========== --> */}
      <section className="section" id="focus">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">LIVING LAB · 07</span>
            <h2>Focus areas of the Smart Corridor Living Lab</h2>
            <p className="section-sub">
              Three experimentation themes run continuously along the corridor,
              each producing data, prototypes, and policy briefs.
            </p>
          </div>

          <div className="grid-3">
            <article className="lab-card">
              <div className="lab-card-index">F1</div>
              <h3>TOD prototypes</h3>
              <p>
                Station-area design prototypes — land-use mix, public space,
                pedestrian networks — tested with operators, local authorities,
                and residents.
              </p>
            </article>
            <article className="lab-card">
              <div className="lab-card-index">F2</div>
              <h3>Passenger flow experimentation &amp; optimisation</h3>
              <p>
                Sensor-based flow measurement, wayfinding experiments, and
                operations-side scheduling trials to smooth peaks and improve
                accessibility.
              </p>
            </article>
            <article className="lab-card">
              <div className="lab-card-index">F3</div>
              <h3>Last-mile integration</h3>
              <p>
                Integration with e-mobility and micro-mobility — bike-share,
                e-scooters, shared shuttles — including interchange design and
                fare integration.
              </p>
            </article>
          </div>

          <p className="section-note">
            Inspired by collaborative city-operator research programmes such as
            Tokyo Metro site programmes, where live stations and corridors are
            opened up as shared research infrastructure.
          </p>
        </div>
      </section>

      {/* <!-- ========== EXPECTED OUTCOMES ========== --> */}
      <section className="section section--tinted" id="outcomes">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">OUTCOMES · 08</span>
            <h2>Expected outcomes by phase</h2>
          </div>

          <div className="grid-2">
            <article className="lab-card">
              <div className="lab-card-index">P1</div>
              <h3>Phase 1 · 2025 — 2027</h3>
              <ul className="lab-card-list">
                <li>1 international MoU</li>
                <li>2 ministerial-level policy advisory projects</li>
                <li>1 undergraduate degree programme</li>
                <li>2 supplementary modules</li>
                <li>3 short-term training programmes</li>
              </ul>
            </article>

            <article className="lab-card">
              <div className="lab-card-index">P2</div>
              <h3>Phase 2 · 2028 — 2032</h3>
              <ul className="lab-card-list">
                <li>2 laboratories / living labs completed</li>
                <li>3 associate / second-degree programmes</li>
                <li>2 master&apos;s degree programmes</li>
                <li>At least 1 international joint programme</li>
              </ul>
            </article>

            <article className="lab-card lab-card--wide">
              <div className="lab-card-index">P3</div>
              <h3>Phase 3 · 2033 — 2035</h3>
              <div className="stat-row">
                <div className="stat">
                  <div className="stat-value">20,000</div>
                  <div className="stat-label">
                    students and professionals trained
                  </div>
                </div>
                <div className="stat">
                  <div className="stat-value">15</div>
                  <div className="stat-label">consultancy projects</div>
                </div>
                <div className="stat">
                  <div className="stat-value">5</div>
                  <div className="stat-label">international collaborations</div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* <!-- ========== PUBLICATIONS ========== --> */}
      <section className="section" id="publications">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" data-i18n="common.publications">
              {i18n("move-system.common.publications")}
            </span>
            <h2>Selected publication</h2>
          </div>

          <article className="lab-card lab-card--publication">
            <div className="pub-year">2026</div>
            <h4>
              Sử dụng dữ liệu mở trong phân tích cấu trúc đô thị và đánh giá
              tiềm năng TOD tại TP. Hồ Chí Minh
            </h4>
            <p className="pub-authors">Trịnh Tú Anh</p>
            <p className="pub-venue">
              Hội thảo quốc tế TOD với phát triển đường sắt đô thị, TP. Hồ Chí
              Minh, 2026 (tr. 444–453). NXB Xây Dựng.
            </p>
            <div className="pub-tags">
              <span className="pill">Open data</span>
              <span className="pill">TOD</span>
              <span className="pill">HCMC</span>
            </div>
          </article>
        </div>
      </section>

      {/* <!-- ========== STAKEHOLDERS ========== --> */}
      <section className="section section--tinted" id="stakeholders">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" data-i18n="common.stakeholders">
              {i18n("move-system.common.stakeholders")}
            </span>
            <h2>Stakeholders &amp; benefits</h2>
            <p className="section-sub">
              CE-Rail@UEH is built as a shared platform — each partner group
              gets a specific set of benefits and a specific role.
            </p>
          </div>

          <div className="grid-4">
            <article className="lab-card">
              <div className="lab-card-index">S1</div>
              <h3 data-i18n="common.students">
                {i18n("move-system.common.students")}
              </h3>
              <ul className="lab-card-list">
                <li>
                  Hands-on training in the Rail Systems Lab (rolling stock,
                  signalling, PTC/CBTC, SCADA)
                </li>
                <li>
                  Real-world experimentation in the Rail-City Smart Corridor
                  Living Lab
                </li>
                <li>
                  Practical knowledge in TOD, multimodal integration, smart
                  mobility
                </li>
                <li>
                  Enhanced skills for careers in urban rail and high-speed rail
                </li>
              </ul>
            </article>

            <article className="lab-card">
              <div className="lab-card-index">S2</div>
              <h3 data-i18n="common.universities">
                {i18n("move-system.common.universities")}
              </h3>
              <ul className="lab-card-list">
                <li>
                  Support for new undergraduate and master&apos;s programmes
                </li>
                <li>Development of advanced simulation and living labs</li>
                <li>
                  Strengthened research capacity in urban rail and high-speed
                  rail
                </li>
              </ul>
            </article>

            <article className="lab-card">
              <div className="lab-card-index">S3</div>
              <h3 data-i18n="common.gov">{i18n("move-system.common.gov")}</h3>
              <ul className="lab-card-list">
                <li>
                  Evidence-based policy advisory on TOD, land value capture,
                  green finance
                </li>
                <li>Data and insights from the living labs</li>
                <li>
                  Contributions to national policies for sustainable urban
                  development
                </li>
              </ul>
            </article>

            <article className="lab-card">
              <div className="lab-card-index">S4</div>
              <h3 data-i18n="common.industry">
                {i18n("move-system.common.industry")}
              </h3>
              <ul className="lab-card-list">
                <li>Access to a trained workforce</li>
                <li>Real-world testing of TOD prototypes</li>
                <li>
                  Collaboration in PPP models, digital twin, green
                  infrastructure
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* <!-- ========== PEOPLE ========== --> */}
      <section className="section" id="people">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">PEOPLE · 11</span>
            <h2>Core team</h2>
          </div>

          <div className="grid-3">
            <article className="person-card">
              <div
                className="person-avatar"
                style={{
                  overflow: "hidden",
                  padding: 0,
                }}
              >
                <img
                  src="/images/center&lab/move-system/slide47_img12.png"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                  }}
                  alt="Pham Nguyen Hoai"
                />
              </div>
              <h4>Pham Nguyen Hoai, PhD</h4>
              <div className="person-role">Lecturer · Rail Systems</div>
              <p className="person-bio">
                Leads the rolling-stock and signalling track of the Rail Systems
                Lab and coordinates the operations-management research line.
              </p>
            </article>

            <article className="person-card">
              <div className="person-avatar" aria-hidden="true">
                NT
              </div>
              <h4>Nguyen Duc Thanh Binh, MSc</h4>
              <div className="person-role">Researcher · Smart Mobility</div>
              <p className="person-bio">
                Works on smart mobility analytics and the digital-twin layer of
                the Rail-City Smart Corridor Living Lab.
              </p>
            </article>

            <article className="person-card">
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
              <h4>An Le</h4>
              <div className="person-role">
                PhD Candidate · TOD &amp; Land Value Capture
              </div>
              <p className="person-bio">
                Researches TOD prototypes and land-value-capture mechanisms for
                Vietnamese urban rail corridors.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Map,
  BarChart3,
  ImagePlay,
  School,
  Trophy,
  HelpCircle,
  Users,
  ShieldAlert,
  Activity,
} from "lucide-react";
import { Pages } from "../dashboard";
import { Dispatch, SetStateAction } from "react";

const NAV: { href: Pages; icon: any; label: string }[] = [
  {
    href: "main",
    icon: LayoutDashboard,
    label: "Overview",
  },
  {
    href: "map",
    icon: Map,
    label: "Heatmap",
  },
  {
    href: "analytics",
    icon: BarChart3,
    label: "Analytics",
  },
  {
    href: "review",
    icon: ImagePlay,
    label: "Review Queue",
  },
  {
    href: "schools",
    icon: School,
    label: "Schools",
  },
  {
    href: "leaderboard",
    icon: Trophy,
    label: "Leaderboard",
  },
  {
    href: "quiz",
    icon: HelpCircle,
    label: "Quiz Bank",
  },
  {
    href: "users",
    icon: Users,
    label: "Users",
  },
];

export default function Sidebar({
  setPage,
}: {
  setPage: Dispatch<SetStateAction<Pages>>;
}) {
  const path = usePathname();
  return (
    <aside
      style={{
        width: 220,
        flexShrink: 0,
        background: "var(--bg-surface)",
        borderRight: "1px solid var(--border-subtle)",
        display: "flex",
        flexDirection: "column",
        // position: 'fixed', top: 0, left: 0, bottom: 0, zIndex: 40,
      }}
    >
      {/* Logo */}
      <div
        style={{
          padding: "20px 16px 16px",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: "linear-gradient(135deg,#f59e0b,#ef4444)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ShieldAlert size={16} color="white" />
          </div>
          <div>
            <div
              style={{
                fontWeight: 700,
                fontSize: 14,
                color: "var(--text-primary)",
                letterSpacing: ".02em",
              }}
            >
              LELP
            </div>
            <div
              style={{
                fontSize: 10,
                color: "var(--text-muted)",
                marginTop: -2,
              }}
            >
              Research Platform
            </div>
          </div>
        </div>
      </div>

      {/* Live status */}
      <div
        style={{
          padding: "10px 16px",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 10px",
            background: "rgba(34,197,94,.08)",
            borderRadius: 8,
            border: "1px solid rgba(34,197,94,.15)",
          }}
        >
          <div className="live-dot" />
          <span style={{ fontSize: 11, color: "#22c55e", fontWeight: 600 }}>
            LIVE — 6 schools active
          </span>
        </div>
      </div>

      {/* Nav */}
      <nav
        style={{
          flex: 1,
          padding: "12px 10px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          overflowY: "auto",
        }}
      >
        {NAV.map(({ href, icon: Icon, label }) => (
          <div
            key={href}
            onClick={() => setPage(href)}
            className={`nav-item${path === href ? " active" : ""}`}
          >
            <Icon size={15} />
            <span>{label}</span>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div
        style={{
          padding: "12px 16px",
          borderTop: "1px solid var(--border-subtle)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Activity size={13} style={{ color: "var(--accent)" }} />
          <span style={{ fontSize: 11, color: "var(--text-muted)" }}>
            YOLOv8 · mAP50 84.7%
          </span>
        </div>
        <div style={{ marginTop: 6, fontSize: 10, color: "var(--text-muted)" }}>
          ISCM · UEH University · v1.0
        </div>
      </div>
    </aside>
  );
}

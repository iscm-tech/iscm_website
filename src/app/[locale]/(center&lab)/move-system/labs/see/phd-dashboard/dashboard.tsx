"use client";

import "./globals.css";

import { useState } from "react";
import Sidebar from "./components/sidebar";
import AnalyticsPage from "./pages/Analytics";
import LeaderboardPage from "./pages/Leaderboard";
import MapPage from "./pages/Map";
import QuizPage from "./pages/Quiz";
import ReviewPage from "./pages/Review";
import SchoolsPage from "./pages/Schools";
import UsersPage from "./pages/Users";
import OverviewPage from "./pages/mainPage";

const pages = {
  analytics: <AnalyticsPage />,
  leaderboard: <LeaderboardPage />,
  map: <MapPage />,
  quiz: <QuizPage />,
  review: <ReviewPage />,
  schools: <SchoolsPage />,
  users: <UsersPage />,
  main: <OverviewPage />,
};

export type Pages = keyof typeof pages;

export default function DashBoard() {
  const [page, setPage] = useState<Pages>("main");

  return (
    <div
      id="phd-dashboard"
      className="flex h-screen"
      style={{ background: "var(--bg-base)" }}
    >
      <Sidebar setPage={setPage} />
      <main
        className="overflow-scroll"
        style={{
          flex: 1,
          minHeight: "100vh",
          padding: 28,
          maxWidth: "calc(100vw - 220px)",
        }}
      >
        {pages[page]}
      </main>
    </div>
  );
}

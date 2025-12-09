import React, { useState } from "react";
import { Home } from "./components/Home";
import { Fixtures } from "./components/Fixtures";
import { Players } from "./components/Players";
import { Teams } from "./components/Teams";
import { News } from "./components/News";
import { Tech } from "./components/Tech"; // Projects
import { About } from "./components/About";

const PAGES = {
  home: { label: "Home", component: <Home /> },
  fixtures: { label: "Fixtures", component: <Fixtures /> },
  players: { label: "Players & Points", component: <Players /> },
  teams: { label: "Teams", component: <Teams /> },
  news: { label: "News", component: <News /> },
  projects: { label: "Projects", component: <Tech /> },
  about: { label: "About", component: <About /> },
};

export default function App() {
  const [activePage, setActivePage] = useState("home");

  const CurrentPage = PAGES[activePage]?.component ?? <Home />;

  return (
    <div className="app-shell">
      {/* HEADER */}
      <header className="app-header">
        <div className="app-header-inner container">
          <div className="brand">
            <div className="brand-mark">PL</div>
            <div className="brand-text">
              <div className="brand-title">PL Stats United</div>
              <div className="brand-subtitle">AI · Data · Fantasy</div>
            </div>
          </div>
          <nav className="main-nav">
            {Object.entries(PAGES).map(([key, page]) => (
              <button
                key={key}
                className={`nav-btn${key === activePage ? " active" : ""}`}
                onClick={() => setActivePage(key)}
              >
                {page.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="app-main">
        {CurrentPage}
      </main>

      {/* FOOTER */}
      <footer className="app-footer">
        <div className="app-footer-inner container">
          <div>
            <strong>Shmuel Zimlichman</strong> · Project Manager · AI · Data · Cloud
          </div>
          <div className="footer-meta">
            <span>
              PL Stats United – Personal demo site combining Premier League data,
              AI projects and portfolio content.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

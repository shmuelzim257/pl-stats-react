import React, { useState } from "react";

export const Tech = () => {
  const [activeTab, setActiveTab] = useState("work");

  return (
    <div className="container">
      <h1>Projects</h1>

      {/* Tabs */}
      <div className="projects-tabs">
        <button
          className={`tab-button ${activeTab === "work" ? "active" : ""}`}
          onClick={() => setActiveTab("work")}
        >
          Work Projects
        </button>

        <button
          className={`tab-button ${activeTab === "vision" ? "active" : ""}`}
          onClick={() => setActiveTab("vision")}
        >
          Vision Projects
        </button>
      </div>

      <p className="tab-description">
        {activeTab === "work"
          ? "פרויקטים שבוצעו ונוהלו בפועל בסביבות ארגוניות ופרודקשן."
          : "פרויקטים עתידיים, יוזמות ורעיונות שנמצאים בשלבי תכנון וחזון."}
      </p>

      {/* ===== Vision Projects (Project 1) ===== */}
      {activeTab === "vision" && (
        <>
          <section className="project-card">
            <h2>Project 1 – Gameweek Insights</h2>
            <p>
              פלטפורמה אנליטית ל־Fantasy Premier League המשלבת נתונים, סטטיסטיקות
              ותובנות לקבלת החלטות.
            </p>
          </section>
        </>
      )}

      {/* ===== Work Projects (Projects 2–5) ===== */}
      {activeTab === "work" && (
        <>
          <section className="project-card">
            <h2>Project 2</h2>
            <p>פרויקט ניהול טכנולוגי בסביבת Enterprise.</p>
          </section>

          <section className="project-card">
            <h2>Project 3</h2>
            <p>פרויקט מבוסס דאטה ואוטומציה.</p>
          </section>

          <section className="project-card">
            <h2>Project 4</h2>
            <p>פרויקט Cloud / AI.</p>
          </section>

          <section className="project-card">
            <h2>Project 5</h2>
            <p>פרויקט רוחבי עם מספר צוותים.</p>
          </section>
        </>
      )}
    </div>
  );
};

export default Tech;

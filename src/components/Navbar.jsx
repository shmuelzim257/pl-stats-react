import React from "react";

export const Navbar = ({ current, onNavigate }) => {
  const btn = (key, label) => (
    <button
      key={key}
      className={`nav-btn ${current === key ? "active" : ""}`}
      onClick={() => onNavigate(key)}
    >
      {label}
    </button>
  );

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">PL Stats</div>

        <nav className="navbar-links">
          {btn("home", "בית")}
          {btn("tech", "Projects")}
          {btn("fixtures", "משחקי מחזור")}
          {btn("news", "חדשות")}
          {btn("players", "שחקנים & ניקוד")}
          {btn("teams", "קבוצות")}
          {btn("about", "About")}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

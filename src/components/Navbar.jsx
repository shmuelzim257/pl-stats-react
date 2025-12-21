import React from "react";

const Navbar = ({ current, onChangePage }) => {
  const btn = (id, label) => (
    <button
      key={id}
      className={`nav-button ${current === id ? "active" : ""}`}
      onClick={() => onChangePage(id)}
    >
      {label}
    </button>
  );

  return (
    <header className="navbar">
      <div className="navbar-title">
        PL Stats <span>United</span>
      </div>
<nav className="navbar-links">
  {btn("home", "בית")}
  {btn("tech", "Projects")}
  {btn("fixtures", "משחקי מחזור")}
  {btn("news", "חדשות")}
  {btn("players", "שחקנים & ניקוד")}
  {btn("teams", "קבוצות")}
  {btn("about", "About")}
</nav>

    </header>
  );
};

export default Navbar;

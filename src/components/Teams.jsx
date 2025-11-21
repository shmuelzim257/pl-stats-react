import React, { useMemo, useState } from "react";
import teams from "../data/teams.json";

const Teams = () => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return teams;
    return teams.filter((t) =>
      (t.name + " " + t.shortName + " " + t.city)
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  return (
    <section>
      <h1 className="page-title">קבוצות הפרמייר ליג – עונת 25/26</h1>
      <p className="section-subtitle">
        כל 20 הקבוצות שמשתתפות בעונת 2025/26 בפרמייר ליג, כולל סמל, עיר, אצטדיון ומאמן.
        הנתונים מופיעים כנתונים סטטיים (JSON) שניתן לעדכן ידנית לפי הצורך.
      </p>

      <div className="filters-row">
        <input
          type="text"
          placeholder="חפש קבוצה לפי שם / עיר..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="cards-grid">
        {filtered.map((team) => (
          <div key={team.id} className="card">
            <div className="card-header">
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <img src={team.logoUrl} alt={team.name} className="team-logo" />
                <div>
                  <strong>{team.name}</strong>
                  <div className="muted">{team.shortName}</div>
                </div>
              </div>
              <span className="badge">{team.city}</span>
            </div>
            <p className="section-subtitle">
              אצטדיון: <span className="highlight">{team.stadium}</span>
            </p>
            <p className="section-subtitle">
              מאמן: {team.manager} · קפטן: {team.captain}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teams;

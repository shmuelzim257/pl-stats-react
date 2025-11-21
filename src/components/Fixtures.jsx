import React, { useEffect, useState } from "react";
import fixturesData from "../data/fixtures.json";

const Fixtures = () => {
  const [fixtures, setFixtures] = useState([]);
  const [onlyUnited, setOnlyUnited] = useState(true);

  useEffect(() => {
    setFixtures(fixturesData);
  }, []);

  const filtered = fixtures.filter((m) => {
    if (!onlyUnited) return true;
    return (
      m.homeTeam === "Manchester United" || m.awayTeam === "Manchester United"
    );
  });

  return (
    <section>
      <h1 className="page-title">משחקי המחזור הקרוב</h1>

      <p className="section-subtitle">
        הנתונים מגיעים מקובץ JSON סטטי ומתעדכנים ידנית – מתאים לפרויקט פורטפוליו ולראיונות.
      </p>

      <div className="filters-row">
        <label className="small-label">
          <input
            type="checkbox"
            checked={onlyUnited}
            onChange={(e) => setOnlyUnited(e.target.checked)}
          />{" "}
          הצג רק משחקים של מנצ׳סטר יונייטד
        </label>
      </div>

      <div className="cards-grid">
        {filtered.map((match) => (
          <div key={match.matchId} className="card">
            <div className="card-header">
              <strong>
                {match.homeTeam} vs {match.awayTeam}
              </strong>
              <span className="badge">מחזור {match.gameweek}</span>
            </div>
            <p>
              <span className="highlight">
                {match.date} · {match.time}
              </span>
            </p>
            <p className="section-subtitle">{match.stadium}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fixtures;

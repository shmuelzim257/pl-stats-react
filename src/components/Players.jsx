import React, { useMemo, useState } from "react";
import playersData from "../data/players.json";

const Players = () => {
  const [search, setSearch] = useState("");
  const [position, setPosition] = useState("ALL");
  const [team, setTeam] = useState("ALL");
  const [minPoints, setMinPoints] = useState("");
  const [sortBy, setSortBy] = useState("pointsDesc");

  const teams = useMemo(() => {
    const set = new Set(playersData.map((p) => p.team));
    return ["ALL", ...Array.from(set)];
  }, []);

  const filteredPlayers = useMemo(() => {
    return playersData
      .filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase().trim())
      )
      .filter((p) => (position === "ALL" ? true : p.position === position))
      .filter((p) => (team === "ALL" ? true : p.team === team))
      .filter((p) =>
        minPoints === "" ? true : p.points >= Number(minPoints || 0)
      )
      .sort((a, b) => {
        switch (sortBy) {
          case "pointsDesc":
            return b.points - a.points;
          case "goalsDesc":
            return b.goals - a.goals;
          case "assistsDesc":
            return b.assists - a.assists;
          default:
            return 0;
        }
      });
  }, [search, position, team, minPoints, sortBy]);

  return (
    <section>
      <h1 className="page-title">שחקנים – ניקוד ופילטרים</h1>
      <p className="section-subtitle">
        מסך שמרגיש מאוד פנטזי: ניקוד עד כה בעונה + סינון לפי עמדה, קבוצה ונקודות.
      </p>

      <div className="filters-row">
        <input
          type="text"
          placeholder="חיפוש לפי שם שחקן..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={position} onChange={(e) => setPosition(e.target.value)}>
          <option value="ALL">כל העמדות</option>
          <option value="GK">שוער</option>
          <option value="DEF">הגנה</option>
          <option value="MID">קישור</option>
          <option value="FWD">התקפה</option>
        </select>

        <select value={team} onChange={(e) => setTeam(e.target.value)}>
          {teams.map((t) => (
            <option key={t} value={t}>
              {t === "ALL" ? "כל הקבוצות" : t}
            </option>
          ))}
        </select>

        <div>
          <div className="small-label">מינימום נקודות</div>
          <input
            type="number"
            min="0"
            placeholder="לדוגמה: 50"
            value={minPoints}
            onChange={(e) => setMinPoints(e.target.value)}
          />
        </div>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="pointsDesc">מיון לפי נקודות (גבוה → נמוך)</option>
          <option value="goalsDesc">מיון לפי גולים</option>
          <option value="assistsDesc">מיון לפי בישולים</option>
        </select>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>שחקן</th>
            <th>קבוצה</th>
            <th>עמדה</th>
            <th>דקות</th>
            <th>גולים</th>
            <th>בישולים</th>
            <th>נקודות</th>
          </tr>
        </thead>
        <tbody>
          {filteredPlayers.map((p) => (
            <tr key={p.id}>
              <td>
                {p.name}{" "}
                {p.team === "Manchester United" && (
                  <span className="chip">MUN</span>
                )}
              </td>
              <td>{p.team}</td>
              <td>{p.position}</td>
              <td>{p.minutes}</td>
              <td>{p.goals}</td>
              <td>{p.assists}</td>
              <td className="highlight">{p.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Players;

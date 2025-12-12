import { useEffect, useMemo, useState } from "react";
import players from "../data/players.json";

export const Players = () => {
  const [search, setSearch] = useState("");
  const [teamFilter, setTeamFilter] = useState("ALL");
  const [positionFilter, setPositionFilter] = useState("ALL");
  const [sortCol, setSortCol] = useState("name");
  const [sortDir, setSortDir] = useState("asc");

  const teams = useMemo(() => {
    const t = new Set(players.map((p) => p.team));
    return ["ALL", ...Array.from(t)];
  }, []);

  const positions = ["ALL", "GK", "DEF", "MID", "FWD"];

  /* -------------------------
     מיון + חיפוש + פילטרים
  -------------------------- */
  const filteredPlayers = useMemo(() => {
    let data = [...players];

    if (positionFilter !== "ALL") {
      data = data.filter((p) => p.position === positionFilter);
    }

    if (teamFilter !== "ALL") {
      data = data.filter((p) => p.team === teamFilter);
    }

    if (search.trim() !== "") {
      const q = search.toLowerCase();
      data = data.filter((p) =>
        Object.values(p).join(" ").toLowerCase().includes(q)
      );
    }

    data.sort((a, b) => {
      const av = a[sortCol];
      const bv = b[sortCol];

      if (typeof av === "number") {
        return sortDir === "asc" ? av - bv : bv - av;
      }

      const as = String(av).toLowerCase();
      const bs = String(bv).toLowerCase();

      if (as < bs) return sortDir === "asc" ? -1 : 1;
      if (as > bs) return sortDir === "asc" ? 1 : -1;
      return 0;
    });

    return data;
  }, [players, search, positionFilter, teamFilter, sortCol, sortDir]);


  /* ---------------------------------------------------
     ✨ משבצות "שחקנים מובילים בקטגוריות מתקדמות"
  --------------------------------------------------- */
  const leaders = useMemo(() => {
    if (!players || players.length === 0) return [];

    const categories = [
      {
        id: "totalPoints",
        title: "סך נקודות עונה",
        description: "השחקן עם הכי הרבה נקודות",
        key: "totalPoints",
        unit: "נק'"
      },
      {
        id: "form",
        title: "Form",
        description: "החם ביותר כרגע",
        key: "form",
        unit: "מדד"
      },
      {
        id: "ictIndex",
        title: "ICT Index",
        description: "השפעה + יצירתיות + איום",
        key: "ictIndex",
        unit: "ICT"
      },
      {
        id: "goals",
        title: "מלך השערים",
        description: "סה״כ שערים",
        key: "goals",
        unit: "שערים"
      },
      {
        id: "assists",
        title: "מלך הבישולים",
        description: "סה״כ בישולים",
        key: "assists",
        unit: "בישולים"
      }
    ];

    const findLeader = (key) => {
      return players.reduce(
        (best, p) => (!best || p[key] > best[key] ? p : best),
        null
      );
    };

    return categories.map((c) => {
      const p = findLeader(c.key);
      return {
        ...c,
        player: p,
        value:
          typeof p[c.key] === "number" && !Number.isInteger(p[c.key])
            ? p[c.key].toFixed(1)
            : p[c.key]
      };
    });
  }, [players]);


  const handleSort = (key) => {
    if (key === sortCol) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortCol(key);
      setSortDir("asc");
    }
  };


  return (
    <div className="container">
      <h1 className="page-title">שחקנים ונקודות</h1>

      {/* שורת חיפוש ופילטרים */}
      <div className="filters-row">
        <input
          placeholder="חפש שחקן…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={teamFilter} onChange={(e) => setTeamFilter(e.target.value)}>
          {teams.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>

        <select
          value={positionFilter}
          onChange={(e) => setPositionFilter(e.target.value)}
        >
          {positions.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </div>

      {/* ✨ משבצות שחקנים מובילים */}
      <section className="top-leaders-section">
        <h2 className="section-title">שחקנים מובילים בקטגוריות שונות</h2>

        <div className="top-leaders-grid">
          {leaders.map((item, i) => (
            <article
              key={item.id}
              className={`top-leader-card ${i === 0 ? "top-leader-main" : ""}`}
            >
              <div className="leader-title-row">
                <span className="leader-category">{item.title}</span>
                <span className="leader-description">{item.description}</span>
              </div>

              <div className="leader-player-name">{item.player.name}</div>
              <div className="leader-team-name">{item.player.team}</div>

              <div className="leader-value-row">
                <span className="leader-value">{item.value}</span>
                <span className="leader-unit">{item.unit}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* טבלת שחקנים */}
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">
            טבלת שחקנים – {filteredPlayers.length} בתצוגה
          </h2>
          <span className="pill">סה״כ בקובץ: {players.length}</span>
        </div>

        <div className="card-body">
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th onClick={() => handleSort("name")}>שם</th>
                  <th onClick={() => handleSort("team")}>קבוצה</th>
                  <th onClick={() => handleSort("position")}>עמדה</th>
                  <th onClick={() => handleSort("totalPoints")}>נק'</th>
                  <th onClick={() => handleSort("goals")}>שערים</th>
                  <th onClick={() => handleSort("assists")}>בישולים</th>
                  <th onClick={() => handleSort("ictIndex")}>ICT</th>
                  <th onClick={() => handleSort("form")}>Form</th>
                </tr>
              </thead>

              <tbody>
                {filteredPlayers.map((p) => (
                  <tr key={p.id}>
                    <td>{p.name}</td>
                    <td>{p.team}</td>
                    <td>{p.position}</td>
                    <td>{p.totalPoints}</td>
                    <td>{p.goals}</td>
                    <td>{p.assists}</td>
                    <td>{p.ictIndex}</td>
                    <td>{p.form}</td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useMemo, useState } from "react";
import playersData from "../data/players.json";

// עמודות הטבלה לפי מבנה FPL
const columns = [
  { key: "name", label: "שחקן", numeric: false },
  { key: "team", label: "קבוצה", numeric: false },
  { key: "position", label: "עמדה", numeric: false },
  { key: "price", label: "מחיר (£m)", numeric: true },
  { key: "totalPoints", label: "נקודות עונה", numeric: true },
  { key: "gwPoints", label: "נקודות מחזור אחרון", numeric: true },
  { key: "pointsPerGame", label: "נק' למשחק", numeric: true },
  { key: "form", label: "Form", numeric: true },
  { key: "selectedByPercent", label: 'נבחר ע"י %', numeric: true },
  { key: "minutes", label: "דקות", numeric: true },
  { key: "goals", label: "שערים", numeric: true },
  { key: "assists", label: "בישולים", numeric: true },
  { key: "cleanSheets", label: "שערים נקיים", numeric: true },
  { key: "goalsConceded", label: "שערים שספג", numeric: true },
  { key: "saves", label: "הצלות", numeric: true },
  { key: "bonus", label: "בונוס", numeric: true },
  { key: "bps", label: "BPS", numeric: true },
  { key: "influence", label: "Influence", numeric: true },
  { key: "creativity", label: "Creativity", numeric: true },
  { key: "threat", label: "Threat", numeric: true },
  { key: "ictIndex", label: "ICT Index", numeric: true }
];

export const Players = () => {
  const [search, setSearch] = useState("");
  const [positionFilter, setPositionFilter] = useState("ALL");
  const [teamFilter, setTeamFilter] = useState("ALL");
  const [sortCol, setSortCol] = useState("totalPoints");
  const [sortDir, setSortDir] = useState("desc");

  const players = playersData || [];

  const teams = useMemo(() => {
    if (!players || players.length === 0) return ["ALL"];
    return ["ALL", ...Array.from(new Set(players.map((p) => p.team))).sort()];
  }, [players]);

  const positions = ["ALL", "GK", "DEF", "MID", "FWD"];

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
        Object.values(p)
          .join(" ")
          .toLowerCase()
          .includes(q)
      );
    }

    // מיון
    data.sort((a, b) => {
      const col = sortCol;
      const av = a[col];
      const bv = b[col];

      if (typeof av === "number" && typeof bv === "number") {
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

  const handleSort = (key) => {
    if (sortCol === key) {
      setSortDir((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortCol(key);
      setSortDir("desc");
    }
  };

  const renderSortArrow = (key) => {
    if (sortCol !== key) return null;
    return sortDir === "asc" ? " ▲" : " ▼";
  };

  return (
    <div className="container">
      <h1>שחקנים &amp; ניקוד</h1>
      <p>
        טבלת סטטיסטיקות לכל שחקני ה-FPL, נטענת מקובץ JSON סטטי שנוצר מה-API
        הרשמי. ניתן לחפש, לסנן ולמיין לפי כל אחת מהעמודות.
      </p>

      {players.length === 0 && (
        <div className="card" style={{ marginTop: "1rem" }}>
          <div className="card-body">
            כרגע אין נתונים בקובץ השחקנים (players.json). יש להריץ את סקריפט
            העדכון או למלא נתוני דמו.
          </div>
        </div>
      )}

      {players.length > 0 && (
        <>
          <div className="filters-row">
            <input
              className="input"
              type="text"
              placeholder="חפש לפי שם, קבוצה או ערך כלשהו…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className="select"
              value={positionFilter}
              onChange={(e) => setPositionFilter(e.target.value)}
            >
              {positions.map((pos) => (
                <option key={pos} value={pos}>
                  {pos === "ALL"
                    ? "כל העמדות"
                    : pos === "GK"
                    ? "שוערים"
                    : pos === "DEF"
                    ? "הגנה"
                    : pos === "MID"
                    ? "קשרים"
                    : "חלוצים"}
                </option>
              ))}
            </select>
            <select
              className="select"
              value={teamFilter}
              onChange={(e) => setTeamFilter(e.target.value)}
            >
              {teams.map((t) => (
                <option key={t} value={t}>
                  {t === "ALL" ? "כל הקבוצות" : t}
                </option>
              ))}
            </select>
          </div>

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
                      {columns.map((col) => (
                        <th
                          key={col.key}
                          onClick={() => handleSort(col.key)}
                          style={{ cursor: "pointer", whiteSpace: "nowrap" }}
                        >
                          {col.label}
                          {renderSortArrow(col.key)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPlayers.map((p) => (
                      <tr key={p.id}>
                        <td>{p.name}</td>
                        <td>{p.team}</td>
                        <td>{p.position}</td>
                        <td>{p.price.toFixed(1)}</td>
                        <td>{p.totalPoints}</td>
                        <td>{p.gwPoints}</td>
                        <td>{p.pointsPerGame.toFixed(1)}</td>
                        <td>{p.form.toFixed(1)}</td>
                        <td>{p.selectedByPercent.toFixed(1)}</td>
                        <td>{p.minutes}</td>
                        <td>{p.goals}</td>
                        <td>{p.assists}</td>
                        <td>{p.cleanSheets}</td>
                        <td>{p.goalsConceded}</td>
                        <td>{p.saves}</td>
                        <td>{p.bonus}</td>
                        <td>{p.bps}</td>
                        <td>{p.influence.toFixed(1)}</td>
                        <td>{p.creativity.toFixed(1)}</td>
                        <td>{p.threat.toFixed(1)}</td>
                        <td>{p.ictIndex.toFixed(1)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

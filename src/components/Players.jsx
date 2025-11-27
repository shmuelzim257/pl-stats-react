import React, { useMemo, useState } from "react";

// דמו של שחקנים – אפשר להחליף בהמשך במערך גדול מכל הליגה (מ-json חיצוני)
const players = [
  {
    id: 1,
    name: "Erling Haaland",
    team: "Manchester City",
    position: "FWD",
    price: 14.5,
    totalPoints: 120,
    gwPoints: 8,
    pointsPerGame: 8.6,
    form: 7.5,
    selectedByPercent: 82.3,
    minutes: 1080,
    goals: 14,
    assists: 4,
    cleanSheets: 0,
    goalsConceded: 0,
    saves: 0,
    bonus: 18,
    bps: 320,
    influence: 600.0,
    creativity: 220.0,
    threat: 800.0,
    ictIndex: 162.0
  },
  {
    id: 2,
    name: "Mohamed Salah",
    team: "Liverpool",
    position: "MID",
    price: 13.0,
    totalPoints: 110,
    gwPoints: 6,
    pointsPerGame: 7.9,
    form: 6.8,
    selectedByPercent: 55.4,
    minutes: 1060,
    goals: 10,
    assists: 6,
    cleanSheets: 3,
    goalsConceded: 0,
    saves: 0,
    bonus: 16,
    bps: 290,
    influence: 540.0,
    creativity: 310.0,
    threat: 620.0,
    ictIndex: 147.5
  },
  {
    id: 3,
    name: "Bukayo Saka",
    team: "Arsenal",
    position: "MID",
    price: 10.0,
    totalPoints: 95,
    gwPoints: 7,
    pointsPerGame: 7.1,
    form: 6.2,
    selectedByPercent: 48.1,
    minutes: 1020,
    goals: 7,
    assists: 7,
    cleanSheets: 4,
    goalsConceded: 0,
    saves: 0,
    bonus: 14,
    bps: 270,
    influence: 480.0,
    creativity: 340.0,
    threat: 510.0,
    ictIndex: 133.0
  },
  {
    id: 4,
    name: "Ollie Watkins",
    team: "Aston Villa",
    position: "FWD",
    price: 9.0,
    totalPoints: 92,
    gwPoints: 5,
    pointsPerGame: 6.9,
    form: 6.0,
    selectedByPercent: 42.7,
    minutes: 1040,
    goals: 8,
    assists: 6,
    cleanSheets: 2,
    goalsConceded: 0,
    saves: 0,
    bonus: 13,
    bps: 250,
    influence: 430.0,
    creativity: 260.0,
    threat: 520.0,
    ictIndex: 121.0
  },
  {
    id: 5,
    name: "Son Heung-min",
    team: "Tottenham Hotspur",
    position: "MID",
    price: 10.5,
    totalPoints: 88,
    gwPoints: 4,
    pointsPerGame: 6.7,
    form: 5.9,
    selectedByPercent: 35.2,
    minutes: 1005,
    goals: 7,
    assists: 5,
    cleanSheets: 3,
    goalsConceded: 0,
    saves: 0,
    bonus: 11,
    bps: 230,
    influence: 410.0,
    creativity: 250.0,
    threat: 480.0,
    ictIndex: 116.0
  },
  {
    id: 6,
    name: "Cole Palmer",
    team: "Chelsea",
    position: "MID",
    price: 8.0,
    totalPoints: 82,
    gwPoints: 9,
    pointsPerGame: 6.3,
    form: 7.1,
    selectedByPercent: 31.4,
    minutes: 980,
    goals: 7,
    assists: 4,
    cleanSheets: 2,
    goalsConceded: 0,
    saves: 0,
    bonus: 10,
    bps: 220,
    influence: 380.0,
    creativity: 270.0,
    threat: 430.0,
    ictIndex: 111.0
  },
  {
    id: 7,
    name: "Kieran Trippier",
    team: "Newcastle United",
    position: "DEF",
    price: 6.5,
    totalPoints: 75,
    gwPoints: 2,
    pointsPerGame: 5.8,
    form: 4.9,
    selectedByPercent: 24.0,
    minutes: 990,
    goals: 1,
    assists: 6,
    cleanSheets: 5,
    goalsConceded: 12,
    saves: 0,
    bonus: 8,
    bps: 210,
    influence: 350.0,
    creativity: 360.0,
    threat: 180.0,
    ictIndex: 98.0
  },
  {
    id: 8,
    name: "Ederson",
    team: "Manchester City",
    position: "GK",
    price: 5.5,
    totalPoints: 70,
    gwPoints: 6,
    pointsPerGame: 5.4,
    form: 5.2,
    selectedByPercent: 21.7,
    minutes: 1080,
    goals: 0,
    assists: 0,
    cleanSheets: 6,
    goalsConceded: 10,
    saves: 40,
    bonus: 7,
    bps: 200,
    influence: 300.0,
    creativity: 40.0,
    threat: 5.0,
    ictIndex: 67.0
  }
];

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

  const teams = useMemo(
    () => ["ALL", ...Array.from(new Set(players.map((p) => p.team))).sort()],
    []
  );

  const positions = ["ALL", "GK", "DEF", "MID", "FWD"];

  const filteredPlayers = useMemo(() => {
    let data = [...players];

    // סינון לפי עמדה
    if (positionFilter !== "ALL") {
      data = data.filter((p) => p.position === positionFilter);
    }

    // סינון לפי קבוצה
    if (teamFilter !== "ALL") {
      data = data.filter((p) => p.team === teamFilter);
    }

    // חיפוש חופשי – עובר על כל השדות כמחרוזת
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
  }, [search, positionFilter, teamFilter, sortCol, sortDir]);

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
        טבלת סטטיסטיקות לשחקני Fantasy Premier League, עם חיפוש חופשי, סינון לפי
        עמדה וקבוצה ומיון על כל עמודה. הנתונים בדף הם דמו – המבנה מוכן להרחבה
        לכל שחקני הליגה דרך קובץ JSON.
      </p>

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
          <h2 className="card-title">טבלת שחקנים – דמו</h2>
          <span className="pill">
            {filteredPlayers.length} שחקנים בתצוגה
          </span>
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
    </div>
  );
};

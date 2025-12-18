// C:\pl-stats-react-v2\src\components\Players.jsx
import React, { useMemo, useState } from "react";
import basePlayers from "../data/players.json";

const columns = [
  { key: "name", label: "שחקן", numeric: false },
  { key: "team", label: "קבוצה", numeric: false },
  { key: "position", label: "עמדה", numeric: false },
  { key: "price", label: "מחיר (£m)", numeric: true },
  { key: "totalPoints", label: "נקודות עונה", numeric: true },
  { key: "gwPoints", label: "נק' מחזור אחרון", numeric: true },
  { key: "pointsPerGame", label: "נק' למשחק", numeric: true },
  { key: "form", label: "Form", numeric: true },
  { key: "selectedByPercent", label: 'נבחר ע"י %', numeric: true },
  { key: "minutes", label: "דקות", numeric: true },
  { key: "goals", label: "שערים", numeric: true },
  { key: "assists", label: "בישולים", numeric: true },
  { key: "cleanSheets", label: "שערים נקיים", numeric: true },
  { key: "saves", label: "הצלות", numeric: true },
  { key: "bonus", label: "בונוס", numeric: true },
  { key: "bps", label: "BPS", numeric: true },
  { key: "influence", label: "Influence", numeric: true },
  { key: "creativity", label: "Creativity", numeric: true },
  { key: "threat", label: "Threat", numeric: true },
  { key: "ictIndex", label: "ICT Index", numeric: true }
];

const POS_LABEL = {
  GK: "שוער",
  DEF: "הגנה",
  MID: "קישור",
  FWD: "התקפה"
};

export const Players = () => {
  const [players] = useState(Array.isArray(basePlayers) ? basePlayers : []);
  const [search, setSearch] = useState("");
  const [positionFilter, setPositionFilter] = useState("ALL");
  const [teamFilter, setTeamFilter] = useState("ALL");
  const [sortCol, setSortCol] = useState("totalPoints");
  const [sortDir, setSortDir] = useState("desc");

  const teams = useMemo(() => {
    if (!players || players.length === 0) return ["ALL"];
    return ["ALL", ...Array.from(new Set(players.map((p) => p.team))).sort()];
  }, [players]);

  const positions = ["ALL", "GK", "DEF", "MID", "FWD"];

  const filteredPlayers = useMemo(() => {
    let data = [...players];

    if (positionFilter !== "ALL") data = data.filter((p) => p.position === positionFilter);
    if (teamFilter !== "ALL") data = data.filter((p) => p.team === teamFilter);

    if (search.trim() !== "") {
      const q = search.toLowerCase();
      data = data.filter((p) => Object.values(p).join(" ").toLowerCase().includes(q));
    }

    data.sort((a, b) => {
      const av = a[sortCol];
      const bv = b[sortCol];

      if (typeof av === "number" && typeof bv === "number") {
        return sortDir === "asc" ? av - bv : bv - av;
      }
      const as = String(av ?? "").toLowerCase();
      const bs = String(bv ?? "").toLowerCase();
      if (as < bs) return sortDir === "asc" ? -1 : 1;
      if (as > bs) return sortDir === "asc" ? 1 : -1;
      return 0;
    });

    return data;
  }, [players, search, positionFilter, teamFilter, sortCol, sortDir]);

  const handleSort = (key) => {
    if (sortCol === key) setSortDir((prev) => (prev === "asc" ? "desc" : "asc"));
    else {
      setSortCol(key);
      setSortDir("desc");
    }
  };

  const sortArrow = (key) => (sortCol !== key ? "" : sortDir === "asc" ? " ▲" : " ▼");

  // ---- משבצות מתקדמות ----
  const advancedTiles = useMemo(() => {
    if (!players || players.length === 0) return [];

    const num = (v) => (typeof v === "number" && !Number.isNaN(v) ? v : 0);

    const topBy = (list, key) =>
      list.reduce((best, p) => (num(p[key]) > num(best?.[key]) ? p : best), null);

    const pickTop = (list, scoreFn) =>
      list.reduce(
        (best, p) => {
          const score = scoreFn(p);
          return num(score) > num(best.score) ? { player: p, score } : best;
        },
        { player: null, score: -Infinity }
      );

    const MIN_MINUTES = 450;
    const active = players.filter((p) => num(p.minutes) >= MIN_MINUTES);

    const byPos = (pos) => players.filter((p) => p.position === pos);

    const bestPerPosition = ["GK", "DEF", "MID", "FWD"]
      .map((pos) => {
        const p = topBy(byPos(pos), "totalPoints");
        return p
          ? {
              id: `best-${pos}`,
              title: `הכי טוב ב-${POS_LABEL[pos]}`,
              subtitle: "לפי נקודות עונה",
              player: p,
              value: p.totalPoints,
              unit: "נק'"
            }
          : null;
      })
      .filter(Boolean);

    const extra = [
      {
        id: "gk-saves",
        title: "שוער עם הכי הרבה הצלות",
        subtitle: "מדד שימושי לשוערים",
        player: topBy(byPos("GK"), "saves"),
        valueKey: "saves",
        unit: "הצלות"
      },
      {
        id: "def-cs",
        title: "הגנה עם הכי הרבה שערים נקיים",
        subtitle: "אינדיקציה ליציבות",
        player: topBy(byPos("DEF"), "cleanSheets"),
        valueKey: "cleanSheets",
        unit: "CS"
      },
      {
        id: "mid-assists",
        title: "קשר מוביל בבישולים",
        subtitle: "יוצר מצבים",
        player: topBy(byPos("MID"), "assists"),
        valueKey: "assists",
        unit: "בישולים"
      },
      {
        id: "mid-creativity",
        title: "קשר מוביל ב-Creativity",
        subtitle: "מדד יצירתיות רשמי",
        player: topBy(byPos("MID"), "creativity"),
        valueKey: "creativity",
        unit: "CR"
      },
      {
        id: "fwd-goals",
        title: "חלוץ מוביל בשערים",
        subtitle: "מסיים פעולות",
        player: topBy(byPos("FWD"), "goals"),
        valueKey: "goals",
        unit: "שערים"
      },
      {
        id: "fwd-threat",
        title: "חלוץ מוביל ב-Threat",
        subtitle: "רמת איום",
        player: topBy(byPos("FWD"), "threat"),
        valueKey: "threat",
        unit: "TH"
      },
      {
        id: "overall-ict",
        title: "מוביל כללי ב-ICT Index",
        subtitle: "השפעה·יצירתיות·איום",
        player: topBy(players, "ictIndex"),
        valueKey: "ictIndex",
        unit: "ICT"
      },
      {
        id: "overall-form",
        title: "החם ביותר (Form)",
        subtitle: "ביצועים לאחרונה",
        player: topBy(players, "form"),
        valueKey: "form",
        unit: "Form"
      },

      // --- תובנות חדשות (FPL בלבד) ---
      (() => {
        const best = pickTop(active, (p) => num(p.totalPoints) / Math.max(0.1, num(p.price)));
        if (!best.player) return null;
        return { id: "best-value", title: "תמורה למחיר (Value)", subtitle: `נק' עונה / מחיר (מינ' ${MIN_MINUTES} דק')`, player: best.player, value: best.score, unit: "נק'/£" };
      })(),
      (() => {
        const pool = active.filter((p) => num(p.selectedByPercent) > 0 && num(p.selectedByPercent) <= 5);
        const best = pickTop(pool, (p) => num(p.pointsPerGame) * 2 + num(p.form));
        if (!best.player) return null;
        return { id: "best-differential", title: "דיפרנצ'יאל חם", subtitle: "בעלות ≤ 5% + PPG/Form", player: best.player, value: best.score, unit: "Score" };
      })(),
      (() => {
        const best = pickTop(active, (p) => num(p.minutes) * 0.001 + num(p.pointsPerGame));
        if (!best.player) return null;
        return { id: "minutes-stable", title: "יציב בהרכב", subtitle: "דקות גבוהות + נק' למשחק", player: best.player, value: best.score, unit: "Score" };
      })(),
      (() => {
        const best = pickTop(active, (p) => num(p.bonus));
        if (!best.player) return null;
        return { id: "bonus-magnet", title: "מגנט בונוסים", subtitle: "הכי הרבה Bonus", player: best.player, value: best.score, unit: "Bonus" };
      })(),
      (() => {
        const best = pickTop(active, (p) => num(p.bps));
        if (!best.player) return null;
        return { id: "bps-leader", title: "מלך ה-BPS", subtitle: "בסיס טוב לבונוסים", player: best.player, value: best.score, unit: "BPS" };
      })()
    ].filter(Boolean);

    const extraMapped = extra
      .filter((x) => x.player)
      .map((x) => ({
        id: x.id,
        title: x.title,
        subtitle: x.subtitle,
        player: x.player,
        value: x.valueKey ? num(x.player?.[x.valueKey]) : x.value,
        unit: x.unit
      }));

    return [...bestPerPosition, ...extraMapped].slice(0, 16);
  }, [players]);

  const fmt = (v) => (typeof v === "number" && !Number.isInteger(v) ? v.toFixed(1) : v);

  return (
    <div className="container">
      <header className="page-hero">
        <div className="page-hero-inner">
          <h1 className="page-hero-title">שחקנים &amp; ניקוד</h1>
        </div>
      </header>

      {advancedTiles.length > 0 && (
        <section className="leaders-section">
          <h2 className="section-title">מובילים בנתונים מתקדמים</h2>
          <div className="leaders-grid">
            {advancedTiles.map((t, idx) => (
              <article key={t.id} className={`leader-card ${idx === 0 ? "leader-card--primary" : ""}`}>
                <div className="leader-top">
                  <div className="leader-title">{t.title}</div>
                  <div className="leader-subtitle">{t.subtitle}</div>
                </div>

                <div className="leader-name">{t.player.name}</div>
                <div className="leader-meta">
                  <span className="leader-team">{t.player.team}</span>
                  <span className="leader-pos">{t.player.position}</span>
                </div>

                <div className="leader-value-row">
                  <span className="leader-value">{fmt(t.value)}</span>
                  <span className="leader-unit">{t.unit}</span>
                </div>
              </article>
            ))}
          </div>

          <p className="note-text">
            הערה: כאן מוצגים רק מדדים שקיימים ב־FPL (CS, Saves, Threat, Creativity, ICT, Bonus/BPS וכו׳).
          </p>
        </section>
      )}

      {players.length > 0 && (
        <>
          <div className="filters-row">
            <input
              className="input"
              type="text"
              placeholder="חפש לפי שם, קבוצה או ערך…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select className="select" value={positionFilter} onChange={(e) => setPositionFilter(e.target.value)}>
              {positions.map((pos) => (
                <option key={pos} value={pos}>
                  {pos === "ALL" ? "כל העמדות" : pos === "GK" ? "שוערים" : pos === "DEF" ? "הגנה" : pos === "MID" ? "קישור" : "חלוצים"}
                </option>
              ))}
            </select>

            <select className="select" value={teamFilter} onChange={(e) => setTeamFilter(e.target.value)}>
              {teams.map((t) => (
                <option key={t} value={t}>
                  {t === "ALL" ? "כל הקבוצות" : t}
                </option>
              ))}
            </select>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">טבלת שחקנים – {filteredPlayers.length} בתצוגה</h2>
              <span className="pill">סה״כ במערכת: {players.length}</span>
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
                          style={{ cursor: "pointer", whiteSpace: "nowrap", textAlign: col.numeric ? "left" : "right" }}
                        >
                          {col.label}
                          {sortArrow(col.key)}
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
                        <td>{typeof p.price === "number" ? p.price.toFixed(1) : ""}</td>
                        <td>{p.totalPoints}</td>
                        <td>{p.gwPoints}</td>
                        <td>{typeof p.pointsPerGame === "number" ? p.pointsPerGame.toFixed(1) : ""}</td>
                        <td>{typeof p.form === "number" ? p.form.toFixed(1) : ""}</td>
                        <td>{typeof p.selectedByPercent === "number" ? p.selectedByPercent.toFixed(1) : ""}</td>
                        <td>{p.minutes}</td>
                        <td>{p.goals}</td>
                        <td>{p.assists}</td>
                        <td>{p.cleanSheets}</td>
                        <td>{p.saves}</td>
                        <td>{p.bonus}</td>
                        <td>{p.bps}</td>
                        <td>{typeof p.influence === "number" ? p.influence.toFixed(1) : ""}</td>
                        <td>{typeof p.creativity === "number" ? p.creativity.toFixed(1) : ""}</td>
                        <td>{typeof p.threat === "number" ? p.threat.toFixed(1) : ""}</td>
                        <td>{typeof p.ictIndex === "number" ? p.ictIndex.toFixed(1) : ""}</td>
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

// ✅ תאימות: אם במקום אחר אתה מייבא default
export default Players;

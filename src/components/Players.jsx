import React from "react";

// נתוני דמו בהשראת FPL – מבנה כמו ב-API הרשמי
// הערכים הם Snapshot דמיוני לעונה 25/26 לצורך הצגת הפרויקט.
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

export const Players = () => {
  return (
    <div className="container">
      <h1>שחקנים &amp; ניקוד</h1>
      <p>
        טבלת סטטיסטיקות לשחקני Fantasy Premier League, לפי מבנה העמודות הרשמי של
        FPL (מחיר, נקודות, Form, ICT Index ועוד). הנתונים כאן הם דמו לצורך הצגת
        הפרויקט כפורטפוליו.
      </p>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">טבלת שחקנים – דמו</h2>
          <span className="pill">FPL Snapshot</span>
        </div>

        <div className="card-body">
          <table>
            <thead>
              <tr>
                <th>שחקן</th>
                <th>קבוצה</th>
                <th>עמדה</th>
                <th>מחיר (£m)</th>
                <th>נקודות עונה</th>
                <th>נקודות מחזור אחרון</th>
                <th>נק&apos; למשחק</th>
                <th>Form</th>
                <th>נבחר ע&quot;י %</th>
                <th>דקות</th>
                <th>שערים</th>
                <th>בישולים</th>
                <th>שערים נקיים</th>
                <th>שערים שספג</th>
                <th>הצלות</th>
                <th>בונוס</th>
                <th>BPS</th>
                <th>Influence</th>
                <th>Creativity</th>
                <th>Threat</th>
                <th>ICT Index</th>
              </tr>
            </thead>
            <tbody>
              {players.map((p) => (
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
  );
};

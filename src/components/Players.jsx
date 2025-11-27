import React from "react";

const players = [
  {
    id: 1,
    name: "Erling Haaland",
    team: "Manchester City",
    position: "חלוץ",
    minutes: 1080,
    goals: 12,
    assists: 3,
    xg: 11.8,
    xa: 2.7,
    xgi: 14.5,
    shots: 45,
    keyPasses: 18,
  },
  {
    id: 2,
    name: "Mohamed Salah",
    team: "Liverpool",
    position: "חלוץ",
    minutes: 1060,
    goals: 10,
    assists: 5,
    xg: 9.9,
    xa: 4.1,
    xgi: 14.0,
    shots: 38,
    keyPasses: 22,
  },
  {
    id: 3,
    name: "Bukayo Saka",
    team: "Arsenal",
    position: "קשר",
    minutes: 1020,
    goals: 6,
    assists: 6,
    xg: 5.4,
    xa: 5.8,
    xgi: 11.2,
    shots: 30,
    keyPasses: 28,
  },
];

export const Players = () => {
  if (!players || players.length === 0) {
    return (
      <div className="container">
        <h1>שחקנים &amp; ניקוד</h1>
        <p>כרגע אין נתונים בקובץ השחקנים. בהמשך נטעין כאן נתוני אמת.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>שחקנים &amp; ניקוד</h1>
      <p>
        סטטיסטיקה מתקדמת לשחקנים מרכזיים בפרמייר-ליג – xG, xA, xGI, בעיטות,
        מסירות מפתח ועוד. הנתונים בדף הם דמו לצורך הצגת הפרויקט.
      </p>

      <div className="filters-row">
        <input
          className="input"
          type="text"
          placeholder="חפש לפי שם שחקן או קבוצה…"
        />
        <select className="select">
          <option>כל העמדות</option>
          <option>שוער</option>
          <option>מגן</option>
          <option>קשר</option>
          <option>חלוץ</option>
        </select>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">טבלת שחקנים – דמו</h2>
          <span className="pill">Fantasy / xGI</span>
        </div>
        <div className="card-body">
          <table>
            <thead>
              <tr>
                <th>שחקן</th>
                <th>קבוצה</th>
                <th>עמדה</th>
                <th>דקות</th>
                <th>שערים</th>
                <th>בישולים</th>
                <th>xG</th>
                <th>xA</th>
                <th>xGI</th>
                <th>בעיטות</th>
                <th>מסירות מפתח</th>
              </tr>
            </thead>
            <tbody>
              {players.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.team}</td>
                  <td>{p.position}</td>
                  <td>{p.minutes}</td>
                  <td>{p.goals}</td>
                  <td>{p.assists}</td>
                  <td>{p.xg}</td>
                  <td>{p.xa}</td>
                  <td>{p.xgi}</td>
                  <td>{p.shots}</td>
                  <td>{p.keyPasses}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

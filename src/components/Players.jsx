import React from "react";

export const Players = () => {
  return (
    <div className="container">
      <h1>שחקנים &amp; ניקוד</h1>
      <p>
        טבלת סטטיסטיקות לשחקני Fantasy Premier League, לפי עמודות רשמיות מהמשחק:
        מחיר, נקודות, פורם, בחירה באחוזים ו-ICT Index. הנתונים כאן הם דמו
        והמבנה מותאם ל-FPL נכון ל-27.11.2025.
      </p>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">טבלת שחקנים – מבנה לפי FPL</h2>
          <span className="pill">FPL Official Stats</span>
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
              <tr>
                <td colSpan="21" style={{ textAlign: "center", padding: "1rem" }}>
                  הנתונים בפועל ייטענו כאן בשלב הבא (דמו מתוך FPL API / קובץ
                  JSON).
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

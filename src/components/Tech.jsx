import React from "react";

export const Tech = () => {
  return (
    <div className="container">
      <h1>Projects</h1>
      <p>
        בעמוד זה אני מציג רעיונות לפרויקטים שניהלתי / יכול לנהל סביב כדורגל,
        נתונים ו-AI. הדוגמה הבאה מציגה פרויקט קונספטואלי שאני משתמש בו בראיונות:
        שירות אנליזה למחזור בפרמייר ליג.
      </p>

      {/* כרטיס פרויקט ראשי */}
      <div className="card" style={{ marginTop: "1rem" }}>
        <div className="card-header">
          <h2 className="card-title">
            Premier League Gameweek Insights Service
          </h2>
          <span className="pill">Data / AI / Football</span>
        </div>
        <div className="card-body">
          <p>
            פרויקט שמטרתו לפתח שירות (Web API + UI) שמאפשר לבחור מחזור בליגה
            האנגלית, למשוך נתוני ביצועים של כל השחקנים במחזור, לנתח אותם ולהציג
            תובנות למנהלי פנטזי: מי בולט, באיזה מדד, ומי יכול להיות ה-Next Big
            Pick.
          </p>

          <h3>מטרות הפרויקט</h3>
          <ul>
            <li>משיכת נתוני מחזור של כל השחקנים בפרמייר ליג ממקורות חיצוניים.</li>
            <li>
              נורמליזציה של הנתונים (קבוצות, עמדות, שחקנים) למודל נתונים אחיד.
            </li>
            <li>
              חישוב קטגוריות ביצועים (בעיטות למסגרת, מסירות מפתח, דריבלים,
              נגיעות ברחבה ועוד).
            </li>
            <li>זיהוי שחקנים בולטים בכל קטגוריה והפקת &quot;תובנות מחזור&quot;.</li>
            <li>הצגת התוצאות בטבלה ממוינת לפי נקודות FPL למחזור.</li>
          </ul>

          <h3>ארכיטקטורה ברמת High-Level</h3>
          <ul>
            <li>
              <strong>Data Ingestion:</strong> שירות שמתחבר ל-API של FPL{" "}
              <code>/api/bootstrap-static</code> ו-<code>/api/event/&#123;gw&#125;/live</code>{" "}
              לצורך קבלת נתוני שחקנים, קבוצות ומחזורים (בפורמט JSON).
            </li>
            <li>
              <strong>Processing &amp; Analytics:</strong> שכבה שמחשבת מדדי ביצוע
              (per-90), בונה קטגוריות כמו &quot;Top Shots&quot;,
              &quot;Key Passes&quot;, &quot;Dribbles&quot;, &quot;Box Touches&quot;,
              ויכולה להתחבר בעתיד למקורות נוספים (FBref / Understat) לנתונים
              מתקדמים.
            </li>
            <li>
              <strong>Backend API:</strong> שירות REST שמספק נקודות קצה כמו{" "}
              <code>GET /gameweek/&#123;gw&#125;/players</code> ו-
              <code>GET /gameweek/&#123;gw&#125;/insights</code>.
            </li>
            <li>
              <strong>Frontend:</strong> אפליקציית React (בדומה לאתר זה), שמציגה
              טבלאות, פילטרים, חיפוש ומיון לניתוח המחזור.
            </li>
            <li>
              <strong>DevOps:</strong> CI/CD, הרשאות, ניטור וניהול סודות בסביבת
              ענן (Azure / AWS).
            </li>
          </ul>
        </div>
      </div>

      {/* כרטיס גאנט / לוחות זמנים */}
      <div className="card" style={{ marginTop: "1rem" }}>
        <div className="card-header">
          <h2 className="card-title">Gantt &amp; Timeline</h2>
          <span className="pill">5 שבועות · Cross-Team</span>
        </div>
        <div className="card-body">
          <p>
            חלוקת הפרויקט על פני ציר זמן של חמישה שבועות, תוך התייחסות למחלקות
            השונות: Product, Backend, Data, Frontend, DevOps, QA.
          </p>

          <h3>חלוקת זמן לפי מחלקות</h3>
          <div className="table-wrapper" style={{ marginTop: "0.5rem" }}>
            <table>
              <thead>
                <tr>
                  <th>מחלקה</th>
                  <th>שבוע 1</th>
                  <th>שבוע 2</th>
                  <th>שבוע 3</th>
                  <th>שבוע 4</th>
                  <th>שבוע 5</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Product / PM</td>
                  <td>אפיון PRD, KPIs, מקורות נתונים</td>
                  <td>עדכון דרישות על בסיס POC Backend</td>
                  <td>סקירת תוצאות, אישור KPIs ל-Insights</td>
                  <td>איפיון UX סופי ותצוגת טבלאות</td>
                  <td>תיעוד, README, Diagrams, הכנה להדגמה</td>
                </tr>
                <tr>
                  <td>DevOps</td>
                  <td>הקמת סביבות Dev/Test, CI/CD ראשוני, הרשאות</td>
                  <td>תצורת ריצה ל-Backend (Lambda/Functions/App Service)</td>
                  <td>ניטור בסיסי ל-API, לוגים</td>
                  <td>תמיכה ב-Build &amp; Deploy של ה-Frontend</td>
                  <td>Hardening, ניהול סודות, Production Release</td>
                </tr>
                <tr>
                  <td>Backend</td>
                  <td>POC משיכת נתונים מ-FPL, בדיקת Latency</td>
                  <td>פיתוח Ingestion + Normalization, אחסון מבנה אחיד</td>
                  <td>בניית REST API: /players, /insights</td>
                  <td>שיפורי ביצועים, Cache, טיפול בשגיאות</td>
                  <td>כיוונון אחרון ולוגים מפורטים</td>
                </tr>
                <tr>
                  <td>Data / Analytics</td>
                  <td>הגדרת מודל נתונים וקטגוריות ביצועים</td>
                  <td>חישובי מדדים (Shots, Key Passes, Dribbles, Box Touches)</td>
                  <td>הגדרת Top Performers לכל Metric</td>
                  <td>אימות סטטיסטי מול דוגמאות אמיתיות</td>
                  <td>תיעוד מדדים ומשמעותם למנהלי פנטזי</td>
                </tr>
                <tr>
                  <td>Frontend</td>
                  <td>Setup פרויקט React, בסיס Layout</td>
                  <td>הגדרת מבנה מסכים וקומפוננטות</td>
                  <td>אינטגרציה ראשונית ל-API, טבלת בסיס</td>
                  <td>פיתוח טבלה מתקדמת (פילטרים, חיפוש, מיון, Highlights)</td>
                  <td>שיפורי UX, רספונסיביות ו-Polish אחרון</td>
                </tr>
                <tr>
                  <td>QA</td>
                  <td>הכנת Test Plan ראשוני</td>
                  <td>בדיקות API יחידניות</td>
                  <td>בדיקות אינטגרציה Backend + Data</td>
                  <td>בדיקות E2E על ה-UI</td>
                  <td>Regression מלאה ואישור Go-Live</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: "0.75rem", fontSize: "0.85rem" }}>
            הגאנט מציג לא רק את הלו&quot;ז, אלא גם את שיתוף הפעולה בין המחלקות:
            Product מגדיר דרישות ותעדוף, Backend ו-Data בונים את מנוע
            ה-Insights, Frontend מייצר חוויית משתמש, DevOps אחראי על סביבות,
            הרשאות וניטור, ו-QA מבטיח יציבות לפני עלייה לאוויר.
          </p>
        </div>
      </div>
    </div>
  );
};

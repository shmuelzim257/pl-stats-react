import React from "react";

export const Tech = () => {
  return (
    <div className="container">
      <h1>Projects</h1>
      <p>
        בעמוד זה אני מציג רעיונות וארכיטקטורות של פרויקטים שאני יכול לנהל סביב
        כדורגל, נתונים ו-AI. למטה מופיעים פרויקטים שנבנו כקונספטים מקצועיים
        לפורטפוליו וראיונות.
      </p>

      {/* סקירת פרויקטים – מלבנים קצרים */}
      <h2 style={{ marginTop: "1.5rem" }}>Project Overview</h2>

      <div className="card" style={{ marginTop: "0.75rem" }}>
        <div className="card-header">
          <h2 className="card-title">
            <a href="#project1" style={{ color: "#e5e7eb", textDecoration: "none" }}>
              1. Premier League Gameweek Insights Service
            </a>
          </h2>
          <span className="pill">Data / API / Fantasy</span>
        </div>
        <div className="card-body">
          <p>
            שירות אנליזה למחזורי פרמייר ליג, שמושך נתונים מ-API רשמי של FPL,
            מאחד אותם למודל נתונים אחיד, ומפיק טבלה חכמה שמציגה מי היו השחקנים
            הבולטים במחזור לפי מדדי ביצוע (שערים, בישולים, minutes, BPS, ICT
            ועוד).
          </p>
          <p style={{ fontSize: "0.9rem", color: "#9ca3af" }}>
            לחיצה על שם הפרויקט מגלגלת מטה לפירוט מלא, כולל ארכיטקטורה וגאנט.
          </p>
        </div>
      </div>

      {/* מלבן לפרויקט 2 */}
      <div className="card" style={{ marginTop: "0.75rem" }}>
        <div className="card-header">
          <h2 className="card-title">
            <a href="#project2" style={{ color: "#e5e7eb", textDecoration: "none" }}>
              2. Match Report AI Extractor
            </a>
          </h2>
          <span className="pill">OCR / AI / Football</span>
        </div>
        <div className="card-body">
          <p>
            מערכת OCR + AI שמקבלת דו&quot;חות משחק, PDFים ותמונות (סקאוטינג,
            כתבות, דפי משחק), מחלצת מהם טקסט ונתונים, ומתרגמת אותם לתמונה
            אנליטית על ביצועי השחקנים – כולל דריבלים, מסירות מפתח, התקפות מאגפים
            ותובנות שאינן קיימות ב-API הרשמי של FPL.
          </p>
          <p style={{ fontSize: "0.9rem", color: "#9ca3af" }}>
            לחיצה על שם הפרויקט מגלגלת מטה לפירוט מלא על הזרימה, הטכנולוגיות
            והתועלת למנהלי פנטזי ואנליסטים.
          </p>
        </div>
      </div>

      {/* פירוט פרויקט 1 */}
      <div id="project1" className="card" style={{ marginTop: "2rem" }}>
        <div className="card-header">
          <h2 className="card-title">Premier League Gameweek Insights Service</h2>
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

      {/* גאנט פרויקט 1 */}
      <div className="card" style={{ marginTop: "1rem" }}>
        <div className="card-header">
          <h2 className="card-title">Gantt &amp; Timeline – Project 1</h2>
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
        </div>
      </div>

      {/* פירוט פרויקט 2 */}
      <div id="project2" className="card" style={{ marginTop: "2rem" }}>
        <div className="card-header">
          <h2 className="card-title">Match Report AI Extractor</h2>
          <span className="pill">OCR / NLP / Football</span>
        </div>
        <div className="card-body">
          <p>
            מערכת חכמה שמשתמשת ב-OCR ובמודלי שפה (LLM) כדי להמיר דו&quot;חות
            משחק, PDFים ותמונות סקאוטינג לנתונים מובנים ותובנות עבור פנטזי
            ואנליסטים. המערכת שואפת לחלץ מידע שלא מופיע ב-API של FPL, אלא נמצא
            בדו&quot;חות מקצועיים וכתבות טקטיות.
          </p>

          <h3>רעיון כללי</h3>
          <ul>
            <li>המשתמש מעלה דו&quot;ח משחק (PDF / תמונה / סריקה).</li>
            <li>שכבת OCR מחלצת טקסט, טבלאות וקטעי נתונים מהקובץ.</li>
            <li>
              מודל LLM מבצע ניתוח טקסטואלי: זיהוי שחקנים, אירועים, מדדי ביצוע
              ותיאור טקטי.
            </li>
            <li>
              המערכת ממירה את המידע למבנה JSON אחיד לכל שחקן (דריבלים, מסירות
              מפתח, התקפות מאגפים, נגיעות ברחבה, הערות AI).
            </li>
            <li>
              בתצוגת ה-UI ניתן לראות טבלה, תובנות, ו-Hotspots לשחקנים שבלטו מעבר
              למה שמופיע בניקוד FPL בלבד.
            </li>
          </ul>

          <h3>דוגמה למבנה נתונים</h3>
          <pre
            style={{
              background: "#020617",
              padding: "0.75rem",
              borderRadius: "0.5rem",
              overflowX: "auto",
              fontSize: "0.8rem"
            }}
          >
{`{
  "player": "Bukayo Saka",
  "team": "Arsenal",
  "key_passes": 4,
  "dribbles_success": 5,
  "dangerous_attacks_right": 7,
  "touches_in_box": 9,
  "ai_comment": "Saka created the most chances and dominated the right flank."
}`}
          </pre>

          <h3>ארכיטקטורה ברמת High-Level</h3>
          <ul>
            <li>
              <strong>Upload &amp; Storage:</strong> העלאת קבצים דרך ה-WebApp
              ושמירתם ב-Blob Storage / S3.
            </li>
            <li>
              <strong>OCR Layer:</strong> שימוש במנועי OCR (ABBYY / Azure Vision /
              Google Vision) לחילוץ טקסט וטבלאות.
            </li>
            <li>
              <strong>LLM Analysis:</strong> קריאה ל-LLM (OpenAI / Bedrock / Azure
              OpenAI) לניתוח הטקסט, זיהוי שחקנים, אירועים ומדדי ביצוע.
            </li>
            <li>
              <strong>Normalization &amp; Insights:</strong> המרת הנתונים למודל
              אחיד לשחקן, חישוב מדדי ביצוע ויצירת תובנות (Top Creators, Top
              Dribblers וכו&apos;).
            </li>
            <li>
              <strong>Frontend:</strong> אפליקציית React המציגה את הטבלה, תובנות
              ותצוגות מתקדמות (לדוגמה: מדדי &quot;Under the Radar&quot; שלא
              משתקפים רק בניקוד FPL).
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

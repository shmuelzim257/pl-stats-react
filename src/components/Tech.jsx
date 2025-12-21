import React, { useState } from "react";

export const Tech = () => {
 const [activeTab, setActiveTab] = useState("work");
 return (
<div className="container">
  <h1>Projects</h1>

  {/* Tabs */}
  <div className="projects-tabs">
    <button
      className={`tab-button ${activeTab === "work" ? "active" : ""}`}
      onClick={() => setActiveTab("work")}
    >
      Work Projects
    </button>

    <button
      className={`tab-button ${activeTab === "vision" ? "active" : ""}`}
      onClick={() => setActiveTab("vision")}
    >
      Vision Projects
    </button>
  </div>

  {/* Tab description */}
  <p className="tab-description">
    {activeTab === "work"
      ? "פרויקטים שבוצעו ונוהלו בפועל בסביבות ארגוניות ופרודקשן."
      : "פרויקטים רעיוניים ויוזמות עתידיות בתחום הכדורגל."}
  </p>

{activeTab === "vision" && (
  <>
      {/* === פרויקט 1 – Gameweek Insights === */}
      <div className="card" style={{ marginTop: "1rem" }}>
        <div className="card-header">
          <h2 className="card-title">
            Premier League Gameweek Insights Service
          </h2>
          <span className="pill">Data / AI / Football</span>
        </div>
        <div className="card-body">
          <p>
            שירות (Web API + UI) שמאפשר לבחור מחזור בליגה האנגלית, למשוך נתוני
            ביצועים של כל השחקנים במחזור, לנתח אותם ולהציג תובנות למנהלי פנטזי:
            מי בולט, באיזה מדד, ומי יכול להיות ה-Next Big Pick.
          </p>

          <h3>מטרות הפרויקט</h3>
          <ul>
            <li>משיכת נתוני מחזור של כל השחקנים בפרמייר ליג ממקורות חיצוניים.</li>
            <li>
              נורמליזציה של הנתונים (קבוצות, עמדות, שחקנים) למודל נתונים אחיד.
            </li>
            <li>
              חישוב קטגוריות ביצועים (בעיטות למסגרת, מסירות מפתח, דריבלים,
              נגיעות ברחבה, xG/xA/xGI ועוד).
            </li>
            <li>זיהוי שחקנים בולטים בכל קטגוריה והפקת &quot;תובנות מחזור&quot;.</li>
            <li>הצגת התוצאות בטבלה ממוינת לפי נקודות FPL למחזור.</li>
          </ul>

          <h3>ארכיטקטורה ברמת High-Level</h3>
          <ul>
            <li>
              <strong>Data Ingestion:</strong> שירות שמתחבר ל-API של FPL{" "}
              <code>/api/bootstrap-static</code> ו-
              <code>/api/event/&#123;gw&#125;/live</code> לצורך קבלת נתוני
              שחקנים, קבוצות ומחזורים (בפורמט JSON).
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

          <h3>Flow כללי</h3>
          <ol>
            <li>Product מגדיר מחזורי שימוש: ניתוח מחזור אחד, השוואת מחזורים וכו&apos;.</li>
            <li>Backend/DevOps מקימים שירות משיכת נתונים מה-FPL ושומרים Snapshot.</li>
            <li>Data/Analytics מגדירים את המדדים והקטגוריות (xG, Key Passes וכו&apos;).</li>
            <li>Frontend מייצר UI שמאפשר בחירת מחזור, פילטרים ותצוגת תובנות.</li>
            <li>QA בודקים דיוק נתונים מול מקורות רשמיים וסטטיסטיקות ידועות.</li>
            <li>המערכת רצה כ-Service מתמשך, מתעדכנת כל מחזור אוטומטית.</li>
          </ol>
        </div>
      </div>

      {/* גאנט עבור פרויקט 1 */}
      <div className="card" style={{ marginTop: "1rem" }}>
        <div className="card-header">
          <h3 className="card-title">Gantt &amp; Timeline – Gameweek Insights</h3>
          <span className="pill">5 שבועות · Cross-Team</span>
        </div>
        <div className="card-body">
          <p>
            חלוקת פרויקט ה-Premier League Gameweek Insights Service על פני ציר זמן
            של חמישה שבועות, תוך התייחסות למחלקות השונות: Product, Backend,
            Data, Frontend, DevOps, QA.
          </p>

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
  </>
)}
{activeTab === "work" && (
  <>
      <hr className="project-separator" />

      {/* === פרויקט 2 – חשבוניות + סיכומי ביקור === */}
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">
            AI Invoice &amp; Visit Summary Extraction
          </h2>
          <span className="pill">OCR / Healthcare / Automation</span>
        </div>
        <div className="card-body">
          <p>
            פרויקט שמטרתו לטפל בחשבוניות עסקיות/רפואיות ובסיכומי ביקור שמגיעים
            יחד (למשל רופא או בעל מקצוע), לחלץ מהם נתונים, לבצע הצלבות ולהשלים
            מידע חסר באופן אוטומטי.
          </p>

          <h3>מטרות הפרויקט</h3>
          <ul>
            <li>קליטה אוטומטית של מסמכים סרוקים או מצולמים (חשבונית + סיכום ביקור).</li>
            <li>חילוץ שדות מפתח (ספק, שירות, תאריכים, עלויות, קוד טיפול וכו').</li>
            <li>הצלבה בין החשבונית לסיכום הביקור כדי לזהות חוסרים או אי-התאמות.</li>
            <li>העשרת נתונים מתוך Master Data פנימי (לקוחות, רופאים, מרפאות).</li>
            <li>הפקת פלט מובנה למערכות פיננסיות / ERP / CRM.</li>
          </ul>

          <h3>ארכיטקטורה ברמת High-Level</h3>
          <ul>
            <li>
              <strong>Ingestion:</strong> תור מסמכים (Queue/Blob), Trigger לכל
              מסמך חדש.
            </li>
            <li>
              <strong>OCR:</strong> מנוע OCR (ABBYY / Azure Form Recognizer) לחילוץ
              בסיסי של טקסט ואזורים.
            </li>
            <li>
              <strong>LLM / NLP:</strong> מודל לשוני שמזהה ישויות (רופא, מטופל,
              פרוצדורה, סכומים) וממפה אותן לשדות מובנים.
            </li>
            <li>
              <strong>Validation &amp; Enrichment:</strong> הצלבת השדות מול
              מערכות ארגוניות (Billing / EMR).
            </li>
            <li>
              <strong>Output:</strong> כתיבה לטבלאות נתונים / API פנימי / מערכת
              חיוב.
            </li>
          </ul>

          <h3>Flow כללי</h3>
          <ol>
            <li>לקוח או גורם רפואי מעלה חשבונית וסיכום ביקור למערכת.</li>
            <li>Ingestion Service שומר את המסמכים ב-Blob/Storage ומכניס לתור.</li>
            <li>OCR Service קורא את המסמכים ומחזיר טקסט + אזורים.</li>
            <li>LLM/NLP ממפה את הנתונים לשדות מובנים ומזהה חוסרים/אי-התאמות.</li>
            <li>Data/Validation Service מצלב את הנתונים מול מערכות פנימיות.</li>
            <li>התוצר נכתב ל-ERP/CRM ונשלח דיווח/התראה לגורמים הרלוונטיים.</li>
          </ol>
        </div>
      </div>

      {/* גאנט עבור פרויקט 2 */}
      <div className="card" style={{ marginTop: "1rem" }}>
        <div className="card-header">
          <h3 className="card-title">Gantt – Invoice &amp; Visit Extraction</h3>
          <span className="pill">5 שבועות</span>
        </div>
        <div className="card-body">
          <div className="table-wrapper">
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
                  <td>אפיון תהליכים מסמך → מערכת</td>
                  <td>הגדרת שדות חובה ותסריטי Edge</td>
                  <td>עדכון דרישות על בסיס PoC</td>
                  <td>הכנת KPIs מדידה (זמן טיפול, דיוק)</td>
                  <td>סיכום Lessons Learned והרחבות</td>
                </tr>
                <tr>
                  <td>DevOps</td>
                  <td>הקמת תשתית Storage ו-Queue</td>
                  <td>הגדרת Secrets לשירותי OCR/LLM</td>
                  <td>ניטור עומסים ותקלות</td>
                  <td>הקשחת הרשאות וגישה למסמכים</td>
                  <td>Production Hardening</td>
                </tr>
                <tr>
                  <td>Backend</td>
                  <td>POC ל-Ingestion + OCR</td>
                  <td>בניית Pipeline מלא: Ingestion → OCR → NLP</td>
                  <td>API לכתיבה ל-ERP/CRM</td>
                  <td>אופטימיזציה ובקרת שגיאות</td>
                  <td>שיפורים לפי Feedback</td>
                </tr>
                <tr>
                  <td>Data / Analytics</td>
                  <td>הגדרת מודל נתונים ו-Mapping</td>
                  <td>אימות דיוק OCR ו-NLP</td>
                  <td>Fine-tuning לשיפור זיהוי שדות</td>
                  <td>איסוף מדדים לאורך זמן</td>
                  <td>ניתוח תוצאות והצעות שיפור</td>
                </tr>
                <tr>
                  <td>Frontend</td>
                  <td>מסך העלאת מסמכים בסיסי</td>
                  <td>תצוגת סטטוס לעיבוד המסמך</td>
                  <td>מסך תוצאות + עריכה ידנית</td>
                  <td>שיפור UX למשתמשים חוזרים</td>
                  <td>פינישים ועיצוב סופי</td>
                </tr>
                <tr>
                  <td>QA</td>
                  <td>Test Plan ותרחישי בדיקה</td>
                  <td>בדיקות OCR על דוגמאות אמיתיות</td>
                  <td>בדיקות End-to-End</td>
                  <td>בדיקות ביצועים ועומס</td>
                  <td>Regression וחתימה ל-Go Live</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <hr className="project-separator" />

      {/* === פרויקט 3 – ניתוח מיילים ודוחות === */}
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">
            AI Email &amp; Report Triage Assistant
          </h2>
          <span className="pill">NLP / Routing / Productivity</span>
        </div>
        <div className="card-body">
          <p>
            פרויקט שמטפל במיילים ארוכים ושרשורים מורכבים, לעיתים בצירוף דוחות
            כבדים, ומחלץ מהם תובנות: לאיזו מחלקה זה שייך (למשל חא&quot;ט או
            פנסיה), אילו משימות נדרשות, ומה רמת הדחיפות.
          </p>

          <h3>מטרות הפרויקט</h3>
          <ul>
            <li>קריאה אוטומטית של שרשורי מייל ודוחות מצורפים (PDF / Word / Excel).</li>
            <li>סיווג לפי מחלקה / תחום (חא&quot;ט, פנסיה, שירות, תביעות וכו').</li>
            <li>חילוץ משימות, Deadlines וגורמים אחראיים מתוך הטקסט.</li>
            <li>סיכום קצר למשתמש – TL;DR של השרשור והדוח.</li>
            <li>חיבור למערכת ניהול משימות / CRM כדי לפתוח קריאות אוטומטיות.</li>
          </ul>

          <h3>ארכיטקטורה ברמת High-Level</h3>
          <ul>
            <li>
              <strong>Connectors:</strong> חיבור ל-Mailbox / 365 / Gmail / DMS.
            </li>
            <li>
              <strong>Document Parsing:</strong> המרה של קבצים מצורפים לטקסט,
              כולל OCR לדוחות סרוקים.
            </li>
            <li>
              <strong>LLM Orchestration:</strong> מודל לשוני שמבצע סיווג, סיכום,
              והפקת משימות.
            </li>
            <li>
              <strong>Routing Engine:</strong> החלטה לאיזו מחלקה/Queue המקרה
              שייך.
            </li>
            <li>
              <strong>Integration:</strong> יצירת Tickets במערכות תמיכה / CRM,
              ושליחת סיכום למשתמשים הרלוונטיים.
            </li>
          </ul>

          <h3>Flow כללי</h3>
          <ol>
            <li>המערכת מאזינה למיילים נכנסים או מופעלת On-Demand על שרשור קיים.</li>
            <li>Parsing Engine קורא את גוף המייל והקבצים המצורפים.</li>
            <li>LLM מסכם את השרשור, מזהה נושאים, משימות ודחיפות.</li>
            <li>Routing Engine מחליט לאיזו מחלקה/צוות להפנות את המקרה.</li>
            <li>נפתח Ticket במערכת CRM/Support עם סיכום, משימות ונתונים נלווים.</li>
            <li>נשלח עדכון יזום לגורמים רלוונטיים על משימות חדשות/דחופות.</li>
          </ol>
        </div>
      </div>

      {/* גאנט עבור פרויקט 3 */}
      <div className="card" style={{ marginTop: "1rem" }}>
        <div className="card-header">
          <h3 className="card-title">Gantt – Email &amp; Report Triage</h3>
          <span className="pill">5 שבועות</span>
        </div>
        <div className="card-body">
          <div className="table-wrapper">
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
                  <td>אפיון תרחישי מייל ודוחות</td>
                  <td>הגדרת כללי סיווג ו-Routing</td>
                  <td>עדכון דרישות לפי PoC</td>
                  <td>הגדרת KPIs (זמן טיפול/חיסכון)</td>
                  <td>סיכום והרחבת Use Cases</td>
                </tr>
                <tr>
                  <td>DevOps</td>
                  <td>הקמת חיבור ל-Mailbox / 365</td>
                  <td>ניהול הרשאות ו-Secrets</td>
                  <td>ניטור תקלות ב-Connectors</td>
                  <td>אופטימיזציית ביצועים</td>
                  <td>הקשחת Production</td>
                </tr>
                <tr>
                  <td>Backend</td>
                  <td>POC לקריאת מיילים וAttachments</td>
                  <td>API פנימי לסיכום וסיווג</td>
                  <td>חיבור ל-CRM / Ticketing</td>
                  <td>שיפורי יציבות וטיפול בשגיאות</td>
                  <td>פיתוח הרחבות לפי צרכי משתמשים</td>
                </tr>
                <tr>
                  <td>Data / Analytics</td>
                  <td>הגדרת קטגוריות סיווג</td>
                  <td>Fine-tuning למודלי סיווג</td>
                  <td>ניתוח תוצאות סיווג ראשוני</td>
                  <td>טיוב המודלים לפי פידבק</td>
                  <td>ניתוח ROI בפרויקט</td>
                </tr>
                <tr>
                  <td>Frontend</td>
                  <td>מסך תצוגת Inbox/Queue</td>
                  <td>UI לסיכומים ומשימות</td>
                  <td>הוספת פילטרים ודוחות</td>
                  <td>שיפורי UX ונגישות</td>
                  <td>פוליש סופי ו-Branding</td>
                </tr>
                <tr>
                  <td>QA</td>
                  <td>Test Plan לתרחישי מיילים</td>
                  <td>בדיקות סיווג ודחיפות</td>
                  <td>בדיקות אינטגרציה Mail → CRM</td>
                  <td>בדיקות עומס וריבוי מיילים</td>
                  <td>Regression מלאה</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <hr className="project-separator" />

      {/* === פרויקט 4 – אימות רכב מתמונות === */}
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">
            Intelligent Image-Based Vehicle Verification
          </h2>
          <span className="pill">Computer Vision / Fraud Detection</span>
        </div>
        <div className="card-body">
          <p>
            פרויקט שמטרתו לייעל תהליכים לאחר תאונת רכב: המשתמש מעלה תמונות של
            הרכב הפגוע, והמערכת מאמתת את הדגם, לוחית הרישוי, אזור הנזק ומחפשת
            סימנים לחשד לזיוף או סתירה בנתונים.
          </p>

          <h3>מטרות הפרויקט</h3>
          <ul>
            <li>זיהוי אוטומטי של רכב (Make/Model/Color) מתוך תמונות.</li>
            <li>קריאת לוחית רישוי והשוואה למידע במערכת (OCR ללוחיות).</li>
            <li>זיהוי אזורי נזק והשוואתם לדיווח הלקוח.</li>
            <li>איתור חריגות (למשל תמונות ממכונית אחרת / נזק שלא תואם את האירוע).</li>
            <li>האצת תהליכי טיפול בתביעה והפחתת ניסיונות הונאה.</li>
          </ul>

          <h3>ארכיטקטורה ברמת High-Level</h3>
          <ul>
            <li>
              <strong>Image Ingestion:</strong> העלאת תמונות דרך פורטל / אפליקציה
              ניידת.
            </li>
            <li>
              <strong>Computer Vision:</strong> מודלים לזיהוי רכב, לוחית רישוי,
              וזיהוי אזורי נזק (Damage Detection).
            </li>
            <li>
              <strong>Business Rules &amp; Scoring:</strong> מנוע שמדרג חשד
              להונאה על בסיס ממצאים.
            </li>
            <li>
              <strong>Integration:</strong> חיבור למערכת תביעות / CRM להצגת
              הממצאים לסוקר או לחוקר.</li>
          </ul>

          <h3>Flow כללי</h3>
          <ol>
            <li>מבוטח מעלה תמונות רכב פגוע דרך פורטל או אפליקציה.</li>
            <li>Image Service שומר את התמונות ומכין אותן לעיבוד.</li>
            <li>מודל Computer Vision מזהה רכב, לוחית, ואזורי נזק.</li>
            <li>Business Rules Engine מחשב ציון חשד להונאה.</li>
            <li>התוצאות נשלחות למערכת תביעות יחד עם המלצה (OK / Manual Review).</li>
            <li>סוקר/חוקר רואה את התוצאות ומקבל החלטה מושכלת בזמן קצר יותר.</li>
          </ol>
        </div>
      </div>

      {/* גאנט עבור פרויקט 4 */}
      <div className="card" style={{ marginTop: "1rem" }}>
        <div className="card-header">
          <h3 className="card-title">Gantt – Vehicle Verification</h3>
          <span className="pill">5 שבועות</span>
        </div>
        <div className="card-body">
          <div className="table-wrapper">
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
                  <td>אפיון תהליך תביעה + תמונות</td>
                  <td>הגדרת תרחישי הונאה עיקריים</td>
                  <td>אישור KPIs (זמן, אחוז הונאה)</td>
                  <td>שיתוף פיילוט עם צוות תביעות</td>
                  <td>סיכום פיילוט והמשך תמיכה</td>
                </tr>
                <tr>
                  <td>DevOps</td>
                  <td>Infra לאחסון תמונות (S3/Blob)</td>
                  <td>הגדרת GPU/Compute ל-CV</td>
                  <td>ניטור שימוש ומשאבים</td>
                  <td>Scaling לפי עומסים</td>
                  <td>Production Hardening</td>
                </tr>
                <tr>
                  <td>Backend / CV</td>
                  <td>POC לזיהוי לוחית ורכב</td>
                  <td>מודל Damage Detection בסיסי</td>
                  <td>אינטגרציה עם Business Rules</td>
                  <td>כיוונון מודלים ואיכות זיהוי</td>
                  <td>שיפורים לפי נתוני אמת</td>
                </tr>
                <tr>
                  <td>Data / Analytics</td>
                  <td>איסוף נתוני עבר לצורך אימון</td>
                  <td>ניתוח false positives/negatives</td>
                  <td>שיפור ספים ו-Thresholds</td>
                  <td>מעקב אחר מדדי הצלחה</td>
                  <td>דו&quot;ח ROI לפרויקט</td>
                </tr>
                <tr>
                  <td>Frontend</td>
                  <td>מסך העלאת תמונות בסיסי</td>
                  <td>UI להצגת תוצאות + ציון חשד</td>
                  <td>הוספת הסברים למשתמש/סוקר</td>
                  <td>שיפור חוויית משתמש</td>
                  <td>פוליש ועיצוב אחיד</td>
                </tr>
                <tr>
                  <td>QA</td>
                  <td>Test Plan לתרחישי תביעה</td>
                  <td>בדיקות CV על סט דוגמאות</td>
                  <td>בדיקות מערכת שלמות</td>
                  <td>בדיקות עומס תמונות</td>
                  <td>Regression ו-Go Live</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <hr className="project-separator" />

      {/* === פרויקט 5 – PM Copilot Agent === */}
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">PM Copilot Agent</h2>
          <span className="pill">Copilot / OpenAI / Automation</span>
        </div>
        <div className="card-body">
          <p>
            סוכן חכם למנהלי פרויקטים, מבוסס Copilot / OpenAI, שמתחבר למיילים,
            לוחות משימות (Jira / Monday / Azure DevOps), מסמכי סטטוס ויומני ישיבות,
            ומספק תמונת מצב עדכנית, תיעוד אוטומטי ותזכורות. הסוכן יכול לפעול גם
            בצורה מתוזמנת דרך Windows Task Scheduler או Trigger ענני (Timer),
            כדי להריץ סיכומים ודוחות באופן קבוע.
          </p>

          <h3>מטרות הפרויקט</h3>
          <ul>
            <li>מתן תמונת מצב מלאה על סטטוס פרויקטים בשאלה אחת.</li>
            <li>הפקת סיכומי יומיים/שבועיים על התקדמות משימות.</li>
            <li>זיהוי עיכובים, חסמים ומשימות ללא אחראי/Deadline.</li>
            <li>שליחת תזכורות אוטומטיות לבעלי משימה.</li>
            <li>אינטגרציה עם מתזמן (Windows Task Scheduler / Timer Trigger) להפעלה קבועה.</li>
          </ul>

          <h3>ארכיטקטורה ברמת High-Level</h3>
          <ul>
            <li>
              <strong>Connectors:</strong> חיבור ל-Outlook/Exchange, Jira/Monday,
              OneDrive/SharePoint (מסמכי סטטוס), Teams/Chat Log.
            </li>
            <li>
              <strong>Agent Logic:</strong> שכבה שמבצעת איסוף נתונים, שאילתות
              רקע, והרצת פרומפטים מול LLM (OpenAI / Azure OpenAI).
            </li>
            <li>
              <strong>Scheduling:</strong> הפעלה יזומה ע&quot;י המשתמש + תזמון קבוע:
              Windows Task Scheduler על Agent מקומי/שרת, או Timer Trigger בענן
              (Azure Functions / Logic Apps).
            </li>
            <li>
              <strong>Output Channels:</strong> מייל סיכום, הודעת Teams, או דף
              web שמציג Dashboard של סטטוס ו-Risks.
            </li>
          </ul>

          <h3>Flow כללי</h3>
          <ol>
            <li>Product/PM מגדיר אילו מערכות צריך לחבר (Mail, Boards, Docs).</li>
            <li>DevOps מגדיר חיבורים מאובטחים (Secrets, OAuth, הרשאות).</li>
            <li>Agent Service אוסף נתונים ממיילים, לוחות משימות ומסמכים.</li>
            <li>LLM מנתח את הנתונים: סטטוס, סיכומים, משימות קריטיות ועיכובים.</li>
            <li>הסוכן מייצר סיכום מובנה: מה בוצע, מה תקוע, מי אחראי, מה הדחוף.</li>
            <li>
              Windows Task Scheduler (או Trigger בענן) מפעיל את הסוכן פעם ביום/שבוע,
              ושולח את הסיכום למנהל הפרויקט במייל או ב-Teams.
            </li>
          </ol>
        </div>
      </div>

      {/* גאנט עבור פרויקט 5 */}
      <div className="card" style={{ marginTop: "1rem", marginBottom: "1.5rem" }}>
        <div className="card-header">
          <h3 className="card-title">Gantt – PM Copilot Agent</h3>
          <span className="pill">5 שבועות</span>
        </div>
        <div className="card-body">
          <div className="table-wrapper">
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
                  <td>אפיון Use Cases (שאלות נפוצות, סוגי סיכומים)</td>
                  <td>הגדרת חיבורי מערכות (Mail, Boards, Docs)</td>
                  <td>אימות תוצאות ראשוניות מול מנהלי פרויקטים</td>
                  <td>הגדרת KPIs (זמן חיסכון, שקיפות)</td>
                  <td>הטמעה והדרכה למנהלים</td>
                </tr>
                <tr>
                  <td>DevOps</td>
                  <td>הקמת סביבה לסוכן (שרת/Function)</td>
                  <td>הגדרת הרשאות ו-Secrets ל-API חיצוניים</td>
                  <td>הגדרת Windows Task Scheduler / Timer Trigger</td>
                  <td>ניטור תקלות והצלחות ריצה</td>
                  <td>אופטימיזציה ליציבות וסקיילינג</td>
                </tr>
                <tr>
                  <td>Backend / Integration</td>
                  <td>POC חיבור ל-Mail ולמערכת משימות</td>
                  <td>בניית שכבת איסוף ו-Normalization</td>
                  <td>ממשק ל-LLM (פרומפטים, הקשרים)</td>
                  <td>שיפור טיפול בשגיאות ותקלות חיבור</td>
                  <td>הרחבת תמיכה למערכות נוספות</td>
                </tr>
                <tr>
                  <td>Data / Analytics</td>
                  <td>הגדרת מבנה לסיכום ו-Metrics (Risk, Delay)</td>
                  <td>Fine-tuning של פרומפטים לסיכום ולניתוח סיכונים</td>
                  <td>ניתוח איכות הפלט מול מנהלי פרויקטים</td>
                  <td>טיוב מודלים/פרומפטים לפי פידבק</td>
                  <td>מדידת ROI והצגת תוצאות הנהלה</td>
                </tr>
                <tr>
                  <td>Frontend / UX</td>
                  <td>אם קיים UI – אפיון Dashboard סטטוס</td>
                  <td>פיתוח מסך סיכומים ו-Risks</td>
                  <td>הוספת פילטרים לפי פרויקט/טווח תאריכים</td>
                  <td>שיפור UX להצגת מידע רב בצורה תמציתית</td>
                  <td>פוליש ועיצוב סופי</td>
                </tr>
                <tr>
                  <td>QA</td>
                  <td>Test Plan לתרחישי סיכום וטריגרים</td>
                  <td>בדיקות ריצה מתוזמנת + ידנית</td>
                  <td>בדיקות נכונות פלט (Sanity Checks)</td>
                  <td>בדיקות עומס (הרבה פרויקטים/משתמשים)</td>
                  <td>Regression והכנה ל-Go Live</td>
                </tr>
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

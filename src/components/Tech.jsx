import React from "react";

const Tech = () => {
  return (
    <section>
      <h1 className="page-title">Tech / Architecture</h1>
      <p className="section-subtitle">
        עמוד זה מיועד למראיינים / קוראי קוד שרוצים להבין איך הפרויקט בנוי מתחת למכסה המנוע,
        ואיך ניתן להרחיב אותו בעתיד.
      </p>

      <div className="cards-grid">
        <div className="card">
          <div className="card-header">
            <h2>Stack</h2>
            <span className="badge">Frontend</span>
          </div>
          <ul className="section-subtitle" style={{ paddingInlineStart: "1.2rem" }}>
            <li>React 18 עם פונקציונל קומפוננטות ו-Hooks (useState, useMemo, useEffect).</li>
            <li>Vite כ-Bundler & Dev Server – Build מהיר וקל לפריסה סטטית.</li>
            <li>CSS נקי ורספונסיבי – בלי Framework כדי לשמור על קוד קריא.</li>
          </ul>
        </div>

        <div className="card">
          <div className="card-header">
            <h2>Data Model</h2>
            <span className="badge">JSON</span>
          </div>
          <p className="section-subtitle">
            כל הנתונים (משחקים, חדשות, שחקנים, קבוצות) מגיעים מקבצי JSON סטטיים בתוך הפרויקט.
            זה מאפשר:
          </p>
          <ul className="section-subtitle" style={{ paddingInlineStart: "1.2rem" }}>
            <li>עדכון ידני מהיר לפני ראיונות / דמו.</li>
            <li>הפרדה ברורה בין שכבת נתונים לשכבת UI.</li>
            <li>יכולת להחליף את מקור הנתונים ל-API אמיתי בעתיד בלי לשבור את ה-UI.</li>
          </ul>
          <pre className="code-block">
{`src/data/fixtures.json
src/data/players.json
src/data/news.json
src/data/teams.json`}
          </pre>
        </div>

        <div className="card">
          <div className="card-header">
            <h2>Architecture</h2>
            <span className="badge">SPA</span>
          </div>
          <p className="section-subtitle">
            האפליקציה היא Single Page Application פשוטה:
          </p>
          <ul className="section-subtitle" style={{ paddingInlineStart: "1.2rem" }}>
            <li>ניהול ניווט ב-State (בלי Router) – מספיק לפרויקט קטן.</li>
            <li>כל מסך הוא קומפוננטה נפרדת תחת <code>src/components</code>.</li>
            <li>ניתן להחליף את מנגנון הניווט ב-react-router-dom אם גודל האפליקציה יגדל.</li>
          </ul>
        </div>

        <div className="card">
          <div className="card-header">
            <h2>Future Roadmap</h2>
            <span className="badge">Next steps</span>
          </div>
          <ul className="section-subtitle" style={{ paddingInlineStart: "1.2rem" }}>
            <li>חיבור ל-API אמיתי של נתוני פרמייר ליג (למשל דרך ספק stats / שירות צד שלישי).</li>
            <li>הוספת מסך סטטיסטיקות מתקדמות (xG, xA, מפות חום וכו').</li>
            <li>שמירת העדפות משתמש (קבוצות אהובות, שחקנים מועדפים) ב-localStorage.</li>
            <li>הוספת i18n לשפה אנגלית מלאה עבור קהל בינלאומי.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Tech;

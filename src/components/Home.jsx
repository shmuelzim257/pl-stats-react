import React from "react";

export const Home = () => {
  return (
    <div className="container">
      {/* HERO – מי אני ומה אני עושה */}
      <section className="hero">
        <div className="hero-text">
          <h1>Shmuel Zimlichman – Project Manager · AI · Data · Cloud</h1>

          <p>
            אני שמואל צימליכמן, מנהל פרויקטים טכנולוגיים עם התמחות ב-AI, ניהול
            מוצרים ופתרונות ענן. בשנים האחרונות אני מוביל פרויקטים מורכבים
            בעולם ה-OCR, מיקרו-סרביסים ו-LLM, משלב האפיון ועד עלייה לייצור.
          </p>

          <p>
            כיום אני משמש כמנהל פרויקטים ב-KPMG Edge, צוות הטכנולוגיה של KPMG
            ישראל, עם פוקוס על פיתוח והטמעה של מוצרים ופתרונות בתחום Modern Work,
            Azure, Copilot ו-Document Automation (מערכת KDOX ועוד).
          </p>

          <div style={{ marginTop: "0.85rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            <span className="pill">Project & Delivery Management</span>
            <span className="pill">OCR & Document Automation</span>
            <span className="pill">Azure · Cloud · Microservices</span>
            <span className="pill">AI & LLM-based Solutions</span>
            <span className="pill">Stakeholders & Strategy</span>
          </div>
        </div>

        {/* צד ויזואלי – Snapshot על הקריירה */}
        <div className="hero-visual">
          <div className="hero-card hero-card-main">
            <span className="hero-label">Career Snapshot</span>
            <h2>From OCR products to AI-driven projects</h2>
            <p>
              הובלת מוצר OCR ארגוני (KDOX), פרויקטי Modern Work & Copilot,
              ופתרונות מיקרו-סרביסים בענן – תוך עבודה צמודה עם צוותי פיתוח, QA,
              Data ו-Business.
            </p>
          </div>

          <div className="hero-card hero-card-row">
            <div className="hero-metric">
              <span className="hero-metric-label">KPMG Edge</span>
              <span className="hero-metric-value">Project Manager</span>
            </div>
            <div className="hero-metric">
              <span className="hero-metric-label">Domains</span>
              <span className="hero-metric-value">AI · OCR · Cloud</span>
            </div>
            <div className="hero-metric">
              <span className="hero-metric-label">Method</span>
              <span className="hero-metric-value">Agile</span>
            </div>
          </div>

          <div className="hero-card hero-brain">
            <div className="hero-brain-icon">🧠</div>
            <div>
              <div className="hero-label">AI · Data · Product Thinking</div>
              <div className="hero-brain-text">
                חיבור בין צרכים עסקיים, דאטה ו-AI – לתוך פתרונות פרקטיים שמדברים
                גם עם המשתמש הקצה וגם עם ה-C-Level.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* מה אני מביא לפרויקט */}
      <section className="home-section">
        <h2>What I bring to a project</h2>
        <div className="home-cards-grid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">End-to-end ownership</h3>
            </div>
            <div className="card-body">
              <p>
                ניסיון בניהול מחזור חיים מלא של פרויקטים – מאפיון צרכים, כתיבת
                סיפורי משתמש, תאום בין פיתוח, QA ו-Stakeholders ועד עלייה לייצור
                והשקה ללקוחות.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">AI & Automation in practice</h3>
            </div>
            <div className="card-body">
              <p>
                הובלה של פרויקטי OCR, RPA ו-AI, שילוב רכיבי Microsoft AI, LLMs
                וטכנולוגיות ענן כדי לייעל תהליכים ולבנות חוויית משתמש חכמה.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">People, communication & value</h3>
            </div>
            <div className="card-body">
              <p>
                עבודה ישירה מול לקוחות, ספקים וצוותים רב-תחומיים, עם פוקוס על
                תיאום ציפיות, שקיפות וניהול סיכונים – כדי לוודא שהטכנולוגיה
                משרתת את הערך העסקי.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stack וכלים */}
      <section className="home-section">
        <h2>Tech & Delivery Toolbox</h2>
        <div className="home-stack">
          <div>
            <h3>Project & Product</h3>
            <ul>
              <li>Agile delivery · עבודה עם צוותי R&D, QA ו-Product</li>
              <li>ניהול Backlog, Roadmaps וסנכרון בין כמה פרויקטים במקביל</li>
              <li>עבודה מול הנהלה ו-Stakeholders בארגונים גדולים</li>
            </ul>
          </div>
          <div>
            <h3>AI, Data & Automation</h3>
            <ul>
              <li>OCR & Document Processing (KDOX, Azure, Elasticsearch)</li>
              <li>RPA ו-תהליכי אוטומציה מקצה לקצה</li>
              <li>LLM-based פתרונות, Copilot ו-Modern Work</li>
            </ul>
          </div>
          <div>
            <h3>Engineering background</h3>
            <ul>
              <li>B.Sc. בהנדסת חשמל ואלקטרוניקה – התמחות במערכות ממוחשבות</li>
              <li>ניסיון בתכנות Python, JavaScript, SQL וטכנולוגיות Web</li>
              <li>יכולת לתקשר גם עם מפתחים וגם עם אנשי עסקים</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

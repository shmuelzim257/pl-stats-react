import React from "react";

const About = () => {
  return (
    <section>
      <h1 className="page-title">About the Project</h1>
      <div className="layout-two-column">
        <div>
          <p className="section-subtitle">
            זהו פרויקט פורטפוליו אישי שנבנה כדי לשלב בין שני עולמות: אהבה לכדורגל
            (ובמיוחד לפרמייר ליג ולמנצ׳סטר יונייטד) יחד עם ניסיון בפרונט אנד ו-React.
          </p>

          <p className="section-subtitle">
            המטרה היא להציג בפני מראיינים ושותפים פוטנציאליים:
          </p>
          <ul className="section-subtitle" style={{ paddingInlineStart: "1.2rem" }}>
            <li>הבנה ב-React, מבנה קומפוננטות ו-State Management בסיסי.</li>
            <li>יכולת עבודה עם נתונים (JSON) ולבנות מסכי פילטרים וטיוב מידע.</li>
            <li>חשיבה על UX לחולי סטטיסטיקה ושחקני פנטזי.</li>
          </ul>

          <p className="section-subtitle">
            הפרויקט נבנה כך שיהיה קל להרחבה – אפשר להחליף את קבצי ה-JSON בחיבור
            ל-API אמיתי של נתוני ספורט, להוסיף התחברות משתמשים, פיצ׳רים לפנטזי ועוד.
          </p>
        </div>

        <div>
          <div className="card">
            <div className="card-header">
              <h2>על הבעלים של הפרויקט</h2>
            </div>
            <p className="section-subtitle">
              שְׁמוּאֵל (שמוליק) זמליכמן – Project Manager עם פוקוס על AI, Data ו-Cloud,
              ואהבה עמוקה לכדורגל, סטטיסטיקות ופנטזי פרמייר ליג.
            </p>
            <p className="section-subtitle">
              הפרויקט הזה משמש גם כ״שיחת פתיחה״ בראיונות עבודה – דרך נוחה להראות
              איך אפשר לקחת תחביב ולהפוך אותו למוצר אמיתי.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

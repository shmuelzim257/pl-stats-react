import React from "react";

const Home = ({ goTo }) => {
  return (
    <section>
      <h1 className="page-title">Premier League Stats – גרסת מנצ׳סטר יונייטד</h1>
      <p className="section-subtitle">
        אתר React סטטי שמציג משחקי מחזור, חדשות, נתוני שחקנים עם פילטרים ומידע בסיסי על כל קבוצות הפרמייר ליג
        לעונת 25/26 – מיועד לחולי סטטיסטיקה ושחקני פנטזי.
      </p>

      <div className="cards-grid">
        <div className="card">
          <div className="card-header">
            <h2>משחקי המחזור הקרוב</h2>
            <span className="badge">Fixtures</span>
          </div>
          <p>צפה במשחקי המחזור הקרוב עם דגש על מנצ׳סטר יונייטד.</p>
          <button className="nav-button active" onClick={() => goTo("fixtures")}>
            עבור למסך משחקים
          </button>
        </div>

        <div className="card">
          <div className="card-header">
            <h2>חדשות הליגה</h2>
            <span className="badge">News</span>
          </div>
          <p>אוסף ידני של כותרות חשובות מהפרמייר ליג.</p>
          <button className="nav-button active" onClick={() => goTo("news")}>
            עבור לחדשות
          </button>
        </div>

        <div className="card">
          <div className="card-header">
            <h2>שחקנים & ניקוד</h2>
            <span className="badge">Fantasy-oriented</span>
          </div>
          <p>ניקוד שחקנים עד כה בעונה + פילטרים לפי עמדה, קבוצה ונקודות.</p>
          <button className="nav-button active" onClick={() => goTo("players")}>
            עבור למסך שחקנים
          </button>
        </div>

        <div className="card">
          <div className="card-header">
            <h2>קבוצות הפרמייר ליג</h2>
            <span className="badge">Teams</span>
          </div>
          <p>מידע בסיסי על כל קבוצות עונת 25/26, כולל סמלים וחיפוש לפי קבוצה.</p>
          <button className="nav-button active" onClick={() => goTo("teams")}>
            עבור למסך קבוצות
          </button>
        </div>

        <div className="card">
          <div className="card-header">
            <h2>About</h2>
            <span className="badge">Portfolio</span>
          </div>
          <p>עמוד שמסביר עליך ועל המטרה של הפרויקט – שימושי לראיונות עבודה.</p>
          <button className="nav-button active" onClick={() => goTo("about")}>
            עבור לעמוד About
          </button>
        </div>

        <div className="card">
          <div className="card-header">
            <h2>Tech / Architecture</h2>
            <span className="badge">Tech</span>
          </div>
          <p>עמוד טכני שמסביר על הסטאק, הארכיטקטורה והאפשרות לחיבור ל-API אמיתי.</p>
          <button className="nav-button active" onClick={() => goTo("tech")}>
            עבור לעמוד Tech
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;

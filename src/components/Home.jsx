import React from 'react';

const heroUrl =
  'https://images.pexels.com/photos/26962340/pexels-photo-26962340.jpeg?auto=compress&cs=tinysrgb&w=1200';

export const Home = ({ goTo }) => {
  return (
    <div className="container">
      <section className="hero">
        <img
          src={heroUrl}
          alt="AI, data and Premier League stats"
          className="hero-image"
        />
        <div className="hero-text">
          <p className="tagline">Premier League · Data · Fantasy · AI</p>
          <h1>PL Stats United</h1>
          <p className="card-body">
            שמי שמואל צימליכמן ואני מנהל פרויקטים עם פוקוס בתחומים AI, Data
            ו-Cloud. האתר מולכם מציג את התשוקה שלי בשנים האחרונות לכדורגל,
            סטטיסטיקות ופנטזי. באתר ניתן למצוא גם מידע עליי וגם רעיונות שלי על
            איך פרויקטים מהתחומים הנ״ל בנויים.
          </p>
          <p className="card-body">
            המטרה של הפרויקט היא להדגים שילוב בין אהבה לכדורגל לבין חשיבה
            מוצרית־טכנולוגית: עמודי משחקים, טבלה, שחקנים, קבוצות וחדשות – הכל
            כאתר React רספונסיבי אחד.
          </p>
        </div>
      </section>

      <section>
        <div className="cards-grid">
          <article className="card">
            <div className="card-header">
              <h2 className="card-title">משחקי המחזור הקרוב</h2>
              <span className="pill">Fixtures</span>
            </div>
            <p className="card-body">
              צפייה בכל משחקי המחזור הקרוב, כולל סמלי הקבוצות, אצטדיון, תאריך
              ושעה – עם טבלת ליגה עדכנית מתחת.
            </p>
            <button className="primary-btn" onClick={() => goTo('fixtures')}>
              עבור למשחקים
            </button>
          </article>

          <article className="card">
            <div className="card-header">
              <h2 className="card-title">שחקנים &amp; ניקוד</h2>
              <span className="pill">Fantasy-oriented</span>
            </div>
            <p className="card-body">
              סטטיסטיקה מתקדמת לשחקנים מרכזיים בפרמייר ליג – שערים, בישולים,
              xG, xGI פר 90 ועוד, עם אפשרות סינון לפי קבוצה ועמדה.
            </p>
            <button className="primary-btn" onClick={() => goTo('players')}>
              עבור לשחקנים
            </button>
          </article>

          <article className="card">
            <div className="card-header">
              <h2 className="card-title">קבוצות &amp; מועדונים</h2>
              <span className="pill">Club profiles</span>
            </div>
            <p className="card-body">
              פרופיל לכל אחת מ-20 הקבוצות בליגה: אצטדיון, קיבולת, תארים
              עיקריים, שנת הקמה, צבעי מדים וקישור לאתר הרשמי.
            </p>
            <button className="primary-btn" onClick={() => goTo('teams')}>
              עבור לקבוצות
            </button>
          </article>

          <article className="card">
            <div className="card-header">
              <h2 className="card-title">חדשות וניתוחים</h2>
              <span className="pill">News</span>
            </div>
            <p className="card-body">
              עשר כתבות נבחרות מהעונה הנוכחית – מירוץ האליפות, מלך השערים,
              ניתוחים טקטיים וסקירות מחזור.
            </p>
            <button className="primary-btn" onClick={() => goTo('news')}>
              עבור לחדשות
            </button>
          </article>
        </div>
      </section>
    </div>
  );
};

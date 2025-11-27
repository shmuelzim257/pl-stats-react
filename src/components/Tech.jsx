import React from 'react';

export const Tech = () => {
  return (
    <div className="container">
      <h1>Tech – איך הפרויקט בנוי?</h1>
      <p className="card-body">
        זהו פרויקט React מבוסס Vite, שנועד להיות פשוט לפריסה ב-GitHub Pages
        ולהדגים ארכיטקטורה נקייה וברורה.
      </p>

      <ul className="card-body">
        <li>React 18 עם Vite כבאנדלר מהיר.</li>
        <li>Single Page Application עם ניווט לוגי דרך state פנימי.</li>
        <li>
          נתונים סטטטיים (fixtures, טבלה, שחקנים, קבוצות, חדשות) נשמרים בקבצי
          JSON תחת <code>src/data</code>, כך שניתן להחליף אותם בקלות ב-API
          אמיתי.
        </li>
        <li>
          עיצוב Dark Mode בסיסי באמצעות CSS בלבד, ללא ספריית UI חיצונית – כדי
          לשמור על קוד קריא וקל להסבר בראיונות.
        </li>
        <li>
          פריסה ל-GitHub Pages דרך ענף <code>main</code> ותיקיית{' '}
          <code>docs</code>, כך שאין צורך בתלויות נוספות כמו gh-pages.
        </li>
      </ul>

      <p className="card-body">
        כל המסכים בנויים כך שיוכלו בעתיד לקבל נתונים חיים מ-APIs של כדורגל
        (כמו Opta, Football-Data.org, או שירותים בתשלום), או משכבת Data Lake /
        Warehouse בענן (Azure / AWS / GCP), כולל חיבור למודלי LLM לצורך ניתוח
        טקסטואלי של חדשות, סיכומי משחקים ועוד.
      </p>
    </div>
  );
};

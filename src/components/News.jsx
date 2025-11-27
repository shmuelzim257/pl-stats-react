import React from 'react';
import news from '../data/news.json';

const formatDate = (iso) => {
  try {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    return d.toLocaleDateString('he-IL', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    });
  } catch {
    return iso;
  }
};

export const News = () => {
  return (
    <div className="container">
      <h1>חדשות &amp; ניתוחים – פרמייר ליג 2025/26</h1>
      <p className="card-body">
        עשר כתבות נבחרות ממקורות רשמיים ואתרי כדורגל מובילים, המתייחסות לעונת
        2025/26 – מירוץ האליפות, מלך השערים, עומס משחקים ועוד. כל כרטיס כולל
        מקור, תאריך וקישור לכתבה המלאה.
      </p>

      <div className="news-list">
        {news.map((item) => (
          <article key={item.id} className="news-item">
            <div className="news-meta">
              {item.source} · {formatDate(item.date)}
            </div>
            <h2 className="news-title">{item.title}</h2>
            <p className="news-excerpt">{item.excerpt}</p>
            {item.teams && item.teams.length > 0 && (
              <div className="news-meta">
                קבוצות רלוונטיות: {item.teams.join(', ')}
              </div>
            )}
            <a
              className="news-link"
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              קרא את הכתבה המלאה באתר המקור
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import newsData from "../data/news.json";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(newsData);
  }, []);

  return (
    <section>
      <h1 className="page-title">חדשות מהליגה האנגלית</h1>
      <p className="section-subtitle">
        כאן אפשר להראות למראיינים שאתה יודע לרכז חדשות ממקורות שונים (כרגע: נתונים סטטיים).
      </p>

      <div className="cards-grid">
        {news.map((item) => (
          <div key={item.id} className="card">
            <div className="card-header">
              <h2>{item.title}</h2>
              <span className="badge">{item.source}</span>
            </div>
            <p className="section-subtitle">פורסם: {item.publishedAt}</p>
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="nav-button active"
            >
              מעבר לכתבה
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;

import React, { useMemo, useState } from 'react';
import teams from '../data/teams.json';

export const Teams = () => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return teams.filter((t) => {
      if (!query) return true;
      const q = query.toLowerCase();
      return (
        t.name.toLowerCase().includes(q) ||
        t.shortName.toLowerCase().includes(q) ||
        t.city.toLowerCase().includes(q)
      );
    });
  }, [query]);

  return (
    <div className="container">
      <h1>קבוצות הפרמייר ליג 2025/26</h1>
      <p className="card-body">
        פרופיל קצר לכל אחת מ-20 הקבוצות: אצטדיון, קיבולת, שנת הקמה, תארים
        עיקריים, צבעי בית/חוץ וקישור לאתר הרשמי.
      </p>

      <div className="filters-row">
        <input
          className="input"
          placeholder="חפש קבוצה או עיר..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="teams-grid">
        {filtered.map((team) => (
          <article key={team.id} className="team-card">
            <div className="team-header">
              {team.logoUrl && <img src={team.logoUrl} alt={team.shortName} />}
              <div>
                <div className="team-name">{team.name}</div>
                <div className="team-sub">
                  {team.city} · נוסדה {team.founded}
                </div>
              </div>
            </div>
            <div className="stadium-line">
              אצטדיון: <strong>{team.stadium}</strong> ·{' '}
              {team.capacity.toLocaleString()} מקומות ישיבה
            </div>
            <div className="stadium-line">
              תארים בולטים: {team.majorHonours}
            </div>
            <div className="kit-row">
              <span>מדי בית</span>
              <span
                className="kit-swatch"
                style={{
                  background: team.homeColors[0],
                  boxShadow: 'inset 12px 0 ' + team.homeColors[1]
                }}
              />
              <span>מדי חוץ</span>
              <span
                className="kit-swatch"
                style={{
                  background: team.awayColors[0],
                  boxShadow: 'inset 12px 0 ' + team.awayColors[1]
                }}
              />
            </div>
            <div style={{ marginTop: '0.4rem' }}>
              <a
                className="team-link"
                href={team.website}
                target="_blank"
                rel="noreferrer"
              >
                מעבר לאתר הרשמי של {team.shortName}
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

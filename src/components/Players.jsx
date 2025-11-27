import React, { useMemo, useState } from 'react';
import players from '../data/players.json';

const unique = (arr) => Array.from(new Set(arr));

export const Players = () => {
  const [clubFilter, setClubFilter] = useState('ALL');
  const [positionFilter, setPositionFilter] = useState('ALL');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('xgi');

  const clubs = useMemo(
    () => ['ALL', ...unique(players.map((p) => p.club)).sort()],
    []
  );

  const filtered = useMemo(() => {
    return players
      .filter((p) => (clubFilter === 'ALL' ? true : p.club === clubFilter))
      .filter((p) =>
        positionFilter === 'ALL' ? true : p.position === positionFilter
      )
      .filter((p) =>
        !search ? true : p.name.toLowerCase().includes(search.toLowerCase())
      )
      .slice()
      .sort((a, b) => {
        if (sortBy === 'goals') return b.goals - a.goals;
        if (sortBy === 'assists') return b.assists - a.assists;
        if (sortBy === 'xg') return b.xg - a.xg;
        if (sortBy === 'xgi') return (b.xgiPer90 ?? 0) - (a.xgiPer90 ?? 0);
        return 0;
      });
  }, [clubFilter, positionFilter, search, sortBy]);

  return (
    <div className="container">
      <h1>שחקנים &amp; ניקוד – צילום סטטיסטיקה 2025/26</h1>
      <p className="card-body">
        הנתונים מייצגים מבחר שחקנים בולטים מהפרמייר ליג בעונת 2025/26 – מבוסס
        על שערים, בישולים ומדדי xG/xGI נכון לסוף מחזור 12.
      </p>

      <div className="filters-row">
        <input
          className="input"
          placeholder="חיפוש שחקן..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="select"
          value={clubFilter}
          onChange={(e) => setClubFilter(e.target.value)}
        >
          {clubs.map((c) => (
            <option key={c} value={c}>
              {c === 'ALL' ? 'כל הקבוצות' : c}
            </option>
          ))}
        </select>
        <select
          className="select"
          value={positionFilter}
          onChange={(e) => setPositionFilter(e.target.value)}
        >
          <option value="ALL">כל העמדות</option>
          <option value="F">חלוצים</option>
          <option value="M">קשרים</option>
          <option value="D">בלמים/מגינים</option>
          <option value="GK">שוערים</option>
        </select>
        <select
          className="select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="xgi">מיון לפי xGI/90</option>
          <option value="xg">מיון לפי xG</option>
          <option value="goals">מיון לפי שערים</option>
          <option value="assists">מיון לפי בישולים</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>שחקן</th>
            <th>קבוצה</th>
            <th>עמדה</th>
            <th>דקות</th>
            <th>שערים</th>
            <th>בישולים</th>
            <th>xG</th>
            <th>xGI/90</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((p) => (
            <tr key={p.name + p.club}>
              <td>{p.name}</td>
              <td>{p.club}</td>
              <td>{p.position}</td>
              <td>{p.minutes}</td>
              <td>{p.goals}</td>
              <td>{p.assists}</td>
              <td>{p.xg.toFixed(2)}</td>
              <td>{(p.xgiPer90 ?? 0).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

import React from 'react';
import fixtures from '../data/fixtures.json';
import teams from '../data/teams.json';
import table from '../data/table.json';

const findTeam = (name) =>
  teams.find((t) => t.name === name || t.shortName === name);

export const Fixtures = () => {
  const matchweek = fixtures[0]?.matchweek ?? 0;

  return (
    <div className="container">
      <h1>משחקי המחזור הקרוב – מחזור {matchweek}</h1>
      <p className="card-body">
        הנתונים בעמוד זה מייצגים צילום מצב של לוח המשחקים וטבלת הפרמייר ליג
        לעונת 2025/26 נכון לסוף נובמבר 2025.
      </p>

      <div className="fixtures-grid">
        {fixtures.map((match) => {
          const home = findTeam(match.home) || {
            logoUrl: '',
            shortName: match.home
          };
          const away = findTeam(match.away) || {
            logoUrl: '',
            shortName: match.away
          };
          return (
            <article
              key={match.home + match.away + match.date}
              className="fixture-card"
            >
              <div className="fixture-teams">
                <div className="fixture-team">
                  {home.logoUrl && (
                    <img src={home.logoUrl} alt={home.shortName} />
                  )}
                  <span>{home.shortName}</span>
                </div>
                <span className="vs">vs</span>
                <div className="fixture-team">
                  {away.logoUrl && (
                    <img src={away.logoUrl} alt={away.shortName} />
                  )}
                  <span>{away.shortName}</span>
                </div>
              </div>
              <div className="fixture-meta">
                <span>
                  {match.date} · {match.timeUk} (UK)
                </span>
                {match.stadium && <span>{match.stadium}</span>}
              </div>
            </article>
          );
        })}
      </div>

      <section>
        <h2>טבלת הפרמייר ליג 2025/26 – צילום מצב</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>קבוצה</th>
              <th>מש'</th>
              <th>נ'</th>
              <th>ת'</th>
              <th>ה'</th>
              <th>ז'</th>
              <th>ס'</th>
              <th>הפרש</th>
              <th>נק'</th>
            </tr>
          </thead>
          <tbody>
            {table.map((row) => (
              <tr key={row.team}>
                <td>{row.position}</td>
                <td>{row.team}</td>
                <td>{row.played}</td>
                <td>{row.wins}</td>
                <td>{row.draws}</td>
                <td>{row.losses}</td>
                <td>{row.goalsFor}</td>
                <td>{row.goalsAgainst}</td>
                <td>{row.goalDiff}</td>
                <td>{row.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

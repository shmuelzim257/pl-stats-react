import React, { useState } from 'react';
import { Home } from './components/Home';
import { Fixtures } from './components/Fixtures';
import { Players } from './components/Players';
import { Teams } from './components/Teams';
import { News } from './components/News';
import { About } from './components/About';
import { Tech } from './components/Tech';

function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'fixtures':
        return <Fixtures />;
      case 'players':
        return <Players />;
      case 'teams':
        return <Teams />;
      case 'news':
        return <News />;
      case 'about':
        return <About />;
      case 'tech':
        return <Tech />;
      default:
        return <Home goTo={setPage} />;
    }
  };

  return (
    <div className="app">
      <header className="topbar">
        <div className="logo" onClick={() => setPage('home')}>
          <span className="logo-main">PL Stats</span>{' '}
          <span className="logo-accent">United</span>
        </div>
        <nav className="nav">
          <button
            className={page === 'home' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setPage('home')}
          >
            בית
          </button>
          <button
            className={page === 'fixtures' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setPage('fixtures')}
          >
            משחקי מחזור
          </button>
          <button
            className={page === 'players' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setPage('players')}
          >
            שחקנים &amp; ניקוד
          </button>
          <button
            className={page === 'teams' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setPage('teams')}
          >
            קבוצות
          </button>
          <button
            className={page === 'news' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setPage('news')}
          >
            חדשות
          </button>
          <button
            className={page === 'about' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setPage('about')}
          >
            About
          </button>
          <button
            className={page === 'tech' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setPage('tech')}
          >
            Tech
          </button>
        </nav>
      </header>
      <main className="main">{renderPage()}</main>
      <footer className="footer">
        <small>
          Snapshot data as of 24 Nov 2025 · Built with React &amp; Vite by Shmuel
          Zimlichman
        </small>
      </footer>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Fixtures from "./components/Fixtures.jsx";
import News from "./components/News.jsx";
import Players from "./components/Players.jsx";
import Teams from "./components/Teams.jsx";
import About from "./components/About.jsx";
import Tech from "./components/Tech.jsx";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "fixtures":
        return <Fixtures />;
      case "news":
        return <News />;
      case "players":
        return <Players />;
      case "teams":
        return <Teams />;
      case "about":
        return <About />;
      case "tech":
        return <Tech />;
      default:
        return <Home goTo={setPage} />;
    }
  };

  return (
    <div className="app">
      <Navbar current={page} onChangePage={setPage} />
      <main className="main-content">{renderPage()}</main>
    </div>
  );
}

export default App;

// scripts/update-fpl-players.mjs
// סקריפט Node שמוריד את נתוני ה-FPL ושומר אותם כ-players.json לפרויקט

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FPL_URL = "https://fantasy.premierleague.com/api/bootstrap-static/";

async function run() {
  console.log("⏳ מוריד נתוני שחקנים מ-FPL...");

  const res = await fetch(FPL_URL);
  if (!res.ok) {
    throw new Error(`FPL API error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();

  // מפות קבוצות ועמדות
  const teamsMap = new Map();
  data.teams.forEach((t) => {
    teamsMap.set(t.id, t.name);
  });

  const positionsMap = new Map();
  data.element_types.forEach((et) => {
    positionsMap.set(et.id, et.singular_name_short);
  });

  // מיפוי השחקנים למבנה שה-frontend מצפה לו
  const mappedPlayers = data.elements.map((el) => ({
    id: el.id,
    name: el.web_name,
    team: teamsMap.get(el.team) ?? `Team ${el.team}`,
    position: positionsMap.get(el.element_type) ?? "",
    price: el.now_cost / 10,
    totalPoints: el.total_points,
    gwPoints: el.event_points,
    pointsPerGame: parseFloat(el.points_per_game),
    form: parseFloat(el.form),
    selectedByPercent: parseFloat(el.selected_by_percent),
    minutes: el.minutes,
    goals: el.goals_scored,
    assists: el.assists,
    cleanSheets: el.clean_sheets,
    goalsConceded: el.goals_conceded,
    saves: el.saves,
    bonus: el.bonus,
    bps: el.bps,
    influence: parseFloat(el.influence),
    creativity: parseFloat(el.creativity),
    threat: parseFloat(el.threat),
    ictIndex: parseFloat(el.ict_index)
  }));

  const outPath = path.join(__dirname, "..", "src", "data", "players.json");

  await fs.mkdir(path.dirname(outPath), { recursive: true });

  await fs.writeFile(outPath, JSON.stringify(mappedPlayers, null, 2), "utf-8");

  console.log(`✅ נשמרו ${mappedPlayers.length} שחקנים אל: ${outPath}`);
}

run().catch((err) => {
  console.error("❌ שגיאה בעדכון נתונים:", err);
  process.exit(1);
});

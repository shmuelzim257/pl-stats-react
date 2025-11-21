# PL Stats React – Premier League Stats (Man United Focus)

This is a portfolio project built with **React + Vite** that shows:

- Upcoming fixtures (with a toggle focusing on Manchester United)
- Curated Premier League news
- Fantasy-oriented player stats with filters (position, team, points)
- A full list of all 20 Premier League clubs for the **2025/26 season**, including basic metadata and badge images
- Two meta pages:
  - `About` – explains the story and purpose of the project
  - `Tech` – explains the stack, architecture, and roadmap

Data is loaded from local JSON files in `src/data`, which makes it easy to:

- Host for free on GitHub Pages or any static host
- Update the data manually before interviews
- Swap the JSON for a real sports data API in the future

## Run locally

```bash
npm install
npm run dev
```

Then open the printed URL (usually http://localhost:5173).

## Build

```bash
npm run build
```

Outputs static assets into `dist/`.

## Deploy

You can deploy manually (e.g. by serving `dist/` from any static host) or by using
a GitHub Pages workflow / `git subtree` into a `gh-pages` branch.

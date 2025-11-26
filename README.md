# Alumni Meet 2026

A single-page web experience with an Express backend for the JUIT Alumni Meet 2026. The site blends a curated visual story with structured event details so alumni can discover the schedule, gallery, and organizing team in one place.

## Features

- **Single-page design** built with vanilla HTML/CSS/JS for quick load times.
- **Dynamic content** fetched from `/api/event`, making it easy to tweak copy, links, and lineup in `data/eventData.js`.
- **Event essentials**: hero, purpose, activities timeline, gallery, eligibility, registration with Google Form + WhatsApp links, leadership profiles, and the student task force.
- **Responsive layout** that adapts cleanly across desktops, tablets, and phones.
- **Express backend** serving both the static site and JSON API.

## Quick Start

```bash
git clone https://github.com/Anubhav-9999/Alumni-cell.git
cd "Alumni-cell"
npm install
npm start
```

Then open `http://localhost:4000` in your browser.

## Project Structure

- `server.js` – Express server configuration and API routes.
- `data/eventData.js` – Canonical source for all event information.
- `public/` – Frontend assets (`index.html`, `styles.css`, `app.js`).
- `package.json` – Scripts and dependencies.

## Customizing Content

1. Edit `data/eventData.js` to update text, gallery URLs, fees, or team members.
2. Adjust layout or visual styling inside `public/styles.css`.
3. Enhance interactivity via `public/app.js`.

Restart the server (`npm start`) after major backend changes, or simply refresh the browser for frontend tweaks.

## Deployment

Any Node-friendly host (Render, Railway, Vercel, etc.) works:

1. Set the start command to `npm start`.
2. Ensure the host exposes `PORT` and the server reads `process.env.PORT`.
3. Point your custom domain to the deployment.

## License

MIT – feel free to adapt for future JUIT events or derivative alumni experiences.



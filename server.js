const express = require("express");
const path = require("path");
const eventData = require("./data/eventData");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

// Serve static frontend
const publicDir = path.join(__dirname, "public");
app.use(express.static(publicDir));

// Simple API for frontend consumption
app.get("/api/event", (_req, res) => {
  res.json(eventData);
});

// Health check / status endpoint
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: Date.now() });
});

app.listen(PORT, () => {
  console.log(`Alumni Meet 2026 server running on http://localhost:${PORT}`);
});



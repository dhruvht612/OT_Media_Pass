// =======================
// Ontario Tech Media Pass - Backend
// =======================
import express from "express";
import fs from "fs";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

// Setup directory paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Helper to read data files
function readJSON(fileName) {
  return JSON.parse(
    fs.readFileSync(path.join(__dirname, "data", fileName), "utf8")
  );
}

// =======================
// API ROUTES
// =======================

// 🎟️ Events
app.get("/api/events", (req, res) => {
  const events = readJSON("events.json");
  res.json(events);
});

// 👥 Team
app.get("/api/team", (req, res) => {
  const team = readJSON("team.json");
  res.json(team);
});

// 🖼️ Gallery
app.get("/api/gallery", (req, res) => {
  const gallery = readJSON("gallery.json");
  res.json(gallery);
});

// 📬 Contact form (POST)
app.post("/api/contact", (req, res) => {
  const messagesPath = path.join(__dirname, "data", "contact-messages.json");
  const messages = JSON.parse(fs.readFileSync(messagesPath, "utf8"));

  const newMessage = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
    date: new Date().toISOString(),
  };

  messages.push(newMessage);
  fs.writeFileSync(messagesPath, JSON.stringify(messages, null, 2));

  res.json({ success: true, message: "Message received!" });
});

// ✅ Catch-all route for non-API paths (Express 5 safe)
app.use((req, res, next) => {
  if (req.path.startsWith("/api/")) return next();
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// =======================
// START SERVER
// =======================
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
    
const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const port = 5000;

// Activer CORS et parser JSON
app.use(cors());
app.use(express.json());

// Connexion à la base SQLite (ou création si elle n'existe pas)
const db = new sqlite3.Database("./database.db", (err) => {
  if (err) {
    console.error("❌ Erreur de connexion SQLite :", err.message);
  } else {
    console.log("✅ Connexion à SQLite réussie !");
  }
});

// Créer la table si elle n'existe pas
db.run(
  `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
  )`,
  (err) => {
    if (err) console.error("❌ Erreur création table :", err.message);
    else console.log("✅ Table users prête !");
  }
);

// Route GET : Récupérer les utilisateurs
app.get("/api/users", (req, res) => {
  db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) {
      console.error("❌ Erreur récupération :", err.message);
      return res.status(500).json({ error: "Erreur serveur" });
    }
    res.json(rows);
  });
});

// Route POST : Ajouter un utilisateur
app.post("/api/users", (req, res) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: "❌ Nom et email requis" });
  }

  const query = "INSERT INTO users (name, email) VALUES (?, ?)";
  db.run(query, [name, email], function (err) {
    if (err) {
      console.error("❌ Erreur insertion :", err.message);
      return res.status(500).json({ error: "Erreur lors de l'insertion" });
    }
    console.log("✅ Utilisateur ajouté :", { id: this.lastID, name, email });
    res.status(201).json({ id: this.lastID, name, email });
  });
});

// Démarrer le serveur
app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Serveur démarré sur http://0.0.0.0:${port}`);
});



const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Autoriser toutes les origines (option sécurisée pour le dev)
app.use(cors());

// Autre configuration de ton serveur (routes, body-parser, etc.)
app.use(express.json()); // Permet de traiter les données JSON envoyées dans les requêtes

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ]);
});

// Route pour gérer la création d'un utilisateur
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  console.log('Données reçues :', { name, email });
  res.status(201).json({ message: 'Utilisateur créé avec succès', name, email });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


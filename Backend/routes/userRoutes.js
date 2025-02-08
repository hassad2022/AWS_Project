const express = require("express");
const User = require("../models/User"); // Assure-toi que ce fichier existe et est bien défini

const router = express.Router();

// Route pour créer un nouvel utilisateur
router.post("/users", async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: "Tous les champs sont requis" });
    }

    const newUser = await User.create({ name, email });
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur:", error);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
});

module.exports = router;



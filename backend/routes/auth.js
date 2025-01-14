const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Modèle utilisateur
const bcrypt = require("bcrypt");

// Route d'inscription
router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Vérifie si l'utilisateur existe déjà
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "L'utilisateur existe déjà." });
    }

    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crée un nouvel utilisateur
    const newUser = new User({
      email,
      password: hashedPassword,
    });

    // Sauvegarde dans la base de données
    await newUser.save();

    res.status(201).json({ message: "Inscription réussie !" });
  } catch (error) {
    res.status(500).json({ message: "Erreur du serveur", error });
  }
});

module.exports = router;

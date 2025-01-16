const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Route de connexion
router.post("/login", async (req, res) => {
  console.log("Requête reçue :", req.body);

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("Utilisateur non trouvé :", email);
      return res.status(400).json({ message: "Utilisateur non trouvé." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log("Mot de passe incorrect pour :", email);
      return res.status(400).json({ message: "Mot de passe incorrect." });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    console.log("Connexion réussie, token généré pour :", email);
    res.status(200).json({ message: "Connexion réussie", token });
  } catch (error) {
    console.error("Erreur du serveur :", error);
    res.status(500).json({ message: "Erreur du serveur", error });
  }
});

// Route d'inscription
router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "L'utilisateur existe déjà." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "Inscription réussie !" });
  } catch (error) {
    res.status(500).json({ message: "Erreur du serveur", error });
  }
});

module.exports = router;

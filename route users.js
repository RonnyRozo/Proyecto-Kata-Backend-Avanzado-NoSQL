const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Ruta para registrar un nuevo usuario
router.post('/registrar', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: 'Usuario registrado con éxito' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
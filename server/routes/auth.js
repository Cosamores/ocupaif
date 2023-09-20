const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.post('/login', [
  body('username').isLength({ min: 5 }).withMessage('Username must be at least 5 characters long.'),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long.')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Try to authenticate the user
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });

  if (!admin) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const isMatch = await admin.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return res.json({ token });
});

module.exports = router;

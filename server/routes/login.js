import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
require('dotenv').config();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { username, password } = req.body;

  // Use environment variables for admin credentials
  const adminUser = process.env.ADMIN_USER;
  const adminPass = process.env.ADMIN_PASS;

  // Here, bcrypt can be used to hash the password and compare, but for brevity, we'll compare directly
  if (username === adminUser && password === adminPass) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET); // NOTE: Use a strong secret key!
    return res.status(200).json({ token });
  }

  return res.status(401).json({ error: 'Invalid login.' });
}

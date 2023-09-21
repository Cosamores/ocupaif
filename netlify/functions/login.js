import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { username, password } = req.body;

  // Use environment variables for admin credentials
  const adminUser = process.env.ADMIN_USER;
  const adminPass = process.env.ADMIN_PASS;

  // Directly compare with environment variables
  if (username === adminUser && password === adminPass) {
    // Generate JWT
    const token = jwt.sign({ username }, process.env.JWT_SECRET);
    return res.status(200).json({ token });
  }

  return res.status(401).json({ error: 'Invalid login.' });
}

import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  // check email first
  if (email !== process.env.ADMIN_EMAIL) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Compare password against hashed password in .env
  const isMatch = await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH);

  if(!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { role: "admin" },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token });
};
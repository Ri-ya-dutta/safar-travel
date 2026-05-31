import jwt from 'jsonwebtoken';

const ADMIN_EMAIL = "admin@example.com";
const ADMIN_PASSWORD = "admin123"; // You can move this to .env later

export const adminLogin = (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const token = jwt.sign(
      { id: "admin-id-placeholder", role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

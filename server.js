const express = require("express");
const session = require("express-session");
const path = require("path");
const db = require("./database");
const bcrypt = require("bcryptjs");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend files
app.use(express.static(path.join(__dirname, "public")));

// Session
app.use(
  session({
    secret: "student-study-resource-portal-secret",
    resave: false,
    saveUninitialized: false
  })
);

// Home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Test API
app.get("/api/test", (req, res) => {
  res.json({
    message: "Student Study Resource Portal backend is working!"
  });
});

// Database Statements (cached to ensure high performance and stability)
const userStatements = {
  getByEmail: db.prepare("SELECT * FROM users WHERE LOWER(email) = LOWER(?)"),
  insert: db.prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)"),
  updatePassword: db.prepare("UPDATE users SET password = ? WHERE id = ?")
};

// Register a new student
app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please provide your name, email, and password."
    });
  }

  const cleanName = String(name).trim();
  const cleanEmail = String(email).trim().toLowerCase();

  if (!cleanName || !cleanEmail || !password) {
    return res.status(400).json({
      success: false,
      message: "Fields cannot be blank."
    });
  }

  if (!cleanEmail.includes("@")) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid email address."
    });
  }

  try {
    const existing = userStatements.getByEmail.get(cleanEmail);
    if (existing) {
      return res.status(400).json({
        success: false,
        message: "This email is already registered. Please log in."
      });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const result = userStatements.insert.run(cleanName, cleanEmail, hashedPassword);

    res.json({
      success: true,
      message: "Registration successful! Please login.",
      user: {
        id: result.lastInsertRowid,
        name: cleanName,
        email: cleanEmail
      }
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      success: false,
      message: "Registration failed due to server error. Please try again."
    });
  }
});

// Login student
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please enter both email and password."
    });
  }

  const cleanEmail = String(email).trim().toLowerCase();

  try {
    const user = userStatements.getByEmail.get(cleanEmail);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password."
      });
    }

    let isMatch = false;

    // Check if password stored in DB is bcrypt hash
    if (user.password.startsWith("$2a$") || user.password.startsWith("$2b$")) {
      isMatch = bcrypt.compareSync(password, user.password);
    } else {
      // Plaintext legacy fallback: if password matches, upgrade to bcrypt
      if (password === user.password) {
        isMatch = true;
        try {
          const newHash = bcrypt.hashSync(password, 10);
          userStatements.updatePassword.run(newHash, user.id);
        } catch (upgradeErr) {
          console.error("Password upgrade error:", upgradeErr);
        }
      }
    }

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password."
      });
    }

    // Set session
    req.session.user = {
      id: user.id,
      name: user.name,
      email: user.email
    };

    res.json({
      success: true,
      message: "Login successful!",
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Server error during login."
    });
  }
});

// Check current session
app.get("/api/session", (req, res) => {
  if (req.session && req.session.user) {
    return res.json({
      loggedIn: true,
      user: req.session.user
    });
  }
  res.json({ loggedIn: false });
});

// Logout
app.post("/api/logout", (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({ success: false, message: "Could not log out." });
    }
    res.clearCookie("connect.sid");
    res.json({ success: true, message: "Logged out successfully." });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
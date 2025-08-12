const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("./userdb");

dotenv.config();
const app = express();
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB done"))
  .catch((err) => console.error("DB Error:", err));



function createToken(req, res, next) {
  const user = req.user;

  const payload = {
    id: user._id,
    username: user.username,
    email: user.email,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });

  req.token = token;
  next();
}

const register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashPassword });

    await newUser.save();
    req.user = newUser;
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Registration error" });
  }
};

app.post("/register", register, createToken, (req, res) => {
  res.status(201).json({
    message: "User created",
    token: req.token
  });
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

const PORT = process.env.PORT ;
app.listen(PORT, () => {
  console.log("Server Done", PORT);
});

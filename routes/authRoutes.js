const express = require("express");
const router = express.Router();

// auth login
router.get("/login", (req, res) => {
  res.render("login");
});

// auth signup
router.get("/signup", (req, res) => {
  res.send("signup page");
});

// login with google
router.get("/withgoogle", (req, res) => {
  res.send("Login with google");
});

// login
router.get("/logout", (req, res) => {
  res.send("Logout from this website");
});

module.exports = router;

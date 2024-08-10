const express = require("express");
const passport = require("passport");
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
router.get("/withgoogle", passport.authenticate("google", {
  scope: ["profile"],
}))

// Redirect URL
router.get("/withgoogle/redirect", passport.authenticate('google'), (req, res) => {
  res.send("You reached the redirect URI");
});

// login
router.get("/logout", (req, res) => {
  res.send("Logout from this website");
});

module.exports = router;

require("dotenv").config();
const express = require("express");
const app = express();

// setting up the view engine for ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(process.env.PORT, () => console.log("The app is running"));

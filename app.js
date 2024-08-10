require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./routes/authRoutes");
const passport = require("./config/passport");

// setting up the view engine for ejs
app.set("view engine", "ejs");
app.use("/auth", authRoute);

console.log(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URL);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(process.env.PORT, () => console.log("The app is running"));

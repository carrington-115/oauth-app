require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./routes/authRoutes");

// setting up the view engine for ejs
app.set("view engine", "ejs");
app.use("/auth", authRoute);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(process.env.PORT, () => console.log("The app is running"));

require("dotenv").config({ path: "../.env" });
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.REDIRECT_URL,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      
    }
  )
);

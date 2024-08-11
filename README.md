# oauth-app

## How to execute project

- To execute the project you need `nodejs` installed on your device.
- Clone the project with `git clone <url>`.
- Create a `.env` file on the root of the project and assign a `PORT` instance to be used be the development server.
- Run `npm run dev` to spin up the development server (primarily running on `nodemon`. check the `package.json` file).
- Open the link on a browser and test the application

## Documentation

### Introduction

- `OAuth` means **Open Authorization**. it is one approach to user authentication using platforms like `Google, Facebook, Github`
- This is so efficient because it requires the filling of no form
- For example if a button on a website is clicked to request signin by Oauth authentication, a request is sent to the service website, for example Google Auth servers. Then by confirming it, the user allows that website to use their user details saved on the google servers for signing into that website.
- `Passport.js` is used to allow the oauth authentication

### Passport setup with Oauth

- To use an OAuth with passport on a project, there are two modules we need to install: `passport` and `passport-strategy`. For example, if we want to use google authentication on the platform, we have to install `passport` and `passport google strategy`.
- In the `passport configuration file` import passport and the `passport strategy` to be used for the authentication.
- Then instantiate `passport.use()`

```js
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')

passport.use(/* strategy */, /* callback function */)
```

- The `Google Strategy` takes the following options: `CLIENT_ID, CLIENT_SECRET, and Redirect_url`
- These details can be obtained from the `google cloud platform` usig the `API credentials` and enabling `OAuth credentials`
- After the consent screen is shown, the user is redirected to the `redirect_url` with a `code` which is used to get the user details

### The Passport callback function
- This function is fired once the user is authenticated by the OAuth service.
- The function takes the `accessToken, refreshToken, profile, done` as arguments.

### Creating the database for users
- The next step is to figure out where the user is new to the application or not. If they are new, then we want to add them to our database.
- 
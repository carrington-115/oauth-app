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

-

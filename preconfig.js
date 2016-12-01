// Dotenv is a zero-dependency node module that loads environment variables from the .env file into process.env. object. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.
require('dotenv').load();

// Shared env vars in all environments - Using env vars enables you to separate your source code from your application configuration (or config, for short). This is good practice because config varies substantially across your app deploys, but your code generally does not. This is a clean way of properly setting env variables.
var shared = {
  apiUrl: process.env.API_URL,
  apiKey: process.env.API_KEY,
  debug: process.env.APP_DEBUG || true
};

var development = {
  // variables...
};

var staging = {
  // variables..
};
var production = {
  // variables..
};

// Set variables
var environments = {
  "development": {
    "ENV_VARS": shared
  },
  "staging": {
    "ENV_VARS": shared
  },
  "production": {
    "ENV_VARS": shared
  }
}


module.exports = environments;

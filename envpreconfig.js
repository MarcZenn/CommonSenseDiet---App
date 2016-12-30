/*
 * Dotenv is a zero-dependency node module that loads environment variables from the .env file into process.env. object when NOT in production. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology. If attempting to deploy to Heroku with this active Heroku deploy will fail.
 */
if(process.env.NODE_ENV !== 'production'){require('dotenv').load()};



/* Front-End environment variables  -
 *
 * Using env vars enables you to separate your source code from your application configuration (or config, for short). This is good practice because config varies substantially across your app deploys, but your code generally does not. This is a clean way of properly setting env variables.
*/
var shared = {
  apiUrl: process.env.NDB_API_URL,
  apiKey: process.env.NDB_API_KEY,
  debug: process.env.APP_DEBUG || true
};

var development = {
  // variables...
};

var staging = {
  // variables..
};
var production = {
  // variables
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

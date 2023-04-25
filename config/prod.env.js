'use strict'
require('dotenv').config()
module.exports = {
  NODE_ENV: '"production"',
  FIREBASE_API_KEY: Json.stringify(process.env.FIREBASE_API_KEY),
  FIREBASE_AUTH_DOMAIN: Json.stringify(process.env.FIREBASE_AUTH_DOMAIN),
  FIREBASE_DATABASE_URL: Json.stringify(process.env.FIREBASE_DATABASE_URL),
  FIREBASE_PROJECT_ID: Json.stringify(process.env.FIREBASE_PROJECT_ID),
  FIREBASE_STORAGE_BUGKET: Json.stringify(process.env.FIREBASE_STORAGE_BUGKET),
  FIREBASE_MESSAGING_SENDER_ID: Json.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
  FIREBASE_APP_ID: Json.stringify(process.env.FIREBASE_APP_ID)
}

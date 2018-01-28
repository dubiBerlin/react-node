// prod.js
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  //mongoURI: 'mongodb://dudo:hallo123@ds239137.mlab.com:39137/emaily2-dev'
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY
};

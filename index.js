const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
passportConfig = require('./services/passport');
const authRoutes = require('./routes/authRoutes');
const keys = require('./config/keys');

// Connect mongoose with mongoDB
mongoose.connect(keys.mongoURI_DEV);

const app = express();

/* Express wird gesagt es soll cookies für diese App nutzen */
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // how long should the cookie live in the browser until it expires
    keys: [keys.cookieKey] // key to encrypt the cookie
  })
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

// app.get('/', (req, res) => {
//   res.send({ hi: 'there' });
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server started on port 5000');
});

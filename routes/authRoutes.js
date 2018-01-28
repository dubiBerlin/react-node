const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'] // specifies what we need from the user from google
    })
  );
  app.get('/auth/google/callback', passport.authenticate('google'));
};

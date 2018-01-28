require('./../models/User');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

// param1: user Object is returned by passport.use DB query
passport.serializeUser((user, done) => {
  /*
   *param1: is an error-object
   *param2: objectID id created by mongodb : string */
  done(null, user.id);
});

/*
 * functionname: deserializeUser
 * purpose: gets an id, creates a mongoose object and searches in DB for the user with given id
 * param1: id : String :
*/
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

/***
 *
 */
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('profile.id: ', profile.id);
      console.log('profile.displayname\n: ', profile.displayName);

      // the user is returned to serializeUser() method
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (!existingUser) {
          // save() takes this new User Object and saves it into DB
          new User({
            googleId: profile.id,
            name: profile.displayName
          })
            .save()
            .then(user => done(null, user));
        }
        done(existingUser);
      });
    }
  )
);

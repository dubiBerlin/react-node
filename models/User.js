const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: {
    type: String,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  }
});

mongoose.model('users', userSchema);

//var User = mongoose.model('users', userSchema);
//module.exports = { User };

const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true, 
    required: true
  },
  role: String
});

userSchema.methods.info =() => { //testing information that would be removed in live version due to GDPR 
  console.log(`User -> ${this.username}`);
  console.log(`Role -> ${this.role}`);
  console.log(`Email -> ${this.email}`);
}

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema, 'User');

module.exports = User;
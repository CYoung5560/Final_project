const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
<<<<<<< HEAD
  // email: {
  //   type: String,
  //   unique: true, 
  //   required: true
  // },
=======
>>>>>>> 65e7c606e9d8dc19d1b44799cc82cc02c5586a8d
  role: String
});

userSchema.methods.info =() => {  
  console.log(`User -> ${this.username}`);
  console.log(`Role -> ${this.role}`);
}

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema, 'User');

module.exports = User;
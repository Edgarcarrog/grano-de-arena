const { model, Schema } = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    email: String,
    name: String
  }, 
  {
    timestamps: true
  }
);

const User = model("User", userSchema);
User.plugin(passportLocalMongoose, { usernameField: "email" }); 

module.exports = User;


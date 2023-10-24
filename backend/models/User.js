const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  userName: String,
  passWord: String,
  isAdmin: Boolean,
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;

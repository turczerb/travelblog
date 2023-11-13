const mongoose = require("mongoose");
const { Schema, model } = mongoose;

//schemat hoz létre
const UserSchema = new Schema({
  userName: {
    type: String,
    unique: [true, "Username alraedy available"],
    required: [true, "Username is required"],
  },
  passWord: { type: String },
  isAdmin: { type: Boolean },
  email: { type: String, required: [true, "Email address is required"] },
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;

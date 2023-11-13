//ez lesz a posztoláshoz a schéma -->model

const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PostSchema = new Schema(
  {
    title: String,
    summary: String,
    placeChange: String,
    selectedOptions: [Number],
    content: String,
    cover: [String],
    isChecked: { type: Boolean },
    author: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const PostModel = model("Post", PostSchema);
module.exports = PostModel;

//ez lesz a posztoláshoz a schéma -->model

const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PostSchema = new Schema(
  {
    title: String,
    summary: String,
    placeChange: String,
    selectedOptions: [
      {
        type: Schema.Types.Mixed,
        label: String,
        value: String,
      },
    ],
    content: String,
    cover: [String],
  },
  {
    timestamps: true,
  }
);

const PostModel = model("Post", PostSchema);
module.exports = PostModel;

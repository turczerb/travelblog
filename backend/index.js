const express = require("express"); //itt nmtom
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const app = express();

app.use(cors());
app.use(express.json()); //express json parser

//connect to the database
mongoose.connect(
  "mongodb+srv://turczerb:l9As72eXSp6dAfa6@cluster0.tjppqxh.mongodb.net/?retryWrites=true&w=majority"
);

//register function. post req: send some informatinon. api endpoint this is
app.post("/registration", async (req, res) => {
  const { userName, passWord, isAdmin } = req.body; //?
  //Create a user
  const userDoc = await User.create({
    userName,
    passWord,
    isAdmin,
  });
  res.json(userDoc);
});

app.listen(4000); //itt fog figyelni?

//mongodb+srv://turczerb:l9As72eXSp6dAfa6@cluster0.tjppqxh.mongodb.net/?retryWrites=true&w=majority
//password mongodb l9As72eXSp6dAfa6

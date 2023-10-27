const express = require("express"); //itt nmtom
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const app = express();
const jwt = require("jsonwebtoken");

const salt = bcrypt.genSaltSync(10);
const secret = "asdfe45we45w34wegw2345werjwkkhgfdfgg";

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json()); //express json parser

//connect to the database
mongoose.connect(
  "mongodb+srv://turczerb:l9As72eXSp6dAfa6@cluster0.tjppqxh.mongodb.net/?retryWrites=true&w=majority"
);

//register function. post req: send some informatinon. api endpoint this is
app.post("/registration", async (req, res) => {
  const { userName, passWord, isAdmin } = req.body; //?
  //Create a user. dupricated issue we have to handle with try catch
  try {
    const userDoc = await User.create({
      userName,
      passWord: bcrypt.hashSync(passWord, salt),
      isAdmin,
    });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json("userName is already taken");
  }
});

//ez itt egy endpoint h belépjek a loginra? nemtudom. 2 paraméter 1 arrow function
app.post("/login", async (req, res) => {
  const { userName, passWord } = req.body;
  //here we have to check is the databases password and username is the same? dont forget it is bcrypted
  const userDoc = await User.findOne({ userName });
  const passOk = bcrypt.compareSync(passWord, userDoc.passWord);
  if (passOk) {
    //user is logged in--> joson webtoken kell
    jwt.sign({ userName, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).json("ok");
    });
  } else {
    //not loggedin
    res.status(400).json("wrong credentials");
  }
});

app.listen(4000); //itt fog figyelni?

//mongodb+srv://turczerb:l9As72eXSp6dAfa6@cluster0.tjppqxh.mongodb.net/?retryWrites=true&w=majority
//password mongodb l9As72eXSp6dAfa6

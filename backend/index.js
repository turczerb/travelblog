const express = require("express"); //itt nmtom
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const Post = require("./models/Post");
const bcrypt = require("bcryptjs");
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require("multer"); //middleware for upload files
const uploadMiddleware = multer({ dest: "uploads/" });
const fs = require("fs");

const salt = bcrypt.genSaltSync(10);
const secret = "asdfe45we45w34wegw2345werjwkkhgfdfgg";

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json()); //express json parserű
app.use(cookieParser()); //wee need to add a cookie parser
app.use("/uploads", express.static(__dirname + "/uploads"));

//connect to the database
mongoose.connect(
  "mongodb+srv://turczerb:l9As72eXSp6dAfa6@cluster0.tjppqxh.mongodb.net/?retryWrites=true&w=majority"
);

//register function. post req: send some informatinon. api endpoint this is
app.post("/registration", async (req, res) => {
  const { userName, passWord, isAdmin, email } = req.body; //?
  //Create a user. dupricated issue we have to handle with try catch
  try {
    const userDoc = await User.create({
      userName,
      passWord: bcrypt.hashSync(passWord, salt),
      isAdmin,
      email,
    });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json("userName is already taken");
  }
});

//ez itt egy endpoint h belépjek a loginra? nemtudom. 2 paraméter 1 arrow function
app.post("/login", async (req, res) => {
  const { userName, passWord, isAdmin } = req.body;
  //here we have to check is the databases password and username is the same? dont forget it is bcrypted
  const userDoc = await User.findOne({ userName });

  const passOk = bcrypt.compareSync(passWord, userDoc.passWord);
  if (passOk) {
    //user is logged in--> joson webtoken kell. de ez nm jel meg vmiért
    jwt.sign({ userName, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).json({
        id: userDoc._id,
        userName,
      });
    });
  } else {
    //not loggedin
    res.status(400).json("wrong credentials");
  }
});

//get mert megszerzem az infót
app.get("/profile", (req, res) => {
  //ww are able to read the cookies ??
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
  //  res.json(req.cookies);
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("Ok");
});

app.post("/post", uploadMiddleware.array("file", 7), async (req, res) => {
  //rename the files. and add some extension so we can open it
  coverPath = [];
  if (req.files) {
    for (let i = 0; i < req.files.length; i++) {
      const { originalname, path } = req.files[i];
      const parts = originalname.split(".");
      const ext = parts[parts.length - 1]; //utolsó elem
      newPath = path + "." + ext;
      fs.renameSync(path, newPath);
      coverPath.push(newPath);
    }
  }

  selectedOptionsValues = [];

  if (req.body.selectedOptions) {
    console.log("checking selected options");
    for (let i = 0; i < req.body.selectedOptions.length; i++) {
      selectedOptionsValues.push(req.body.selectedOptions[i]);
    }
  }

  console.log("options: " + selectedOptionsValues[1]);
  //most fogjuk a sémát használni

  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const {
      title,
      summary,
      placeChange,
      selectedOptions,
      content,
      cover,
      isChecked,
    } = req.body;
    const postDoc = await Post.create({
      title,
      summary,
      placeChange,
      selectedOptions: selectedOptionsValues,
      content,
      cover: coverPath,
      isChecked,
      author: info.id,
    });
    res.json(postDoc);
  });
});

//edit post
app.put("/post", uploadMiddleware.array("file", 7), async (req, res) => {
  coverPath = [];
  if (req.files) {
    for (let i = 0; i < req.files.length; i++) {
      const { originalname, path } = req.files[i];
      const parts = originalname.split(".");
      const ext = parts[parts.length - 1]; //utolsó elem
      newPath = path + "." + ext;
      fs.renameSync(path, newPath);
      coverPath.push(newPath);
    }
  }

  selectedOptionsValues = [];

  if (req.body.selectedOptions) {
    console.log("checking selected options");
    for (let i = 0; i < req.body.selectedOptions.length; i++) {
      selectedOptionsValues.push(req.body.selectedOptions[i]);
    }
  }

  console.log(selectedOptionsValues);
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;

    const {
      postID,
      title,
      summary,
      placeChange,
      selectedOptions,
      content,
      cover,
      isChecked,
    } = req.body;

    const postDoc = await Post.findOneAndUpdate(
      { _id: postID },
      {
        title,
        summary,
        placeChange,
        selectedOptions: selectedOptionsValues,
        content,
        cover: coverPath,
        isChecked,
        author: info.id,
      },
      {
        new: true,
      }
    );
    //const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
    console.log(postDoc);
    res.json({ postDoc, info });
    //res.json(postDoc);
  });
});

app.get("/post", async (req, res) => {
  res.json(
    await Post.find()
      .populate("author", ["userName"])
      .sort({ createdAt: -1 })
      .limit(8)
  );
});

app.get("/post/:id", async (req, res) => {
  const { id } = req.params;
  const postDoc = await Post.findById(id).populate("author", ["userName"]);
  res.json(postDoc);
});

app.get("/myaccount/:id", async (req, res) => {
  const { id } = req.params;
  const userPerson = await User.findById(id).populate("userName");
  res.json(userPerson);
});

app.get("/myaccount/post/:id", async (req, res) => {
  const { id } = req.params;
  const listPosts = await Post.find({ author: id });
  res.json(listPosts);
});

app.listen(4000); //itt fog figyelni?

//mongodb+srv://turczerb:l9As72eXSp6dAfa6@cluster0.tjppqxh.mongodb.net/?retryWrites=true&w=majority
//password mongodb l9As72eXSp6dAfa6

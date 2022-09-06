// import express module
const express = require("express");
// module Axios: Communicates with APIs
const axios = require("axios");
// module de cyptage de mot de passe
const bcrypt = require("bcrypt");
// import body-parser module
const bodyParser = require("body-parser");
// import mongoose module
const mongoose = require("mongoose");
// Connect App with dataBase (sportMafisaDB : Database name )
mongoose.connect("mongodb://localhost:27017/sportMafiaDB");
// creates express application : esmha app
const app = express();
//  import Player Model
const Player = require("./models/player");
//  import Match Model
const Match = require("./models/match");
//  import User Model
const User = require("./models/user");
//  import stadium Model
const Stadium = require("./models/stadium");
// Configure body-parser
// Send response with JSON format
app.use(bodyParser.json());
// Parse Request object
app.use(bodyParser.urlencoded({ extended: true }));
// import path : gestion des chemins de la partie BE
const path = require("path");
// import multer : upload des fichiers
const multer = require("multer");
app.use("/images", express.static(path.join("backend/images")));
// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});
// multer configuration
const MIME_TYPE = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};
const storageConfig = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, "backend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + "-" + Date.now() + "-crococoder-" + "." + extension;
    cb(null, imgName);
  },
});
// import axios : ya7ki mel app lel API (api request)

app.post("/weather", (req, res) => {

  const apiKey = "1d8d17d5f3a3de685c1ac78203a22ca8";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    req.body.country +
    "&appid=" +
    apiKey  + "&units=metric";
  axios.get(apiUrl).then((response) => {
    console.log("Here temp :", response.data.main.temp,"Here humidity :",response.data.main.humidity);
    res.json({msg1: response.data.main.temp,msg2:response.data.main.humidity})
  });
});

// all Buisness Logics
// app.ACTION-HTTP("path",(req,res)=>{
//     Here buisness
// })

let players = [
  { id: 1, name: "messi", nbr: 10, age: 26, position: "ATK" },
  { id: 2, name: "ronaldo", nbr: 11, age: 18, position: "def" },
  { id: 3, name: "mohssen", nbr: 18, age: 22, position: "pivot" },
  { id: 4, name: "islem", nbr: 7, age: 21, position: "goal" },
];
let teams = [
  { id: 1, name: "ca", owner: "ali", Stadium: "manzah", foundation: 1990 },
  { id: 2, name: "ca", owner: "ali", Stadium: "rades", foundation: 1980 },
  { id: 3, name: "ca", owner: "ali", Stadium: "sousse", foundation: 1995 },
  { id: 1, name: "ca", owner: "ali", Stadium: "sfax", foundation: 1990 },
];
//  get all matches
app.get("/matches", (req, res) => {
  Match.find().then((data) => {
    res.json({ match: data });
  });
});
//  Edit match
app.put("/matches/:id", (req, res) => {
  Match.updateOne({ _id: req.params.id }, req.body).then();
});
//  get match By Id
app.get("/matches/:id", (req, res) => {
  Match.findOne({ _id: req.params.id }).then((doc) => {
    if (doc) {
      res.json({ dispMatches: doc });
    }
  });
});
//  get all players
app.get("/players", (req, res) => {
  Player.find().then((docs) => {
    if (docs) {
      res.json({ allplayers: docs });
    }
  });
});
// app.get("/teams",(req,res)=>{
//     res.json({allteams : teams})
// })

//  insert player into DataBase (players)
app.post(
  "/players",
  multer({ storage: storageConfig }).single("img"),
  (req, res) => {
    let player = req.body;
    if (req.file) {
      let file = req.file;
      console.log("Here file", file);
    }
    const url = req.protocol + "://" + req.get("host");
    let playerObj = new Player({
      age: player.age,
      nbr: player.nbr,
      name: player.name,
      position: player.position,
      img: url + "/images/" + req.file.filename,
    });
    playerObj.save((err, doc) => {
      if (err) {
        res.json({ message: "Erro with adding Player" });
      } else {
        res.json({ message: "Player added with success" });
      }
    });
  }
);
//  insert match into DataBase (matches)
app.post("/matches", (req, res) => {
  let match = new Match({
    scoreOne: req.body.ScoreOne,
    scoreTwo: req.body.ScoreTwo,
    teamOne: req.body.TeamOne,
    teamTwo: req.body.TeamTwo,
  });
  match.save();
});
// app.post("/teams",(req,res)=>{
//     console.log("here matches",req.body);
// })

// delete matches by ID
app.delete("/matches/:id", (req, res) => {
  Match.deleteOne({ _id: req.params.id }).then((data) => {
    res.json({ message: data });
  });
});
// delete players by ID
app.delete("/players/:id", (req, res) => {
  Player.deleteOne({ _id: req.params.id }).then((data) => {
    if (data.deletedCount == 1) {
      res.json({ message: `Player N ${req.params.id} is deleted` });
    }
  });
});
// display player By Id
app.get("/players/:id", (req, res) => {
  // console.log("here into display Player", req.params.id);
  // let findedPlayer;
  // for (let i = 0; i < players.length; i++) {
  //   if (players[i].id == req.params.id) {
  //     findedPlayer = players[i];
  //     break;
  //   }
  // }
  // console.log("findedPlayer", findedPlayer);
  // res.json({ player: findedPlayer });
  Player.findOne({ _id: req.params.id }).then((doc) => {
    if (doc) {
      res.json({ player: doc });
    }
  });
});
// eDIT PLAYER
app.put("/players/:id", (req, res) => {
  // let pos;
  // for (let i = 0; i < players.length; i++) {
  //   if (players[i].id == req.params.id) {
  //     players[i] = req.body;
  //     pos = i;
  //     break;
  //   }
  // }

  Player.updateOne({ _id: req.params.id }, req.body).then((doc) => {
    res.json({ player: doc });
  });
});

let data = [
  { id: 1, name: "taha" },
  { id: 2, name: "islem" },
  { id: 3, name: "aymen" },
];
app.get("/data", (req, res) => {
  res.json({ donnee: data });
});

app.post("/search", (req, res) => {
  let findedMatch = [];
  for (let i = 0; i < matches.length; i++) {
    if (
      req.body.TeamOne == matches[i].TeamOne &&
      req.body.TeamTwo == matches[i].TeamTwo
    ) {
      findedMatch.push(matches[i]);
    }
  }
  res.json({ matchFound: findedMatch });
});

// ********************
// app.post("/score",(req,res)=>{
//   let tab=[]
//   console.log("here request :",req.body.scoreOne);
//   for (let i = 0; i < matches.length; i++) {
//     if (matches[i].ScoreOne==req.body.scoreOne) {

//       tab=matches[i];
//     }

//   }
//   console.log(("table :",tab));
//   res.json({var : tab})
// })

//  buisness logic add stadium
app.post("/stadiums", (req, res) => {
  let stadium = new Stadium(req.body);
  stadium.save((err, doc) => {
    if (err) {
      console.log("here error with DB", err);
    } else {
      res.json({ message: "Stadium Added with success" });
    }
  });
});
// Afficher all stadiums
app.get("/stadiums", (req, res) => {
  Stadium.find().then((docs) => {
    res.json({ message: docs });
  });
});
app.get("/stadiums/:id", (req, res) => {
  Stadium.findOne({ _id: req.params.id }).then((docs) => {
    res.json({ message: docs });
  });
});
app.put("/stadiums/:id", (req, res) => {
  Stadium.updateOne({ _id: req.params.id }, req.body).then();
});
// 5édmet el user signup:
app.post("/users/signup", (req, res) => {
  bcrypt.hash(req.body.pwd, 10).then((cryptedPwd) => {
    let user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: cryptedPwd,
    });
    user.save((err, doc) => {
      if (err) {
        console.log("DB error");
      } else {
        let a = {
          firstName: doc.firstName,
          lastName: doc.lastName,
          email: doc.email,
          password: doc.pwd,
        };

        res.json({ message: "welcome", user: a });
      }
    });
  });
});
// 5édmet el user login:

app.post("/users/login", (req, res) => {
  User.findOne({ email: req.body.email })
    .then((responseEmail) => {
      if (!responseEmail) {
        res.json({ message: "0" });
      }
      return bcrypt.compare(req.body.pwd, responseEmail.password);
    })
    .then((responsePwd) => {
      if (!responsePwd) {
        res.json({ message: "1" });
      }

      User.findOne({ email: req.body.email }).then((finalResult) => {
        let user = {
          firstName: finalResult.firstName,
          lastName: finalResult.lastName,
          email: finalResult.email,
        };
        res.json({ message: "2", user: user });
      });
    });
});

// app is importable from another files
module.exports = app;

// weather API :
// app.post("/weather",(req,res)=>{
//   res.json({msg : req.body})
// })
// functions :



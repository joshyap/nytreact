// Dependencies
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

// import the articles model
// import Article from "../models/Article";
var Article = require("./models/Article");

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;


// Initialize Express
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));

// Make public a static dir
app.use(express.static("public"));

// Database configuration with mongoose
// mongoose.connect("mongodb://localhost/nytreact");
// var db = mongoose.connection;

if(process.env.MONGODB_URI){
  mongoose = mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose = mongoose.connect("mongodb://localhost/nytreact");
}
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

var expressRoutes = require("./routes/apiRoutes.js");
app.use(expressRoutes);
app.use(function(req, res){
  res.sendFile(__dirname + "/public/index.html");
});

// This is the route we will send POST requests to save each search.
// app.post("/api", function(req, res) {
//   console.log("BODY: " + req.body.location);
//
//   // Here we'll save the location based on the JSON input.
//   Article.create({
//     title,
//     date,
//     url
//   }, function(err) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send("Saved Article");
//     }
//   });
// });

// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});

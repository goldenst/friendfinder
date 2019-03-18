
var express = require('express');
var path = require('path');
var app = express();

var friends = require ("./app/data/friends");

var PORT = process.env.PORT || 8800;

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// get index page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/home.html"));;
});

// get survey page
app.get("/survey", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/survey.html"));;
});

// get friends list
app.get("/api/friends", function (req, res) {
  return res.json(friends);
});

// post survey page
app.post("/survey", function (req, res) {
  console.log(req.body)
  var userData = req.body
  // push
  res.json(req.body)
  friends.push(userData);

});


app.listen(PORT, function () {
  console.log(' app listining on port: ', PORT)
});
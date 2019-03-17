
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

// get tables page
app.get("/survey", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/survey.html"));;
});


app.listen(PORT, function () {
  console.log(' app listining on port: ', PORT)
});
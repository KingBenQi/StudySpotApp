var express = require("express");
var app = express();

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
  res.render("pages/index");
});

// favourites page
app.get("/favourites", function (req, res) {
  res.render("pages/favourites");
});

// login page
app.get("/login", function (req, res) {
  res.render("pages/login");
});

// modal page
app.get("/modal", function (req, res) {
  res.render("pages/modal");
});

app.listen(8080);
console.log("Server is listening on port 8080");

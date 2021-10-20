var express = require("express");
var app = express();

// set the view engine to ejs
app.set("view engine", "ejs");

// set express to use css file
app.use(express.static(__dirname + "/public"));

// set res details
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.url = req.originalUrl;
  res.locals.host = req.get("host");
  res.locals.protocol = req.protocol;
  next();
});

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

// resetpw page
app.get("/changepw", function (req, res) {
  res.render("pages/changepw");
});

// modal page
app.get("/modal", function (req, res) {
  res.render("pages/modal");
});

// mybookings page
app.get("/mybookings", function (req, res) {
  res.render("pages/mybookings");
});

app.get("/trying", function (req, res) {
  res.render("pages/trying");
});

app.listen(8080);
console.log("Server is listening on port 8080");

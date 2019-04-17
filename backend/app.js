const express = require("express");
const expressValidator = require("express-validator");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
// const passport = require('passport');
// const session = require('express-session');
// Make use of environment variables defined in .env
require("dotenv").config();

// Declare Express App
const app = express();

// Log Requests to Console
app.use(logger("dev"));

// Get and properly parse data from Front End
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Express Validator - Taken from Middleware Options on Github
app.use(
  expressValidator({
    errorFormatter: function(param, msg, value) {
      let namespace = param.split("."),
        root = namespace.shift(),
        formParam = root;

      while (namespace.length) {
        formParam += "[" + namespace.shift() + "]";
      }

      return {
        param: formParam,
        msg: msg,
        value: value
      };
    }
  })
);

// Routers
const announcements = require("./routes/announcements");
const officers = require("./routes/officers");
const sponsors = require("./routes/sponsors");
const mentorship = require("./routes/mentorship");

app.use("/announcements", announcements);
app.use("/officers", officers);
app.use("/sponsors", sponsors);
app.use("/mentorship", mentorship);

module.exports = app;

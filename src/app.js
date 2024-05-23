const { NODE_ENV = "development" } = process.env;
const express = require("express");
const app = express();

// Middleware
const validateNameLength = require("./utils/validateNameLength");

function validateNameLength(req, res, next) {
  const name = req.params
  if (name.length >= 3) {
    //if name is valid we want to move on to next middleware (hello || goodbye)
    next();
  } else {
    // here if name is too short we create Error and send it to error handling
  }
}

// Routes
app.get("/hello/:name", (req, res, next) => {
  const message = `Hello, ${req.params.name}!`;
  res.send(message);
});

app.get("/goodbye/:name", (req, res, next) => {
  const message = `Goodbye, ${req.params.name}.`;
  res.send(message);
});

// Error handling
app.use((req, res, next) => {
  next("That route could not be found!");
});

app.use((err, req, res, next) => {
  err = err || "Internal server error!";
  res.send(err);
});

module.exports = app;

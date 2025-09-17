const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

module.exports = (app) => {
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(helmet());
};

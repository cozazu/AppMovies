/* const getMovies = require("../controllers/movieController.js"); */
const express = require("express");
const movieRouter = express.Router();
const movieController = require("../controllers/movieController.js")

movieRouter.get("/", movieController.getMovies);

module.exports = movieRouter;
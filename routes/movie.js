var express = require('express');
var router = express.Router();
const MovieController = require("../controllers/MovieController");

/* GET home page. */
router.get("/", MovieController.movieList);

module.exports = router;

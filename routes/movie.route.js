var express = require('express');
var router = express.Router();
const MovieController = require("../controllers/MovieController");

/* GET home page. */
router.get("/", MovieController.movieList);
router.get("/:id", MovieController.movieDetails);
router.post("/", MovieController.createMovie);
router.put("/:id", MovieController.updateMovie);
router.delete("/:id", MovieController.deleteMovie);

module.exports = router;

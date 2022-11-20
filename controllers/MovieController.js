// const Book = require("../models/BookModel");
// const { body,validationResult } = require("express-validator");
// const { sanitizeBody } = require("express-validator");
// const apiResponse = require("../helpers/apiResponse");
// const auth = require("../middlewares/jwt");
// var mongoose = require("mongoose");
// mongoose.set("useFindAndModify", false);

// Book Schema
// function BookData(data) {
// 	this.id = data._id;
// 	this.title= data.title;
// 	this.description = data.description;
// 	this.isbn = data.isbn;
// 	this.createdAt = data.createdAt;
// }

const handleError = (res = {}, err = {}) => {
	// Prints error in console
	if (process.env.NODE_ENV === 'development') {
	  console.log(err)
	}
	// Sends error to user
	res.status(err.code).json({
	  errors: {
		msg: err.message
	  }
	})
  }

const movieList = async (req, res) => {
	try {
	//   const query = await checkQueryString(req.query)
	  res.status(200).json({foo:'bar'})
	} catch (error) {
	  handleError(res, error)
	}
};

module.exports = { movieList }
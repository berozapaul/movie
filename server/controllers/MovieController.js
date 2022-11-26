const { getMovieList, createNewMovie, updateMovieById, deleteMovieById } = require("../services/MovieService");
const apiResponse = require("../utils/apiResponse");


const movieList = async (req, res) => {
	try {
		getMovieList(req, res);
	} catch (err) {
		return apiResponse.ErrorResponse(res, err);
	}
};

const movieDetails = async (req, res) => {
	try {
        console.log('Movie details go here');
		return apiResponse.successResponseWithData(res, "Operation success", req.params.id);
	} catch (err) {
		return apiResponse.ErrorResponse(res, err);
	}
};

const updateMovie = async (req, res) => {
	try {
		updateMovieById(req, res);
	} catch (err) {
		return apiResponse.ErrorResponse(res, err);
	}
};

const createMovie = async (req, res) => {
	try {
		createNewMovie(req, res);
	} catch (err) {
		return apiResponse.ErrorResponse(res, err);
	}
};

const deleteMovie = async (req, res) => {
	try {
		deleteMovieById(req, res);
	} catch (err) {
		return apiResponse.ErrorResponse(res, err);
	}
};

module.exports = { movieList, movieDetails, updateMovie, createMovie, deleteMovie }
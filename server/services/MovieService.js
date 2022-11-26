const MovieModel = require("../models/MoiveModel");
const apiResponse = require("../utils/apiResponse");



const getMovieList = async (req, res) => {
	try {
		const movies = await MovieModel.find({}).sort({'createdAt': -1}).limit(10);
		return apiResponse.successResponseWithData(res, "Operation success", movies);
	} catch (err) {
		throw new Error(e.message)
	}
};

const createNewMovie = async (req, res) => {
	try {
		const IMDBDefaultId = 'pFlaoHTZeyNkG83vxsAJiGzfSsa';
		const { name, description, imdbId, genres = [] } = req.body;
		var movieObj = new MovieModel({ 
			name, 
			description, 
			genres,
			imdbId: imdbId || IMDBDefaultId
		});

		movieObj.save( (err) => {
			if (err) { 
				return apiResponse.ErrorResponse(res, err);
			}
			return apiResponse.successResponseWithData(res, "Movie add Success.", movieObj);
		});
	} catch (err) {
		return apiResponse.ErrorResponse(res, err);
	}
};


const updateMovieById = async (req, res) => {
	try {
		MovieModel.findById(req.params.id, function (err, DBModel) {
			if(!DBModel){
				return apiResponse.notFoundResponse(res, "Movie does not exist with this id");
			}
			
			const { name } = req.body;
			DBModel.name = name || DBModel.name;

			DBModel.save( (err) => {
				if (err) { 
					return apiResponse.ErrorResponse(res, err);
				}
				return apiResponse.successResponseWithData(res, "Movie update success.", DBModel);
			});
		});
	} catch (err) {
		return apiResponse.ErrorResponse(res, err);
	}
};

const deleteMovieById = async (req, res) => {
	try {
		MovieModel.findOneAndRemove({_id: req.params.id}, function (err) {
			if (err) { 
				return apiResponse.ErrorResponse(res, err); 
			}
			return apiResponse.successResponse(res, "Movie has been deleted.");
		});
	} catch (err) {
		return apiResponse.ErrorResponse(res, err);
	}
};

module.exports = { getMovieList, createNewMovie, deleteMovieById, updateMovieById }
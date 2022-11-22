const MovieModel = require("../models/MoiveModel");
const apiResponse = require("../utils/apiResponse");



const getMovieList = async () => {
	try {
		return await MovieModel.find({});
	} catch (err) {
		throw new Error(e.message)
	}
};

const createNewMovie = async (data, res) => {
	try {
		const { name, description, imdbId, genres = [] } = data;
		var movieObj = new MovieModel({ 
			name, 
			description, 
			genres,
			imdbId: imdbId || 'pFlaoHTZeyNkG83vxsAJiGzfSsa'
		});

		return movieObj.save(function (err) {
			if (err) { 
				throw new Error(e.message)
			}
			return apiResponse.successResponseWithData(res,"Movie add Success.", movieObj);
		});
	} catch (err) {
		throw new Error(e.message)
	}
};
module.exports = { getMovieList, createNewMovie }
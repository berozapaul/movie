const MovieModel = require("../models/MoiveModel");



const getMovieList = async () => {
	try {
		return await MovieModel.find({});
	} catch (err) {
		throw new Error(e.message)
	}
};

module.exports = { getMovieList }
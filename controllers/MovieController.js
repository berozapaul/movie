const { getMovieList } = require("../services/MovieService");
const apiResponse = require("../utils/apiResponse");


const movieList = async (req, res) => {
	try {
		let movies = await getMovieList();
		movies = movies.length > 0 ? movies : []
		return apiResponse.successResponseWithData(res, "Operation success", movies);
	} catch (err) {
		//throw error in json response with status 500. 
		return apiResponse.ErrorResponse(res, err);
	}
};

const movieDetails = async (req, res) => {
	try {
        console.log('Movie details go here');
	} catch (err) {
		//throw error in json response with status 500. 
		return apiResponse.ErrorResponse(res, err);
	}
};

const updateMovie = async (req, res) => {
	try {
		var movieObj = new MovieModel({ title: 'The inside out 2', description: 'Good', isbn: '13333', _id:req.params.id});
        console.log(req.params)
		MovieModel.findById(req.params.id, function (err, foundMovie) {
			if(foundMovie === null){
				return apiResponse.notFoundResponse(res,"Movie not exists with this id");
			}else{
				MovieModel.findByIdAndUpdate(req.params.id, movieObj, {},function (err) {
					console.log(err)
					if (err) { 
						return apiResponse.ErrorResponse(res, err); 
					}else{
						return apiResponse.successResponseWithData(res,"Movie update Success.", movieObj);
					}
				});
			}
		});
	} catch (err) {
		//throw error in json response with status 500. 
		// return apiResponse.ErrorResponse(res, err);
		console.log(err);
	}
};

const createMovie = async (req, res) => {
	try {
		var movieObj = new MovieModel({ title: 'The inside out', description: 'Good', isbn: '13333'});
		console.log('here', movieObj);

		movieObj.save(function (err) {
			if (err) { return apiResponse.ErrorResponse(res, err); }
			return apiResponse.successResponseWithData(res,"Movie add Success.", movieObj);
		});
	} catch (err) {
		//throw error in json response with status 500. 
		return apiResponse.ErrorResponse(res, err);
	}
};

const deleteMovie = async (req, res) => {
	try {
		MovieModel.findById(req.params.id, function (err, foundMovie) {
			if(foundMovie === null){
				return apiResponse.notFoundResponse(res,"Book not exists with this id");
			}else{
				MovieModel.findByIdAndRemove(req.params.id,function (err) {
					if (err) { 
						return apiResponse.ErrorResponse(res, err); 
					}else{
						return apiResponse.successResponse(res,"Movie delete Success.");
					}
				});
			}
		});
	} catch (err) {
		//throw error in json response with status 500. 
		return apiResponse.ErrorResponse(res, err);
	}
};

module.exports = { movieList, movieDetails, updateMovie, createMovie, deleteMovie }
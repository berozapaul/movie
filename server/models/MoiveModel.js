const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    genres: {
      type: [String]
    },
    rating: {
      type: Number
    },
    imdbId: {
      type: String
    },
  },
  {
    versionKey: false,
    timestamps: true
  }
)
module.exports = mongoose.model('Movie', MovieSchema)

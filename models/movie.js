const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
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

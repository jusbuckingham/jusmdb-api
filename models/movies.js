const mongoose = require("mongoose");

const MoviesSchema = new mongoose.Schema({
    url: String,
    movie: { type: String, required: true },
    director: String,
    cast: String,
    music: String,
    run_time: String,
    image_url: String,
    summary: String,
});

const Movies = mongoose.model("Movies", MoviesSchema);

module.exports = Movies; 
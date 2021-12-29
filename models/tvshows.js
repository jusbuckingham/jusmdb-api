const mongoose = require("mongoose");

const TvshowsSchema = new mongoose.Schema({
    url: String,
    title: { type: String, required: true },
    cast: String,
    music: String,
    run_time: String,
    image_url: String,
    summary: String,
});

const Tvshows = mongoose.model("Tvshows", TvshowsSchema);

module.exports = Tvshows; 
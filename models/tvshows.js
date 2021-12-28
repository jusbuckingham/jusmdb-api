const mongoose = require("mongoose");

const TvshowsSchema = new mongoose.Schema({
    url: String,
    title: { type: String, required: true },
    image_url: String,
    summary: String,
});

const Tvshows = mongoose.model("Tvshows", TvshowsSchema);

module.exports = Tvshows; 
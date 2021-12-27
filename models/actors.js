const mongoose = require("mongoose");

const ActorsSchema = new mongoose.Schema({
    url: String,
    actor: { type: String, required: true },
    image_url: String,
    bio: String,
});

const Actors = mongoose.model("Actors", ActorsSchema);

module.exports = Actors; 

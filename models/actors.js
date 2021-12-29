const mongoose = require("mongoose");

const ActorsSchema = new mongoose.Schema({
    url: String,
    actor: { type: String, required: true },
    born: String,
    work: String,
    image_url: String,
    bio: String,
});

const Actors = mongoose.model("Actors", ActorsSchema);

module.exports = Actors; 

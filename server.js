const express = require("express");
const { Actors } = require("./models");
const { Movies } = require("./models");
const { Tvshows } = require("./models");
const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(express.json());
app.get("/actors", async (request, response) => {

    try {
        const actorsArray = await Actors.find({});
        response.json({ actorsArray });
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/movies", async (request, response) => {

    try {
        const moviesArray = await Movies.find({});
        response.json({ moviesArray });
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/tvshows", async (request, response) => {

    try {
        const tvshowsArray = await Tvshows.find({});
        response.json({ tvshowsArray });
    } catch (error) {
        response.status(500).send(error);
    }
});

app.listen(3000, () => {
    console.log("Server is running at port 3000 🎧")
});
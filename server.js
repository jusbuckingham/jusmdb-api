const express = require("express");
const { Actors } = require("./models");
const app = express();

app.use(express.json());
app.get("/actors", async (request, response) => {

    try {
        const actorsArray = await Actors.find({});
        response.json({ actorsArray });
    } catch (error) {
        response.status(500).send(error);
    }
});

app.listen(3000, () => {
    console.log("Server is running at port 3000")
});
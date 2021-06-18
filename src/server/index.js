const dotenv = require("dotenv");
dotenv.config();

/*routes endpoint*/ 
projectData = {};

var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");

const app = express();

/*Middleware*/
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

/*cors*/
const cors = require("cors");
app.use(cors());

app.use(express.static("dist"));

app.get("/", function (req, res) {
    res.sendFile(path.resolve('dist/index.html'));
});

const port = 8000;

// designates port app will listen for incoming requests
app.listen(port, () => {console.log(`App listening on port ${port}`)});

app.get("/apiKey", (req, res) => {
    res.send(process.env.API_KEY);
});

const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");//importing the body-parser to handle the json bodies or requests
const recipeRoutes = require("./routes/recipeRoutes");

//initialize environment variables
require("dotenv").config(); //it will load the environmengt variables from the .env file

const app = express();

//middleware to parse JSON
app.use(bodyParser.json());

//connect to the mongodb databse
connectDB();

//routes
app.use("/api/recipes", recipeRoutes);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log("server is running at the url http://localhost:9000")
})

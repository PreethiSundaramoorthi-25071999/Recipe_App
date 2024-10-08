//we have to create the model

const mongoose = require('mongoose');

//define the schema for a recipe

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    ingredients: {
        type: [String],
        required: true
    },

    instructions: {
        type: String,
        required: true
    }
});

//create the Recipe model from the schema
const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe; // export the model
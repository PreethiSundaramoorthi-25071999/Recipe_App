//import the recipeModel

const Recipe = require("../models/recipeModel");

//create a new recipe
exports.createRecipe = async(req, res) => {
    try {
        const newRecipe = new Recipe(req.body); //create the new recipe from the request body
        await newRecipe.save();
        res.status(201).json(newRecipe);
    } catch(error){
        res.status(400).json({message: "Not-created", error})
    }
}

exports.getAllRecipes = async(req, res) => {
    try{
        const recipes = await Recipe.find() //to get the receipe data
        res.status(200).json(recipes);
    } catch(error){
        res.status(500).json({message: "Error fetching the recipes", error})
    }
}

//////
// Get recipe by ID
exports.getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if(!recipe) {
            return res.status(404).json({
                message: "Recipe not found"
            })
        }
        res.status(200).json(recipe);
    } catch(error) {
        res.status(500).json({
            message: "Error fetching the recipe", 
            error: error.message
        })
    }
}


// Update a recipe
exports.updateRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(!recipe) {
            return res.status(404).json({
                message: "Recipe not found"
            })
        }
        res.status(200).json(recipe);
    } catch(error) {
        res.status(400).json({
            message: "Error Updating the recipe", 
            error: error.message
        })
    }
}


//Delete a recipe
exports.deleteRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndDelete(req.params.id);
        if(!recipe) {
            return res.status(404).json({
                message: "Recipe not found"
            })
        }
        res.status(204).send();
    } catch(error) {
        res.status(400).json({
            message: "Error deleting the recipe", 
            error: error.message
        })
    }
}
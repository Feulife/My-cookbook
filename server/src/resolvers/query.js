import Recipe from "../models/recipe.js";

const query = {
  recipes: async () => await Recipe.find({}),
  getRecipeTitle: async ({title}) => await Recipe.find(recipe => recipe.title == title),
  getRecipeIngredient: async ({ingredient}) => await Recipe.find(recipe => recipe.ingredient == ingredient),
};

export default query;

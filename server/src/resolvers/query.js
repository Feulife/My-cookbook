import Recipe from "../models/recipe.js";

const query = {
  recipes: async () => await Recipe.find({}),

  getRecipeTitle: async (_, {args}) => {
  const result = await Recipe.filter((result) => {result.title === args.title})  
  },

  getRecipeIngredient: async (ingredient) =>
    await Recipe.find((recipe) => recipe.ingredient == ingredient),
};

export default query;

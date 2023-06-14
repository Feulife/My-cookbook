import Recipe from "../models/recipe.js";

const query = {
  title: async (_, args) => {
    console.log(args.title);
    const result = await Recipe.find({ title: `${args.title}` });
    console.log(result);
    return result;
  },

  recipes: async () => await Recipe.find({}),
};

// getRecipeIngredient: async (ingredient) =>
//   await Recipe.find((recipe) => recipe.ingredient == ingredient),

export default query;

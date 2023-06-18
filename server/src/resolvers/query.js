import Recipe from "../models/recipe.js";

const query = {
  title: async (_, args) => {
    console.log(args.title);
    const result = await Recipe.find({ title: `${args.title}` });
    console.log(result);
    return result;
  },

  recipes: async () => await Recipe.find({}),

  ingredient: async (_, args) => {
  console.log(args.ingredient);
    const result = await Recipe.find({ ingredient: `${args.ingredient}`});
    console.log('ingradient', result);
    return result;
  }
};


export default query;

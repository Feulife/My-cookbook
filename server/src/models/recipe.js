import mongoose from "mongoose";

// const Recipe = mongoose.model("Recipe", {
//   title: String,
//   ingredient: String,
//   content: String,
//   createdAt: String,
//   updatedAt: String,
//   like: Boolean,
// });

// Recipe.createIndex( {ingredient: "text"});
// export default Recipe;

const RecipeScema = mongoose.Schema( {
    title: String,
    ingredient: String,
    content: String,
    createdAt: String,
    updatedAt: String,
    like: Boolean,
  });
  
  RecipeScema.index( {ingredient: "text"});
  const Recipe = mongoose.model('Recipe', RecipeScema)
  export default Recipe;
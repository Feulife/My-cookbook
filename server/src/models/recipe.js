import mongoose from "mongoose";

const Recipe = mongoose.model("Recipe", {
  title: String,
  ingredient: String,
  content: String,
  createdAt: String,
  updatedAt: String,
  like: Boolean,
});

export default Recipe;
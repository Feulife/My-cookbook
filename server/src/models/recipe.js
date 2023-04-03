import mongoose from "mongoose";

export const Recipe = mongoose.model("Recipe", {
  title: String,
  ingredient: String,
  content: String,
  createdAt: String,
  updatedAt: String,
});

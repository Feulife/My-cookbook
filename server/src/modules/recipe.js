import mongoose from 'mongoose'

const recipeSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true
    },

    favoriteCount: {
      type: Number,
      default: 0
    },
  },
  {
    timestamps: true
  },
)

const Recipe = mongoose.model('Recipe', recipeSchema)
export default Recipe
import mongoose from 'mongoose'

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    ingredient: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    createdAt: {
      type: String,
      required: true
    },
    updatedAt: {
      type: String,
      required: true
    }
  },
)

const Recipe = mongoose.model('sample_cookbook', recipeSchema)
export default Recipe;

// const recipeSchema = new mongoose.Schema(
//   {
//     content: {
//       type: String,
//       required: true
//     },
//     ingredient: {
//       type: String,
//       require: true
//     },
//     favoriteCount: {
//       type: Number,
//       default: 0
//     },
//   },
//   {
//     timestamps: true
//   },
// )

// const Recipe = mongoose.model('Recipe', recipeSchema)
// export default Recipe
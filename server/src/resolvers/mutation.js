import mongoose from "mongoose"

const mutation = {
  newRecipe: async (parent, args, { models }) => {
    return await Recipe.create({
      content: args.content,
      favoriteCount: 0
    })
  },

  deleteRecipe: async (parent, { id }, { models }) => {
    const recipe = await Recipe.findById(id)

    try {
      await recipe.remove()
      return true
    } catch (err) {
      return false
    }
  },
  updateRecipe: async (parent, { content, id }, { models }) => {
    const recipe = await Recipe.findById(id)
    return await Recipe.findOneAndUpdate(
      {
        _id: id
      },
      {
        $set: {
          content
        }
      },
      {
        new: true
      }
    )
  }
}

export default mutation
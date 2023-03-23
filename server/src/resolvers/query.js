const query = {
  recipes: async (parent, arg, { models }) => {
    return await models.Recipe.find().limit(100)
  },
  recipe: async (parent, args, { models }) => {
    return await models.Recipe.findById(args.id)
  },
  recipeFeed: async (parent, { cursor }, { models }) => {
    const limit = 10
    const hasNextPage = false
    const cursorQuery = {}

    if (cursor) {
      cursorQuery = { _id: { $lt: cursor } }
    }
    const recipes = await models.Recipe.find(cursorQuery)
      .sort({ _id: -1 })
      .limit(limit + 1)
    
    if (recipes.length > limit) {
      hasNextPage = true
      recipes = recipes.slice(0, -1)
    }

    const newCursor = recipes[recipes.length - 1]._id

    return {
      recipes,
      cursor: newCursor,
      hasNextPage,
    }
  }
}

export default query
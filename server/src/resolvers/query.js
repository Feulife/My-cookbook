import Recipe from '../models/recipe.js'

const query = {
  recipes: async () => await Recipe.find({}),
}

export default query
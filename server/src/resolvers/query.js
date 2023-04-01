const query = {
  recipes: async () => await Recipe.find({}),
}

export default query
import Recipe from '../models/recipe.js'

const mutation = {
  create: async (_, { title, ingredient, content, createdAt }) => {
    console.log(ingredient);    
    const newRecipe = new Recipe({ title, ingredient, content, createdAt });
    // const arrayOfIngredient = [];
    // const makeArray = (ingr) => ingr.slice(', ').map(i => arrayOfIngredient.push(i))
    const arrayOfIngredient = ingredient.split(', ');
    console.log(arrayOfIngredient);
    // await makeArray(ingredient);
    // const newRecipe = new Recipe({ title, $push: {ingredient: arrayOfIngredient}, content, createdAt });
    // await newRecipe.save().updateOne({$push: {ingredient: ingredient}});
    await newRecipe.save();
    // await newRecipe.updateOne({$push: {ingredient: arrayOfIngredient}})
    return newRecipe;
  },

  delete: async (_, { id }) => {
    const result = await Recipe.deleteOne({ _id: id });
    if (result.acknowledged && result.deletedCount == 1) {
      return id;
    }
    return null;
  },
  
  edit: async (_, { id, title, ingredient, content, updatedAt }) => {
    const result = await Recipe.updateOne(
      { _id: id },
      { $set: { title, ingredient, content, updatedAt } }
    );
    if (result.acknowledged && result.modifiedCount == 1) {
      return await Recipe.findOne({ _id: id });
    }
    return null;
  }
}

export default mutation
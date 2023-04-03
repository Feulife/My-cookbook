import { Recipe } from "../models/recipe.js";

export const resolvers = {
  Query: {
    recipes: async () => await Recipe.find({}),
  },
  Mutation: {
    createRecipe: async (_, { title, ingredient, content, createdAt }) => {
      const newRecipe = new Recipe({ title, ingredient, content, createdAt });
      await newRecipe.save();
      return newRecipe;
    },

    deleteRecipe: async (_, { id }) => {
      const result = await Recipe.deleteOne({ _id: id });
      if (result.acknowledged && result.deletedCount == 1) {
        return id;
      }
      return null;
    },

    editRecipe: async (_, { id, title, ingredient, content, updetedAt }) => {
      const result = await Recipe.updateOne(
        {
          _id: id,
        },
        {
          $set: {
            title,
            ingredient,
            content,
            updetedAt,
          },
        }
      );
      if (result.acknowledged && result.modifiedCount == 1) {
        return await Recipe.findOne({ _id: id });
      }
      return null;
    },
  },
};

// import Query from './query.js'
// import Mutation from './mutation.js'
import { DateTimeScalar } from "graphql-date-scalars";

// export const resolvers = {
//   Query,
//   Mutation,
//   // DateTime: DateTimeScalar
// }

import gql from 'graphql-tag'

export const typeDefs = gql`
  scalar DateTime

  type Recipe {
    id: ID!
    content: String!
    FavoriteCount: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type RecipeFeed {
    recipes: [Recipe]!
    cursor: String!
    hasNextPage: Boolean!
  }

  type Query {
    recipes: [Recipe!]!
    recipe(id: ID): Recipe!
    RecipeFeed(cursor: String): RecipeFeed
  }

  type Mutation {
    newRecipe(content: String): Recipe
    updateRecipe(id: ID!, content: String!): Recipe!
    deleteRecipe(id: ID): Recipe!
    toggleFavorite(id: ID!): Recipe!    
  }
`
import gql from 'graphql-tag'

export const typeDefs = gql`
  scalar DateTime

  type Query {
    recipes: [Recipe!]!    
  }

  type Recipe {
    id: ID!
    title: String!
    ingredient: String!
    content: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  } 

  type Mutation {
    createRecipe(title: String, ingredient: String, content: String, createdAt: DateTime): Recipe
    editRecipe(id: ID!, title: String!, ingredient: String! content: String!, updatedAt: DateTime!): Recipe!
    deleteRecipe(id: ID): Recipe!
  }
`
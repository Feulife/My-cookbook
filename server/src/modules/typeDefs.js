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

  
`
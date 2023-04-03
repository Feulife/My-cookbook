import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    recipes: [Recipe]
  }
  type Recipe {
    id: ID
    title: String
    ingredient: String
    content: String
    createdAt: String
    updatedAt: String
  }
  type Mutation {
    create(
      title: String
      ingredient: String
      content: String
      createdAt: String
    ): Recipe
    delete(id: ID): ID
    edit(
      id: ID
      title: String
      ingredient: String
      content: String
      updatedAt: String
    ): Recipe
  }
`;

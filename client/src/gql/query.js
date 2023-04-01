import { gql } from "@apollo/client";
export const GET_RECIPES = gql`
  query Query {
    recipes {
      id
      title
      ingredient
      content
      createdAt
      updatedAt
    }
  }
`;
export const GET_RECIPE = gql`
  query Recipe($id: ID!) {
    recipe(id: $id) {
      id
      title
      ingredient
      content
      createdAt
      updatedAt
    }
  }
`;

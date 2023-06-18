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

  export const GET_TITLE = gql`
  query Query($title: String) {
    title(title: $title) {
      id
      title
      ingredient
      content
      createdAt
      updatedAt
    }
  }
  `;

export const GET_INGREDIENT = gql`
query Query($ingredient: String) {
  ingredient(ingredient: $ingredient) {
    id
      title
      ingredient
      content
      createdAt
      updatedAt
  }
}
`;


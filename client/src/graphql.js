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

export const NEW_RECIPE = gql`
  mutation Mutation($title: String, $ingredient: String, $content: content, $createdAt: String) {
    createRecipe(title: $title, ingredient: $ingredient, content: $content, createdAt: $createdAt) {
      id
      title
      ingredient
      content
      createdAt      
    }
  }
`

export const EDIT_RECIPE = gql`
  mutation Mutation($id: ID, $title: String!, $ingredient: String!, $content: String!, $updatedAt: String!) {
    editRecipe(id: $id, title: $title, ingredient: $ingredient, content: $content, updatedAt: $updatedAt) {
      id
      title
      ingredient
      content
      updatedAt
    }
  }
`

export const DELETE_RECIPE = gql`
  mutation Mutation($id: ID!) {
    deleteRecipe(id: $id)
  }
`

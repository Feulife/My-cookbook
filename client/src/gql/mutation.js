import { gql } from "@apollo/client"

export const NEW_RECIPE = gql`
  mutation newRecipe($content: $content) {
    newRecipe(content: $content) {
      id
      content
      createdAt
      favoriteCount
    }
  }
`

export const EDIT_RECIPE = gql`
  mutation updateRecipe($id: ID!, $content: String!) {
    updateRecipe(id: $id, content: $content) {
      id
      content
      createdAt
      favoriteCount
    }
  }
`

export const DELETE_RECIPE = gql`
  mutation deleteRecipe($id: ID!) {
    deleteRecipe(id: $id)
  }
`

export const TOGGLE_FAVORITE = gql`
  mutation toggleFavorite($id: ID!) {
    toggleFavorite(id: $id) {
      id
      favoriteCount
    }
  }
`
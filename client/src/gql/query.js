import { gql } from "@apollo/client";
export const GET_RECIPES = gql`
  query recipeFeed($cursor: String) {
    recipeFeed(cursor: $cursor) {
      cursor
      hasNextPage
      recipes {
        id
        createdAt
        content
        favoriteCount
      }
    }
  }
`;
export const GET_RECIPE = gql`
  query recipe($id: ID!) {
    recipe(id: $id) {
      id
      createdAt
      content
      favoriteCount
    }
  }
`;

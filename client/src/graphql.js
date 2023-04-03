import { gql } from '@apollo/client';

export const RECIPES_QUERY = gql`
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

export const CREATE_RECIPE_MUTATION = gql`
    mutation Mutation($title: String, $ingredient: String, $content: String, $createdAt: String) {
        create(title: $title, ingredient: $ingredient, content: $content, createdAt: $createdAt) {
            id
            title
            ingredient
            content
            createdAt
        }
    }
`;

export const DELETE_RECIPE_MUTATION = gql`
    mutation Mutation($id: ID) {
        delete(id: $id)
    }
`;

export const EDIT_RECIPE_MUTATION = gql`
    mutation Mutation($id: ID, $title: String, $ingredient: String, $content: String, $updatedAt: String) {
        edit(id: $id, title: $title, ingredient: $ingredient, content: $content, updatedAt: $updatedAt) {
            id
            title
            ingredient
            content
            updatedAt
        }
    }
`;
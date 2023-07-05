import { useMutation } from "@apollo/client";
import { useState } from "react";
import {
  DELETE_RECIPE_MUTATION,
  EDIT_RECIPE_MUTATION,
} from "../../graphql/mutation";
import { GET_RECIPES } from "../../graphql/query";
import style from "./RecipeModal/RecipeModal.module.css";

export default function Recipe({ recipe }) {
  const [deleteRecipeMutation] = useMutation(DELETE_RECIPE_MUTATION, {
    refetchQueries: [{ query: GET_RECIPES }],
  });

  const deleteRecipe = () => {
    deleteRecipeMutation({
      variables: {
        id: recipe.id,
      },
    });
  };

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(recipe.title);
  const [ingredient, setIngredient] = useState(recipe.ingredient);
  const [content, setContent] = useState(recipe.content);
  const [editRecipeMutation] = useMutation(EDIT_RECIPE_MUTATION, {
    refetchQueries: [{ query: GET_RECIPES }],
  });
  const [visible, setVisible] = useState(Boolean);

  const saveChanges = () => {
    editRecipeMutation({
      variables: {
        id: recipe.id,
        title: title,
        ingredient: ingredient,
        content: content,
      },
    });
    setIsEditing(false);
  };

  const discardChanges = () => {
    setIsEditing(false);
    setTitle(recipe.title);
    setIngredient(recipe.ingredient);
    setContent(recipe.content);
  };

  const rootClasses = [style.modal];

  if (visible) {
    rootClasses.push(style.active);
  }

  return (
    <div className="thumb_container">
      <div className="detail_wrapper">
        <h3 className="titleinfo">{recipe.title}</h3>
        {recipe.createdAt}
        <button
          className="recipeinfo"
          onClick={() => {
            setVisible(true);
          }}
        >
          Know more...
        </button>
        <div
          className={rootClasses.join(" ")}
          onClick={() => setVisible(false)}
        >
          <div className="thumb_container" onClick={(e) => e.stopPropagation()}>
            <div>
              <h3 className="titleinfo">{recipe.title}</h3>
              {isEditing ? (
                <input
                class="form-outline w-100"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value.toUpperCase())}
                  
                />
              ) : (
                <></>
              )}
              {isEditing ? (
                <input
                  type="text"
                  class="form-outline w-100"
                  value={ingredient}
                  onChange={(e) => setIngredient(e.target.value.toLowerCase())}
                />
              ) : (
                <div className="desc">
                  <h3>Ingredient</h3>
                  <p>
                    <b>{recipe.ingredient}</b>
                  </p>
                </div>
              )}
              {isEditing ? (
                <input
                class="form-outline w-100"
                  type="text"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  
                />
              ) : (
                <div className="desc">
                  <h3>Content</h3>
                  <p>
                    <b>{recipe.content}</b>
                  </p>
                </div>
              )}

              {isEditing ? (
                <>
                  <button
                    className="btn btn-success mr-2"
                    onClick={saveChanges}
                  >
                    Save
                  </button>
                  <button className="btn btn-danger" onClick={discardChanges}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-info mr-2"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit
                  </button>
                  <button className="btn btn-danger" onClick={deleteRecipe}>
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

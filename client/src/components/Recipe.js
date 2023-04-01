import { useMutation } from "@apollo/client";
import { useState } from "react";
// import { GET_RECIPES } from "../gql/query";
// import { DELETE_RECIPE } from '../gql/mutation.js'
// import { EDIT_RECIPE } from "../gql/mutation";
import { GET_RECIPES, EDIT_RECIPE, DELETE_RECIPE } from "../graphql";

export default function Recipe({recipe}) {
const [deleteRecipeMutation] = useMutation(DELETE_RECIPE, {
    refetchQueries: [
      {query: GET_RECIPES},
    ]
  })

  const deleteRecipe = () => {
    deleteRecipeMutation({
      variables: {
        id: recipe.id,
      }
    })
  }

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(recipe.title);
  const [ingredient, setIngredient] = useState(recipe.ingredient);
  const [content, setContent] = useState(recipe.content)
  const [editRecipe] = useMutation(EDIT_RECIPE, {
    refetchQueries: [{ query: GET_RECIPES }],
  });

  const saveChanges = () => {
    editRecipe({
      variables: {
        id: recipe.id,
        title: recipe.title,
        ingradient: recipe.ingredient,
        content: recipe.content
      },
    });
    setIsEditing(false);
  };

  const discardChanges = () => {
    setIsEditing(false);
    setTitle(recipe.title);
    setIngredient(recipe.ingredient);
    setContent(recipe.content)
  };

  return (
    <tr>
      <td>
        {isEditing ? 
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
         : 
          recipe.title
        }
      </td>
      <td>
        {isEditing
        ? <input type='text'
        value={ingredient}
        onChange={e => setIngredient(e.target.value)}
        className='form-control'
        />
        : recipe.ingredient
      }
      </td>
      <td>
        {isEditing
        ? <input type='text'
        value={content}
        onChange={e => setContent(e.target.value)}
        className='form-control'
        />
        : recipe.content
      }
      </td>
      <td>
        {isEditing
        ? <>
          <button className='btn btn-success mr-2' onClick={saveChanges}>
            Save
          </button>
          <button className='btn btn-danger' onClick={discardChanges}>
            Cancel
          </button>
        </>
        : <>
          <button className='btn btn-info mr-2' onClick={() => setIsEditing(true)}>
            Edit
          </button>          
          <button className='btn btn-danger' onClick={deleteRecipe}>
            Delete
          </button>      
        </>
        }
      </td>
    </tr>
  );
}

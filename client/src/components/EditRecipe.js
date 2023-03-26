import { useMutation } from "@apollo/client";
import { useState } from "react";
import { GET_RECIPE } from "../gql/query";
import { EDIT_RECIPE } from "../gql/mutation";

export default function EditRecipe({ recipe }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(recipe.title);
  const [ingradient, setIngradient] = useState(recipe.ingradient);
  const [editRecipe] = useMutation(EDIT_RECIPE, {
    refetchQueries: [{ query: GET_RECIPE }],
  });

  const saveChanges = () => {
    editRecipe({
      variables: {
        id: recipe.id,
        title: recipe.title,
        ingradient: recipe.ingradient,
      },
    });
    setIsEditing(false);
  };

  const discardChanges = () => {
    setIsEditing(false);
    setTitle(recipe.title);
    setIngradient(recipe.ingradient);
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
        value={ingradient}
        onChange={e => setIngradient(e.target.value)}
        className='form-control'
        />
        : recipe.ingradient
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
        </>
        }
      </td>
    </tr>
  );
}

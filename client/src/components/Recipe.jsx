import { useMutation } from '@apollo/client';
import { useState } from 'react';
import {DELETE_RECIPE_MUTATION, RECIPES_QUERY, EDIT_RECIPE_MUTATION} from '../graphql';

export default function Recipe({recipe}) {
    const [deleteRecipeMutation] = useMutation(DELETE_RECIPE_MUTATION, {
        refetchQueries: [
            {query: RECIPES_QUERY},
        ]
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
    const [content, setContent] = useState(recipe.content)
    const [editRecipeMutation] = useMutation(EDIT_RECIPE_MUTATION, {
        refetchQueries: [
            {query: RECIPES_QUERY},
        ]
    });

    const saveChanges = () => {
        editRecipeMutation({
            variables: {
                id: recipe.id,
                title: title,
                ingredient: ingredient,
                content: content
            },
        });
        setIsEditing(false);
    };

    const discardChanges = () => {
        setIsEditing(false);
        setTitle(recipe.title);
        setIngredient(recipe.ingredient);
        setContent(recipe.content);
    }

    return (
        <tr>
            <td>
                {isEditing
                ? <input type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className="form-control"
                    />
                : recipe.title}
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
                    <button className="btn btn-success mr-2" onClick={saveChanges}>
                        Save
                    </button>
                    <button className="btn btn-danger" onClick={discardChanges}>
                        Cancel
                    </button>
                </>
                : <>
                    <button className="btn btn-info mr-2" onClick={() => setIsEditing(true)}>
                        Edit
                    </button>
                    <button className="btn btn-danger" onClick={deleteRecipe}>
                        Delete
                    </button>
                </>
                }
            </td>
        </tr>
    );
}
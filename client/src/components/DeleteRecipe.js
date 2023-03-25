import { useMutation } from "@apollo/client";
import {GET_RECIPES} from '../gql/query.js'
import { DELETE_RECIPE } from '../gql/mutation.js'

export default function DeleteRecipe({recipe}) {
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
  
  return (
    <tr>
      <td>
        <button className='btn btn-danger' onClick={deleteRecipe}>
          Delete
        </button>
      </td>
    </tr>
  )
}
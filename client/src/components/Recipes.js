import { useQuery } from "@apollo/client";
import DeleteRecipe from './DeleteRecipe'
import EditRecipe from './EditRecipe'
import { GET_RECIPES } from "../gql/query";

export default function Recipes() {
  const [data, loading, error] = useQuery(GET_RECIPES)

  if (error) {
    console.error('GET_RECIPES error', error);
  }

  return <div>
    <table className='table'>
      <thead className='thead-dark'>
        <tr>
          <th>Title</th>
          <th>Ingradients</th>
          <th></th>
        </tr>
      </thead>
    </table>
    <tbody>
      {loading && <tr><td>Loading...</td></tr>}
      {error && <tr><td>Check console for error logs...</td></tr>}
      {!loading && !error && data?.recipeFeed.recipes.map(recipe => recipe={recipe})}
    </tbody>
  </div>
}
import { useQuery } from "@apollo/client";
import Recipe from './Recipe.js'
import { GET_RECIPES } from '../graphql.js';
// import { GET_RECIPES } from "../gql/query";

export default function Recipes() {
  const{data, loading, error} = useQuery(GET_RECIPES)

  if (error) {
    console.error('GET_RECIPES error', error);
  }

  return <div>
    <table className='table'>
      <thead className='thead-dark'>
        <tr>
          <th>Title</th>
          <th></th>
        </tr>
      </thead>
    <tbody>
      {loading && <tr><td>Loading...</td></tr>}
      {error && <tr><td>Check console for error logs...</td></tr>}
      {!loading && !error && data?.recipes.map(recipe => <Recipe recipe={recipe} key={recipe.id} />)}
    </tbody>
    </table>
  </div>
}
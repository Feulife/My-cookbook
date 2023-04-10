import { useQuery } from "@apollo/client";
import Recipe from "./Recipe";
import { RECIPES_QUERY } from "../graphql";

export default function Recipes() {
  const { data, loading, error } = useQuery(RECIPES_QUERY);

  if (error) {
    console.error("RECIPES_QUERY error", error);
  }

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Title</th>
            <th>Ingredient</th>
            <th>Content</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td>Loading...</td>
            </tr>
          )}
          {error && (
            <tr>
              <td>Check console for error logs...</td>
            </tr>
          )}
          {!loading &&
            !error &&
            data?.recipes.map((recipe) => (
              <Recipe recipe={recipe} key={recipe.id} />
            ))}
        </tbody>
      </table>
    </div>
  );
}

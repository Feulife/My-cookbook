import { useQuery } from "@apollo/client";
import Recipe from "./Recipe";
import { TITLES_QUERY } from "../graphql";

export default function Recipes() {
  const { data, loading, error } = useQuery(TITLES_QUERY);

  if (error) {
    console.error("TITLES_QUERY error", error);
  }

  return (
    <div className="recipe_container">
      <div className="all_container">
        {loading && <></>}
        {error && <h3>Loading...</h3>}
        {!loading &&
          !error &&
          data?.recipes.map((recipe) => (
            <Recipe key={recipe.id} recipe={recipe} />
          ))}
      </div>
    </div>
  );
}

import { useQuery } from "@apollo/client";
import Recipe from "./Recipe";
import { GET_RECIPES } from "../../graphql/query.js";

export default function Recipes() {
  const { data, loading, error } = useQuery(GET_RECIPES);

  if (error) {
    console.error("GET_RECIPES error", error);
  }

  return (
    <>
      <div className="recipe_container">
        <div className="all_container">
          {loading && <>Loading...</>}
          {console.log(data)}
          {error && <h3>Error!</h3>}
          {!loading &&
            !error &&
            data?.recipes.map((recipe) => (
              <Recipe key={recipe.id} recipe={recipe} />
            ))}
        </div>
      </div>
    </>
  );
}

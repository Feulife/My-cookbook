import { useQuery } from "@apollo/client";
import Recipe from "./Recipe";
import { TITLES_QUERY } from "../graphql";
import { TITLE_QUERY } from "../graphql";
import { INGREDIENT_QUERY } from "../graphql";
import Controls from "./Controls";
import { useEffect, useState } from "react";

export default function Recipes() {
  const [inputQuery, setInputQuery] = useState({});
  const { data, loading, error } = useQuery({inputQuery});
  const search = () => ('');
  const searchAll = () => (false);
  const searchTitle = () => ('');
  const searchIngredient = () => ([])

  const {data: title, loading: loadingTitle, error: errorTitle} = useQuery(TITLE_QUERY)

  useEffect(() => {
    if (searchAll) {const { data, loading, error } = useQuery({TITLES_QUERY});}
    if (searchTitle) setInputQuery({TITLE_QUERY})
    if (searchIngredient) setInputQuery({INGREDIENT_QUERY})
  }, [search, searchAll, searchTitle, searchIngredient])
    
  if (error) {
    console.error(`${inputQuery}_QUERY error`, error);
  }

  return (
    <>
      <Controls 
        all={searchAll}
        inputText={search}
        title={searchTitle}
        ingredient={searchIngredient}
      />
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
    </>
  );
}

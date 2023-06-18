import React, { useState } from "react";
import Recipe from "./Recipe";
import { GET_TITLE } from "../graphql/query";
import { GET_INGREDIENT } from "../graphql/query";
import { useLazyQuery } from "@apollo/client";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchByTitle, setSearchByTitle] = useState(true);
  const [getSearchByTitle, { dataTitle, loadingTitle, errorTitle }] =
    useLazyQuery(GET_TITLE);
  const [
    getSearchByIngredient,
    { dataIngredient, loadingIngredient, errorIngredient },
  ] = useLazyQuery(GET_INGREDIENT);

  const handleClickTitle = () => {
    if (!searchByTitle) {
      setSearchByTitle(true);
    }
  };

  const handleClickIngredient = () => {
    if (searchByTitle) {
      setSearchByTitle(false);
    }
  };

  const searchQueryChange = () => {
    searchByTitle
      ? getSearchByTitle({
          variables: { title: `${searchValue.toUpperCase()}` },
        })
      : getSearchByIngredient({
          variables: { ingredient: `${searchValue.toLowerCase()}` },
        });
  };

  if (errorTitle) {
    console.error(errorTitle);
    return <div>Error (check console logs)</div>;
  } else {
    if (errorIngredient) {
      console.error(errorIngredient);
      return <div>Error (check console logs)</div>;
    }
  }

  return (
    <>
      <div className="search">
        Search
        <div className="search_change">
          <button
            className={searchByTitle ? "btn_change onClick" : "btn_change"}
            onClick={handleClickTitle}
          >
            by title
          </button>
          <button
            className={!searchByTitle ? "btn_change onClick" : "btn_change"}
            onClick={handleClickIngredient}
          >
            by ingredient
          </button>
        </div>
        <input type="text" onChange={(e) => setSearchValue(e.target.value)} />
        <button
          className="btn btn-info mr-2"
          onClick={() =>
            searchByTitle
              ? searchQueryChange("title")
              : searchQueryChange("ingredient")
          }
          // onClick={() => getBySearch({ variables: { title: `${searchTitle}` } })}
        >
          OK
        </button>
      </div>
      <div className="all_container">
        {searchByTitle && loadingTitle && <>Loading...</>}
        {searchByTitle &&
          !loadingTitle &&
          !errorTitle &&
          dataTitle?.title.map((recipe) => (
            <Recipe key={recipe.id} recipe={recipe} />
          ))}

        {!searchByTitle && loadingIngredient && <>Loading...</>}
        {!searchByTitle &&
          !loadingIngredient &&
          !errorIngredient &&
          dataIngredient?.ingredient.map((recipe) => (
            <Recipe key={recipe.id} recipe={recipe} />
          ))}
      </div>
    </>
  );
};

export default Search;

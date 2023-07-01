import React, { useState } from "react";
import Recipe from "./Recipe";
import { GET_TITLE } from "../graphql/query";
import { GET_INGREDIENT } from "../graphql/query";
import { useLazyQuery } from "@apollo/client";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchByTitle, setSearchByTitle] = useState(true);
  const [getFromGraphQl, setGetFromGraphQl] = useState(
    searchByTitle ? GET_TITLE : GET_INGREDIENT
  );
  const [getSearchBy, { data, loading, error }] = useLazyQuery(getFromGraphQl);

  const handleClickTitle = () => {
    if (!searchByTitle) {
      setSearchByTitle(true);
      setGetFromGraphQl(GET_TITLE);
    }
  };

  const handleClickIngredient = () => {
    if (searchByTitle) {
      setSearchByTitle(false);
      setGetFromGraphQl(GET_INGREDIENT);
    }
  };

  const searchQueryChange = () => {
    searchByTitle
      ? getSearchBy({
          variables: { title: `${searchValue.toUpperCase()}` },
        })
      : getSearchBy({
          variables: { ingredient: `${searchValue.toLowerCase()}` },
        });
  };

  if (error) {
    console.error(error);
    return <div>Error (check console logs)</div>;
  }

  return (
    <>
      <div className="search">
        <div className="search_change">
          Search by...
          <button
            className={searchByTitle ? "btn_change onClick" : "btn_change"}
            onClick={handleClickTitle}
          >
            title
          </button>
          <button
            className={!searchByTitle ? "btn_change onClick" : "btn_change"}
            onClick={handleClickIngredient}
          >
            ingredient
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
        >
          OK
        </button>
      </div>
      <div className="all_container">
        {console.log(searchByTitle)}
        {searchByTitle ? (
          <>
            {loading && <>Loading...</>}
            {console.log(loading, data)}
            {searchByTitle &&
              !loading &&
              !error &&
              data?.title.map((recipe) => (
                <Recipe key={recipe.id} recipe={recipe} />
              ))}
          </>
        ) : (
          <>
            {loading && <>Loading...</>}
            {!searchByTitle &&
              !loading &&
              !error &&
              data?.ingredient.map((recipe) => (
                <Recipe key={recipe.id} recipe={recipe} />
              ))}
          </>
        )}        
      </div>
    </>
  );
};

export default Search;

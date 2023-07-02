import React, { useState } from "react";
import Recipe from "./Recipe";
import { GET_TITLE } from "../graphql/query";
import { GET_INGREDIENT } from "../graphql/query";
import { useLazyQuery } from "@apollo/client";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchByTitle, setSearchByTitle] = useState(Boolean);
  const [getFromGraphQl, setGetFromGraphQl] = useState(GET_TITLE);
  const [getSearchBy, { data, loading, error }] = useLazyQuery(getFromGraphQl);

  const handleClickTitle = () => {
    setSearchByTitle(true);
    setGetFromGraphQl(GET_TITLE);
    getSearchBy({
      variables: { title: `${searchValue.toUpperCase()}` },
    });
  };

  const handleClickIngredient = () => {
    setSearchByTitle(false);
    setGetFromGraphQl(GET_INGREDIENT);
    getSearchBy({
      variables: { ingredient: `${searchValue.toLowerCase()}` },
    });
  };

  if (error) {
    console.error(error);
    return <div>Error (check console logs)</div>;
  }

  return (
    <>
      {/* <div className="search"> */}
      <div className="container-searchbar">        
        <input type="text" className="search-input"
          placeholder="Search..." onChange={(e) => setSearchValue(e.target.value)} />
        <button
          className= "btn_change"
          onClick={handleClickTitle}
        >
          by title
        </button>
        <button
          className="btn_change"
          onClick={handleClickIngredient}
        >
          by ingredient
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

import React, { useState } from "react";
import Recipe from "./Recipe";
import { GET_RECIPES } from "../graphql/query";
import { GET_TITLE } from "../graphql/query";
// import { GET_INGREDIENT } from "../graphql/query";
import { useQuery } from "@apollo/client";

const Search = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const { data, loading, error } = useQuery(GET_TITLE);
  const [saerchByTitle] = useQuery(GET_TITLE, {
    refetchQueries: [{ query: GET_TITLE }],
  });
  const findTitle = () => {
    saerchByTitle({
      variables: {
        titile: searchTitle,
      },
    });
  };

  return (
    <>
      <div>
        Search by title...
        <input type="string" onChange={(e) => setSearchTitle(e.target.value)} />
        <button onClick={findTitle}>OK</button>
      </div>
      <div className="all_container">
        {loading && <></>}
        {error && <h3>Loading...</h3>}
        {!loading &&
          !error &&
          data?.recipes.map((recipe) => (
            <Recipe key={recipe.title} recipe={recipe} />
          ))}
      </div>
    </>
  );
};

export default Search;

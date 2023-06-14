import React, { useState } from "react";
import Recipe from "./Recipe";
import { GET_TITLE } from "../graphql/query";
// import { GET_INGREDIENT } from "../graphql/query";
import { useLazyQuery } from "@apollo/client";

const Search = ({ title }) => {
  const [searchTitle, setSearchTitle] = useState("");
  const [getByTitle, { data, loading, error }] = useLazyQuery(GET_TITLE)
 
  if (error) {
    console.error('GET_TITLE', error)
    return <div>Error (check console logs)</div>
  }

  return (
    <>
      <div>
        Search by title...
        <input type="text" onChange={(e) => setSearchTitle(e.target.value)} />
        <button onClick={() => getByTitle({ variables: { title: `${searchTitle}` }})}>OK</button>
      </div>
      <div className="all_container">
        {loading && <>Loading...</>}            
        {!loading &&
        !error &&
        data?.title.map(recipe => <Recipe key={recipe.id} recipe={recipe} />)}
      </div>
    </>
  );
};

export default Search;

import React, {useState} from "react";
import { Link } from "react-router-dom";

import Recipe from "../Recipe";
import { GET_TITLE } from "../../graphql/query";
import { GET_INGREDIENT } from "../../graphql/query";
import { useLazyQuery } from "@apollo/client";

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false)

  const ChangeTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-time");
    let targetTheme = "light"
  
    if (currentTheme === "light") {
      targetTheme = "dark"
      setIsChecked(true)
      // console.log(targetTheme);
    } else {
      setIsChecked(false)
    }
  
    document.documentElement.setAttribute("data-time", targetTheme)
    console.log(currentTheme);
  }

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
    <div>
      <nav className="app_navbar">
        <div className="navbar-nav mr-auto flex-row">
          <Link to="/" className="nav-link mr-2">
            <b>HOME</b>
          </Link>
          <Link to="/titles" className="nav-link mr-2">
            <b>RECIPES</b>
          </Link>
          <Link to="/create" className="nav-link mr-2">
            <b>CREATE RECIPE</b>
          </Link>
          <Link to="/search" className="nav-link mr-2">
            <b>SEARCH</b>
          </Link>
        </div>
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
        <div className="switch">
          <div className="toggle">
            <label htmlFor="themeSwitch"></label>
            <input
            type="checkbox"
            name="switch-theme"
            id="themeSwitch"
            onClick={ChangeTheme}
            defaultChecked
            />
            <div className="toggle-bg"></div>
            <div className="toggle-thumb">
              <i className="fas fa-sun"></i>
              <i className="fas fa-moon"></i>
            </div>
          </div>
        </div>
      </nav>      
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import GitHub from "@mui/icons-material/GitHub";

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const openGitHub = () => {
    window.open("https://github.com/Feulife");
  };

  return (
    <>
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
        <div onClick={openGitHub} className="github_icon">
          <GitHub></GitHub>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

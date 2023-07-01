import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const ChangeTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-time");
    let targetTheme = "light";

    if (currentTheme === "light") {
      targetTheme = "dark";
      setIsChecked(true);
      // console.log(targetTheme);
    } else {
      setIsChecked(false);
    }

    document.documentElement.setAttribute("data-time", targetTheme);
    console.log(currentTheme);
  };
 
  return (
    <div>
        <nav className="app_navbar">
          <div className="navbar-nav mr-auto flex-row">
            <Link to="/" className="nav-link mr-2">
              <b>HOME</b>
            </Link>
            <Link to="/create" className="nav-link mr-2">
              <b>CREATE&nbsp;RECIPE</b>
            </Link>
            <Link to="/titles" className="nav-link mr-2">
              <b>RECIPES</b>
            </Link>
            <Link to="/search" className="nav-link mr-2">
              <b>SEARCH</b>
            </Link>
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

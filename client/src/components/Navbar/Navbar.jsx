import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-custom">
        <div className="navbar-nav mr-auto flex-row">
          <Link to="/" className="nav-link mr-2">
            Home
          </Link>
          <Link to="/recipes//" className="nav-link mr-2">
            Recipes
          </Link>
          <Link to="/create" className="nav-link mr-2">
            Create Recipe
          </Link>
        </div>
      </nav>      
    </div>
  );
};

export default Navbar;

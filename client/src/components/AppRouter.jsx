import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import Hello from './Hello.jsx';
import Titles from './Titles.jsx'
// import Recipes from './components/Recipes';
import CreateRecipe from './CreateRecipe.jsx';

const AppRouter = () => {
  return (
    <div className="container mt-5">
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/recipes//" element={<Titles />} />
        <Route path="/create" element={<CreateRecipe />} />
      </Routes>
    </div>
  );
};

export default AppRouter;

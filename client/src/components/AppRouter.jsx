import React from "react";
import { Routes, Route } from "react-router-dom";
import Hello from './Hello/Hello';
import Titles from './Titles.jsx'
import CreateRecipe from './CreateRecipe.jsx';
import Search from './Search'

const AppRouter = () => {
  return (
    <div className="app_container">
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/titles" element={<Titles />} />
        <Route path="/create" element={<CreateRecipe />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
};

export default AppRouter;

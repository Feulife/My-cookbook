import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import Hello from './Hello.jsx';
import Titles from './Titles.jsx'
import CreateRecipe from './CreateRecipe.jsx';

const AppRouter = () => {
  return (
    <div className="app_container">
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/titles" element={<Titles />} />
        <Route path="/create" element={<CreateRecipe />} />
      </Routes>
    </div>
  );
};

export default AppRouter;

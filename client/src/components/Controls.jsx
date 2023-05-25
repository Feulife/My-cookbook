import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";

const Controls = (props) => {
  const [search, setSearch] = useState('');
  const [searchAll, setSearchAll] = useState(false);
  const [serchTitle, setSearchTitle] = useState('');
  const [searchIngredient, setSearchIngredient] = useState([]);

  useEffect(() => {
    setSearchAll(props.all);
    setSearch(props.inputText);
    setSearchTitle(props.title);
    setSearchIngredient(props.ingredient)
  }, [searchAll, search, serchTitle, searchIngredient])

  return (
    <div className="controls">
      <div className="column">
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          variant="outlined"
          placeholder="Find by..."
        />
        <div>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              value={"all"}
              onChange={(e) => {
                setSearchAll(!searchAll);
              }}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              value={"title"}
              onChange={(e) => {
                setSearchTitle(e.target.value);
              }}
            />
            <span>Title</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              value={"ingredient"}
              onChange={(e) => {
                setSearchIngredient(e.target.value);
              }}
            />
            <span>Ingredients</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Controls;

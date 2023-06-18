import { useState } from "react";
import { useMutation } from "@apollo/client";
import { GET_RECIPES } from "../graphql/query";
import { CREATE_RECIPE_MUTATION } from "../graphql/mutation";
const showDate = new Date().toLocaleDateString();

export default function CreateRecipe() {
  const [title, setTitle] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [content, setContent] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [createMutation] = useMutation(CREATE_RECIPE_MUTATION, {
    refetchQueries: [{ query: GET_RECIPES }],
  });

   const handleSubmit = (evt) => {
    evt.preventDefault();
    console.info("Creating Recipe...", title, ingredient, content, createdAt);
    createMutation({
      variables: {
        title,
        ingredient,
        content,
        createdAt,
      },
    });
    console.log(`Recipe ${title} with ingredients(${ingredient}) created!`);
    setTitle("");
    setIngredient("");
    setContent("");
    setCreatedAt("");
  };

  return (
    <form onSubmit={(evt) => handleSubmit(evt)}>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value.toUpperCase())}
        />
      </div>
      <div className="form-group">
        <label htmlFor="year">Ingedient:</label>
        <input
          type="text"
          name="year"
          className="form-control"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content:</label>
        <input
          type="text"
          name="content"
          className="form-control"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <input
        type="submit"
        value="Create"
        className="btn btn-primary"
        onClick={() => setCreatedAt(showDate)}
      />
    </form>
  );
}

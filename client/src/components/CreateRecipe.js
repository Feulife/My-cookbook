import { useState } from "react";
import { useMutation } from "@apollo/client";
import { GET_RECIPES } from "../gql/query";
import { NEW_RECIPE } from "../gql/mutation";
// import { DateTimeScalar } from 'graphql-date-scalars'
const showDate = new Date().toLocaleDateString()

export default function CreateRecipe() {
  const [title, setTitle] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [content, setContent] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [createMutation] = useMutation(NEW_RECIPE, {
    refetchQueries: [{ guery: GET_RECIPES }, ]
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.info("Creating new recipe...", title, ingredient, content, createdAt);
    createMutation({
      variables: {
        title,
        ingredient,
        content,
        createdAt,
      },
    });
    console.log(`Recipe ${title} created with ingradients - (${ingredient})`);
    setTitle("");
    setIngredient("");
    setContent("");
    setCreatedAt("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="ingredient">Ingredients:</label>
        <input
          type="text"
          name="ingredient"
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
      <input type="submit" value="create" className="btn btn-primary" onChange={() => setCreatedAt(showDate)} />
    </form>
  );
}

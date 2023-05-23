import React from "react";

const Description = ({ingredient, content}) => {
  return (
    <div className="desc">
      <h3>Ingredient</h3>
      <p>
        <b>{ingredient}</b>
      </p>
      <h3>Content</h3>
      <p>
        <b>{content}</b>
      </p>
    </div>
  );
};

export default Description;

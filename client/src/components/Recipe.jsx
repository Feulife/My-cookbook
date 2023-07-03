import { useMutation } from "@apollo/client";
import { useState } from "react";
import {
  DELETE_RECIPE_MUTATION,
  EDIT_RECIPE_MUTATION,
} from "../graphql/mutation";
import { GET_RECIPES } from "../graphql/query";
// import Modal from './Modal/Modal';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

export default function Recipe({ recipe }) {
  const [deleteRecipeMutation] = useMutation(DELETE_RECIPE_MUTATION, {
    refetchQueries: [{ query: GET_RECIPES }],
  });

  const deleteRecipe = () => {
    deleteRecipeMutation({
      variables: {
        id: recipe.id,
      },
    });
  };

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(recipe.title);
  const [ingredient, setIngredient] = useState(recipe.ingredient);
  const [content, setContent] = useState(recipe.content);
  const [editRecipeMutation] = useMutation(EDIT_RECIPE_MUTATION, {
    refetchQueries: [{ query: GET_RECIPES }],
  });
  const [show, setShow] = useState(false);

  const saveChanges = () => {
    editRecipeMutation({
      variables: {
        id: recipe.id,
        title: title,
        ingredient: ingredient,
        content: content,
      },
    });
    setIsEditing(false);
  };

  const discardChanges = () => {
    setIsEditing(false);
    setTitle(recipe.title);
    setIngredient(recipe.ingredient);
    setContent(recipe.content);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  
  function ChildModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <>
        <button onClick={handleOpen}>Open Child Modal</button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 200 }}>
            <h2 id="child-modal-title">Text in a child modal</h2>
            <p id="child-modal-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <button onClick={handleClose}>Close Child Modal</button>
          </Box>
        </Modal>
      </>
    );
  }
  
  
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
      setShow(true);
    };
    const handleClose = () => {
      setOpen(false);
      setShow(false);
    };      
  
 
  return (
    <div className="thumb_container">
      <div className="detail_wrapper">
        <h3 className="titleinfo">{recipe.title}</h3>
        {/* {show === true ? (
          <div className="desc">
            {isEditing ? (
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value.toUpperCase())}
                className="form-control"
              />
            ) : (
              <></>
            )}
            {isEditing ? (
              <input
                type="text"
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value.toLowerCase())}
                className="form-control"
              />
            ) : (
              <div className="desc">
                <h3>Ingredient</h3>
                <p>
                  <b>{recipe.ingredient}</b>
                </p>
              </div>
            )}
            {isEditing ? (
              <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="form-control"
              />
            ) : (
              <div className="desc">
                <h3>Content</h3>
                <p>
                  <b>{recipe.content}</b>
                </p>
              </div>
            )}
            
            {isEditing ? (
              <>
                <button className="btn btn-success mr-2" onClick={saveChanges}>
                  Save
                </button>
                <button className="btn btn-danger" onClick={discardChanges}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  className="btn btn-info mr-2"
                  onClick={() => setIsEditing(true)}
                >
                  Edit
                </button>
                <button className="btn btn-danger" onClick={deleteRecipe}>
                  Delete
                </button>
              </>
            )}
          </div>
        ) : (
          <></>
        )} */}
        {recipe.createdAt}
        <button className="recipeinfo" onClick={handleOpen}>
          {show === true ? "Know less..." : "Know more..."}
          {/* <Button onClick={handleOpen}>{show === true ? "Know less..." : "Know more..."}</Button> */}
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          // aria-labelledby="parent-modal-title"
          // aria-describedby="parent-modal-description"
        >
          <div className="desc">
            {isEditing ? (
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value.toUpperCase())}
                className="form-control"
              />
            ) : (
              <></>
            )}
            {isEditing ? (
              <input
                type="text"
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value.toLowerCase())}
                className="form-control"
              />
            ) : (
              <div className="desc">
                <h3>Ingredient</h3>
                <p>
                  <b>{recipe.ingredient}</b>
                </p>
              </div>
            )}
            {isEditing ? (
              <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="form-control"
              />
            ) : (
              <div className="desc">
                <h3>Content</h3>
                <p>
                  <b>{recipe.content}</b>
                </p>
              </div>
            )}
            
            {isEditing ? (
              <>
                <button className="btn btn-success mr-2" onClick={saveChanges}>
                  Save
                </button>
                <button className="btn btn-danger" onClick={discardChanges}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  className="btn btn-info mr-2"
                  onClick={() => setIsEditing(true)}
                >
                  Edit
                </button>
                <button className="btn btn-danger" onClick={deleteRecipe}>
                  Delete
                </button>
              </>
            )}
          </div>
        
        </Modal>
      </div>
    </div>
  );

  // return (
  //   <div className="thumb_container">
  //   <div className="detail_wrapper">
  //     {isEditing ? (
  //       <input
  //         type="text"
  //         value={title}
  //         onChange={(e) => setTitle(e.target.value.toUpperCase())}
  //         className="form-control"
  //       />
  //     ) : (
  //       <h3 className="titleinfo">{recipe.title}</h3>
  //     )}
  //     {isEditing ? (
  //       <input
  //         type="text"
  //         value={ingredient}
  //         onChange={(e) => setIngredient(e.target.value.toLowerCase())}
  //         className="form-control"
  //       />
  //     ) : (
  //       <></>
  //     )}
  //     {isEditing ? (
  //       <input
  //         type="text"
  //         value={content}
  //         onChange={(e) => setContent(e.target.value)}
  //         className="form-control"
  //       />
  //     ) : (
  //       <></>
  //     )}
  //     {show === true ? <div className="desc">
  //       <Description
  //       ingredient={recipe.ingredient}
  //       content={recipe.content}
  //       />
  //       </div> : <></>}
  //     {recipe.createdAt}
  //     <button className="recipeinfo" onClick={() => setShow(!show)}>
  //       {show === true ? "Know less..." : "Know more..."}
  //     </button>
  //     {isEditing ? (
  //       <>
  //         <button className="btn btn-success mr-2" onClick={saveChanges}>
  //           Save
  //         </button>
  //         <button className="btn btn-danger" onClick={discardChanges}>
  //           Cancel
  //         </button>
  //       </>
  //     ) : (
  //       <>
  //         <button
  //           className="btn btn-info mr-2"
  //           onClick={() => setIsEditing(true)}
  //         >
  //           Edit
  //         </button>
  //         <button className="btn btn-danger" onClick={deleteRecipe}>
  //           Delete
  //         </button>
  //       </>
  //     )}
  //     </div>
  //   </div>
  // );
}

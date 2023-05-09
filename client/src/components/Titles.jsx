import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import Title from "./Title";
import Recipe from "./Recipe";
import { TITLES_QUERY } from "../graphql";
import MyModal from "./ModalWindow/MyModal";
import { Route, Routes } from "react-router-dom";

export default function Recipes() {
  const { data, loading, error } = useQuery(TITLES_QUERY);

  if (error) {
    console.error("TITLES_QUERY error", error);
  }

  const [modal, setModal] = useState(false);

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Title</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {loading && <tr></tr>}
          {error && (
            <tr>
              <td>Loading...</td>
              <td>Check console for error logs...</td>
            </tr>
          )}
          {!loading &&
            !error &&
            data?.recipes.map((recipe) => (
              <tr key={recipe.id}>
                {/* <td>{recipe.title}</td>
                <td>{recipe.createdAt}</td> */}
                <td>
                  <Title
                    recipe={recipe}
                    onClick={() => {
                      setModal(true);
                    }}
                  />
                </td>
              (setModal ? <MyModal visible={modal} setVisible={setModal}>
              <Recipe key={recipe.id} recipe={recipe} />
            </MyModal>)

              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

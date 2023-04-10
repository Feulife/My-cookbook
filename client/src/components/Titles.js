import { useQuery } from "@apollo/client";
import Title from "./Title";
import { TITLES_QUERY } from "../graphql";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Recipes() {
  const { data, loading, error } = useQuery(TITLES_QUERY);

  if (error) {
    console.error("TITLES_QUERY error", error);
  }

  return (
    <BrowserRouter>
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Title</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <Routes>
              {loading && (
                <tr>
                  <td>Loading...</td>
                </tr>
              )}
              {error && (
                <tr>
                  <td>Check console for error logs...</td>
                </tr>
              )}
              {!loading &&
                !error &&
                data?.recipes.map((recipe) => (
                  <Route element={<Title recipe={recipe} key={recipe.id} />} />
                ))}
            </Routes>
          </tbody>
        </table>
      </div>
    </BrowserRouter>
  );
}

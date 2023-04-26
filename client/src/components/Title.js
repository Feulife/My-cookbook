import Recipe from "./Recipe";
export default function Title({ recipe }) {
  return (
    <tr>
        <a href="#" onClick={() =>
          <Recipe recipe={recipe} key={recipe.id} />
        }>{recipe.title}</a>
        <td>{recipe.createdAt}</td>
      
    </tr>
  );
}

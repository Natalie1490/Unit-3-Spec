import React from "react";
import smores from "../../src/assets/smores.jpeg";
import mint from "../../src/assets/mint.jpeg";
import lemon from "../../src/assets/lemon.jpeg";

const RecipeCard = ({ recipe }) => {
  // const recipes = [
  // { image: smores, title: "Smores Cupcakes" },
  // { image: lemon, title: "Lemon Cupcakes" },
  // { image: mint, title: "Mint Cupcakes" },
  // ];

  return (
    <div className="recipe-card-container">
      <div className="recipe-card">
        <h2>{recipe.recipe_name}</h2>
        <img className="pictures" src={recipe.image_url} alt={recipe.title} />
        <button>See More</button>
      </div>
    </div>
  );
};

export default RecipeCard;

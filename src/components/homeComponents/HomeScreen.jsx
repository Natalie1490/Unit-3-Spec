import React, { useEffect, useState } from "react";
import AdBanner from "./AdBanner";
import axios from "axios";
import RecipeCard from "../RecipeCard";
import { BiSearchAlt2 } from "react-icons/bi";

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const getRecipes = () => {
    axios.get("https://recipes.devmountains.com/recipes").then((res) => {
      setRecipes(res.data);
      console.log(res.data);
    });
  };
  const recipeDisplay = recipes
    .filter((recipe, index) => {
      let title = recipe.recipe_name.toLowerCase();
      let searchParams = search.toLowerCase();
      return title.includes(searchParams);
    })
    .map((recipe, index) => {
      return <RecipeCard recipe={recipe} />;
    });

  useEffect(() => {
    getRecipes();
  }, []);
  return (
    <div>
      <AdBanner />
      <span>
        <BiSearchAlt2 size="2em" color="#DA7635" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for Recipe"
        />
      </span>
      {RecipeCard}
      {recipeDisplay}
    </div>
  );
};

export default HomeScreen;

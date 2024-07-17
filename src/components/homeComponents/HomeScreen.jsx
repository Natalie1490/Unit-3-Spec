import React, { useEffect } from "react";
import AdBanner from "./AdBanner";
import axios from "axios";
import RecipeCard from "../RecipeCard";

const getRecipes = () => {
  axios.get("https://recipes.devmountains.com/recipes").then((res) => {
    setRecipes(res.data);
    console.log(res.data);
  });
};

useEffect(() => {
  getRecipes();
}, []);

const HomeScreen = () => {
  return (
    <div>
      <RecipeCard />
      <AdBanner />
      {/* Much code from Part 2 will be placed around here. Do your best! */}
    </div>
  );
};

export default HomeScreen;

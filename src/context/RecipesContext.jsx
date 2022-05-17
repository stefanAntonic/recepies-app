import React, { createContext, useState } from "react";

const RecipeContext = createContext();
const API_URL = process.env.REACT_APP_SPOON_API_KEY2;

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  

  const getRecipes = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setRecipes(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${API_URL}&number=10`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));

      setRecipes(data.recipes);
      setLoading(false);
    }
  };

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        loading,
        getRecipes,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeContext;

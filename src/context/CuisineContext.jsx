import { createContext, useState } from "react";

const CuisineContext = createContext();
const API_URL = process.env.REACT_APP_SPOON_API_KEY2;

export const CuisineProvider = ({ children }) => {
  const [cuisine, setCuisine] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCuisine = async (name) => {
    const check = localStorage.getItem("cuisinee");

    if (check) {
      setCuisine(JSON.parse(check));
    } else {
      console.log(name.type);
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_URL}&cuisine=${name.type}`
      );
      const cuisineData = await api.json();
      localStorage.setItem("cuisinee", JSON.stringify(cuisineData.results));
console.log(cuisineData);
      setCuisine(cuisineData.results);
      setLoading(false);
     }
  };


  return (
    <CuisineContext.Provider
      value={{
        cuisine,
        loading,
        getCuisine,
      }}
    >
      {children}
    </CuisineContext.Provider>
  );
};

export default CuisineContext;

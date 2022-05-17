import Home from "./Home";
import Cusine from "./Cusine";
import { RecipeProvider } from "../context/RecipesContext";
import { CuisineProvider } from "../context/CuisineContext";
import { Route, Routes } from "react-router-dom";
import RecipeInfo from "./RecipeInfo";

function Pages() {
  return (
    <RecipeProvider>
      <CuisineProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cusine />} />
          <Route path="/recipes/:id/information" element={<RecipeInfo />} />
        </Routes>
      </CuisineProvider>
    </RecipeProvider>
  );
}

export default Pages;

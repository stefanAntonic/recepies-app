import Pages from "./pages/Pages";
import BackToTopBtn from "../src/components/layout/BackToTopBtn";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import { RecipeProvider } from "../src/context/RecipesContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Pages />
        <BackToTopBtn />
      </BrowserRouter>
    </div>
  );
}

export default App;

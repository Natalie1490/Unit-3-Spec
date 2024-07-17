import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen";
import DetailScreen from "./components/detailComponents/DetailScreen";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<NewRecipeScreen />} />
        <Route path="/newRecipe" element={<NewRecipeScreen />} />
        <Route path="/recipe/:id" element={<DetailScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

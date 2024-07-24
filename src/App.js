import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen";
import DetailScreen from "./components/detailComponents/DetailScreen";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/homeComponents/HomeScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="/recipe/:id" element={<DetailScreen />} />
        <Route path= "NewRecipe" element={<NewRecipeScreen />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

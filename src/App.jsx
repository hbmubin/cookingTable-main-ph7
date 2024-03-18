import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Recipes from "./components/recipes/Recipes";

function App() {
  return (
    <>
      <div className="md:container mx-auto">
        <Header></Header>
        <Hero></Hero>
        <Recipes></Recipes>
      </div>
    </>
  );
}

export default App;

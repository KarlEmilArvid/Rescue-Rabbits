import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import jsonData from "./data/animals.json";
import { Animal } from "./models/data";

import "./App.scss";

function App() {
  const [animals, setAnimals] = useState<Animal[]>(jsonData.animals);
  return (
    <div className="App">
      <Header />
      <Hero />
      <Main animals={animals} />
      <Footer />
    </div>
  );
}

export default App;

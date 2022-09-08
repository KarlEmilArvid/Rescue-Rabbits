import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Overlay from "./components/Overlay/Overlay";
import jsonData from "./data/animals.json";
import { Animal } from "./models/data";
import "./App.scss";

function App() {
  const [animals, setAnimals] = useState<Animal[]>(jsonData.animals);
  const [pickedAnimal, setPickedAnimal] = useState<Animal>(jsonData.animals[1]);

  return (
    <div className="App">
      <Header />
      <Hero animals={animals} pickedAnimal={pickedAnimal} setPickedAnimal={setPickedAnimal} />
      <Main animals={animals} pickedAnimal={pickedAnimal} setPickedAnimal={setPickedAnimal} />
      <Overlay animals={animals} pickedAnimal={pickedAnimal} setPickedAnimal={setPickedAnimal} />
      <Footer />
    </div>
  )
}

export default App;

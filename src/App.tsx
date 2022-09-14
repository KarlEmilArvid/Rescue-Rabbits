import { useState } from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Overlay from "./components/Overlay/Overlay";
import jsonData from "./data/animals.json";
import { Animal } from "./models/data";

function App() {
  const [animals, setAnimals] = useState<Animal[]>(jsonData.animals);
  const [pickedAnimal, setPickedAnimal] = useState<Animal>(jsonData.animals[1]);
  const [visibility, setVisibility] = useState<string>('overlay hideOverlay')
  const [step, setStep] = useState<number>(1)

  console.log(animals)

  function addInterest(): number {
    animals.map((animal) => {
      if (animal.id == pickedAnimal.id) {
        return animal.interested = animal.interested + 1;
      }
    })
  }

  function hideOverlay() {
    setVisibility('overlay hideOverlay')
  }

  function showOverlay() {
    setVisibility('overlay showOverlay')
  }

  return (
    <div className="App">
      <Header />
      <Hero />
      <Main showOverlay={showOverlay} animals={animals} pickedAnimal={pickedAnimal} setPickedAnimal={setPickedAnimal} />
      <Overlay step={step} setStep={setStep} visibility={visibility} hideOverlay={hideOverlay} pickedAnimal={pickedAnimal} setPickedAnimal={setPickedAnimal} addInterest={addInterest} />
      <Footer />
    </div>
  )
}

export default App;

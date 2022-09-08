import "./Overlay.scss"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import Form from "./Form"
import close from "../../assets/close.svg"
import { Animal } from "../../models/data"
import ReadMore from "./ReadMore"
import { useState } from "react"

interface Props {
  animals: Animal[];
  setPickedAnimal: (pickedAnimal: Animal) => void;
  pickedAnimal: Animal;

}  

const Overlay = ({ animals, setPickedAnimal, pickedAnimal}: Props) => {
  const [showForm, setShowForm] = useState<boolean>(false)
  
  function handleClick (animalId:number) {
    setShowForm(true)
  }
   
  if (showForm) {
    
    return (
      <section className="overlay">
      <section className="overlay__container">
        <header className="overlay__header">
          <Breadcrumbs />
          <figure>
            <img src={close} alt="close button" />
          </figure>
        </header>
        <main className="overlay__main">
          <img className="animalInfo__img" src={pickedAnimal.image} alt="" />
          <Form animalName={pickedAnimal.name}/>
        </main>
        <footer className="overlay__footer">
          <button onClick={()=> {handleClick(pickedAnimal.id)}} className="button button--overlay button--green">Skicka</button>
        </footer>
      </section>
    </section>
    )
  } 
  else {
    return (
      <section className="overlay">
      <section className="overlay__container">
        <header className="overlay__header">
          <Breadcrumbs />
          <figure>
            <img src={close} alt="close button" />
          </figure>
        </header>
        <main className="overlay__main">
          <img className="animalInfo__img" src={pickedAnimal.image} alt="" />
          <ReadMore animals={animals} pickedAnimal={pickedAnimal} setPickedAnimal={setPickedAnimal}/>
        </main>
        <footer className="overlay__footer">
          <p className="interestedCount">X personer är intresserade av {pickedAnimal.name}</p>
          <button onClick={()=> {handleClick(pickedAnimal.id)}} className="button button--overlay">Intresseanmälan</button>
        </footer>
      </section>
    </section>
    )
  }
}

export default Overlay

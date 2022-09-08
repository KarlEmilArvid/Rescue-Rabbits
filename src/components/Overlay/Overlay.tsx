import "./Overlay.scss"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import close from "../../assets/close.svg"
import { Animal } from "../../models/data"
import AnimalInfo from "./AnimalInfo"

interface Props {
  animals: Animal[];
  setPickedAnimal: (pickedAnimal: Animal) => void;
  pickedAnimal: Animal;
}

const Overlay = ({ animals, setPickedAnimal, pickedAnimal}: Props) => {

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
          <AnimalInfo animals={animals} pickedAnimal={pickedAnimal} setPickedAnimal={setPickedAnimal}/>
        </main>
        <footer className="overlay__footer">
          <p className="interestedCount">X personer är intresserade av {pickedAnimal.name}</p>
          <button className="button button--overlay">Intresseanmälan</button>
        </footer>
      </section>
    </section>
  )
}

export default Overlay

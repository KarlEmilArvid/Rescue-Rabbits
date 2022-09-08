import "./Overlay.scss";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import close from "../../assets/close.svg"

import { Animal } from "../../models/data";
import AnimalInfo from "./AnimalInfo";

interface Props {
  animals: Animal[];
  //    handleClick:
}
const Overlay = ({ animals }: Props) => {
  
  const theAnimal = animals[10]
  console.log(theAnimal)
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
          <img className="animalInfo__img" src={theAnimal.image} alt="" />
          <AnimalInfo theAnimal={theAnimal}/>
        </main>
        <footer className="overlay__footer">
          <p className="interestedCount">X personer är intresserade av {theAnimal.name}</p>
          <button className="button button--overlay">Intresseanmälan</button>
        </footer>
      </section>
    </section>
  );
};

export default Overlay;
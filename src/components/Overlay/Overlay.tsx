import "./Overlay.scss";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import close from "../../assets/close.svg"

import { Animal } from "../../models/data";
import ReadMore from "./ReadMore";

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
          <figure>
            <img className="animalInfo__img" src={theAnimal.image} alt="" />
          </figure>
          <ReadMore theAnimal={theAnimal}/>
          {/* <AnimalInfo theAnimal={theAnimal}/> */}
        </main>
        
      </section>
    </section>
  );
};

export default Overlay;
import "./Overlay.scss";
import Breadcrumbs from "../Breadcrums/Breadcrumbs"
import close from "../../assets/close.svg"
import locationPin from "../../assets/locationPin.svg"
import { Animal } from "../../models/data";

interface Props {
  animals: Animal[];
  //    handleClick:
}
const Overlay = ({ animals }: Props) => {
  console.log(animals)

  return (
    <section className="overlay">
      <section className="overlay__container">
        <header className="overlay__header">
          <Breadcrumbs />
          <figure>
            <img src={close} alt="" />
          </figure>
        </header>
        <main className="overlay__main">
          <img className="animalInfo__img" src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          <section className="animalInfo">
            <h2 className="animalInfo__name">Lossan</h2>
            <p className="animalInfo__age">1 år</p>
            <div className="animalInfo__location">
              <figure className="animalInfo__locationPin">
                <img className="animalInfo__locationPin" src={locationPin} alt="" />
              </figure>
              <p className="animalInfo__place">Karlstad</p>
            </div>
            <p className="animalInfo__description">Puppy kitty ipsum dolor sit good dog foot stick canary. Teeth Mittens grooming vaccine walk swimming nest good boy furry tongue heel furry treats fish. E toys polydactyl meow.</p>
          </section>
        </main>
        <footer className="overlay__footer">
          <p className="interestedCount">X personer är intresserade av Y</p>
          <button className="button">Intresseanmälan</button>
        </footer>
      </section>
    </section>
  );
};

export default Overlay;
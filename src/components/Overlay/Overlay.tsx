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
          <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          <section className="animalInfo">
            <h2>Lossan</h2>
            <p className="age">Ålder</p>
            <div className="location">
              <figure>
                <img src={locationPin} alt="" />
              </figure>
              <p className="place">Plats</p>
            </div>
          </section>
        </main>
        <footer className="overlay__footer"></footer>
      </section>
    </section>
  );
};

export default Overlay;
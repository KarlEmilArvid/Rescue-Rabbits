import { useState } from "react";
import close from "../../assets/close.svg";
import confetti from "../../assets/confetti.gif";
import locationPin from "../../assets/locationPin.svg";
import { Animal } from "../../models/data";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import AnimalDescription from "./AnimalDescription";
import "./AnimalDescription.scss";
import Form from "./Form";
import "./Overlay.scss";

interface Props {
  setPickedAnimal: (pickedAnimal: Animal) => void;
  pickedAnimal: Animal;
  visibility: string;
  hideOverlay: () => void;
  addInterest: () => void;
}

const Overlay = ({
  visibility,
  hideOverlay,
  setPickedAnimal,
  pickedAnimal,
  addInterest
}: Props) => {
  const [step, setStep] = useState<number>(1);

  function handleClick(): void {
    if (step === 3) {
      addInterest();
      hideOverlay();
      setStep(1);
    } else {
      setStep(step + 1);
    }
  }
  //om step är mindre än 4 när man stänger ner så återställs stegen
  function handleClose(): void {
    if (step < 4) {
      setStep(1);
      hideOverlay();
    }
  }

  if (step === 2) {
    //Formiläret   <--Skrivet av Linus
    return (
      <section className={visibility}>
        <section className="overlay__container">
          <header className="overlay__header">
            <Breadcrumbs step={step} />
            <figure>
              <img
                src={close}
                alt="close button"
                onClick={() => {
                  handleClose();
                }}
              />
            </figure>
          </header>
          <main className="overlay__main overlay__main--column">
            <div>
              <img
                className="animalInfo__img"
                src={pickedAnimal.image}
                alt=""
              />
              <h2 className="animalInfo__name">{pickedAnimal.name}</h2>
            </div>
            <Form handleClick={handleClick} />
          </main>
        </section>
      </section>
    );
  } else if (step === 3) {
    //Bekräftat overlay
    return (
      <section className={visibility}>
        <section className="overlay__container">
          <header className="overlay__header">
            <Breadcrumbs step={step} />
            <figure>
              <img
                src={close}
                alt="close button"
                onClick={() => {
                  handleClose();
                }}
              />
            </figure>
          </header>
          <main className="overlay__main overlay__main--column">
            <figure className="confirmedGif">
              <img src={confetti} alt="confetti" />
            </figure>
            <p>Tack för visat intresse. Vi hör av oss så fort vi kan.</p>
          </main>
          <footer className="overlay__footer overlay__footer--center">
            <button
              onClick={() => {
                handleClick();
              }}
              className="button-overlay button-center"
            >
              Toppen!
            </button>
          </footer>
        </section>
      </section>
    );
  } else {
    return (
      //läs mer om djuret overlay
      <section className={visibility}>
        <section className="overlay__container">
          <header className="overlay__header">
            <Breadcrumbs step={step} />
            <figure
              onClick={() => {
                handleClose();
              }}
            >
              <img src={close} alt="close button" />
            </figure>
          </header>
          <main className="overlay__main">
            <section className="overlay__info">
              <img
                className="animalInfo__img"
                src={pickedAnimal.image}
                alt=""
              />
              <div>
                <h2 className="animalInfo__name">{pickedAnimal.name}</h2>
                {pickedAnimal.adopted ? <p>Adopterad</p> : <></>}
              </div>
              <p className="animalInfo__age">{pickedAnimal.age} år</p>
              <div className="animalInfo__location">
                <figure className="animalInfo__locationPin">
                  <img
                    className="animalInfo__locationPin"
                    src={locationPin}
                    alt="location pin"
                  />
                </figure>
                <p className="animalInfo__place">{pickedAnimal.location}</p>
              </div>
            </section>
            <AnimalDescription
              pickedAnimal={pickedAnimal}
              setPickedAnimal={setPickedAnimal}
            />
          </main>
          {pickedAnimal.adopted ? (
            <></>
          ) : (
            <footer className="overlay__footer">
              <p className="interestedCount">
                {pickedAnimal.interested} personer är intresserade av {pickedAnimal.name}
              </p>
              <button
                onClick={() => {
                  handleClick();
                }}
                className="button-overlay"
              >
                Intresseanmälan
              </button>
            </footer>
          )}
        </section>
      </section>
    );
  }
};

export default Overlay;

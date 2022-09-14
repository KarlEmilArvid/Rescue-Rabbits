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

  function handleClick(): void { // Byter innehåll beroende på vilken steg. När man går vidare ökar step med 1
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
    // Steg 2 - Formulär
    return (
      <section className={visibility}>
        <section className="overlay-container">
          <header className="overlay-header">
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
                className="animal-info-image"
                src={pickedAnimal.image}
                alt=""
              />
              <h2 className="animal-info-name">{pickedAnimal.name}</h2>
            </div>
            <Form handleClick={handleClick} />
          </main>
        </section>
      </section>
    );
  } else if (step === 3) {
    //Steg 3 - Bekräftat
    return (
      <section className={visibility}>
        <section className="overlay-container">
          <header className="overlay-header">
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
          <footer className="overlay-footer">
            <button
              onClick={() => {
                handleClick();
              }}
              className="button-center">
              Toppen!
            </button>
          </footer>
        </section>
      </section>
    );
  } else {
    return (
      //Steg 1 - Läs mer
      <section className={visibility}>
        <section className="overlay-container">
          <header className="overlay-header">
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
            <section className="overlay-info">
              <img
                className="animal-info-image"
                src={pickedAnimal.image}
                alt=""
              />
              <div>
                <h2 className="animal-info-name">{pickedAnimal.name}</h2>
                {pickedAnimal.adopted ? <p>Adopterad</p> : <></>}
              </div>
              <p className="animal-info-age">{pickedAnimal.age} år</p>
              <div className="animal-info-location">
                <figure className="animal-info-location-pin">
                  <img
                    className="animal-info-location-pin"
                    src={locationPin}
                    alt="location pin"
                  />
                </figure>
                <p>{pickedAnimal.location}</p>
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
            <footer className="overlay-footer">
              <p className="interested-count">
                {pickedAnimal.interested} personer är intresserade av {pickedAnimal.name}
              </p>
              <button onClick={() => {handleClick();
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

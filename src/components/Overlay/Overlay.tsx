import "./Overlay.scss"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import Form from "./Form"
import close from "../../assets/close.svg"
import { Animal } from "../../models/data"
import ReadMore from "./ReadMore"
import { useState } from "react"
import confetti from "../../assets/confetti.gif"

interface Props {
  setPickedAnimal: (pickedAnimal: Animal) => void;
  pickedAnimal: Animal;
  visibility: string;
  // ÄNDRA TYP!!!!
  hideOverlay: any;
}  

const Overlay = ({ visibility, hideOverlay, setPickedAnimal, pickedAnimal}: Props) => {
  const [step, setStep] = useState<number>(1)

  function handleClick () {
    if (step === 3) {
      hideOverlay()
      setStep(1)
    } else {
      setStep(step+1)
      console.log(step)
    }
  }

  if (step === 2) {
    return (
      <section className={visibility} >
      <section className="overlay__container">
        <header className="overlay__header">
          <Breadcrumbs step={step}/> 
          <figure>
            <img src={close} alt="close button" onClick={()=> {hideOverlay()}} />
          </figure>
        </header>
        <main className="overlay__main overlay__main--column">
            <div>
              <img className="animalInfo__img" src={pickedAnimal.image} alt="" />
              <h2 className="animalInfo__name">{pickedAnimal.name}</h2>
            </div>
          <Form handleClick={handleClick} />
        </main>
        <footer className="overlay__footer">
        </footer>
      </section>
    </section>
    )
  } else if (step === 3) {
    return (
      <section className={visibility}>
      <section className="overlay__container">
        <header className="overlay__header">
          <Breadcrumbs step={step}/> 
          <figure>
            <img src={close} alt="close button" onClick={()=> {hideOverlay()}} />
          </figure>
        </header>
        <main className="overlay__main overlay__main--column">
            <div>
              <img className="animalInfo__img" src={pickedAnimal.image} alt="" />
              <h2 className="animalInfo__name">{pickedAnimal.name}</h2>
            </div>
          <figure className="confirmedGif">
            <img src={confetti} alt="confetti" />
          </figure>
          <p>Tack för visat intresse. Vi hör av oss så fort vi kan.</p>
        </main>
        <footer className="overlay__footer overlay__footer--center">
          <button onClick={()=> {handleClick()}} className="button-center">Toppen!</button>
        </footer>
      </section>
    </section>
    )
  } else {
    return (
      <section className={visibility} >
      <section className="overlay__container">
        <header className="overlay__header">
          <Breadcrumbs step={step}/> 
          <figure onClick={()=> {hideOverlay()}}>
            <img src={close} alt="close button" />
          </figure>
        </header>
        <main className="overlay__main">
          <img className="animalInfo__img" src={pickedAnimal.image} alt="" />
          <ReadMore pickedAnimal={pickedAnimal} setPickedAnimal={setPickedAnimal}/>
        </main>
        <footer className="overlay__footer">
          <p className="interestedCount">X personer är intresserade av {pickedAnimal.name}</p>
          <button onClick={()=> {handleClick()}} className="button-overlay">Intresseanmälan</button>
        </footer>
      </section>
    </section>
    )
  }
}

export default Overlay

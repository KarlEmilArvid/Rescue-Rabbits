import "./Overlay.scss"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import Form from "./Form"
import close from "../../assets/close.svg"

import { Animal } from "../../models/data"
import AnimalDescription from "./AnimalDescription"
import confetti from "../../assets/confetti.gif"
import { useState } from "react";


interface Props {
  setPickedAnimal: (pickedAnimal: Animal) => void;
  pickedAnimal: Animal;
  visibility: string;
  // ÄNDRA TYPER!!!!
  hideOverlay: any;
  setStep: any;
  step: number;
}  

const Overlay = ({step, setStep, visibility, hideOverlay, setPickedAnimal, pickedAnimal}: Props) => {
  function handleClick () {
    if (step === 3) {
      hideOverlay()
      setStep(1)
    } else {
      setStep(step + 1)
    }
  }
  //om step är mindre än 4 när man stänger ner så återställs stegen
  function handleClose () {
    if (step < 4) {
      setStep(1)
      hideOverlay()
    }
  }

 if (step === 2) {
    //Formiläret   <--Skrivet av Linus
    return (
      <section className={visibility}>
        <section className="overlay__container">
          <header className="overlay__header">
            <Breadcrumbs step={step}/> 
            <figure>
              <img src={close} alt="close button" onClick={()=> {handleClose()}}/>
            </figure>
          </header>
          <main className="overlay__main overlay__main--column">
              <div>
                <img className="animalInfo__img" src={pickedAnimal.image} alt=""/>
                <h2 className="animalInfo__name">{pickedAnimal.name}</h2>
              </div>
            <Form handleClick={handleClick}/>
          </main>
        </section>
      </section>
    )
  } else if (step === 3) {
    //Bekräftat
    return (
      <section className={visibility}>
      <section className="overlay__container">
        <header className="overlay__header">
          <Breadcrumbs step={step}/> 
          <figure>
            <img src={close} alt="close button" onClick={()=> {handleClose()}}/>
          </figure>
        </header>
        <main className="overlay__main overlay__main--column">
          <figure className="confirmedGif">
            <img src={confetti} alt="confetti"/>
          </figure>
          <p>Tack för visat intresse. Vi hör av oss så fort vi kan.</p>
        </main>
        <footer className="overlay__footer overlay__footer--center">
          <button onClick={()=> {handleClick()}} className="button-overlay button-center">Toppen!</button>
        </footer>
      </section>
    </section>
    )
  } else {
    return (
      //läs mer om djuret
      <section className={visibility}>
            <section className={visibility}>
            <section className="overlay__container">
              <header className="overlay__header">
                <Breadcrumbs step={step}/> 
                <figure onClick={()=> {handleClose()}}>
                  <img src={close} alt="close button"/>
                </figure>
              </header>
              <main className="overlay__main">
                <img className="animalInfo__img" src={pickedAnimal.image} alt=""/>
                <AnimalDescription pickedAnimal={pickedAnimal} setPickedAnimal={setPickedAnimal}/>
              </main>
              { pickedAnimal.adopted ? (<></>) : 
              <footer className="overlay__footer">
                <p className="interestedCount">X personer är intresserade av {pickedAnimal.name}</p>
                <button onClick={()=> {handleClick()}} className="button-overlay">Intresseanmälan</button>
              </footer>}
              
            </section>
          </section>
      </section>


    //   <section className={visibility}>
    //   <section className="overlay__container">
    //     <header className="overlay__header">
    //       <Breadcrumbs step={step}/> 
    //       <figure onClick={()=> {handleClose()}}>
    //         <img src={close} alt="close button"/>
    //       </figure>
    //     </header>
    //     <main className="overlay__main">
    //       <img className="animalInfo__img" src={pickedAnimal.image} alt=""/>
    //       <AnimalDescription pickedAnimal={pickedAnimal} setPickedAnimal={setPickedAnimal}/>
    //     </main>
    //     <footer className="overlay__footer">
    //       <p className="interestedCount">X personer är intresserade av {pickedAnimal.name}</p>
    //       <button onClick={()=> {handleClick()}} className="button-overlay">Intresseanmälan</button>
    //     </footer>
    //   </section>
    // </section>
    )
  }
}

export default Overlay

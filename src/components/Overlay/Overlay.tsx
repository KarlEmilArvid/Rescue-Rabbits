import "./Overlay.scss"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import Form from "./Form"
import Confirmed from "./Confirmed"
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
  // const [showForm, setShowForm] = useState<boolean>(false)
  const [step, setStep] = useState<number>(1)

  function handleClickToForm (animalId:number) {
    // setShowForm(true)
    setStep(2)
  }
  function handleClickToConfirmed (animalId:number) {
    // setShowForm(true)
    setStep(3)
  }
   
  if (step === 2) {
    return (
      <section className="overlay">
      <section className="overlay__container">
        <header className="overlay__header">
          <Breadcrumbs step={step}/> 
          <figure>
            <img src={close} alt="close button" />
          </figure>
        </header>
        <main className="overlay__main overlay__main--column">
            <div>
              <img className="animalInfo__img" src={pickedAnimal.image} alt="" />
              <h2 className="animalInfo__name">{pickedAnimal.name}</h2>
            </div>
          <Form />
        </main>
        
        <footer className="overlay__footer">
          <button onClick={()=> {handleClickToConfirmed(pickedAnimal.id)}} className="button button--overlay button--green">Skicka</button>
        </footer>
      </section>
    </section>
    )
  } else if (step === 3) {
    return (
      <section className="overlay">
      <section className="overlay__container">
        <header className="overlay__header">
          <Breadcrumbs step={step}/> 
          <figure>
            <img src={close} alt="close button" />
          </figure>
        </header>
        <main className="overlay__main overlay__main--column">
            <div>
              <img className="animalInfo__img" src={pickedAnimal.image} alt="" />
              <h2 className="animalInfo__name">{pickedAnimal.name}</h2>
            </div>
          <Confirmed />
        </main>
        
        {/* <footer className="overlay__footer">
          <button onClick={()=> {handleClickToConfirmed(pickedAnimal.id)}} className="button button--overlay button--green">Skicka</button>
        </footer> */}
      </section>
    </section>
    )
  } else {
    return (
      <section className="overlay">
      <section className="overlay__container">
        <header className="overlay__header">
          <Breadcrumbs step={step}/> 
          <figure>
            <img src={close} alt="close button" />
          </figure>
        </header>
        <main className="overlay__main">
          <img className="animalInfo__img" src={pickedAnimal.image} alt="" />
          <ReadMore pickedAnimal={pickedAnimal} setPickedAnimal={setPickedAnimal}/>
        </main>
        <footer className="overlay__footer">
          <p className="interestedCount">X personer är intresserade av {pickedAnimal.name}</p>
          <button onClick={()=> {handleClickToForm(pickedAnimal.id)}} className="button button--overlay">Intresseanmälan</button>
        </footer>
      </section>
    </section>
    )
  }
  
}

export default Overlay

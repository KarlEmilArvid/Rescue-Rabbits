import { useState } from "react";
import searchIcon from "../../assets/searchIcon.svg";
import { Animal } from "../../models/data";
import AnimalCard from "../AnimalCard/AnimalCard";
import "./Main.scss";

interface Props {
  animals: Animal[];
  setPickedAnimal: (pickedAnimal: Animal) => void;
  pickedAnimal: Animal;
  //BYT TYP!!!
  showOverlay: any;
}

const Main = ({ showOverlay, animals, setPickedAnimal, pickedAnimal}: Props) => {
  const cardsShown = 6; //visar 6 kort, 6 mer vid varje knapptryck, när alla kort är visade så försvinner knappen
  const [load, setLoad] = useState (cardsShown)
  const loadMoreCards = () => {
    setLoad (load + cardsShown);
  }

  const [types, settypes] = useState<Animal[]>(() => {
    const key = "type";
    const uniqueType = [
      ...new Map(animals.map((type) => [type[key], type])).values(),
    ];
    return uniqueType;
  });

  return (
    <main className="main">
      <section className="search-field">
        <section className="search-wrapper">
          <input type="text" placeholder="Sök på Plats" />
          <img className="search-icon" src={searchIcon} alt="" />
        </section>
        <select>
          <option value="">select pet</option>
          {types.map((type) => (
            <option value={type.type}>{type.type}</option>
          ))}
        </select>
      </section>
      <section className="animal-list">
        {animals?.slice(0, load)?.map((animal) => (
          <AnimalCard showOverlay={showOverlay} animal={animal} pickedAnimal={pickedAnimal} setPickedAnimal={setPickedAnimal} key={animal.id} />
        ))}
      </section>
      <div className="button-wrapper">
        {load <animals?.length && (<button onClick={loadMoreCards}>läs in fler</button>)}
      </div>
    </main>
  )
}

export default Main

import { useEffect, useState } from "react"
import searchIcon from "../../assets/searchIcon.svg"
import { Animal } from "../../models/data"
import AnimalCard from "../AnimalCard/AnimalCard"
import "./Main.scss"

interface Props {
  animals: Animal[];
  setPickedAnimal: (pickedAnimal: Animal) => void;
  pickedAnimal: Animal;
  showOverlay: () => void;
}

const Main = ({ showOverlay, animals, setPickedAnimal, pickedAnimal }: Props) => {
  const [query, setQuery] = useState<string>("")
  const cardsShown = 6; //visar 6 kort, 6 mer vid varje knapptryck, när alla kort är visade så försvinner knappen
  const [load, setLoad] = useState<number>(cardsShown)
  const [animalsToShow, setanimalsToShow] = useState<Animal[]>(animals.filter(animal => animal.type.toLowerCase().includes(query) || animal.location.toLowerCase().includes(query)))
  const [showButton, setshowButton] = useState<boolean>(true)
  const loadMoreCards: () => void = () => {
    setLoad(load + cardsShown);
    setanimalsToShow(animals.filter(animal => animal.type.toLowerCase().includes(query) || animal.location.toLowerCase().includes(query)));
  }

  useEffect(() => {
    setanimalsToShow(animals.filter(animal => animal.type.toLowerCase().includes(query) || animal.location.toLowerCase().includes(query)));
    setLoad(cardsShown)
  }, [query]);

  useEffect(() => {
    if (animalsToShow.length == load || animalsToShow.length < load) {
      setshowButton(false)
    } else {
      setshowButton(true)
    }
    console.log(load)
  }, [load]);
  

  return (
    <main className="main">
      <section className="search-field">
        <section className="search-wrapper">
          <input
            type="text"
            placeholder="Sök på plats eller djurtyp"
            className="search"
            onChange={e => setQuery(e.target.value)} />
          <img className="search-icon" src={searchIcon} alt="" />
        </section>
      </section>
      <section id="animal-list">
        {animals?.filter((animal) =>
          animal.type.toLowerCase().includes(query) || animal.location.toLowerCase().includes(query)).slice(0, load)?.map((animal) => (
            <AnimalCard showOverlay={showOverlay} animal={animal} pickedAnimal={pickedAnimal} setPickedAnimal={setPickedAnimal} key={animal.id} />
          ))}
      </section>
      <div className="button-wrapper">
        {showButton ? (
          <button onClick={loadMoreCards}>Läs in fler</button>
        ):(<></>)}
        {/* {showButton === 6 || 12 || 18 || 24 && (<button onClick={loadMoreCards}>Läs in fler</button>)} */}
        {/* {load < animals?.length && (<button onClick={loadMoreCards}>Läs in fler</button>)} */}
      </div>
    </main>
  );
};

export default Main;

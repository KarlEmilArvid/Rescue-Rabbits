import {Animal} from "../../models/data";
import AnimalCard from "../AnimalCard/AnimalCard";
import "./Main.scss";

interface Props {
  animals: Animal[];
  //    handleClick:
}

const Main = ({animals}: Props) => {
  return (
    <main>
      <section>
        <input type="text" />
        <select>{}</select>
      </section>
      <section className="animal-list">
        {animals.map((animal) => (
          <AnimalCard animal={animal} />
        ))}
      </section>
      <button>läs in fler</button>
    </main>
  )
}

export default Main

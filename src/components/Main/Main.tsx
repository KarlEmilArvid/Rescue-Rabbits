import { useState } from "react";
import { Animal } from "../../models/data";
import AnimalCard from "../AnimalCard/AnimalCard";
import "./Main.scss";

interface Props {
  animals: Animal[];
  //    handleClick:
}

const Main = ({ animals }: Props) => {
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
        <input type="text" />
        <select>
          {types.map((type) => (
            <option value={type.type}>{type.type}</option>
          ))}
        </select>
      </section>
      <section className="animal-list">
        {animals.map((animal) => (
          <AnimalCard animal={animal} />
        ))}
      </section>
      <button>läs in fler</button>
    </main>
  );
};

export default Main;

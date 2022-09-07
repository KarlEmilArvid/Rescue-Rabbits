import { useState } from "react";
import searchIcon from "../../assets/searchIcon.svg";
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
        {animals.map((animal) => (
          <AnimalCard animal={animal} />
        ))}
      </section>
      <button>läs in fler</button>
    </main>
  );
};

export default Main;

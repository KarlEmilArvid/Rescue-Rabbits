import map from "../../assets/MapPin.svg";
import { Animal } from "../../models/data";
import AnimalCard from "../AnimalCard/AnimalCard";
import "./Hero.scss";

interface Props {
  animals: Animal[];
  setPickedAnimal: (pickedAnimal: Animal) => void;
  pickedAnimal: Animal;
}
//Hero är temporärt fixat, tror ej vi kommer kunna visa kort i vilket fall när vi har sök funktionen, söker vi på fågel så kommer alla katter i heron att försvinna tex
//Blir nog lättast att ha tre statiska djur kort, bättre att lägga fokus på sök funktion och responsiv styling
const Hero = ({ animals, pickedAnimal, setPickedAnimal }: Props) => {
  //  let firstThreeInAnimals = animals.slice(0, 3);
  return (
    <section className="hero">
      <h1>
        Varje djur förtjänar <br></br>{" "}
        <div>
          ett
          <span>
            hem
            <svg
              width="144"
              height="25"
              viewBox="0 0 144 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.21077 15.99C24.8022 8.41801 143.752 1.60663 143.752 1.60663C117.426 6.08828 63.6136 16.9149 58.9694 24.3682"
                stroke="#5E9FFF"
                strokeWidth="2"
              />
            </svg>
          </span>
        </div>
      </h1>
      <section className="card">
        <img
          className="animal-image"
          src="https://images.unsplash.com/photo-1569591159212-b02ea8a9f239?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />
        <section className="text-block">
          <h2 className="name">Kent</h2>
          <section className="location">
            <p>
              <img className="map-pin" src={map} alt="map pin" />
              Eskilstuna
            </p>
          </section>
          <p className="age"> 32 år</p>
          <p className="date">Letat efter ett hem sedan 2010-12-24</p>
          <button className="card-button">Läs mer</button>
        </section>
      </section>
      <section className="card">
        <img
          className="animal-image"
          src="https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />
        <section className="text-block">
          <h2 className="name">Pär</h2>
          <section className="location">
            <p>
              <img className="map-pin" src={map} alt="map pin" />
              Umeå
            </p>
          </section>
          <p className="age"> 4 år</p>
          <p className="date">Letat efter ett hem sedan 2018-06-12</p>
          <button className="card-button">Läs mer</button>
        </section>
      </section>
      <section className="card">
        <img
          className="animal-image"
          src="https://images.unsplash.com/photo-1618252903592-2b8c90c43a6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3VpbmVhJTIwcGlnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
        <section className="text-block">
          <h2 className="name">Åke</h2>
          <section className="location">
            <p>
              <img className="map-pin" src={map} alt="map pin" />
              Karlskoga
            </p>
          </section>
          <p className="age"> 13 år</p>
          <p className="date">Letat efter ett hem sedan 2020-01-22</p>
          <button className="card-button">Läs mer</button>
        </section>
      </section>
      <article>
        <p>
          Rescue Rabbit är en plats där djur kan omplaceras. Vi tror på starkt
          på förtroende mellan parter, därför låter vi alltid den nuvarande
          ägaren bestämma själv till vilken av de intresserade parter hen vill
          adoptera bort djuret till. Vi kämpar för att varje djur ska ha en
          trygg och hälsosam framtid. Det gör vi genom att skicka ut våra
          vetrinärer och göra en hälsokontroll på djuret innan det kommer upp på
          hemsidan. Scrolla ned för att se alla djur
        </p>
      </article>
      <figure>
        <img src="" alt="" />
      </figure>
    </section>
  );
};

export default Hero;

//      {firstThreeInAnimals.map((animals, pickedAnimal, setPickedAnimal) => (
//  <AnimalCard animal={animals} pickedAnimal={pickedAnimal} setPickedAnimal={setPickedAnimal}/>
//  ))}

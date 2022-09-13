import map from "../../assets/MapPin.svg";
import { Animal } from "../../models/data";
import AnimalCard from "../AnimalCard/AnimalCard";
import "./Hero.scss";

interface Props {
  animals: Animal[];
  setPickedAnimal: (pickedAnimal: Animal) => void;
  pickedAnimal: Animal;
}

const Hero = ({ animals, pickedAnimal, setPickedAnimal }: Props) => {
  usestate;
  let firstThreeInAnimals = animals.slice(0, 3);
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
                stroke-width="2"
              />
            </svg>
          </span>
        </div>
      </h1>
      {firstThreeInAnimals.map((animals, pickedAnimal, setPickedAnimal) => (
        <AnimalCard
          animal={animals}
          pickedAnimal={pickedAnimal}
          setPickedAnimal={setPickedAnimal}
        />
      ))}
      <article className="hero-desc">
        <p>
          Rescue Rabbit är en plats där djur kan omplaceras. Vi tror på starkt
          på förtroende mellan parter, därför låter vi alltid den nuvarande
          ägaren bestämma själv till vilken av de intresserade parter hen vill
          adoptera bort djuret till.
        </p>
        <p>
          Vi kämpar för att varje djur ska ha en trygg och hälsosam framtid. Det
          gör vi genom att skicka ut våra vetrinärer och göra en hälsokontroll
          på djuret innan det kommer upp på hemsidan.
        </p>
        <br />
        <div className="scroll-down">
          <p>Scrolla ned för att se alla djur </p>
          <figure>
            <svg
              viewBox="0 0 24 129"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9393 128.061C11.5251 128.646 12.4749 128.646 13.0607 128.061L22.6066 118.515C23.1924 117.929 23.1924 116.979 22.6066 116.393C22.0208 115.808 21.0711 115.808 20.4853 116.393L12 124.879L3.51471 116.393C2.92893 115.808 1.97918 115.808 1.39339 116.393C0.807607 116.979 0.807607 117.929 1.39339 118.515L10.9393 128.061ZM10.5 -6.55671e-08L10.5 127L13.5 127L13.5 6.55671e-08L10.5 -6.55671e-08Z"
                fill="#B4AAAA"
              />
            </svg>
          </figure>
        </div>
      </article>
    </section>
  );
};

export default Hero;

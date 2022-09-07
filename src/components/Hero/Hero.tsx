import { Animal } from "../../models/data";
import AnimalCard from "../AnimalCard/AnimalCard";
import "./Hero.scss";

interface Props {
  animals: Animal[];
  //    handleClick:
}

const Hero = ({ animals }: Props) => {
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
      {/* {firstThreeInAnimals.map((animal) => (
        <AnimalCard animal={animal} />
      ))} */}
      <article>
        <p></p>
      </article>
      <figure>
        <img src="" alt="" />
      </figure>
    </section>
  );
};

export default Hero;

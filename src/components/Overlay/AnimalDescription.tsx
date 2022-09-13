import locationPin from "../../assets/locationPin.svg";
import { Animal } from "../../models/data";
import "./AnimalDescription.scss";

interface Props {
  setPickedAnimal: (pickedAnimal: Animal) => void;
  pickedAnimal: Animal;
}

const AnimalDescription = ({ pickedAnimal }: Props) => {
  return (
    <section className="animalInfo">
      <p className="animalInfo__description">{pickedAnimal.desc}</p>
    </section>
  );
};

export default AnimalDescription;

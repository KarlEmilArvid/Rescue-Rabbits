import { Animal } from "../../models/data";
import "./AnimalDescription.scss";

interface Props {
  setPickedAnimal: (pickedAnimal: Animal) => void;
  pickedAnimal: Animal;
}

const AnimalDescription = ({ pickedAnimal }: Props) => {
  return (
    <section className="animal-info">
      <p>{pickedAnimal.desc}</p>
    </section>
  );
};

export default AnimalDescription;

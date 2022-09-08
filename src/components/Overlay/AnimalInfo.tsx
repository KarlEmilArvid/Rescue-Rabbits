import "./AnimalInfo.scss";
import {Animal} from "../../models/data";
import locationPin from "../../assets/locationPin.svg"

interface Props {
    theAnimal: Animal;
  }


const AnimalInfo = ({ theAnimal }: Props) => {
    return (
        <section className="animalInfo">
            <h2 className="animalInfo__name">{theAnimal.name}</h2>
            <p className="animalInfo__age">{theAnimal.age} år</p>
            <div className="animalInfo__location">
                <figure className="animalInfo__locationPin">
                <img className="animalInfo__locationPin" src={locationPin} alt="location pin" />
                </figure>
                <p className="animalInfo__place">{theAnimal.location}</p>
            </div>
            <p className="animalInfo__description">{theAnimal.desc}</p>
        </section>
    );
};
export default AnimalInfo;
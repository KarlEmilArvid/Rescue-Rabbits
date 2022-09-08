import "./AnimalInfo.scss";
import {Animal} from "../../models/data";
import locationPin from "../../assets/locationPin.svg"

interface Props {
    animals: Animal[];
    setPickedAnimal: (pickedAnimal: Animal) => void;
    pickedAnimal: Animal;
}

const AnimalInfo = ({ animals, pickedAnimal}: Props) => {
    return (
        <section className="animalInfo">
            <h2 className="animalInfo__name">{pickedAnimal.name}</h2>
            <p className="animalInfo__age">{pickedAnimal.age} år</p>
            <div className="animalInfo__location">
                <figure className="animalInfo__locationPin">
                <img className="animalInfo__locationPin" src={locationPin} alt="location pin" />
                </figure>
                <p className="animalInfo__place">{pickedAnimal.location}</p>
            </div>
            <p className="animalInfo__description">{pickedAnimal.desc}</p>
        </section>
    )
}

export default AnimalInfo

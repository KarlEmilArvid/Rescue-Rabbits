import "./AnimalDescription.scss"
import {Animal} from "../../models/data"
import locationPin from "../../assets/locationPin.svg"

interface Props {
    setPickedAnimal: (pickedAnimal: Animal) => void;
    pickedAnimal: Animal;
}

const AnimalDescription = ({pickedAnimal}: Props) => {
    return (
        <section className="animalInfo">
            <div>
                <h2 className="animalInfo__name">{pickedAnimal.name}</h2>
                {pickedAnimal.adopted ? (<p>Adopterad</p>) : (<></>)}
            </div>
            <p className="animalInfo__age">{pickedAnimal.age} år</p>
            <div className="animalInfo__location">
                <figure className="animalInfo__locationPin">
                    <img className="animalInfo__locationPin" src={locationPin} alt="location pin"/>
                </figure>
                <p className="animalInfo__place">{pickedAnimal.location}</p>
            </div>
            <p className="animalInfo__description">{pickedAnimal.desc}</p>
        </section>
    )
}

export default AnimalDescription

import "./ReadMore.scss";
import {Animal} from "../../models/data";
import locationPin from "../../assets/locationPin.svg"

interface Props {
    theAnimal: Animal;
  }


const AnimalInfo = ({ theAnimal }: Props) => {
    return (
        
        <div className="read-more">
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
            <footer className="overlay__footer">
                <p className="interestedCount">X personer är intresserade av {theAnimal.name}</p>
                <button className="button button--overlay">Intresseanmälan</button>
            </footer>
        </div>
    );
};
export default AnimalInfo;
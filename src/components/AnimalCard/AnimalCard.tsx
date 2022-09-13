<<<<<<< Updated upstream
import { Animal } from '../../models/data'
import './AnimalCard.scss'
import map from '../../assets/MapPin.svg'
import arrow from '../../assets/Arrow.svg'
=======
import arrow from "../../assets/Arrow.svg";
import map from "../../assets/MapPin.svg";
import { Animal } from "../../models/data";
import "./AnimalCard.scss";
>>>>>>> Stashed changes

interface Props {
  animal: Animal;
  setPickedAnimal: (pickedAnimal: Animal) => void;
  pickedAnimal: Animal;
  //BYT TYP
  showOverlay: any;
}

<<<<<<< Updated upstream
const AnimalCard = ({ showOverlay, animal, pickedAnimal, setPickedAnimal }: Props) => {
=======
const AnimalCard = ({
  showOverlay,
  animal,
  pickedAnimal,
  setPickedAnimal,
}: Props) => {
>>>>>>> Stashed changes
  function handleClick() {
    showOverlay();
    setPickedAnimal(animal);
  }

  return (
<<<<<<< Updated upstream
    <section onClick={handleClick} className='card'>
      <img className='animal-image' src={animal.image} />
      {animal.adopted ? (
        <div>
          <div className='glass-blur'></div>
          <p className='adopted-info'>Adopterad</p>
        </div>) :
        (<></>)}
      <section className='text-block'>
        <h2 className='name'>{animal.name}</h2>
        <section className="location">
          <p>
            <img className='map-pin' src={map} alt='map pin' />{animal.location}
          </p>
        </section>
        <p className='age'> {animal.age} år</p>
        <p className='date'>{animal.dateAdded}</p>
        <button className='card-button'>Läs mer<img src={arrow} /></button>
      </section>
    </section>
  )
}

export default AnimalCard
=======
    <section onClick={handleClick} className="card">
      <img className="animal-image" src={animal.image} />
      <section className="text-block">
        <h2 className="name">{animal.name}</h2>
        <section className="location">
          <img className="map-pin" src={map} alt="map pin" />
          <p>{animal.location}</p>
        </section>
        <p className="age"> {animal.age} år</p>
        <p className="date">
          Letat efter ett hem sedan <br /> 2018-06-12
        </p>
        <button className="card-button">
          Läs mer
          <img src={arrow} />
        </button>
      </section>
    </section>
  );
};
// {animal.dateAdded}
export default AnimalCard;
>>>>>>> Stashed changes

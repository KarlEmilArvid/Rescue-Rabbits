import {Animal} from '../../models/data'
import './AnimalCard.scss'
import map from '../../assets/MapPin.svg'

interface Props {
  animal: Animal;
  setPickedAnimal: (pickedAnimal: Animal) => void;
  pickedAnimal: Animal;
  //BYT TYP
  showOverlay: any;
}

const AnimalCard = ({showOverlay, animal, pickedAnimal, setPickedAnimal}: Props) => {
  function handleClick() {
    showOverlay();
    setPickedAnimal(animal);
  }

  return (
    <section onClick={handleClick} className='card'>
      <img className='animal-image' src={animal.image}/>
      <section className='text-block'>
        <h2 className='name'>{animal.name}</h2>
        <section className="location">
          <p>
            <img className='map-pin' src={map} alt='map pin'/>{animal.location}
          </p>
        </section>
        <p className='age'> {animal.age} år</p>
        <p className='date'>Letat efter ett hem sedan 2018-06-12</p>
        <button className='card-button'>Läs mer</button>
      </section>
    </section>
  )
}
// {animal.dateAdded}
export default AnimalCard

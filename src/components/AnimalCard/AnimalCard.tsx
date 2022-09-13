import { Animal } from '../../models/data'
import './AnimalCard.scss'
import map from '../../assets/MapPin.svg'
import arrow from '../../assets/Arrow.svg'

interface Props {
  animal: Animal;
  setPickedAnimal: (pickedAnimal: Animal) => void;
  pickedAnimal: Animal;
  showOverlay: () => void;
}

const AnimalCard = ({ showOverlay, animal, pickedAnimal, setPickedAnimal }: Props) => {
  function handleClick() {
    showOverlay();
    setPickedAnimal(animal);
  }

  return (
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

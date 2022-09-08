import {Animal} from "../../models/data";
import './AnimalCard.scss'

interface Props {
  animal: Animal;
  setPickedAnimal: (pickedAnimal: Animal) => void;
  pickedAnimal: Animal;
}

const AnimalCard = ({animal, pickedAnimal, setPickedAnimal}: Props) => {
  function handleClick() {
//    setCss(!hiddenClass)?
    setPickedAnimal(animal);
  }

  return (
    <section onClick={handleClick} className="card">
      <img src={animal.image}/>
      <section className="text-block">
        <h2 className="name">{animal.name}</h2>
        <section className="location">
          <figure></figure>
          <p>{animal.location}</p>
        </section>
        <p className="age"> {animal.age} år</p>
        <p className="date">Letat efter ett hem sedan 2018-06-12</p>
        <button className="read-more">Läs mer</button>
      </section>
    </section>
  )
}
// {animal.dateAdded}
export default AnimalCard

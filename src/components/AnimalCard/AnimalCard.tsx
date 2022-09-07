import { Animal } from "../../models/data";

interface Props {
  animal: Animal;
  //  handleClick:
}

const AnimalCard = ({ animal }: Props) => {
  return (
    <section className="card">
      <img src={animal.image} />
      <h3>{animal.name}</h3>
      <section className="">
        <figure></figure>
        <p>{animal.location}</p>
      </section>
      <p>{animal.age}</p>
      <p>Letat efter ett hem sedan 2018-06-12 </p>
      <button className="return">Lämna intresseanmälan</button>
    </section>
  );
};
// // onClick={(handleClick)=>}
export default AnimalCard;

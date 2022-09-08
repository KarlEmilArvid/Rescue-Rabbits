import "./Form.scss";
import {Animal} from "../../models/data";

interface Props {
    theAnimal: Animal;
  }


const Form = ({ theAnimal }: Props) => {
    return (
        <section className="form">
            <h2 className="animalInfo__name">{theAnimal.name}</h2>
            
            <p className="animalInfo__description">{theAnimal.desc}</p>
        </section>
    );
};
export default Form;
import "./Form.scss";
import {Animal} from "../../models/data";

interface Props {
    animalName: string;
  }


const Form = ({ animalName }: Props) => {
    return (
        <section className="form">
            <h2 className="animalInfo__name">{animalName}</h2>
        </section>
    );
};
export default Form;
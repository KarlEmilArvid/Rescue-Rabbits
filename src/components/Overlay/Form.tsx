import "./Form.scss";
import profile from "../../assets/profile.svg"
import phone from "../../assets/phone.svg"
import mail from "../../assets/mail.svg"
import message from "../../assets/message.svg"
import { useState } from "react";
 
interface FormState{
    name: string;
    phoneNumber: string;
    email: string;
    message: string;
}

interface Props {
    handleClickToConfirmed: any;
}
const Form = ({ handleClickToConfirmed}: Props) => {
   
    // EY! Byt ut typen här.. det där ser gräsligt ut!
    const [formData, setFormData] = useState<FormState>({
        name: "",
        phoneNumber: "",
        email: "",
        message: "",
    })

    const handleChange = (event:any) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
        console.log(formData)
      };
    
      const handleSubmit = (event:any) => {
        event.preventDefault();
        console.log(formData)
        handleClickToConfirmed();
      }

    return (
        <section className="form">
            <form onSubmit={handleSubmit}>
                <div>
                    <figure>
                        <img src={profile} alt="" />
                    </figure>
                    <input onChange={handleChange} value={formData.name} type="text" name="name" placeholder="För- och Efternamn" />
                </div>
                <div>
                    <figure>
                        <img src={phone} alt="" />
                    </figure> 
                    <input onChange={handleChange} value={formData.phoneNumber} type="tel" name="phoneNumber"placeholder="Telefonnummer"/>
                </div>
                <div>
                    <figure>
                        <img src={mail} alt="" />
                    </figure>
                    <input onChange={handleChange} value={formData.email} type="email" name="email"placeholder="E-mail"/>
                </div>
                <div className="input__message">
                    <figure>
                        <img src={message} alt="" />
                    </figure>
                    <input onChange={handleChange}  value={formData.message} type="text" name="message" placeholder="Meddelande (frivilligt)"/>
                </div>  
                <button onClick={()=> {handleSubmit}} className="button button--overlay button--center button--green">Skicka</button>
                {/* <button type="submit" onSubmit={handleSubmit}>Submit</button>               */}
            </form>
        </section>
    );
};
export default Form;
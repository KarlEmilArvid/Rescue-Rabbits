import "./Form.scss"
import profile from "../../assets/profile.svg"
import phone from "../../assets/phone.svg"
import mail from "../../assets/mail.svg"
import message from "../../assets/message.svg"
import React, { useState } from "react"

interface FormState {
    name: string;
    phoneNumber: string;
    email: string;
    message: string;
}

interface Props {
    handleClick: () => void;
}

const Form = ({ handleClick }: Props) => {
    const [formData, setFormData] = useState<FormState>({
        name: "",
        phoneNumber: "",
        email: "",
        message: ""
    })

    const handleSubmit = (event:any) => { //måste ha typ any för att required ska fungera
        event.preventDefault()
        console.log("test")
        handleClick();
        //SPara till localstore och nollställ 
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setFormData({ ...formData, [event.target.name]: event.target.value });
        console.log(formData)
    }

    return (
        <section className="form">
            <form>
                <div className="form-field">
                    <figure>
                        <img src={profile} alt="" />
                    </figure>
                    <input onChange={handleChange} value={formData.name} type="text" name="name" placeholder="För- och Efternamn" required />
                    <small></small>
                </div>
                <div className="form-field">
                    <figure>
                        <img src={phone} alt="" />
                    </figure>
                    <input onChange={handleChange} value={formData.phoneNumber} id="tel" type="tel" name="phoneNumber" placeholder="Telefonnummer" required />
                    <small></small>
                </div>
                <div className="form-field">
                    <figure>
                        <img src={mail} alt="" />
                    </figure>
                    <input onChange={handleChange} value={formData.email} id="email" type="email" name="email" placeholder="E-mail" required />
                    <small></small>
                </div>
                <div className="form-field input__message">
                    <figure>
                        <img src={message} alt="" />
                    </figure>
                    <input onChange={handleChange} value={formData.message} id="message" type="text" name="message" placeholder="Meddelande (frivilligt)" />
                </div>
                <footer className="form__footer">
                    <button onSubmit={handleSubmit} className="button-green"> Skicka
                </button>
                </footer>
            </form>
        </section>
    )
}

export default Form

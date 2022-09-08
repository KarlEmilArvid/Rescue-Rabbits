import "./Form.scss";
import profile from "../../assets/profile.svg"
import phone from "../../assets/phone.svg"
import mail from "../../assets/mail.svg"
import message from "../../assets/message.svg"

const Form = () => {
    return (
        <section className="form">
            <form>
                <div>
                    <figure>
                        <img src={profile} alt="" />
                    </figure>
                    <input type="text" placeholder="För- och Efternamn" />
                </div>
                <div>
                    <figure>
                        <img src={phone} alt="" />
                    </figure> 
                    <input type="tel" placeholder="Telefonnummer"/>
                </div>
                <div>
                    <figure>
                        <img src={mail} alt="" />
                    </figure>
                    <input type="email" placeholder="E-mail"/>
                </div>
                <div className="input__message">
                    <figure>
                        <img src={message} alt="" />
                    </figure>
                    <input  type="text" placeholder="Meddelande (frivilligt)"/>
                </div>                
            </form>
        </section>
    );
};
export default Form;
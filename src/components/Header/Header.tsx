import { useState } from "react";
import Logo from "../../assets/Logo.svg"
import close from "../../assets/close.svg"
import "./Header.scss"
import "../Overlay/Overlay.scss"
import facebook from "../../assets/facebook.svg"
import insta from "../../assets/insta.svg"
import linkedin from "../../assets/linkedin.svg"
import twitter from "../../assets/twitter.svg"


const Header = () => {
  const [toggleContact, setToggleContact] = useState(true)

  return (
    <header className="header">
      <div className="header-content">
        <figure>
          <img src={Logo} alt="" />
        </figure>
        <h1>Rescue Rabbits</h1>
        <a onClick={() => setToggleContact(!toggleContact)}> Kontakta oss</a>
        {toggleContact ? (<></>) : (
          <section className="overlay">
            <section className="overlay__container">
              <header className="overlay__header">
                <figure>
                  <img src={close} alt="close button" onClick={() => { setToggleContact(!toggleContact) }} />
                </figure>
              </header>
              <main className="overlay__main overlay__main--column">
                <figure>
                  <img src={Logo} alt="logo" />
                </figure>
                <h2 className='animalInfo__name'>Kontakta oss</h2>
                <div className="contactContent">
                  <section className="adress">
                    <p>Rescue Rabbits</p>
                    <p>Sheltergatan 3</p>
                    <p>204 24 Åkersberga</p>
                    <p className="phone">010-657 674</p>
                  </section>
                  <section className="social-media">
                    <h2>Sociala Medier</h2>
                    <div>
                      <a href="">
                        <img src={twitter} alt="twitter icon" />
                      </a>
                      <a href="">
                        <img src={insta} alt="instagram icon" />
                      </a>
                      <a href="">
                        <img src={facebook} alt="facebook icon" />
                      </a>
                      <a href="">
                        <img src={linkedin} alt="linked icon" />
                      </a>
                    </div>
                  </section>
                </div>
              </main>
            </section>
          </section>
        )
        }
      </div>
    </header>
  )
}

export default Header

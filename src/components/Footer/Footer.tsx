import "./Footer.scss";
import facebook from "../../assets/facebook.svg"
import twitter from "../../assets/twitter.svg"
import insta from "../../assets/insta.svg"
import linkedin from "../../assets/linkedin.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <section className="adress">
        <h2>Rescue Rabbits</h2>
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
      <section>
        <h2>Kundtjänst</h2>
        <p>Hur funkar det?</p>
        <p>Frågor och svar</p>
        <p>Villkor</p>
        <p>Om oss</p>
      </section>
    </footer>
  );
};

export default Footer;

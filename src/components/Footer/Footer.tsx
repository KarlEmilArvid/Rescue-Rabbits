import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="adress">
        <h2>Rescue Rabbits</h2>
        <p>Sheltergatan 3</p>
        <p>204 24 Åkersberga</p>
        <p className="phone">010-657 674</p>
      </section>
      <section>
        <h2>Sociala Medier</h2>
        <a href="">
          <img src="" alt="" />
        </a>
        <a href="">
          <img src="" alt="" />
        </a>
        <a href="">
          <img src="" alt="" />
        </a>
        <a href="">
          <img src="" alt="" />
        </a>
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

import logo from "../../assets/logo.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <figure>
        <img src={logo} alt="" />
      </figure>
      <h1>Rescue Rabbits</h1>
      <a href="">Kontakta oss</a>
    </header>
  );
};

export default Header;
import logo from "../../assets/logo.svg"
import "./Header.scss"

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <figure>
          <img src={logo} alt=""/>
        </figure>
        <h1>Rescue Rabbits</h1>
        <a href="">Kontakta oss</a>
      </div>
    </header>
  )
}

export default Header

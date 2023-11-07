import './Header.css';
import { NavLink } from 'react-router-dom'
import logo from './DuckyLogo.png'


const Header = () => {
  return (
      <div className="header">
        <nav className="text">
        <NavLink className="link" to="/">HOME</NavLink>
        <NavLink className="link" to="/merch">MERCH</NavLink>
        </nav>
        <a href="/"><img src={logo}></img></a>
        <nav className="text">
        <NavLink className="link" to="/signup">SIGNUP</NavLink>
        <NavLink className="link" to="/contact">CONTACT</NavLink>
        </nav>
      </div>
  );
}

export default Header;

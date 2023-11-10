import './Header.css';
import { NavLink } from 'react-router-dom'
import logo from './images/DuckyLogo.png'


const Header = () => {
  return (
    <div className="header">
      <nav className="part">
        <div className="comp"><NavLink className="link" to="/">HOME</NavLink></div>
        <div className="comp"><NavLink className="link" to="/merch">MERCH</NavLink></div>
      </nav>
      <nav className="part">
      <div className="comp"><a href="/"><img className="logo" src={logo} alt="the Ducky Times logo"></img></a></div>
      </nav>
      <nav className="part">
        <div className="comp"><NavLink className="link" to="/signup">SIGNUP</NavLink></div>
        <div className="comp"><NavLink className="link" to="/contact">CONTACT</NavLink></div>
      </nav>
    </div>
  );
}

export default Header;

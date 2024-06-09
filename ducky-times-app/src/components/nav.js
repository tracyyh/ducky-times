import './nav.css';
import logo from './images/DuckyLogo.png'
import { Link, NavLink } from 'react-router-dom';
// import useBreakpoint from '../helpers/useBreakpoints';
// import { BREAKPOINT } from '../helpers/useBreakpoints';

export default function Nav({ isStatic = false }) {
	// const breakpoint = useBreakpoint();
	// if (breakpoint === BREAKPOINT.MOBILE) {
	// 	return <NavMobile isStatic={isStatic} />;
	// }
	

  return (
    <nav className="navStyling">
			<ul className="navLinks">
				<NavLink to="/" className="linkContainer">
					<li>HOME</li>
				</NavLink>
				<Link to="/merch" className="linkContainer">
					<li>MERCH</li>
				</Link>
				<Link to="/" className="linkContainer">
          <img className="logo" src={logo} alt="the Ducky Times logo"></img>
				</Link>
				{/* {breakpoint !== BREAKPOINT.MIDSIZE && ( */}
				<Link to="/signup" className="linkContainer">
					<li>SIGNUP</li>
				</Link>
				<Link to="/contact" className="linkContainer">
					<li>CONTACT</li>
				</Link>
			</ul>
		</nav>
  );
}

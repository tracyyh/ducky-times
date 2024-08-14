import React from "react";
import "./nav.css";
import logo from "../components/images/DuckyLogo.png";
import { Link } from "react-router-dom";
import { BREAKPOINT } from "../helpers/useBreakpoint.tsx";
import useBreakpoint from "../helpers/useBreakpoint.tsx";
import NavMobile from "./navMobile.tsx";

export default function Nav({ isStatic = false }) {
  const breakpoint = useBreakpoint();
  if (breakpoint === BREAKPOINT.MIDSIZE || breakpoint === BREAKPOINT.MOBILE) {
    return <NavMobile isStatic={isStatic} />;
  }

  return (
    <nav className="navStyling">
      <ul className="navLinks">
        <Link to="/" className="linkContainer">
          <li className="link">HOME</li>
        </Link>
        <Link to="/merch" className="linkContainer">
          <li className="link">MERCH</li>
        </Link>
        <Link to="/" className="linkContainer">
          <img className="logo" src={logo} alt="the Ducky Times logo"></img>
        </Link>
        <>
          <Link to="/signup" className="linkContainer">
            <li className="link">SIGNUP</li>
          </Link>
          <Link to="/contact" className="linkContainer">
            <li className="link">CONTACT</li>
          </Link>
        </>
      </ul>
    </nav>
  );
}

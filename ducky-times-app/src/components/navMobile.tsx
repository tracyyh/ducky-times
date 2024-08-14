import React from "react";
import "./navMobile.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./images/DuckyLogo.png";
import Burger from "./icons/burger.png";
import useBreakpoint, { BREAKPOINT } from "../helpers/useBreakpoint.tsx";
import justface from "./images/justFace.png";

export default function NavMobile({ isStatic = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const breakpoint = useBreakpoint();

  const open = () => {
    //setScrollY(window.scrollY);
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="closedNav">
        <Link to="/">
          <img className="logo" src={Logo} alt="Ducky Logo" />
        </Link>
        <ul className="navMobileLinks">
          {!isOpen}
          <li className="burger" onClick={!isOpen ? open : close}>
            <img className="burger" src={Burger} alt="burger" />
          </li>
        </ul>
      </div>
      {isOpen && (
        <div className="navMobileOpenLinks">
          <ul>
            <li className="x" onClick={!isOpen ? open : close}>
              X
            </li>
            <Link to="/" className="navLink">
              <li className="panelLink">HOME</li>
            </Link>
            <Link
              to="/merch"
              className="navLink"
              onClick={!isOpen ? open : close}
            >
              <li className="panelLink">MERCH</li>
            </Link>

            <Link
              to="/signup"
              className="navLink"
              onClick={!isOpen ? open : close}
            >
              <li className="panelLink">SIGNUP</li>
            </Link>

            <Link
              to="/contact"
              className="navLink"
              onClick={!isOpen ? open : close}
            >
              <li className="panelLink">CONTACT</li>
            </Link>
          </ul>
          <img className="justFaceMobile" src={justface} alt="Ducky's face" />
        </div>
      )}
    </>
  );
}

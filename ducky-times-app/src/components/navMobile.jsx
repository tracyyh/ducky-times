import "./navMobile.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./images/DuckyLogo.png";
import Burger from "./icons/burger.png";

export default function NavMobile({ isStatic = false }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    //setScrollY(window.scrollY);
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  //   useEffect(() => {
  //     if (isOpen) {
  //       //document.body.style.position = "fixed";
  //       document.body.style.top = `-${scrollY}px`;
  //     } else {
  //       document.body.style.position = "";
  //       document.body.style.top = "";
  //       window.scrollTo(0, scrollY);
  //     }
  //   }, [isOpen, scrollY]);

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
          {/* <div className="navMobileContainer">
              <Link to="/">
                <img className="logo" src={Logo} alt="Ducky Logo" />
              </Link>
              <ul className="navMobileLinks">
                <li onClick={!isOpen ? open : close}>
                  <Burger />
                </li>
              </ul>
            </div> */}
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
        </div>
      )}
    </>
  );
}

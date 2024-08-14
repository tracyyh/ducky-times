import React from "react";
import "./signupThanks.css";
import Salute from "../../components/images/Salute.png";

const Merch = () => {
  return (
    <div className="page">
      <img className="Salute" src={Salute} alt="Ducky saluting"></img>
      <nav className="texts">
        <p>
          Your registration for the Ducky Fan Club was a success. See you every
          Monday at 9 am.
        </p>
        <a className="button" href="/">
          return home
        </a>
      </nav>
    </div>
  );
};

export default Merch;

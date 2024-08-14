import React from "react";
import "./homeMobile.css";
import Ducky from "../../components/images/Ducky.png";
// import justFace from "../../components/images/justFace.png";
import duckyCollage from "../../components/images/duckyCollage.png";

const HomeMobile = () => {
  return (
    <div>
      <div className="topHalfMobile">
        {/* <img className='justFace' src={justFace} alt="front view of just Ducky's face"/> */}
        <p className="greetingMobile">Greetings Ducky fan.</p>
        <img
          className="duckyMobile"
          src={Ducky}
          alt="Ducky with the label, Ducky"
        />
      </div>
      <div className="bottomHalfMobile">
        <p className="watchDuckyMobile">Watch Ducky live life.</p>
        <img
          className="duckyCollageMobile"
          src={duckyCollage}
          alt="collage of Ducky doing various things"
        />
        <a className="buttonMobile" href="/signup">
          sign up for the newsletter
        </a>
      </div>
    </div>
  );
};

export default HomeMobile;

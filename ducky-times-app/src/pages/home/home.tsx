import React, { useEffect, useState } from "react";
import "./home.css";
// import justFace from "../components/images/justFace.png";
import Ducky from "../../components/images/Ducky.png";
import duckyCollage from "../../components/images/duckyCollage.png";
import { BREAKPOINT } from "../../helpers/useBreakpoint.tsx";
import useBreakpoint from "../../helpers/useBreakpoint.tsx";
import HomeMobile from "./homeMobile.jsx";

export default function Home() {
  const [windowSize, setWindowSize] = useState("Desktop");
  const breakpoint = useBreakpoint();

  useEffect(() => {
    if (breakpoint === BREAKPOINT.DESKTOP) {
      setWindowSize("Desktop");
    } else if (breakpoint === BREAKPOINT.MIDSIZE) {
      setWindowSize("Midsize");
    }
  }, [breakpoint]);

  if (breakpoint === BREAKPOINT.MOBILE) {
    return <HomeMobile />;
  }

  return (
    <div>
      <nav className="topHalf">
        <p className="greeting">Greetings Ducky fan.</p>
        <img className="Ducky" src={Ducky} alt="Ducky with the label, Ducky" />
      </nav>
      <nav className={`bottomHalf${windowSize}`}>
        <img
          className="duckyCollage"
          src={duckyCollage}
          alt="collage of Ducky doing various things"
        />
        <nav className={`bottomText${windowSize}`}>
          <p className="watchDucky">Watch Ducky live life.</p>
          <a className="button" href="/signup">
            Sign up for the newsletter
          </a>
        </nav>
      </nav>
    </div>
  );
}

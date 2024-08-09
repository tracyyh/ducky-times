import React from "react";
import './home.css';
import Ducky from '../components/images/Ducky.png';
import justFace from '../components/images/justFace.png';
import duckyCollage from '../components/images/duckyCollage.png';

const Home = () => {
    return (
        <div>
            <nav className="topHalf">
                {/* <img className='justFace' src={justFace} alt="front view of just Ducky's face"/> */}
                <p>Greetings Ducky fan.</p>
                <img className='Ducky' src={Ducky} alt="Ducky with the label, Ducky"/>
            </nav>
            <nav className="bottomHalf">
                <img className='duckyCollage' src={duckyCollage} alt="collage of Ducky doing various things"/>
                <nav className="bottomText">
                    <p>Watch Ducky live life.</p>
                    <a className="button" href='/signup'>Sign up for the newsletter</a>
                </nav>
            </nav>
        </div>
    );
};

export default Home;
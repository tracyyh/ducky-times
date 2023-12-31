import React from "react";
import './signup.css';
import thumb from '../components/images/thumb.png';
 
const Merch = () => {
    return (
        <div className="page">
            <img className="thumb" src={thumb} alt="Ducky giving a thumbs up"></img>
            <nav className="texts">
                <h3>Ducky's Fan Club Registration</h3>
                <p>Ducky needs you to fill out this form if you're willing 
                    to let Ducky use the bathroom in your inbox every weekend.</p>
                    <a className="button" href='/signupThanks'>submit</a>
            </nav>
        </div>
    );
};
 
export default Merch;
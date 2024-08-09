import React from "react";
import './merch.css';
import Ducky from '../components/images/Salute.png';
 
const Merch = () => {
    return (
        <div className="pageContent">
            <p className="announcement">merch coming soon...</p>
            <img className="salute" src={Ducky} alt="Ducky saluting"></img>
        </div>
    );
};
 
export default Merch;
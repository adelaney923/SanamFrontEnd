import React from "react";
import LandingPhoto from "../Images/LandingPhoto.jpg"
import "./Mobile.css"

const LandingPage = () => {
  return (
    <div id="landing">
      <div className="container">
        <img
          className="landingimg"
          src={LandingPhoto}
          alt="landingphoto"
        />
        <div className="quotecontainer">
          <p className="landingquote">
            "GIVEN HALF A CHANCE, THE BODY WILL HEAL ITSELF BY ITSELF"
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

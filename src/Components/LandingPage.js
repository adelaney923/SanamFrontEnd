import React from "react";
import LandingPhoto from "../Images/LandingPhoto.jpg"
import "./Mobile.css"
import { PopupWidget } from "react-calendly";
import { Link } from "react-router-dom";


const LandingPage = () => {
  return (
    <div id="landing">
      <div className="imagecontainer">
        <img className="landingimg" src={LandingPhoto} alt="landingphoto" />
        <div className="quotecontainer">
          <p className="landingquote">
            "GIVEN HALF A CHANCE, THE BODY WILL HEAL ITSELF BY ITSELF"
          </p>
        </div>
      </div>

      <section className="introContainer">
        <p>
          For many, health coaching is like nothing they have ever experienced
          before. When we embark on a healing journey, oftentimes we only
          address our food choices.
        </p>
        <p className="importanttext">
          The health coaching experience goes deeper.
        </p>
        <p className="specialtext">What feeds your soul?</p>
        <p>
          To really heal and thrive we must take an integrative approach that
          includes all dimensions of your well-being. Personal relationships,
          rest, your relationship with food, finding purpose, joy,… nothing is
          off the table. During this journey, you will experience feeling
          empowered, safe, balanced and most importantly, connected to your true
          self!
        </p>
      </section>

      <section className="getStartedContainer">
        <p className="pinkimportanttext">Ready to get started?</p>
        {/* button to navigate to coaching options page */}
        <button className="pinkbutton">
          <Link className="pagelinks" to="/coachingOptions">
            Explore Coaching Options
          </Link>
        </button>
        {/* button to navigate to apply for coaching page */}
        <button className="pinkbutton">
          <Link className="pagelinks" to="/applyforcoaching">
            Apply For Coaching
          </Link>
        </button>
        {/* button to open calendly booking */}
        {/* <PopupWidget
            url="https://calendly.com/soulshinehealthcoaching"
            rootElement={document.getElementById("root")}
          /> */}
      </section>
    </div>
  );
};

export default LandingPage;

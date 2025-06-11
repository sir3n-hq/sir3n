import React from "react";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">

        <img
            className="background-image"
            src="/background.png"
            alt="Background"
        />

      <div className="overlap-group-wrapper">
        <div className="overlap-group">

          <div className="items">
            <button className="button">
              <div className="text-wrapper">who are we?</div>
            </button>

            <button className="button">
              <div className="text-wrapper">map</div>
            </button>

            <button className="button">
              <div className="text-wrapper">submit your story</div>
            </button>
          </div>

          <img
            className="logo-removebg"
            alt="Logo"
            src="/logo-removebg-preview.png"
          />

          <div className="copy">
            <div className="page-title">
              <div className="text-wrapper-2">expose. empower. erase.</div>

              <p className="HE-DOESN-t-GET-TO">
                <span className="span">
                  HE DOESN'T GET TO WIN.
                  <br />
                </span>

                <span className="text-wrapper-3">YOUR</span>

                <span className="span"> VOICE. </span>

                <span className="text-wrapper-3">YOUR</span>

                <span className="span"> STORY. </span>

                <span className="text-wrapper-3">YOUR</span>

                <span className="span"> POWER.</span>
              </p>
            </div>
          </div>

          <button className="button-2">
            <div className="text-wrapper-4">SHARE your story ANONYMOUSLY</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
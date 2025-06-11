import React from "react";
import "./WhoAreWePage.css";

export const WhoAreWe = () => {
  return (
    <div className="who-are-we">

        <img
          className="background-image"
          src="/background_pages.png"
          alt="Background"
        />

      <div className="div">
        <div className="overlap">

          <img
            className="logo-removebg"
            alt="Logo removebg"
            src="/logo-removebg-preview.png"
          />

          <button className="button">
            <div className="text-wrapper">SHARE your story ANONYMOUSLY</div>
          </button>

          <div className="copy">
            <div className="page-title">
              <div className="text-wrapper-2">who are we?</div>
            </div>
          </div>

          <p className="we-are-women">
            <span className="span">We are women — </span>

            <span className="text-wrapper-3">survivors</span>

            <span className="span">, </span>

            <span className="text-wrapper-3">witnesses</span>

            <span className="span">, </span>

            <span className="text-wrapper-3">whistleblowers</span>

            <span className="span">
              .<br />  Ignored, dismissed, disbelieved —{" "}
            </span>

            <span className="text-wrapper-4">
              no more.
              <br />
            </span>

            <span className="span">{"  "}SIR3N </span>

            <span className="text-wrapper-3">exposes</span>

            <span className="span"> abuse and </span>

            <span className="text-wrapper-3">connects the dots</span>

            <span className="span">
              {" "}
              others miss.
              <br />  For{" "}
            </span>

            <span className="text-wrapper-4">all</span>

            <span className="span"> women, </span>

            <span className="text-wrapper-4">everywhere</span>

            <span className="span">
              .<br />
              {"  "}
            </span>

            <span className="text-wrapper-3">Truth</span>

            <span className="span"> speaks — even when we stay </span>

            <span className="text-wrapper-3">anonymous</span>

            <span className="span">
              .<br />  To every perpetrator who thought they got away with it:{" "}
            </span>

            <span className="text-wrapper-4">
              We know. We remember. We’re watching.
              <br />
            </span>

            <span className="span">
              <br />
            </span>

            <span className="text-wrapper-4">SIR3N</span>

            <span className="span"> is </span>

            <span className="text-wrapper-3">your</span>

            <span className="span"> platform. </span>

            <span className="text-wrapper-3">Your</span>

            <span className="span"> voice. </span>

            <span className="text-wrapper-3">Your</span>

            <span className="span"> shield.</span>
          </p>

          <button className="div-wrapper">
            <div className="text-wrapper-5">HOME PAGE</div>
          </button>
        </div>
        </div>
      </div>
  );
};

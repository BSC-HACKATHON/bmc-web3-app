import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Firstpage.css";
import "./Secondpage";
import myvideo from "./videos/first.mp4";
import Navbar from "./Navbar";

function Firstpage() {
  return (
    <div>
      <div className="navbar-section">
        <Navbar />
      </div>
      <div className="hero">
        <div className="video-background">
          <video autoPlay muted loop>
            <source src={myvideo} type="video/mp4" />
          </video>
          <div className="hero-content">
            <div className="hero-heading-box">
              <h1 className="hero-heading">
                Secure Your Sensitive Documents with Web3 Technology
              </h1>
            </div>
            <h1 className="hero-subheading"> Your Data, Your Control</h1>
            <p className="hero__description">
               Upload, encrypt, and retrieve your personal documents securely
            </p>
            <button
              className="hero-button"
              onClick={() => {
                window.location.href = "/upload";
              }}
            >
              <Link className="hero-button-text" to="/secondpage">
                Experience privacy like never before
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Firstpage;

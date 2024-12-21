import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Connectwallet from "./Connectwallet";

const Navbar = () => {

  return (
    <nav className="navbar">
      <h3 >
        <Link to="/" className="logo">
          <img alt="" src="/Logo.svg" className="logo" />
        </Link>
      </h3>
      <ul
        className="nav-links"
      >
        <Link to="/upload" className="item">
          <li>Upload</li>
        </Link>
        <Link to="/accessList" className="item">
          <li>Allowlist</li>
        </Link>
        <Link className="item">
          <li>
            <Connectwallet />
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;


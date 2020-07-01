import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../images/horizontallogo.png";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
/* react icon */

export default function HeaderIndex() {
  return (
    <header className="App-header-index">
      <div className="Menu">
        <div className="Link-img">
          <Link to="/">
            <img src={logo} className="Logo-main" alt="Rhuana Pires logo" />
          </Link>
        </div>
        <div className="Text-header">
          <Link className="Link" to="/">
            Home
          </Link>
          <Link className="Link" to="/portfolio">
            Portfolio
          </Link>
          <Link className="Link" to="/aboutme">
            AboutMe
          </Link>
          <i className="Pipe-git"> | </i>
          <a className="Link" href="https://rhuanapires.github.io">
            <FaGithubAlt />
          </a>
          <a className="Link" href="https://www.linkedin.com/in/rhuana-pires/">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </header>
  );
}

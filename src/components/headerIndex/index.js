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
          <Link className="btn-header btn-one" to="/">
            Home
          </Link>
          <Link className="btn-header btn-one" to="/portfolio">
            Portfolio
          </Link>
          <Link className="btn-header btn-one" to="/aboutme">
            About&nbsp;Me
          </Link>
          <a className="btn-header btn-one" href="https://rhuanapires.github.io">
            <FaGithubAlt />
          </a>
          <a className="btn-header btn-one" href="https://www.linkedin.com/in/rhuana-pires/">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </header>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../images/horizontallogo.png";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import Fade from "react-reveal/Fade"

/* react icon */

export default function HeaderIndex({color}) {
  return (
    <header className="App-header-index">
      <div className="Menu">
        <Fade duration={1500} delay={500}>
        <div className="Link-img">
          <Link to="/">
            <img src={logo} className="Logo-main" alt="Rhuana Pires logo" />
          </Link>
        </div>
        <div className="Text-header">
          <Link className={`btn-header btn-one ${color}`} to="/">
            Home
          </Link>
          <Link className={`btn-header btn-one ${color}`} to="/portfolio">
            Portfolio
          </Link>
          {/* <Link className={`btn-header btn-one ${color}`} to="/aboutme">
            About&nbsp;Me
          </Link> */}
          <a className={`btn-header btn-one ${color}`} target="_blank" href="https://www.github.com/rhuanapires">
            <FaGithubAlt />
          </a>
          <a className={`btn-header btn-one ${color}`} target="_blank" href="https://www.linkedin.com/in/rhuana-pires/">
            <FaLinkedin />
          </a>
        </div>
        </Fade>
      </div>
    </header>
  );
}

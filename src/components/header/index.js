import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../images/horizontallogo.png";

export default function Header() {
  return (
    <header className="App-header">
      <div className="Menu">
        <link
          href="https://fonts.googleapis.com/css?family=Arizonia|Pacifico|Parisienne&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed&display=swap"
          rel="stylesheet"
        />
        <div className="Link-img">
          <Link to="/">
            <img src={logo} className="Logo-main" alt="Rhuana Pires logo" />
          </Link>
        </div>
        <nav>
          <Link className="Link" to="/">
            Home
          </Link>
          <Link className="Link" to="/portfolio">
            Portfolio
          </Link>
        </nav>
      </div>
    </header>
  );
}

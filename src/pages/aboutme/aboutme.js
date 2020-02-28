import React from "react";
import LogoDetail from "../../images/logodetail.png";
import Profile from "./../../images/profile.jpg";
import Titles from "../../components/titles";

function Aboutme() {
  return (
    <div className="Titulos-rhu">
      <Titles titulo="Rhu?" />
      <div className="Box-thumb">
        <img src={Profile} className="Rhu" alt="Logic Gaming"></img>
      </div>
    </div>
  );
}

export default Aboutme;

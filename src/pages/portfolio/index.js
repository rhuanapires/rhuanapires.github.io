import React from "react";
import "./styles.css";
import Thumb from "../../components/thumb";
import Titles from "../../components/titles";
import HeaderIndex from "../../components/headerIndex";
import Bounce from "react-reveal/Bounce"
import Fade from "react-reveal/Fade"

const lista = require("../../assets/info.json");

function Portfolio() {
  return (
    <div>
      <HeaderIndex color="secondary"/>
    <div className="Container-2">
      <Bounce left><Titles titulo="Portfolio" extraStyle="Titles2"/></Bounce>
      <div className="Projects-portfolio">
        {lista.map(item => {
          return <Fade transitions duration={2000}><Thumb item={item} key={item.id} /></Fade>;
        })}
      </div>
    </div>
    </div>
  );
}

export default Portfolio;

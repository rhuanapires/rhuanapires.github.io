import React from "react";
import "./styles.css";
import Thumb from "../../components/thumb";
import Titles from "../../components/titles";
const lista = require("../../assets/info.json");

function Portfolio() {
  return (
    <div className="Container">
      <Titles titulo="Portfolio" />
      <div className="Projects-portfolio">
        {lista.map(item => {
          return <Thumb item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default Portfolio;

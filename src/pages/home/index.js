import React from "react";
import Image from "./../../images/image.png";
import "./styles.css";
import { Link } from "react-router-dom";
import ThumbMain from "../../components/thumbMain";
import Titles from "../../components/titles";

let lista = require("../../assets/info.json");

const length = lista.length - 3; // pegar o tamanho da lista menos os 3 últimos itens

lista = lista.filter((item, index) => index  >= length); // filtrando os 3 ultimos itens da lista do portfolio

function Home() {
  return (
    <div className="Container">
      <img src={Image} className="Image" alt="Neferpitou"></img>
      <div className="Titulos">
        <h4 className="Menu-title">&lt;CODE&gt;</h4>
        <h4 className="Menu-title">UX/UI Addicted ♥︎</h4>
        <h2>Front-end/Mobile Developer</h2>
      </div>
      <Titles titulo="Latest Works"/>
      <div className="Projects">
        {lista.map(item => <ThumbMain item={item} key={item.id}/>)}
      </div>
      <div className="Link-port">
        <Link className="Link-body" to="/portfolio">
          &lt; ACESS PORTFOLIO &gt;
        </Link>
      </div>
    </div>
  );
}

export default Home;

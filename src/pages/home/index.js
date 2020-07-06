import React from "react";
import Image from "./../../images/image.png";
import "./styles.css";
import { Link } from "react-router-dom";
import ThumbMain from "../../components/thumbMain";
import Titles from "../../components/titles";
import Profile from "./profile";
import Detail from "./detail";
import HeaderIndex from "../../components/headerIndex";
import Bounce from "react-reveal/Bounce"
import Fade from "react-reveal/Fade"


let lista = require("../../assets/info.json");

const length = lista.length - 3; // pegar o tamanho da lista menos os 3 últimos itens

lista = lista.filter((item, index) => index >= length); // filtrando os 3 ultimos itens da lista do portfolio

function Home() {
  return (
    <div>
    <HeaderIndex/>
    <div className="Container">
      <div>
        <Fade duration={1000}><img src={Image} className="Image-main" alt="MainImage"></img></Fade>
      </div>
      <div className="Body-index">
        <div className="Last-projects">
          <Bounce><Titles titulo="Latest Works" /></Bounce>
          <Fade duration={1500}>
          <div className="Projects">
            {lista.map((item) => (
              <ThumbMain item={item} key={item.id} />
            ))}
          </div>
          <div className="Link-port">
            <Link className="btn effect01" to="/portfolio">
              <span>&lt;ACESS&nbsp;PORTFOLIO&gt;</span>
            </Link>
          </div></Fade>
        </div>
        <div>
          <Profile></Profile>
          <Detail></Detail>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;

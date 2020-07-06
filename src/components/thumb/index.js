import React from "react";
import { Link } from "react-router-dom";
  
function Thumb({item}) {
const {thumb, title, subtitle, type, id} = item;

  return (
    <div className="Box-thumb-portfolio">
              <div className="Image-details">
      <Link to={`/portfolio/${id}`}>
        <img
          src={thumb}
          className="Thumb-images-portfolio"
          alt={title}
        ></img>
      </Link>
      </div>
      <div className="Thumb-details">
           <Link to={`/portfolio/${id}`} className="Titulos-portfolio">{title}</Link>
        <p className="Subtitle">{type}</p>
        <p className="Descricao">{subtitle}</p>
            <Link className="btn effect01" to={`/portfolio/${id}`}>
              <span>&lt;DETAILS&gt;</span>
            </Link>
      </div>
    </div>
  );
}

export default Thumb;

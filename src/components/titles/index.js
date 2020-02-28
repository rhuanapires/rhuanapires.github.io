import React from "react";
import LogoDetail from "../../images/logodetail.png";

function Titles({titulo}){
    return <div className="Titulos-complete">
    <img src={LogoDetail} className="Logo-detail" alt="star" />
    <h3 className="Titles">
        {titulo}
    </h3>
  </div>

}

export default Titles;
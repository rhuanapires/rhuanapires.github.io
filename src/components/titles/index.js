import React from "react";
import LogoDetail from "../../images/logodetail.png";

function Titles({ titulo, extraStyle }) {
  return (
    <div className="Titulos-complete">
      <img src={LogoDetail} className="Logo-detail" alt="star" />
      <h3 className={`Titles ${extraStyle}`}>{titulo}</h3>
    </div>
  );
}

export default Titles;

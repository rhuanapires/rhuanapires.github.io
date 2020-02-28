import React from "react";
import Titles from "../../titles";
import "../../../pages/portfolio/detalhes/styles.css";

function Paletes({colors =[]}){

return <div><Titles titulo="Color's Pallete"/>
    <div className="Palete-colors">
        {colors.map( color => <div className="Cores-paleta"><div style={{ backgroundColor: color}} className="Palete-detail"></div>{color}</div>)}
    </div>
    </div>
}

export default Paletes;
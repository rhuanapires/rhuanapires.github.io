import React from "react";
import Titles from "../../titles";
import Gallery from "../../swiperThumb";


function PortfolioThumbs({screens, title, heightThumb}){
    return <div>
    <Titles titulo={title}></Titles>
    <div>
        <Gallery screens={screens} heightThumb={heightThumb}/>
    </div>
    </div>
}

export default PortfolioThumbs;
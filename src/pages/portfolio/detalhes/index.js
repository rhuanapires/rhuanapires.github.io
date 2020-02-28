  import React,{useEffect} from 'react';
  import Titles from '../../../components/titles';
  import { useParams } from "react-router-dom";
  import Paletes from '../../../components/portfolioDetails/paletes';
  import PortfolioThumbs from '../../../components/portfolioDetails/portfolioThumbs';
  import Icons from '../../../components/portfolioDetails/icons';

  const data = require("../../../assets/info.json");


  function Detalhes(props) {
    const {id} = useParams();
    var dataFiltered = data.filter(item =>
      item.id === id
    )

    useEffect(() => {
      window.scrollTo({
        top:0,
        behavior: "smooth"
      })
    }, [])

  const {title, type, subtitle, detail, colors, screens, icons, arts} = dataFiltered[0];

      return <div className="Container"> 
    <Titles titulo={title}/>
    <div className="Projects-portfolio">
          <div className="Box-thumb-portfolio">
            <div className="Portfolio-details">
            <p className="Type">{type}</p>
            <p className="Tipo">{detail}</p>
            </div>
          </div>
          {screens && <PortfolioThumbs screens={screens} title="Screens" heightThumb={500}/>}
          {arts && <PortfolioThumbs screens={arts} title="Cards" heightThumb={400}/>}
          {icons && <Icons icons={icons}/>}
          <Paletes colors={colors}/>
        </div>
    </div>
  ;
    }

  export default Detalhes;
  import React,{useEffect} from 'react';
  import Titles from '../../../components/titles';
  import { useParams } from "react-router-dom";
  import Paletes from '../../../components/portfolioDetails/paletes';
  import PortfolioThumbs from '../../../components/portfolioDetails/portfolioThumbs';
  import Icons from '../../../components/portfolioDetails/icons';
  import HeaderIndex from '../../../components/headerIndex';
  import Bounce from "react-reveal/Bounce";
  import Fade from "react-reveal/Fade";


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

    return <div>
      <HeaderIndex color="secondary"/>
    <div className="Container-2"> 
    <Bounce><Titles titulo={title} extraStyle="Titles2"/></Bounce>
           <Fade left duration={1500}><div className="Portfolio-details">
            <p className="Type">{type}</p>
            <p className="Tipo">{detail}</p>
            </div></Fade>
          {screens && <Fade right duration={1500}><PortfolioThumbs screens={screens} title="Screens" heightThumb={500}/></Fade>}
          {arts && <Fade right duration={1500}><PortfolioThumbs screens={arts} title="Cards" heightThumb={400}/></Fade>}
          {icons && <Fade left duration={1500}><Icons icons={icons}/></Fade>}
          <Fade right duration={1500}><Paletes colors={colors}/></Fade>

        </div>
    </div>
  ;
    }

  export default Detalhes;
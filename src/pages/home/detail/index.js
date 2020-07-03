import React from "react";
import {DiPhotoshop, DiIllustrator, DiJavascript1, DiHtml5, DiCss3, DiReact, DiNodejs} from 'react-icons/di';
import {FiFigma} from 'react-icons/fi'
import {FaNode} from 'react-icons/fa'

const profile2 =
  "https://firebasestorage.googleapis.com/v0/b/molten-amulet-237116.appspot.com/o/phone.png?alt=media&token=a835ab8f-ed23-40ca-b0bd-b527b76c5d55";
const profile =
"https://firebasestorage.googleapis.com/v0/b/molten-amulet-237116.appspot.com/o/prototype.png?alt=media&token=e282125f-4719-45d0-a6c0-de0622f40407";

export default function Detail() {
  return (
<div className="Align-profile-div-2">
      <div className="Align-profile-detail-2">
      <div className="Align-text-profile-2">
          <h2>Prototipação e Design</h2>
          <h4>
            Produção de interfaces visando uma navegação intuitiva ao usuário, focada na experiência do usuário.
          </h4>
          <h3>Ferramentas</h3>
          <div className="View-icons">
          <DiPhotoshop className="btn-prog"/>
          <DiIllustrator className="btn-prog"/>
          <FiFigma className="btn-prog"/>
          <DiPhotoshop className="btn-prog"/>
          </div>
        </div>
        <div className="Thumb-profile-view">
          <img src={profile} className="Thumb-profile-2" />
        </div>
      </div>
      <div className="Align-profile-detail-2">
        <div className="Thumb-profile-view">
          <img src={profile2} className="Thumb-profile-3" />
        </div>
        <div className="Align-text-profile">
          <h2>Codificação</h2>
          <h4> 
            Construção de páginas web e aplicativos utilizando tecnologias atuais.
          </h4>
          <h3>Ferramentas</h3>
          <div className="View-icons">
          <DiJavascript1 className="btn-prog"/>
          <DiHtml5 className="btn-prog"/>
          <DiCss3 className="btn-prog"/>
          <DiReact className="btn-prog"/>
          <FaNode className="btn-prog"/>
          </div>
        </div>
      </div>
    </div>
  );
}

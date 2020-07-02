import React from "react";
const profile2 =
  "https://firebasestorage.googleapis.com/v0/b/molten-amulet-237116.appspot.com/o/phone.png?alt=media&token=a835ab8f-ed23-40ca-b0bd-b527b76c5d55";
const profile =
  "https://firebasestorage.googleapis.com/v0/b/molten-amulet-237116.appspot.com/o/prototype.png?alt=media&token=e282125f-4719-45d0-a6c0-de0622f40407";
export default function Detail() {
  return (
    <div className="Align-profile-div-2">
      <div className="Align-profile-detail">
        <div className="Thumb-profile-view">
          <img src={profile} className="Thumb-profile" />
        </div>
        <div className="Align-text-profile">
          <h2>Rhuana Pires</h2>
          <h4>
            Sou uma UI/UX designer com habilidades em desenvolvimento web/mobile
            que mora em Fortaleza - Ceará. Totalmente apaixonada por
            prototipação e desenvolvimento mobile.
          </h4>
        </div>
      </div>
      <div className="Align-profile-detail">
        <div className="Thumb-profile-view">
          <img src={profile2} className="Thumb-profile" />
        </div>
        <div className="Align-text-profile">
          <h2>Rhuana Pires</h2>
          <h4>
            Sou uma UI/UX designer com habilidades em desenvolvimento web/mobile
            que mora em Fortaleza - Ceará. Totalmente apaixonada por
            prototipação e desenvolvimento mobile.
          </h4>
        </div>
      </div>
    </div>
  );
}

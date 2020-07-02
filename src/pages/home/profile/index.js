import React from "react";
import Titles from "../../../components/titles";

const profile =
  "https://firebasestorage.googleapis.com/v0/b/molten-amulet-237116.appspot.com/o/rhuana.png?alt=media&token=d2d0303d-6f58-4049-b4de-ab2143a259fa";

export default function Profile() {
  return (
    <div className="Align-profile-div">
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
    </div>
  );
}

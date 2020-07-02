import React from "react";
import Titles from "../../../components/titles";

const profile =
  "https://firebasestorage.googleapis.com/v0/b/molten-amulet-237116.appspot.com/o/rhuana.png?alt=media&token=d2d0303d-6f58-4049-b4de-ab2143a259fa";

export default function Profile() {
  return (
    <div className="Align-profile-div">
      <div className="Align-profile-detail">
        <img src={profile} className="Thumb-profile" />
        <div>
          <h2>Rhuana Pires</h2>
        </div>
      </div>
    </div>
  );
}

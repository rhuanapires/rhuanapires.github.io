import React from "react";
import Titles from "../../../components/titles";

const profile =
  "https://firebasestorage.googleapis.com/v0/b/molten-amulet-237116.appspot.com/o/profile%2Fprofile.png?alt=media&token=9a92175a-a0bf-458f-b29a-d45b2b734c0b";

export default function Profile() {
  return (
    <div className="Align-profile-div">
      <Titles titulo="About Me" />
      <div className="Align-profile-detail">
        <img src={profile} className="Thumb-profile" />
        <div>
          <h2>Rhuana Pires</h2>
        </div>
      </div>
    </div>
  );
}

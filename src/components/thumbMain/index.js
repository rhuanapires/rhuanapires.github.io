import React from "react";
import { Link } from "react-router-dom";

function ThumbMain({ item }) {
  const { title, thumb, type, id } = item;

  return (
    <div className="Box-thumb">
      <Link to={`/portfolio/${id}`}>
        <img src={thumb} className="Thumb-images" alt={title}></img>
      </Link>
      <div className="Align-text-thumb">
        <h4>{title}</h4>
        <h5>{type}</h5>
      </div>
    </div>
  );
}

export default ThumbMain;

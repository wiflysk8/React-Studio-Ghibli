import React from "react";
import "./DetailCard.css";
import { useNavigate } from "react-router-dom";

const DetailCard = ({ film }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/films");
  };

  return (
    <div>
      <figure className="c-detail" key={film.id}>
        <figcaption>{film.original_title}</figcaption>
        <h3>{film.title}</h3>
        <img className="c-detail__img" src={film.image} alt={film.title} />
        <p>Director: {film.director}</p>
        <p>Release Date: {film.release_date}</p>
        <p>Synopse: {film.description}</p>
        <button onClick={goBack}>Go Back</button>
      </figure>
    </div>
  );
};

export default DetailCard;

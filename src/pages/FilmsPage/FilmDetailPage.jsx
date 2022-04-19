import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import DetailCard from "../../components/DetailCard";
import axios from "axios";



const FilmDetailPage = () => {
  const [film, setFilm] = useState([]);
  let { id } = useParams("id");

  useEffect(() => {
    const getFilm = async () => {
      const res = await axios.get(
        `https://ghibliapi.herokuapp.com/films/${id}`
      );
      setFilm(res.data);
      console.log(res.data);
    };

    getFilm();
  }, [id]);
  return (
    <div>
      <DetailCard film={film} />
    </div>
  );
};

export default FilmDetailPage;

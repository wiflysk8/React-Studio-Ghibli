import Card from "../../components/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import "./FilmsPage.css";

export default function FilmsPage() {
  const [films, setFilms] = useState([]);
  const [filteredFilms, setFilteredFilms] = useState([]);  

  useEffect(() => {
    const getFilms = async () => {
      const res = await axios.get("https://ghibliapi.herokuapp.com/films");
      setFilms(res.data);
     setFilteredFilms(res.data);
    };

    getFilms();
  }, []);

  const onSearch = (event) => {
    onFilter(event.target.value);
    };

  const onFilter = (inputValue) => {   
    let filteredFilm = filteredFilms.filter((film) => {
     if (film.title.toLowerCase().includes(inputValue.toLowerCase())){
        return film;
      }
      return false;      
    });
    setFilms(filteredFilm);   
  };

  return (
    <>
      <input type="text" placeholder="🔎 Search movie 🎥"  onChange={onSearch}></input>
      <div className="c-gallery">
        {films.map((film) => (<Card card={film} key={film.id} />))}
      </div>
    </>
  );
}

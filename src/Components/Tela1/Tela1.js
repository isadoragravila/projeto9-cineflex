import "./style.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Movie({ img, title, id }) {
  return (
    <Link to={`/sessoes/${id}`}>
      <div className="filme">
        <img src={img} alt={title} />
      </div>
    </Link>
  );
}

export default function Tela1() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );
    promise.then((response) => {
      setMovies(response.data);
    });
  }, []);

  return (
    <div className="tela1">
      <h2>Selecione o filme</h2>
      <div className="filmes">
        {movies.map((movie, index) => (
          <Movie
            key={index}
            img={movie.posterURL}
            title={movie.title}
            id={movie.id}
          />
        ))}
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function Movie({ img, title, id }) {
  return (
    <Link to={`/sessoes/${id}`}>
      <Filme>
        <img src={img} alt={title} />
      </Filme>
    </Link>
  );
}

export default function Tela1() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
    promise.then((response) => setMovies(response.data));
  }, []);

  return (
    <Conteiner>
      <h2>Selecione o filme</h2>
      <Filmes>
        {movies.map((movie, index) => (<Movie key={index} img={movie.posterURL} title={movie.title} id={movie.id} />))}
      </Filmes>
    </Conteiner>
  );
}

const Conteiner = styled.div`
  width: 375px;
  margin-top: 108px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 25px;
`;

const Filmes = styled.div`
  margin-top: 41px;
  width: 325px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Filme = styled.div`
  width: 145px;
  height: 209px;
  background: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  margin-bottom: 11px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 129px;
    height: 193px;
    object-fit: cover;
  }
`;

import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";
import styled from "styled-components";

function Session({ weekday, date, showtimes, setHome }) {
  return (
    <Sessao>
      <p>{`${weekday} - ${date}`}</p>
      <Horarios>
        {showtimes.map((showtime, index) => (
          <Link key={index} to={`/assentos/${showtime.id}`} style={{ textDecoration: "none" }} onClick={() => setHome(`/assentos`)}>
            <Horario>{showtime.name}</Horario>
          </Link>
        ))}
      </Horarios>
    </Sessao>
  );
}

export default function Tela2({ setHome }) {
  const { idFilme } = useParams();
  const [movie, setMovie] = useState({});
  const [days, setDays] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
    );

    promise.then((response) => {
      setMovie(response.data);
      setDays(response.data.days);
    });
  }, []);

  return (
    <>
      <Conteiner>
        <h2>Selecione o horário</h2>
        <Sessoes>
          {days.map((day, index) => ( <Session key={index} weekday={day.weekday} date={day.date} showtimes={day.showtimes} setHome={setHome} /> ))}
        </Sessoes>
      </Conteiner>
      <Footer title={movie.title} img={movie.posterURL} />
    </>
  );
}

const Conteiner = styled.div`
  width: 375px;
  margin-top: 108px;
  margin-bottom: 117px;
  display: flex;
  flex-direction: column;
  padding: 0 25px;
`;

const Sessoes = styled.div`
  margin-top: 41px;
  display: flex;
  flex-direction: column;
`;

const Sessao = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;

  p {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: #293845;
    margin-bottom: 25px;
  }
`;

const Horarios = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Horario = styled.div`
  margin-right: 8px;
  margin-bottom: 8px;
  width: 83px;
  height: 43px;
  background-color: #e8833a;
  border-radius: 3px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
import "./style.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";

export default function Tela3() {
  const { idSessao } = useParams();
  const [seats, setSeats] = useState([]);
  const [title, setTitle] = useState();
  const [img, setImg] = useState();
  const [time, setTime] = useState();
  const [day, setDay] = useState();

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
    );

    promise.then((response) => {
      setSeats(response.data.seats);
      setTitle(response.data.movie.title);
      setImg(response.data.movie.posterURL);
      setTime(response.data.name);
      setDay(response.data.day.weekday);
    });
  }, []);

  return (
    <>
      <div className="tela3">
        <h2>Selecione o(s) assento(s)</h2>
        <div className="cadeiras">
          {seats.map((seat, index) => <Cadeiras key={index} seat={seat} />)}
        </div>
        <div className="indice">
          <div className="legenda">
            <div className="circulo verde"></div>
            <p>Selecionado</p>
          </div>
          <div className="legenda">
            <div className="circulo "></div>
            <p>Disponível</p>
          </div>
          <div className="legenda">
            <div className="circulo amarela"></div>
            <p>Indisponível</p>
          </div>
        </div>
        <div className="dados">
          <p>Nome do comprador:</p>
          <input type="text" placeholder="Digite seu nome..." />
          <p>CPF do comprador:</p>
          <input type="text" placeholder="Digite seu CPF..." />
        </div>
        <Link to="/sucesso" style={{ textDecoration: "none" }}>
          <div className="botao">Reservar assento(s)</div>
        </Link>
      </div>
      <Footer title={title} img={img} time={time} day={day} />
    </>
  );
}

function Cadeiras ({ seat }) {
  return (
    <>
      {seat.isAvailable ? <div className="cadeira">{seat.name}</div> : <div className="cadeira amarela">{seat.name}</div>}
    </>
  );
}
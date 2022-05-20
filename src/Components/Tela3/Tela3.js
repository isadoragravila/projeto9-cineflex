import "./style.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";

export default function Tela3({ pedido, setPedido }) {
  const { idSessao } = useParams();
  const [movie, setMovie] = useState({});
  const [seats, setSeats] = useState([]);
  const [time, setTime] = useState();
  const [day, setDay] = useState({});
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
    );

    promise.then((response) => {
      setSeats(response.data.seats);
      setMovie(response.data.movie);
      setTime(response.data.name);
      setDay(response.data.day);
    });
  }, []);

  function reservar() {
    setPedido({
      title: movie.title,
      date: day.date,
      time: time,
      seats: selected,
      name: "Isadora",
      cpf: "000.000.000.00"
    });
  }

  return (
    <>
      <div className="tela3">
        <h2>Selecione o(s) assento(s)</h2>
        <div className="cadeiras">
          {seats.map((seat, index) => <Cadeiras key={index} seat={seat} selected={selected} setSelected={setSelected} />)}
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
          <div className="botao" onClick={reservar}>Reservar assento(s)</div>
        </Link>
      </div>
      <Footer title={movie.title} img={movie.posterURL} time={time} day={day.weekday} />
    </>
  );
}

function Cadeiras ({ seat, selected, setSelected }) {
  const [click, setClick] = useState(true);

  function clicked() {
    setClick(!click);
    if (click) {
      setSelected([...selected, { id: seat.id, name: seat.name }]);
    } else {
      setSelected(selected.filter((item) => item.id !== seat.id));
    }
  }

  return (
    <>
      {seat.isAvailable ? (
        <div className={click ? "cadeira" : "cadeira verde"} onClick={clicked}>
          {seat.name}
        </div>
      ) : (
        <div
          className="cadeira amarela"
          onClick={() => alert("Esse assento não está disponível")}
        >
          {seat.name}
        </div>
      )}
    </>
  );
}
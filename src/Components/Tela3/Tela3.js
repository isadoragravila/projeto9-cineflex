import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";
import styled from "styled-components";

function Cadeiras({ seat, selected, setSelected, ids, setIds }) {
  const [click, setClick] = useState(true);

  function clicked() {
    setClick(!click);
    if (click) {
      setSelected([...selected, seat.name]);
      setIds([...ids, seat.id]);
    } else {
      setSelected(selected.filter((item) => item !== seat.name));
      setIds(ids.filter((item) => item !== seat.id));
    }
  }

  return (
    <>
      {seat.isAvailable ? (
        <Assento cor={click ? "#c3cfd9" : "#8dd7cf"} borda={click ? "#808f9d" : "#45bdb0"} onClick={clicked}>
          {seat.name}
        </Assento>
      ) : (
        <Assento cor={"#fbe192"} borda={"#f7c52b"} onClick={() => alert("Esse assento não está disponível")}>
          {seat.name}
        </Assento>
      )}
    </>
  );
}

export default function Tela3({ setPedido, ids, setIds }) {
  const { idSessao } = useParams();
  const [movie, setMovie] = useState({});
  const [seats, setSeats] = useState([]);
  const [time, setTime] = useState();
  const [day, setDay] = useState({});
  const [selected, setSelected] = useState([]);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  let navigate = useNavigate();

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
      seats: selected.sort((a, b) => a - b),
      name: name,
      cpf: cpf
    });

    if (ids.length !== 0 && name.length !== 0 && cpf.length === 11) {
      navigate("/sucesso");
      axios.post(
        "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
        { ids: ids, name: name, cpf: cpf }
      );
    }
  }

  return (
    <>
      <Conteiner>
        <h2>Selecione o(s) assento(s)</h2>
        <Assentos>
          {seats.map((seat, index) => (<Cadeiras key={index} seat={seat} selected={selected} setSelected={setSelected} ids={ids} setIds={setIds} />))}
        </Assentos>
        <Indice>
          <Legenda>
            <Circulo cor={"#8dd7cf"} borda={"#45bdb0"} />
            <p>Selecionado</p>
          </Legenda>
          <Legenda>
            <Circulo cor={"#c3cfd9"} borda={"#808f9d"} />
            <p>Disponível</p>
          </Legenda>
          <Legenda>
            <Circulo cor={"#fbe192"} borda={"#f7c52b"} />
            <p>Indisponível</p>
          </Legenda>
        </Indice>
        <Dados>
          <p>Nome do comprador:</p>
          <input type="text" placeholder="Digite seu nome..." value={name} onChange={(e) => setName(e.target.value)} />
          <p>CPF do comprador:</p>
          <input type="text" placeholder="Digite seu CPF..." value={cpf} onChange={(e) => setCpf(e.target.value)} />
        </Dados>
        <div className="botao" onClick={reservar}>
          Reservar assento(s)
        </div>
      </Conteiner>
      <Footer title={movie.title} img={movie.posterURL} time={time} day={day.weekday} />
    </>
  );
}

const Conteiner = styled.div`
  width: 375px;
  margin-top: 108px;
  margin-bottom: 117px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 25px;
`;

const Assentos = styled.div`
  margin-top: 41px;
  display: flex;
  flex-wrap: wrap;
`;

const Assento = styled.div`
background-color: ${props => props.cor};
border: 1px solid ${(props) => props.borda};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 11px;
  width: 26px;
  height: 26px;
  border-radius: 12px;
  margin: 0 3.25px 18px 3.25px;
  cursor: pointer;
`;

const Indice = styled.div`
  display: flex;
  width: 286px;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const Legenda = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 13px;
    color: #4e5a65;
  }
`;

const Circulo = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 17px;
  background-color: ${props => props.cor};
  border: 1px solid ${(props) => props.borda};
  margin-bottom: 8px;
`;

const Dados = styled.div`
  width: 325px;
  margin-bottom: 47px;

  p {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #293845;
  }

  input {
    width: 325px;
    height: 51px;
    margin-top: 5px;
    margin-bottom: 10px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 18px;
    text-indent: 10px;
    outline: none;
  }

  input::placeholder {
    font-style: italic;
    color: #afafaf;
  }
`;
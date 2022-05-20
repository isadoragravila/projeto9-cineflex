import "./style.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";

function Session({ weekday, date, showtimes }) {
  return (
    <div className="sessao">
      <p>{`${weekday} - ${date}`}</p>
      <div className="horarios">
        {showtimes.map((showtime, index) => (
          <Link key={index} to={`/assentos/${showtime.id}`} style={{ textDecoration: "none" }}>
            <div className="horario">{showtime.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Tela2() {
  const { idFilme } = useParams();
  const [title, setTitle] = useState();
  const [img, setImg] = useState();
  const [days, setDays] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
    );

    promise.then((response) => {
      setTitle(response.data.title);
      setImg(response.data.posterURL);
      setDays(response.data.days);
    });
  }, []);

  return (
    <>
      <div className="tela2">
        <h2>Selecione o horário</h2>
        <div className="sessoes">
          {days.map((day, index) => (
            <Session
              key={index}
              weekday={day.weekday}
              date={day.date}
              showtimes={day.showtimes}
            />
          ))}
        </div>
      </div>
      <Footer title={title} img={img} />
    </>
  );
}

import "./style.css";
import { Link } from "react-router-dom";

export default function Tela4() {
  return (
    <div className="tela4">
      <h2>Pedido feito com sucesso!</h2>
      <div className="conteiner">
        <div className="categoria">
          <h3>Filme e sessão</h3>
          <p>Enola Holmes</p>
          <p>24/06/2021 15:00</p>
        </div>
        <div className="categoria">
          <h3>Ingressos</h3>
          <p>Assento 15</p>
          <p>Assento 16</p>
        </div>
        <div className="categoria">
          <h3>Comprador</h3>
          <p>Nome: João da Silva Sauro</p>
          <p>CPF: 123.456.789-10</p>
        </div>
      </div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="botao">Voltar pra Home</div>
      </Link>
    </div>
  );
}

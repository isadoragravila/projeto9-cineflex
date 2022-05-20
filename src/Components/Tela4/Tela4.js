import "./style.css";
import { Link } from "react-router-dom";

export default function Tela4({pedido, setPedido}) {
  return (
    <div className="tela4">
      <h2>Pedido feito com sucesso!</h2>
      <div className="conteiner">
        <div className="categoria">
          <h3>Filme e sessão</h3>
          <p>{pedido.title}</p>
          <p>
            {pedido.date} {pedido.time}
          </p>
        </div>
        <div className="categoria">
          <h3>Ingressos</h3>
          {pedido.seats.map((seat, index) => (
            <p key={index}>Assento {seat}</p>
          ))}
        </div>
        <div className="categoria">
          <h3>Comprador</h3>
          <p>Nome: {pedido.name}</p>
          <p>CPF: {pedido.cpf}</p>
        </div>
      </div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="botao">Voltar pra Home</div>
      </Link>
    </div>
  );
}

import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Tela4({ pedido, setPedido, setIds }) {
  return (
    <Conteiner>
      <h2>Pedido feito com sucesso!</h2>
      <Content>
        <Categoria>
          <h3>Filme e sessão</h3>
          <p>{pedido.title}</p>
          <p>{pedido.date} {pedido.time}</p>
        </Categoria>
        <Categoria>
          <h3>Ingressos</h3>
          {pedido.seats.map((seat, index) => (<p key={index}>Assento {seat}</p>))}
        </Categoria>
        <Categoria>
          <h3>Comprador</h3>
          <p>Nome: {pedido.name}</p>
          <p>CPF: {pedido.cpf}</p>
        </Categoria>
      </Content>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="botao" onClick={() => {
          setPedido({ seats: [] });
          setIds([]);
        }}>
          Voltar pra Home
        </div>
      </Link>
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

  h2 {
    padding: 0 75px;
    font-family: "Roboto";
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #247a6b;
  }

  h3 {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 24px;
    color: #293845;
    margin-bottom: 10px;
  }

  p {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 22px;
    color: #293845;
    line-height: 26px;
  }
`;

const Content = styled.div`
  margin: 15px 0 75px 0;
`;

const Categoria = styled.div`
  width: 325px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
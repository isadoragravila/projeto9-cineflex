import "./style.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Tela3() {
  return (
    <>
      <div className="tela3">
        <h2>Selecione o(s) assento(s)</h2>
        <div className="cadeiras">
          <div className="cadeira verde">01</div>
          <div className="cadeira">02</div>
          <div className="cadeira amarela">03</div>
          <div className="cadeira">04</div>
          <div className="cadeira">05</div>
          <div className="cadeira">06</div>
          <div className="cadeira">07</div>
          <div className="cadeira">08</div>
          <div className="cadeira">09</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
          <div className="cadeira">10</div>
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
      <Footer />
    </>
  );
}
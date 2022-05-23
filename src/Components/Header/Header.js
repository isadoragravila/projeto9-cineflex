import { useNavigate } from "react-router-dom";

export default function Header({ home, setHome }) {
  let navigate = useNavigate();
  function handleClick() {
    if (home === "/sessoes") {
        setHome("/");
      }
      if (home === "/assentos") {
        setHome("/sessoes");
      }
      if (home === "/sucesso") {
        setHome("/assentos");
      }
    navigate(-1);
  }
  return (
    <header>
      {home === "/" ? null : (
        <div className="voltar" onClick={handleClick}>
          <ion-icon name="arrow-back"></ion-icon>
        </div>
      )}
      <h1>CINEFLEX</h1>
    </header>
  );
}

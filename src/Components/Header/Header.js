import { useNavigate } from "react-router-dom";

export default function Header({ home, setHome }) {
  let navigate = useNavigate();
  function handleClick() {
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

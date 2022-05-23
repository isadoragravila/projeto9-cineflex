import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../Assets/reset.css";
import "../Assets/style.css";
import Header from "../Components/Header/Header";
import Tela1 from "../Components/Tela1/Tela1";
import Tela2 from "../Components/Tela2/Tela2";
import Tela3 from "../Components/Tela3/Tela3";
import Tela4 from "../Components/Tela4/Tela4";

export default function App() {
  const [pedido, setPedido] = useState({ seats: [] });
  const [ids, setIds] = useState([]);
  const [home, setHome] = useState("/");
  
  return (
    <BrowserRouter>
      <Header home={home} setHome={setHome} />
      <Routes>
        <Route path="/" element={<Tela1 setHome={setHome} />} />
        <Route path="/sessoes/:idFilme" element={<Tela2 setHome={setHome} />} />
        <Route
          path="/assentos/:idSessao"
          element={<Tela3 setPedido={setPedido} ids={ids} setIds={setIds} setHome={setHome} />}
        />
        <Route
          path="/sucesso"
          element={
            <Tela4 pedido={pedido} setPedido={setPedido} setIds={setIds} setHome={setHome} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

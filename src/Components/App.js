import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../Assets/reset.css";
import "../Assets/style.css";
import Tela1 from "../Components/Tela1/Tela1";
import Tela2 from "../Components/Tela2/Tela2";
import Tela3 from "../Components/Tela3/Tela3";
import Tela4 from "../Components/Tela4/Tela4";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>CINEFLEX</h1>
      </header>
      <Routes>
        <Route path="/" element={<Tela1 />} />
        <Route path="/sessoes/:idFilme" element={<Tela2 />} />
        <Route path="/assentos/:idSessao" element={<Tela3 />} />
        <Route path="/sucesso" element={<Tela4 />} />
      </Routes>
    </BrowserRouter>
  );
}

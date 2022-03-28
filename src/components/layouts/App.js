import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Favoritos from "../../pages/Favoritos";
import Inicio from "../../pages/Inicio";
import DetallePersonaje from "../../pages/DetallePersonaje";
import {
  fetchPersonajes,
  fetchEpisodios,
  fetchMundos,
} from "../../actions/index";
import { connect } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Episodios from "../../pages/Episodios";
import Mundos from "../../pages/Mundos";
import Buscador from "../Buscador";

function App({ dispatch }) {
  useEffect(() => {
    dispatch(fetchPersonajes());
    dispatch(fetchEpisodios());
    dispatch(fetchMundos());
  }, []);

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Buscador />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/episodios" element={<Episodios />} />
          <Route path="/mundos" element={<Mundos />} />
          <Route path="/personajes/:id" element={<DetallePersonaje />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default connect(null)(App);

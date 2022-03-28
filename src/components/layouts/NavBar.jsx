import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <section>
        <Link to="/">Inicio</Link>
        <Link to="/favoritos">Favoritos</Link>
        <Link to="/Episodios">Episodios</Link>
        <Link to="/Mundos">Mundos</Link>
        <Link to="/categorias">Categorias</Link>
      </section>
    </nav>
  );
};

export default NavBar;

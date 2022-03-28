import React from "react";
import { connect } from "react-redux";
import { eliminarFavorito } from "../actions";
const Personaje = ({ personaje, dispatch }) => {
  const eventEliminarPersonaje = () => {
    dispatch(eliminarFavorito(personaje));
  };
  return (
    <div>
      <img src={personaje.image} alt="imagen" />
      <button onClick={eventEliminarPersonaje}>Eliminar personaje</button>
    </div>
  );
};

export default connect(null)(Personaje);

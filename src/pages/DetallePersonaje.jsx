import React from "react";
import { connect } from "react-redux";
import { agregarFavorito } from "../actions";
const DetallePersonaje = ({ personaje, dispatch }) => {
  const addFavorite = () => {
    dispatch(agregarFavorito(personaje));
  };
  //console.log("el personaje seleccionado es: ", personaje);
  return (
    <div>
      <img src={personaje.image} alt="imagen" />
      <button onClick={addFavorite}>Agregar a favoritos</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  personaje: state.data.personaje,
});

export default connect(mapStateToProps)(DetallePersonaje);

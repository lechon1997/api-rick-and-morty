import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { seleccionarPersonje } from "../../actions/index";

const ListaPersonajes = ({ personajes, dispatch }) => {
  let navigate = useNavigate();
  const eventSeleccionarPersonaje = (personaje) => {
    dispatch(seleccionarPersonje(personaje));
    navigate(`/personajes/${personaje.id}`);
  };
  return (
    <div>
      {personajes.map((personaje) => (
        <div
          onClick={() => {
            eventSeleccionarPersonaje(personaje);
          }}
          key={personaje.id}
        >
          <img src={personaje.image} alt="imagen" />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  personajes: state.data.personajes,
});

export default connect(mapStateToProps)(ListaPersonajes);

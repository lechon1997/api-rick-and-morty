import React from "react";
import { connect } from "react-redux";
import Personaje from "../components/Personaje";
const Favoritos = ({ favoritos, dispatch }) => {
  console.log(favoritos);
  return (
    <div>
      {favoritos.map((personaje) => (
        <Personaje key={personaje.id} personaje={personaje} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  favoritos: state.data.favoritos,
});

export default connect(mapStateToProps)(Favoritos);

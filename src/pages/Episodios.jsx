import React from "react";
import { connect } from "react-redux";

const Episodios = ({ episodios }) => {
  console.log(episodios);
  return <div>episodios</div>;
};

const mapStateToProps = (state) => ({
  episodios: state.data.episodios,
});

export default connect(mapStateToProps)(Episodios);

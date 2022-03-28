import React from "react";
import { connect } from "react-redux";

const Mundos = ({ mundos }) => {
  console.log(mundos);
  return <div>mundos</div>;
};

const mapStateToProps = (state) => ({
  mundos: state.data.mundos,
});
export default connect(mapStateToProps)(Mundos);
